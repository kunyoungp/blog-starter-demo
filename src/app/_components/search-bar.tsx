"use client";

import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
};

export function SearchBar({ onSearch, placeholder = "Search posts..." }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    // BUG: This should call onSearch(query) but it doesn't
    // This means the search filter won't actually work
  };

  const handleSearchClick = () => {
    // BUG: Wrong event - this should trigger onSearch but has wrong logic
    onSearch("");  // Always passes empty string instead of searchQuery
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-5 h-5 text-mindlogic-500 dark:text-mindlogic-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-24 py-4 text-lg border-2 border-mindlogic-200 dark:border-mindlogic-800 rounded-2xl focus:outline-none focus:border-mindlogic-500 dark:focus:border-mindlogic-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2">
          {searchQuery && (
            <button
              onClick={handleClear}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          <button
            // BUG: Missing onClick handler - button does nothing
            className="px-4 py-2 bg-mindlogic-600 hover:bg-mindlogic-700 text-white rounded-lg font-medium transition-colors"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
