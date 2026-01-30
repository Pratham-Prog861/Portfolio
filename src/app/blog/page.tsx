"use client";
import Link from "next/link";
import React from "react";

const blogPosts = [
  {
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the fundamentals of Next.js 15 and build your first modern web application with the latest features.",
    date: "January 25, 2026",
    readTime: "5 min read",
    category: "Tutorial",
    slug: "getting-started-nextjs-15",
  },
  {
    title: "React Best Practices in 2026",
    excerpt:
      "Explore the latest React patterns and best practices that will make your code cleaner and more maintainable.",
    date: "January 20, 2026",
    readTime: "8 min read",
    category: "Best Practices",
    slug: "react-best-practices-2026",
  },
  {
    title: "Tailwind CSS Tips and Tricks",
    excerpt:
      "Discover powerful Tailwind CSS techniques to speed up your development and create beautiful designs.",
    date: "January 15, 2026",
    readTime: "6 min read",
    category: "CSS",
    slug: "tailwind-css-tips-tricks",
  },
  {
    title: "Building a Portfolio with Next.js",
    excerpt:
      "A complete guide to creating a stunning portfolio website using Next.js, React, and Tailwind CSS.",
    date: "January 10, 2026",
    readTime: "10 min read",
    category: "Tutorial",
    slug: "building-portfolio-nextjs",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-6xl mb-12 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-400">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition">
          <div className="flex items-start gap-2 mb-3">
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full">
              Featured
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
              {blogPosts[0].category}
            </span>
          </div>
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <h2 className="text-3xl font-bold text-white mb-4 hover:text-blue-400 transition">
              {blogPosts[0].title}
            </h2>
          </Link>
          <p className="text-gray-300 text-lg mb-4">{blogPosts[0].excerpt}</p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>{blogPosts[0].date}</span>
            <span>•</span>
            <span>{blogPosts[0].readTime}</span>
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={index}
              className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition group"
            >
              <div className="flex items-start gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                  {post.category}
                </span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="mt-12 text-center bg-gray-800/60 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            More Articles Coming Soon!
          </h3>
          <p className="text-gray-400 mb-6">
            I'm constantly writing new content about web development, React,
            Next.js, and more.
            <br />
            Stay tuned for more articles!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/Pratham-Prog861"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition text-white"
            >
              Follow on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pratham-darji-b704092a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
