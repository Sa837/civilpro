"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "length", icon: "📏", title: "Length" },
  { id: "area", icon: "📐", title: "Area" },
  { id: "volume", icon: "🧊", title: "Volume" },
  { id: "weight", icon: "⚖️", title: "Weight" },
  { id: "temperature", icon: "🌡️", title: "Temperature" },
  { id: "speed", icon: "🏃", title: "Speed" },
  { id: "currency", icon: "💱", title: "Currency" },
  { id: "discount", icon: "🏷️", title: "Discount" },
];

export default function ConverterHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.7))] opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-violet-600 to-purple-700 mb-8">
            Smart Unit Converter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Professional unit conversion tools designed for construction and
            engineering needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const gradients = [
              "from-blue-600 to-violet-600",
              "from-green-600 to-teal-600",
              "from-purple-600 to-pink-600",
              "from-orange-600 to-red-600",
              "from-indigo-600 to-blue-600",
              "from-rose-600 to-pink-600",
              "from-cyan-600 to-blue-600",
              "from-violet-600 to-indigo-600",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <Link
                href={`/converter/${category.id}`}
                key={category.id}
                className="group relative block"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500`}
                ></div>
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="p-8 min-h-[180px] flex flex-col items-center justify-between group-hover:justify-center transition-all duration-300">
                    <div
                      className={`text-6xl mb-4 group-hover:scale-150 group-hover:-translate-y-2 transition-all duration-300`}
                    >
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 text-center group-hover:opacity-0 transition-opacity duration-300">
                      {category.title}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
