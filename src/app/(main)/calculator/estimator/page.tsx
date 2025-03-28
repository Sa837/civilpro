"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Page() {
  const calculators = [
    {
      title: "Concrete Calculator",
      description:
        "Calculate concrete volume for foundations, slabs, and columns",
      href: "/calculator/estimator/concrete",
      icon: "🏗️",
      features: [
        "Volume calculation",
        "Metric & Imperial units",
        "Instant results",
      ],
    },
    {
      title: "Tile Calculator",
      description: "Estimate tile quantities for flooring and wall coverage",
      href: "/calculator/estimator/tile",
      icon: "🔲",
      features: [
        "Area calculation",
        "Waste factor included",
        "Multiple units support",
      ],
    },
    {
      title: "Brick Calculator",
      description: "Calculate brick quantities for walls and structures",
      href: "/calculator/estimator/brick",
      icon: "🧱",
      features: [
        "Wall area calculation",
        "Standard brick sizes",
        "Mortar estimation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Construction Calculators
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Professional tools to help you estimate materials and costs for your
            construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {calculators.map((calc, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={calc.title}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {calc.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-slate-800">
                  {calc.title}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {calc.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {calc.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-slate-600"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={calc.href}
                  className="block w-full text-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Use Calculator
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
