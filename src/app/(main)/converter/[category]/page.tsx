"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type ConversionFunction = (value: number, extra?: number) => number;

interface ConversionUnit {
  [key: string]: number | ConversionFunction;
}

interface CategoryUnits {
  [key: string]: ConversionUnit;
}

interface Conversions {
  [key: string]: CategoryUnits;
}

const conversions: Conversions = {
  length: {
    meter: {
      feet: 3.28084,
      inch: 39.3701,
      yard: 1.09361,
      kilometer: 0.001,
      mile: 0.000621371,
    },
    feet: {
      meter: 0.3048,
      inch: 12,
      yard: 0.333333,
      kilometer: 0.0003048,
      mile: 0.000189394,
    },
    inch: {
      meter: 0.0254,
      feet: 0.0833333,
      yard: 0.0277778,
      kilometer: 0.0000254,
      mile: 0.0000157828,
    },
    yard: {
      meter: 0.9144,
      feet: 3,
      inch: 36,
      kilometer: 0.0009144,
      mile: 0.000568182,
    },
    kilometer: {
      meter: 1000,
      feet: 3280.84,
      inch: 39370.1,
      yard: 1093.61,
      mile: 0.621371,
    },
    mile: {
      meter: 1609.34,
      feet: 5280,
      inch: 63360,
      yard: 1760,
      kilometer: 1.60934,
    },
  },
  area: {
    squareMeter: { squareFeet: 10.7639, acre: 0.000247105, hectare: 0.0001 },
    squareFeet: {
      squareMeter: 0.092903,
      acre: 0.0000229568,
      hectare: 0.00000929034,
    },
    acre: { squareMeter: 4046.86, squareFeet: 43560, hectare: 0.404686 },
    hectare: { squareMeter: 10000, squareFeet: 107639, acre: 2.47105 },
  },
  volume: {
    cubicMeter: { cubicFeet: 35.3147, liter: 1000, gallon: 264.172 },
    cubicFeet: { cubicMeter: 0.0283168, liter: 28.3168, gallon: 7.48052 },
    liter: { cubicMeter: 0.001, cubicFeet: 0.0353147, gallon: 0.264172 },
    gallon: { cubicMeter: 0.00378541, cubicFeet: 0.133681, liter: 3.78541 },
  },
  weight: {
    kilogram: { pound: 2.20462, gram: 1000, ton: 0.001 },
    pound: { kilogram: 0.453592, gram: 453.592, ton: 0.000453592 },
    gram: { kilogram: 0.001, pound: 0.00220462, ton: 0.000001 },
    ton: { kilogram: 1000, pound: 2204.62, gram: 1000000 },
  },
  temperature: {
    celsius: {
      fahrenheit: (c: number): number => (c * 9) / 5 + 32,
      kelvin: (c: number): number => c + 273.15,
    },
    fahrenheit: {
      celsius: (f: number): number => ((f - 32) * 5) / 9,
      kelvin: (f: number): number => ((f - 32) * 5) / 9 + 273.15,
    },
    kelvin: {
      celsius: (k: number): number => k - 273.15,
      fahrenheit: (k: number): number => ((k - 273.15) * 9) / 5 + 32,
    },
  },
  speed: {
    kilometersPerHour: {
      milesPerHour: 0.621371,
      metersPerSecond: 0.277778,
      knots: 0.539957,
    },
    milesPerHour: {
      kilometersPerHour: 1.60934,
      metersPerSecond: 0.44704,
      knots: 0.868976,
    },
    metersPerSecond: {
      kilometersPerHour: 3.6,
      milesPerHour: 2.23694,
      knots: 1.94384,
    },
    knots: {
      kilometersPerHour: 1.852,
      milesPerHour: 1.15078,
      metersPerSecond: 0.514444,
    },
  },
  currency: {
    usd: {
      eur: 0.91,
      gbp: 0.79,
      jpy: 148.42,
      npr: 132.5,
    },
    eur: {
      usd: 1.1,
      gbp: 0.87,
      jpy: 162.97,
      npr: 145.61,
    },
    gbp: {
      usd: 1.27,
      eur: 1.15,
      jpy: 187.87,
      npr: 167.72,
    },
    npr: {
      usd: 0.0075,
      eur: 0.0069,
      gbp: 0.006,
      jpy: 1.12,
    },
  },
  discount: {
    originalPrice: {
      discountedPrice: (price: number, discount?: number): number =>
        price * (1 - (discount || 0) / 100),
      savingAmount: (price: number, discount?: number): number =>
        price * ((discount || 0) / 100),
    },
  },
};

interface PageProps {
  params: {
    category: string;
  };
}

const ConverterPage: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const category = params.category;
  const categoryUnits = conversions[category as keyof typeof conversions];

  useEffect(() => {
    if (categoryUnits) {
      const units = Object.keys(categoryUnits);
      setFromUnit(units[0]);
      setToUnit(units[1]);
    }
  }, [category]);

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;

    if (fromUnit === toUnit) {
      setResult(num);
      return;
    }

    const fromUnits = categoryUnits[fromUnit as keyof typeof categoryUnits];
    const converter = fromUnits[toUnit as keyof typeof fromUnits];

    if (category === "temperature") {
      setResult((converter as ConversionFunction)(num));
      return;
    }

    if (category === "discount") {
      const discountPercent = parseFloat(value2 || "0");
      setResult((converter as ConversionFunction)(num, discountPercent));
      return;
    }

    setResult(num * (converter as number));
  };

  if (!categoryUnits) {
    return <div>Invalid category</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.7))] opacity-5"></div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <button
          onClick={() => router.push("/converter")}
          className="mb-8 text-blue-600 hover:text-blue-700 flex items-center gap-2 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to categories
        </button>

        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-violet-600 to-purple-700 mb-8">
          {category.charAt(0).toUpperCase() + category.slice(1)} Converter
        </h1>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg p-8 space-y-6">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 bg-gray-50/50 border border-gray-200/50 rounded-xl focus:outline-none focus:border-blue-400/50 focus:ring-4 focus:ring-blue-100/50 transition-all"
            placeholder="Enter value"
          />

          {category === "discount" && (
            <input
              type="number"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="w-full p-3 bg-gray-50/50 border border-gray-200/50 rounded-xl focus:outline-none focus:border-blue-400/50 focus:ring-4 focus:ring-blue-100/50 transition-all"
              placeholder="Enter discount percentage"
            />
          )}

          <div className="grid grid-cols-2 gap-4">
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="p-3 bg-gray-50/50 border border-gray-200/50 rounded-xl focus:outline-none focus:border-blue-400/50 focus:ring-4 focus:ring-blue-100/50 transition-all"
            >
              {Object.keys(categoryUnits).map((unit) => (
                <option key={unit} value={unit}>
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="p-3 bg-gray-50/50 border border-gray-200/50 rounded-xl focus:outline-none focus:border-blue-400/50 focus:ring-4 focus:ring-blue-100/50 transition-all"
            >
              {Object.keys(categoryUnits).map((unit) => (
                <option key={unit} value={unit}>
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={convert}
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-medium"
          >
            Convert
          </button>

          {result !== null && (
            <div className="p-6 bg-gradient-to-r from-blue-50/50 to-violet-50/50 backdrop-blur-sm rounded-xl border border-blue-100/50">
              <p className="text-lg font-medium text-gray-800">
                {value} {fromUnit} ={" "}
                <span className="text-blue-600">{result.toFixed(4)}</span>{" "}
                {toUnit}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConverterPage;
