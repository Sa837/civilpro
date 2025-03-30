"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface brickFormData {
  roomLength: number;
  roomWidth: number;
  brickLength: number;
  brickWidth: number;
  unit: "meter" | "feet";
  waste: number;
}

const brickCalculator = () => {
  const [result, setResult] = useState<{ bricks: number; area: number } | null>(
    null
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<brickFormData>({
    defaultValues: {
      waste: 10,
    },
  });

  const wastePercentage = watch("waste");

  const calculatebricks = (data: brickFormData) => {
    let roomArea = data.roomLength * data.roomWidth;
    let brickArea = data.brickLength * data.brickWidth;

    // Convert to square meters if input is in feet
    if (data.unit === "feet") {
      roomArea = roomArea * 0.092903; // Convert square feet to square meters
      brickArea = brickArea * 0.092903;
    }

    // Add waste percentage
    const wasteMultiplier = 1 + data.waste / 100;
    const bricksNeeded = Math.ceil((roomArea / brickArea) * wasteMultiplier);

    setResult({
      bricks: bricksNeeded,
      area: Number(roomArea.toFixed(2)),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/calculator/estimator"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Estimators
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Brick Estimator
          </h1>

          <form onSubmit={handleSubmit(calculatebricks)} className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Unit of Measurement
              </label>
              <select
                {...register("unit")}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              >
                <option value="meter">Meters</option>
                <option value="feet">Feet</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Room Length
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register("roomLength", {
                      required: "Room length is required",
                      min: 0,
                    })}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                  />
                  {errors.roomLength && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.roomLength.message}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Room Width
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register("roomWidth", {
                      required: "Room width is required",
                      min: 0,
                    })}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                  />
                  {errors.roomWidth && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.roomWidth.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Brick Length
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register("brickLength", {
                      required: "brick length is required",
                      min: 0,
                    })}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                  />
                  {errors.brickLength && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.brickLength.message}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Brick Width
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register("brickWidth", {
                      required: "brick width is required",
                      min: 0,
                    })}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                  />
                  {errors.brickWidth && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.brickWidth.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm- font-semibold text-gray-700 mb-2">
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
                className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-[1.02]"
            >
              Calculate
            </button>

            {result && (
              <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-green-900 mb-4">
                  Results
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Number of bricks needed:
                    </span>
                    <span className="text-xl font-semibold text-green-800">
                      {result.bricks}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total area:</span>
                    <span className="text-xl font-semibold text-green-800">
                      {result.area} m²
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <p className="text-sm text-green-700">
                      Results include {wastePercentage}% waste factor
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default brickCalculator;
