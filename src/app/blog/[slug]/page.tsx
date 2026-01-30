"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blog
        </Link>

        <article className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
              Tutorial
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog Post: {slug}
          </h1>

          <div className="flex items-center gap-4 text-gray-400 mb-8 pb-8 border-b border-gray-700">
            <span>January 30, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              This is a placeholder for the blog post content. In a full
              implementation, this would be replaced with actual blog content,
              possibly loaded from MDX files or a CMS.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm currently working on creating valuable content for this blog.
              Stay tuned for detailed tutorials, best practices, and insights on
              web development!
            </p>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                💡 Want to Learn More?
              </h3>
              <p className="text-gray-300 mb-4">
                Check out my projects to see real-world implementations of
                modern web technologies.
              </p>
              <Link
                href="/projects"
                className="inline-block px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-semibold"
              >
                View Projects
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
