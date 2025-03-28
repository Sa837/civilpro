"use client";

import { useState } from "react";

export default function Converter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("feet");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;

    const conversions: Record<string, Record<string, number>> = {
      meter: { feet: 3.28084, inch: 39.3701 },
      feet: { meter: 0.3048, inch: 12 },
      inch: { meter: 0.0254, feet: 0.0833333 },
    };

    setResult(num * conversions[fromUnit][toUnit]);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Unit Converter</h1>
      <div className="space-y-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter value"
        />
        <div className="grid grid-cols-2 gap-4">
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="meter">Meters</option>
            <option value="feet">Feet</option>
            <option value="inch">Inches</option>
          </select>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="meter">Meters</option>
            <option value="feet">Feet</option>
            <option value="inch">Inches</option>
          </select>
        </div>
        <button
          onClick={convert}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Convert
        </button>
        {result !== null && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-slate-700">
              Result: {result.toFixed(2)} {toUnit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
