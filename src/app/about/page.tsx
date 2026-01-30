"use client";
import Image from "next/image";
import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";
import Link from "next/link";
import GitHubStats from "@/components/GitHubStats";

export default function AboutPage() {
  const experience = [
    {
      year: "2024 - Present",
      title: "Frontend Developer",
      description:
        "Building modern web applications with React, Next.js, and TypeScript",
    },
    {
      year: "2023 - 2024",
      title: "Learning & Building",
      description:
        "Developed 15+ projects to master web development technologies",
    },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Creating beautiful and functional websites",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Designing intuitive user experiences",
    },
    {
      icon: "🚀",
      title: "Open Source",
      description: "Contributing to the developer community",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Staying updated with latest technologies",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-6xl mb-10 mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold backdrop-blur-sm">
              👨‍💻 Get To Know Me
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-8 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
              </div>
              <div className="absolute -inset-4 opacity-40">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <div className="relative backdrop-blur-sm bg-white/5 p-2 rounded-full border border-white/10">
                <Image
                  src="/profile.png"
                  alt="Pratham Darji"
                  width={300}
                  height={300}
                  className="rounded-full relative z-10 hover:scale-105 transition-transform duration-500 shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="text-gray-300 space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hi, I'm Pratham Darji! 👋
            </h2>
            <p className="text-lg leading-relaxed">
              I'm a passionate{" "}
              <span className="text-blue-400 font-semibold">
                Frontend Developer
              </span>{" "}
              based in Vadodara, Gujarat, India. I specialize in creating
              beautiful, responsive, and user-friendly web applications.
            </p>
            <p className="text-lg leading-relaxed">
              With expertise in{" "}
              <span className="text-purple-400 font-semibold">
                React, Next.js, TypeScript, and Tailwind CSS
              </span>
              , I transform ideas into elegant digital experiences. I'm
              passionate about writing clean code and staying up-to-date with
              the latest web technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community through my projects and tutorials.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <Link
                href="https://github.com/Pratham-Prog861"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-700/60 backdrop-blur-sm rounded-lg hover:bg-gray-600 border border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconBrandGithub className="w-5 h-5" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/pratham-darji-b704092a2/"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/80 backdrop-blur-sm rounded-lg hover:bg-blue-700 border border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <IconBrandLinkedin className="w-5 h-5" />
                LinkedIn
              </Link>
              <Link
                href="/Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 backdrop-blur-sm rounded-lg hover:from-purple-700 hover:to-pink-700 border border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <IconDownload className="w-5 h-5" />
                Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            My Journey
          </h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What I Love
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {interest.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10 mb-16 overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <div className="relative grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Projects Completed
              </p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Technologies
              </p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Years Learning
              </p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Dedication
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="mb-16">
          <GitHubStats />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing Together!
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            <span>Get In Touch</span>
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
          </Link>
        </div>
      </div>
    </div>
  );
}
