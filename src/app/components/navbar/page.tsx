"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function similarity(s1: string, s2: string): number {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  // Direct match check
  if (s1.includes(s2) || s2.includes(s1)) return 1;

  const pairs1 = new Set();
  const pairs2 = new Set();

  for (let i = 0; i < s1.length - 1; i++) pairs1.add(s1.slice(i, i + 2));
  for (let i = 0; i < s2.length - 1; i++) pairs2.add(s2.slice(i, i + 2));

  const union = new Set([...pairs1, ...pairs2]); // Fixed spread operator here
  const intersection = new Set([...pairs1].filter((x) => pairs2.has(x)));

  if (union.size === 0) return 0;
  return (2.0 * intersection.size) / union.size;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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
                  href="/converter"
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
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center w-64 px-4 py-2.5 text-sm text-gray-400 bg-gray-50/50 
                rounded-xl border border-gray-200/50 hover:border-blue-300/50 hover:text-blue-500
                transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300"
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
                <span>Quick search...</span>
                <span className="ml-auto text-xs bg-gray-100 px-2 py-0.5 rounded">
                  ⌘ K
                </span>
              </button>

              {/* Search Modal */}
              {isSearchOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50"
                    onClick={() => setIsSearchOpen(false)}
                  />
                  <div className="absolute top-0 left-0 right-0 z-50 mt-2 transform transition-all duration-300">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 p-4 mx-auto max-w-2xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <svg
                          className="w-5 h-5 text-gray-400"
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
                        <input
                          type="text"
                          autoFocus
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="flex-1 text-lg bg-transparent focus:outline-none"
                          placeholder="Search for tools, converters, calculators..."
                        />
                        <kbd className="px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded">
                          ESC
                        </kbd>
                      </div>

                      {/* Quick Links */}
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-gray-400 mb-2">
                          QUICK LINKS
                        </div>
                        {[
                          {
                            name: "Length Converter",
                            path: "/converter/length",
                            desc: "Convert between different length units",
                          },
                          {
                            name: "Area Converter",
                            path: "/converter/area",
                            desc: "Convert between different area measurements",
                          },
                          {
                            name: "Estimator",
                            path: "/calculator/estimator",
                            desc: "Calculate construction estimates",
                          },
                        ]
                          .filter((item) => {
                            if (!searchQuery) return true;
                            const query = searchQuery.toLowerCase();
                            const nameMatch = similarity(item.name, query);
                            const descMatch = similarity(item.desc, query);
                            return nameMatch > 0.2 || descMatch > 0.2; // Lowered threshold for more matches
                          })
                          .sort((a, b) => {
                            if (!searchQuery) return 0;
                            const query = searchQuery.toLowerCase();
                            const aScore = Math.max(
                              similarity(a.name, query),
                              similarity(a.desc, query)
                            );
                            const bScore = Math.max(
                              similarity(b.name, query),
                              similarity(b.desc, query)
                            );
                            return bScore - aScore;
                          })
                          .map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={() => setIsSearchOpen(false)}
                              className="flex items-center p-3 rounded-xl hover:bg-gray-50 group/item"
                            >
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-700 group-hover/item:text-blue-600">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {item.desc}
                                </p>
                              </div>
                              <svg
                                className="w-5 h-5 text-gray-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
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
