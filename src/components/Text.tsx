"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Text = () => {
  const words = `Hi , I am Pratham Darji.
  I am a Frontend Developer.
  Expert in React, Next.js, Tailwind CSS, and TypeScript.
  📍 Based in Vadodara, Gujarat, India.
  `;
  return (
    <div className="space-y-6">
      <div className="inline-block">
        <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
          ✨ Available for Work
        </span>
      </div>
      <TextGenerateEffect duration={2} filter={false} words={words} />
      <div className="flex gap-3 pt-4">
        <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
          <span className="text-blue-400 font-semibold">15+</span>
          <span className="text-gray-400 text-sm ml-2">Projects</span>
        </div>
        <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg backdrop-blur-sm">
          <span className="text-purple-400 font-semibold">8+</span>
          <span className="text-gray-400 text-sm ml-2">Technologies</span>
        </div>
      </div>
    </div>
  );
};

export default Text;
