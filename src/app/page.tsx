"use client";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Text from "@/components/Text";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background mesh */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative h-screen w-full overflow-hidden z-10">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 animate-gradient-x" />

        {/* Animated circles in background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Mouse follow effect */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />

        <div className="relative z-10 w-full h-full flex items-center justify-between px-32">
          {/* Text content with slide-in animation */}
          <div
            className={`w-1/2 transform transition-all duration-1000 ${
              showContent
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <Text />
            <div className="mt-8 flex gap-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition text-white font-semibold shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition text-white font-semibold"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Profile image with fancy animations */}
          <div
            className={`relative transform transition-all duration-1000 ${
              showContent
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Animated rings */}
            <div className="absolute -inset-8 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl animate-pulse"></div>
            </div>
            <div className="absolute -inset-4 opacity-40">
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Glass card container */}
            <div className="relative backdrop-blur-sm bg-white/5 p-2 rounded-full border border-white/10">
              <div className="relative">
                <Image
                  alt="Profile picture"
                  src="/profile.png"
                  width={400}
                  height={400}
                  className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
                  draggable={false}
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"></div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold shadow-lg">
                🚀 Frontend Dev
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <div className="px-6 md:px-16 py-12 relative z-10">
        <div className="max-w-5xl mx-auto backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Have a role in mind?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              I&apos;m open to frontend roles and freelance projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              <span>Let&apos;s Connect</span>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-900 dark:text-white text-center w-full transition-colors duration-300">
        <Footer />
      </div>
    </div>
  );
}
