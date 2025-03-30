"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface ConcreteFormData {
  length: number;
  width: number;
  height: number;
  unit: "metric" | "imperial";
  mixRatio: "1:2:4" | "1:1.5:3" | "1:3:6";
  wastage: number;
  discount: number;
}

interface MaterialPrices {
  cementBag: number;
  sandPerCubicMeter: number;
  aggregatePerCubicMeter: number;
}

export default function ConcretePage() {
  const [result, setResult] = useState<{
    volume: number;
    cement: number;
    sand: number;
    aggregate: number;
    totalCost: number;
    discountedCost: number;
    savings: number;
  } | null>(null);

  const materialPrices: MaterialPrices = {
    cementBag: 850, // NPR per 50kg bag
    sandPerCubicMeter: 2500, // NPR per cubic meter
    aggregatePerCubicMeter: 3000, // NPR per cubic meter
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ConcreteFormData>({
    defaultValues: {
      unit: "metric",
      mixRatio: "1:2:4",
      wastage: 10,
      discount: 0,
    },
  });

  const calculateMaterials = (volume: number, ratio: string) => {
    const ratios = ratio.split(":").map(Number);
    const totalParts = ratios.reduce((a, b) => a + b, 0);
    const dryVolume = volume * 1.54; // Dry volume factor
    const wastageMultiplier = (100 + watch("wastage")) / 100;

    return {
      cement:
        (((dryVolume * ratios[0]) / totalParts) * wastageMultiplier) / 0.035, // Convert to bags (1 bag = 0.035 m³)
      sand: ((dryVolume * ratios[1]) / totalParts) * wastageMultiplier,
      aggregate: ((dryVolume * ratios[2]) / totalParts) * wastageMultiplier,
    };
  };

  const calculateCosts = (
    materials: { cement: number; sand: number; aggregate: number },
    discount: number
  ) => {
    const cementCost = materials.cement * materialPrices.cementBag;
    const sandCost = materials.sand * materialPrices.sandPerCubicMeter;
    const aggregateCost =
      materials.aggregate * materialPrices.aggregatePerCubicMeter;

    const totalCost = cementCost + sandCost + aggregateCost;
    const discountAmount = (totalCost * discount) / 100;
    const discountedCost = totalCost - discountAmount;

    return {
      totalCost,
      discountedCost,
      savings: discountAmount,
    };
  };

  const onSubmit = (data: ConcreteFormData) => {
    const volume = data.length * data.width * data.height;
    const finalVolume = data.unit === "metric" ? volume : volume * 0.0283168;
    const materials = calculateMaterials(finalVolume, data.mixRatio);
    const costs = calculateCosts(materials, data.discount || 0);

    setResult({
      volume: finalVolume,
      ...materials,
      ...costs,
    });
  };

  const unit = watch("unit");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/calculator/estimator"
          className="text-green-600 hover:text-green-700 mb-6 inline-block"
        >
          ← Back to Calculators
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent- text-black">
          Concrete Calculator
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length ({unit === "metric" ? "meters" : "feet"})
              </label>
              <input
                {...register("length", {
                  required: "Length is required",
                  min: 0,
                })}
                type="number"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              />
              {errors.length && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.length.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Width ({unit === "metric" ? "meters" : "feet"})
              </label>
              <input
                {...register("width", {
                  required: "Width is required",
                  min: 0,
                })}
                type="number"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              />
              {errors.width && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.width.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height ({unit === "metric" ? "meters" : "feet"})
              </label>
              <input
                {...register("height", {
                  required: "Height is required",
                  min: 0,
                })}
                type="number"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              />
              {errors.height && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.height.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit System
              </label>
              <select
                {...register("unit")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              >
                <option value="metric">Metric (meters)</option>
                <option value="imperial">Imperial (feet)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mix Ratio
              </label>
              <select
                {...register("mixRatio")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              >
                <option value="1:2:4">1:2:4 (Regular strength)</option>
                <option value="1:1.5:3">1:1.5:3 (High strength)</option>
                <option value="1:3:6">1:3:6 (Low strength)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wastage (%)
              </label>
              <input
                {...register("wastage", {
                  required: "Wastage is required",
                  min: 0,
                  max: 100,
                })}
                type="number"
                defaultValue={10}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discount (%)
              </label>
              <input
                {...register("discount", {
                  required: false,
                  min: 0,
                  max: 100,
                })}
                type="number"
                defaultValue={0}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Calculate Volume
          </button>
        </form>

        {result !== null && (
          <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Required Materials
            </h2>
            <div className="space-y-2">
              <p className="text-lg text-slate-600">
                Concrete Volume: {result?.volume.toFixed(2)} m³
              </p>
              <p className="text-lg text-slate-600">
                Cement: {Math.ceil(result?.cement)} bags (50kg) - NPR{" "}
                {(
                  Math.ceil(result?.cement) * materialPrices.cementBag
                ).toLocaleString()}
              </p>
              <p className="text-lg text-slate-600">
                Sand: {result?.sand.toFixed(2)} m³ - NPR{" "}
                {(
                  result?.sand * materialPrices.sandPerCubicMeter
                ).toLocaleString()}
              </p>
              <p className="text-lg text-slate-600">
                Aggregate: {result?.aggregate.toFixed(2)} m³ - NPR{" "}
                {(
                  result?.aggregate * materialPrices.aggregatePerCubicMeter
                ).toLocaleString()}
              </p>
              <div className="border-t pt-4 mt-4">
                <p className="text-lg text-slate-600">
                  Total Cost: NPR {result?.totalCost.toLocaleString()}
                </p>
                <p className="text-lg text-green-600">
                  Discounted Cost: NPR {result?.discountedCost.toLocaleString()}
                </p>
                <p className="text-lg text-green-600">
                  You Save: NPR {result?.savings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
