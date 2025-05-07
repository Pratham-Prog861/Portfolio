"use client"
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
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
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
          className={`w-1/2 transform transition-all duration-1000 ${
            showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <Text />
        </div>

        {/* Profile image with fancy animations */}
        <div 
          className={`relative transform transition-all duration-1000 ${
            showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur animate-pulse" />
          <div className="relative">
            <Image 
              alt="Profile picture"
              src="/profile.jpeg"
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
  );
}
