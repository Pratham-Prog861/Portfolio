import Image from "next/image";
import React from "react";

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Technical Skills</h1>
          <p className="text-lg text-gray-400">
            A quick overview of my core technologies and proficiency.
          </p>
        </div>

        {/* Legend */}
        <div className="mx-auto max-w-3xl grid grid-cols-3 gap-3 mb-10">
          {(["Beginner", "Intermediate", "Expert"] as SkillLevel[]).map((lvl) => (
            <div
              key={lvl}
              className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2 ${levelBadgeClass[lvl]}`}
            >
              <span className="h-2 w-2 rounded-full bg-current opacity-60" />
              <span className="text-sm font-medium">{lvl}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-xl border border-gray-800 bg-gray-900/60 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-gray-800 ring-1 ring-gray-700">
                  <Image
                    src={skill.src}
                    alt={`${skill.name} Logo`}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-md border ${levelBadgeClass[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Proficiency</span>
                      <span className="font-medium text-gray-300">{skill.percent}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-700/60 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${levelBarGradient[skill.level]}`}
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
  )
}

export default page