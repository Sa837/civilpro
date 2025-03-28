"use client";

import React from "react";
import Link from "next/link";

interface CalculatorPageProps {}

const CalculatorPage: React.FC<CalculatorPageProps> = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-violet-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-violet-600 to-purple-700 mb-8 animate-fade-in">
            Smart Construction Calculators
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Professional-grade calculators designed specifically for
            construction and engineering needs. Choose the tool that fits your
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Basic Calculator Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="p-10">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10h-6m-3-3h12M9 17h6"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  Basic Calculator
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Simple arithmetic operations and basic calculations for quick
                  results. Perfect for day-to-day calculations.
                </p>
                <Link href="/calculator/basic" className="block">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-medium">
                    Open Calculator
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Estimator Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="p-10">
                <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-8 p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                  Estimator
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Professional estimation tool for construction projects. Get
                  accurate quantity estimates instantly.
                </p>
                <Link href="/calculator/estimator" className="block">
                  <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-medium">
                    Open Estimator
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Engineering Calculator Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="p-10">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-8 p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                  Engineering Calculator
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Advanced engineering calculations and structural analysis
                  tools for professional engineers.
                </p>
                <Link href="/calculator/engineering" className="block">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-medium">
                    Open Engineering
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
