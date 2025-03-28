"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface ConcreteFormData {
  length: number;
  width: number;
  height: number;
  unit: "metric" | "imperial";
}

export default function ConcretePage() {
  const [result, setResult] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ConcreteFormData>({
    defaultValues: {
      unit: "metric",
    },
  });

  const onSubmit = (data: ConcreteFormData) => {
    const volume = data.length * data.width * data.height;
    setResult(data.unit === "metric" ? volume : volume * 0.0283168); // Convert cubic feet to cubic meters if imperial
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

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="metric">Metric (meters)</option>
                <option value="imperial">Imperial (feet)</option>
              </select>
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
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Result</h2>
            <p className="text-lg text-slate-600">
              Concrete Volume: {result.toFixed(2)} cubic meters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
