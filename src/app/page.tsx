"use client"
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen  w-full bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />

        {/* Animated circles in background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Mouse follow effect */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}
        />

        <div className="relative z-10 w-full h-full flex items-center justify-between px-32">
          {/* Text content with slide-in animation */}
          <div
            className={`w-1/2 transform transition-all duration-1000 ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
          >
            <Text />
          </div>

          {/* Profile image with fancy animations */}
          <div
            className={`relative transform transition-all duration-1000 ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur animate-pulse" />
            <div className="relative">
              <Image
                alt="Profile picture"
                src="/profile.png"
                width={400}
                height={400}
                className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
                draggable={false}
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <div className="px-6 md:px-16 py-12">
        <div className="max-w-5xl mx-auto bg-gray-800/60 border border-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-2">Have a role in mind?</h3>
          <p className="text-gray-300 mb-6">I&apos;m open to frontend roles and freelance projects.</p>
          <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Let&apos;s talk</a>
        </div>
      </div>
      <div className="text-white text-center w-full">
        <Footer />
      </div>
    </div>
  );
}
