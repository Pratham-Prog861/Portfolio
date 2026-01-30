import React from "react";
import Link from "next/link";
import {
  IconAddressBook,
  IconBraille,
  IconBrandProducthunt,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="relative max-w-7xl mb-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate developer with a focus on creating innovative solutions
              and building impactful projects. Constantly learning and exploring
              new technologies to deliver exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3 flex items-center justify-center flex-col">
              <li>
                <Link
                  href="/skills"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 group"
                >
                  <IconBraille className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 group"
                >
                  <IconBrandProducthunt className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:translate-x-1 group"
                >
                  <IconAddressBook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://github.com/Pratham-Prog861"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/80 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <svg
                  className="w-6 h-6 group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/in/pratham-prog861"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-700/80 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <svg
                  className="w-6 h-6 group-hover:text-purple-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800/50 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              <span className="inline-block">
                © {new Date().getFullYear()} Pratham Darji.{" "}
              </span>
              <span className="inline-block">All rights reserved.</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Built with <span className="text-red-400">♥</span> using Next.js &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
