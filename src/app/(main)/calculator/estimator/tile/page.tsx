"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface TileFormData {
  roomLength: number;
  roomWidth: number;
  tileLength: number;
  tileWidth: number;
  unit: "meter" | "feet";
  waste: number;
}

const TileCalculator = () => {
  const [result, setResult] = useState<{ tiles: number; area: number } | null>(
    null
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TileFormData>({
    defaultValues: {
      waste: 10,
    },
  });

  const wastePercentage = watch("waste");

  const calculateTiles = (data: TileFormData) => {
    let roomArea = data.roomLength * data.roomWidth;
    let tileArea = data.tileLength * data.tileWidth;

    // Convert to square meters if input is in feet
    if (data.unit === "feet") {
      roomArea = roomArea * 0.092903; // Convert square feet to square meters
      tileArea = tileArea * 0.092903;
    }

    // Add waste percentage
    const wasteMultiplier = 1 + data.waste / 100;
    const tilesNeeded = Math.ceil((roomArea / tileArea) * wasteMultiplier);

    setResult({
      tiles: tilesNeeded,
      area: Number(roomArea.toFixed(2)),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="flex items-center mb-6">
        <Link
          href="/calculator/estimator"
          className="text-slate-700 hover:text-slate-900"
        >
          <button className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200">
            <span>←</span> Back to Estimators
          </button>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-slate-800">
        Tile Calculator
      </h1>
      <form onSubmit={handleSubmit(calculateTiles)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Unit of Measurement
          </label>
          <select
            {...register("unit")}
            className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
          >
            <option value="meter">Meters</option>
            <option value="feet">Feet</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Room Length
            </label>
            <input
              type="number"
              step="0.01"
              {...register("roomLength", {
                required: "Room length is required",
                min: 0,
              })}
              className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
            />
            {errors.roomLength && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roomLength.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Room Width
            </label>
            <input
              type="number"
              step="0.01"
              {...register("roomWidth", {
                required: "Room width is required",
                min: 0,
              })}
              className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
            />
            {errors.roomWidth && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roomWidth.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Tile Length
            </label>
            <input
              type="number"
              step="0.01"
              {...register("tileLength", {
                required: "Tile length is required",
                min: 0,
              })}
              className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
            />
            {errors.tileLength && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tileLength.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Tile Width
            </label>
            <input
              type="number"
              step="0.01"
              {...register("tileWidth", {
                required: "Tile width is required",
                min: 0,
              })}
              className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
            />
            {errors.tileWidth && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tileWidth.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Waste Percentage (%)
          </label>
          <input
            type="number"
            step="1"
            defaultValue="10"
            {...register("waste", {
              required: "Waste percentage is required",
              min: 0,
            })}
            className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              Results
            </h2>
            <p className="text-slate-700">
              Number of tiles needed: {result.tiles}
            </p>
            <p className="text-slate-700">Total area: {result.area} m²</p>
            <p className="text-sm text-slate-600 mt-2">
              Note: Results include {wastePercentage}% waste factor
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default TileCalculator;
