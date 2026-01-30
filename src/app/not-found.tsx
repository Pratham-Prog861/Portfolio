"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="text-center">
        <div
          className={`mb-8 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
