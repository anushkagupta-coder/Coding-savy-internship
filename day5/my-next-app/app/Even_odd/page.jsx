"use client";

import { useState } from "react";

export default function EvenOdd() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Count: {count}</h1>

      {/* Conditional Rendering with Dynamic Tailwind Classes */}
      <p
        className={`text-2xl font-semibold mb-6 ${
          count % 2 === 0 ? "text-blue-500" : "text-pink-500"
        }`}
      >
        {count % 2 === 0 ? "Even Number" : "Odd Number"}
      </p>

      <button
        onClick={handleIncrement}
        className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
      >
        Increment
      </button>
    </div>
  );
}
