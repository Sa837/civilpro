import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Simplify Your Civil Engineering <br />
              <span className="text-blue-600">Calculations & Designs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive platform for civil engineering calculations and
              conversions. Built for professionals, by professionals.
            </p>
            <div className="mt-8">
              <Link
                href="/calculator"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/calculator"
              className="transform hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl">
                <div className="text-blue-600 text-2xl mb-4">🧮</div>
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  Calculators
                </h2>
                <p className="text-gray-600">
                  Structural analysis, beam calculations, and more.
                </p>
              </div>
            </Link>

            <Link
              href="/converters"
              className="transform hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl">
                <div className="text-green-600 text-2xl mb-4">⚖️</div>
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  Unit Converters
                </h2>
                <p className="text-gray-600">
                  Quick and accurate unit conversions for all your needs.
                </p>
              </div>
            </Link>

            <Link
              href="/about"
              className="transform hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl">
                <div className="text-purple-600 text-2xl mb-4">ℹ️</div>
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  Learn More
                </h2>
                <p className="text-gray-600">
                  Discover how CivilPro can help your projects.
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4">
                  "CivilPro has dramatically improved our calculation
                  efficiency. A must-have tool!"
                </p>
                <p className="font-semibold text-black">- 123, Engineer</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4">
                  "The most comprehensive engineering calculator suite I've ever
                  used."
                </p>
                <p className="font-semibold text-black">
                  - ABC, Project Manager
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4">
                  "Accurate, fast, and reliable. CivilPro is now essential to
                  our workflow."
                </p>
                <p className="font-semibold text-black">
                  - XYZ, Structural Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center bg-gray-50 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Transform Your Engineering Workflow?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of engineers who trust CivilPro for their
              calculations.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
