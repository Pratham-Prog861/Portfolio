import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills | Pratham Darji",
  description:
    "Explore Pratham Darji's technical expertise in React, Next.js, Tailwind CSS, TypeScript, Node.js, MongoDB, and more.",
  openGraph: {
    title: "Technical Skills | Pratham Darji",
    description:
      "Expert in React, Next.js, Tailwind CSS, and modern web development technologies.",
    type: "website",
  },
};

type SkillLevel = "Beginner" | "Intermediate" | "Expert";

type Skill = {
  name: string;
  src: string;
  level: SkillLevel;
  percent: number;
};

const levelBadgeClass: Record<SkillLevel, string> = {
  Beginner: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  Intermediate: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Expert: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

const levelBarGradient: Record<SkillLevel, string> = {
  Beginner: "from-yellow-400 to-orange-400",
  Intermediate: "from-blue-500 to-indigo-500",
  Expert: "from-emerald-400 to-green-500",
};

const skills: Skill[] = [
  { name: "HTML", src: "/html.png", level: "Expert", percent: 90 },
  { name: "Tailwind CSS", src: "/tailwind.png", level: "Expert", percent: 88 },
  { name: "JavaScript", src: "/js.png", level: "Intermediate", percent: 82 },
  { name: "React", src: "/react.png", level: "Expert", percent: 86 },
  { name: "Next.js", src: "/nextjs.png", level: "Intermediate", percent: 80 },
  { name: "Python", src: "/python.png", level: "Intermediate", percent: 70 },
  { name: "Node.js", src: "/nodejs.png", level: "Intermediate", percent: 75 },
  { name: "MongoDB", src: "/mongodb.png", level: "Intermediate", percent: 70 },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 relative">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold backdrop-blur-sm">
              🚀 Tech Stack
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my core technologies and proficiency
            levels.
          </p>
        </div>

        {/* Legend */}
        <div className="mx-auto max-w-3xl grid grid-cols-3 gap-4 mb-12">
          {(["Beginner", "Intermediate", "Expert"] as SkillLevel[]).map(
            (lvl) => (
              <div
                key={lvl}
                className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${levelBadgeClass[lvl]}`}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-current opacity-80" />
                <span className="text-sm font-semibold">{lvl}</span>
              </div>
            ),
          )}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-xl border border-gray-700/50 bg-gray-800/60 backdrop-blur-sm p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 ring-2 ring-gray-700/50 group-hover:ring-gray-600 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={skill.src}
                    alt={`${skill.name} Logo`}
                    fill
                    className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-1.5 rounded-md border font-semibold ${levelBadgeClass[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span className="font-medium">Proficiency</span>
                      <span className="font-bold text-gray-300">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-700/60 overflow-hidden shadow-inner">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${levelBarGradient[skill.level]} shadow-lg transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
