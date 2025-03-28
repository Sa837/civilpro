"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/60 backdrop-blur-lg fixed w-full z-50 shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 ease-out"
            >
              Civil Pro
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 group py-2 px-4 rounded-lg hover:bg-blue-50/80 font-medium">
                <span>Tools</span>
                <svg
                  className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute -left-2 mt-1 w-60 rounded-2xl shadow-xl bg-white/95 backdrop-blur-xl ring-1 ring-black/5 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 p-2">
                <Link
                  href="/calculator/estimator"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent rounded-xl group/item transition-all duration-200"
                >
                  <div className="p-2 bg-blue-50 rounded-lg group-hover/item:bg-blue-100 transition-all duration-200">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 group-hover/item:text-blue-600">
                      Estimator
                    </p>
                    <p className="text-xs text-gray-500">
                      Calculate construction estimates
                    </p>
                  </div>
                </Link>
                <Link
                  href="/calculatconverter"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent rounded-xl group/item transition-all duration-200"
                >
                  <div className="p-2 bg-blue-50 rounded-lg group-hover/item:bg-blue-100 transition-all duration-200">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 group-hover/item:text-blue-600">
                      Converter
                    </p>
                    <p className="text-xs text-gray-500">
                      Convert units easily
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50/80 py-2 px-4 rounded-lg font-medium"
            >
              About
            </Link>
            {/* Search Bar */}
            <div className="relative hidden md:flex items-center group">
              <input
                type="text"
                placeholder="Quick search..."
                className="w-64 px-4 py-2.5 pl-11 text-sm text-gray-700 bg-gray-50/50 
                rounded-xl border border-gray-200/50 
                focus:outline-none focus:border-blue-400/50 focus:ring-4 focus:ring-blue-100/50
                hover:border-blue-300/50 hover:bg-white/80
                transition-all duration-300 ease-in-out
                placeholder:text-gray-400"
              />
              <div className="absolute left-3 transition-transform duration-300 group-focus-within:scale-110">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-focus-within:text-blue-600 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <kbd className="absolute right-3 hidden group-focus-within:inline-block px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded">
                ⌘ K
              </kbd>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-blue-50"
            >
              <svg
                className={`h-6 w-6 transition-all duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full left-0 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-xl border-t border-blue-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="font-medium text-sm text-blue-600 px-3 py-2">
                Tools
              </div>
              <Link
                href="/calculator/estimator"
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
              >
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Estimator</p>
                  <p className="text-xs text-gray-500">
                    Calculate construction estimates
                  </p>
                </div>
              </Link>
              <Link
                href="/converter"
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
              >
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Converter</p>
                  <p className="text-xs text-gray-500">Convert units easily</p>
                </div>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
              >
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">About</p>
                  <p className="text-xs text-gray-500">Learn more about us</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
