"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Oops!
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Don't worry, it's not your fault. We've been notified and are working
          on fixing this issue.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
