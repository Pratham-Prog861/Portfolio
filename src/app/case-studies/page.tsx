"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "@/lib/constant";

export default function CaseStudiesPage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Project Case Studies
          </h1>
          <p className="text-xl text-gray-400">
            Deep dives into my most impactful projects
          </p>
        </div>

        {/* Featured Projects as Case Studies */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-xl border border-gray-700"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full">
                    Featured Project
                  </span>
                  <span className="text-gray-500">#{index + 1}</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">
                    TECH STACK
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">
                    KEY FEATURES
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      Modern and responsive design
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      Optimized performance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      Clean and maintainable code
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition text-white font-semibold"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-semibold"
                    >
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            More Projects
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Check out all my projects for more detailed information
          </p>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition text-white font-semibold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
