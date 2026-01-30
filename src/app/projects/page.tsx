"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import projects from "@/lib/constant";

export default function Page() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTag =
        selectedTag === "All" || project.tags.includes(selectedTag);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  // Featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center mb-12 relative">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
              💼 Portfolio Showcase
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing my journey through code and creativity
          </p>
          <p className="text-blue-400 mt-3 font-medium">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"} found
          </p>
        </div>

        {/* Featured Projects */}
        {selectedTag === "All" &&
          searchQuery === "" &&
          featuredProjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-yellow-400">⭐</span> Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} featured />
                ))}
              </div>
            </div>
          )}

        {/* Search Bar */}
        <div className="mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search projects by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-lg"
          />
        </div>

        {/* Filter Tags */}
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105 border border-blue-400/30"
                  : "bg-gray-800/60 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50 hover:border-gray-600 hover:scale-105"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedTag("All");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: any;
  featured?: boolean;
}) {
  return (
    <div
      className={`group bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border relative ${
        featured
          ? "border-yellow-500/50 shadow-yellow-500/10"
          : "border-gray-700/50"
      }`}
    >
      {featured && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          ⭐ FEATURED
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <Link href={project.github} target="_blank">
          <Image
            src={project.image}
            alt={`${project.title} landing page`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </Link>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {project.title}
        </h2>
        <p className="text-gray-400 mb-5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full backdrop-blur-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 bg-gray-700/60 backdrop-blur-sm text-white rounded-lg hover:bg-gray-600 border border-gray-600/50 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Code
              </span>
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 border border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
