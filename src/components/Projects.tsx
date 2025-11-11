"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "AI Connect Pro",
      description: "This AI helps you find solutions to your problems",
      image: "/landing_page.png",
      github: "https://github.com/Pratham-Prog861/AI-Connect",
      live: "https://aiconnectpro.netlify.app/"
    },
    {
      title: "Code with Pratham",
      description: "Learn web development for free.",
      image: "/codewithpratham.png",
      github: "https://github.com/Pratham-Prog861/DevLearning",
      live: "https://codewithpratham.netlify.app/"
    },
    {
      title: "VibeStream",
      description: "I built a Spotify-style music app — without a backend!",
      image: "/vibestream.png",
      github: "https://github.com/Pratham-Prog861/VibeStream",
      live: "https://vibe-stream-ebon.vercel.app/"
    },
    {
      title: "Enhanced Convex Chat",
      description: "A real-time chat app built with Convex",
      image: "/convex-chat.png",
      github: "https://github.com/Pratham-Prog861/convex-chat-tutorial-enhanced",
    },
    {
      title: "Music Player", 
      description: "This is a music player that you can use to play your favorite songs",
      image: "/music-player.png",
      github: "https://github.com/Pratham-Prog861/music-player",
      live: "https://phdmusic.netlify.app/"
    },
    {
      title: "TaskMaster",
      description: "TaskMaster is a web application that helps you manage your tasks and stay organized.",
      image: "/taskmaster.png",
      github: "https://github.com/Pratham-Prog861/TaskMaster",
      live: "https://task-master-phd.netlify.app/"
    },
    {
      title: "Currency Converter",
      description: "This is an age calculator that you can use to calculate your age",
      image: "/currency-convertor.png", 
      github: "https://github.com/Pratham-Prog861/Streamlit/blob/main/currency_convertor.py",
      live: "https://phd-convertor.streamlit.app/"
    },
    {
      title: "LeetCode AI Helper",
      description: "A browser extension to help solve LeetCode problems.",
      image: "/leetcode-ai-helper.jpg",
      github: "https://github.com/Pratham-Prog861/LeetCode-AI-Helper"
    },
    {
      title: "ChatSync",
      description: "A web application that i developed to chat with my friends.",
      image: "/chat-sync.png",
      github: "https://github.com/Pratham-Prog861/Chat-App-with-React"
    },
    {
      title : "React Lite Hooks",
      description: "A set of lightweight React hooks for common UI needs.",
      image: "/react-lite.png",
      github: "https://github.com/Pratham-Prog861/react-lite-hooks",
      live: "https://www.npmjs.com/package/react-lite-hooks"
    },
    {
      title: "Todo Web App",
      description: "This is a todo web app that you can use to keep track of your tasks",
      image: "/todo.png",
      github: "https://github.com/Pratham-Prog861/ToDo-App",
      live: "https://phdtodo.netlify.app/"
    },
    {
      title: "AI Content Detection",
      description: "This webapp is used to detect if a content is written by AI or not",
      image: "/ai-content-detection.png",
      github: "https://github.com/Pratham-Prog861/Humanize-AI",
      live: "https://humanize-ai-ten.vercel.app/"
    },
    {
      title: "YT Summarizer",
      description: "This is a youtube summarizer that you can use to summarize your youtube videos",
      image: "/yt-summarizer.png",
      github: "https://github.com/Pratham-Prog861/Youtube-Summarizer",
      live: "https://yt-summarizer.netlify.app/"
    },

  ]
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-white mb-4'>My Projects</h1>
          <p className='text-xl text-gray-400'>Showcasing my journey through code and creativity</p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Left - Large Featured */}
          <div className="relative group bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <Image 
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{projects[0].title}</h2>
              <p className="text-gray-300 text-sm mb-4">{projects[0].description}</p>
              <div className="flex gap-3">
                {projects[0].github && (
                  <Link
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 text-sm transition-all"
                  >
                    GitHub
                  </Link>
                )}
                {projects[0].live && (
                  <Link
                    href={projects[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 text-sm transition-all font-medium"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Top Right - Large Featured */}
          <div className="relative group bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{projects[1].title}</h2>
              <p className="text-gray-300 text-sm mb-4">{projects[1].description}</p>
              <div className="flex gap-3">
                {projects[1].github && (
                  <Link
                    href={projects[1].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 text-sm transition-all"
                  >
                    GitHub
                  </Link>
                )}
                {projects[1].live && (
                  <Link
                    href={projects[1].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 text-sm transition-all font-medium"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Left - Large Featured */}
          <div className="relative group bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{projects[2].title}</h2>
              <p className="text-gray-300 text-sm mb-4">{projects[2].description}</p>
              <div className="flex gap-3">
                {projects[2].github && (
                  <Link
                    href={projects[2].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 text-sm transition-all"
                  >
                    GitHub
                  </Link>
                )}
                {projects[2].live && (
                  <Link
                    href={projects[2].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 text-sm transition-all font-medium"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Right - Large Featured */}
          <div className="relative group bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{projects[3].title}</h2>
              <p className="text-gray-300 text-sm mb-4">{projects[3].description}</p>
              <div className="flex gap-3">
                {projects[3].github && (
                  <Link
                    href={projects[3].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 text-sm transition-all"
                  >
                    GitHub
                  </Link>
                )}
                {projects[3].live && (
                  <Link
                    href={projects[3].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 text-sm transition-all font-medium"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>



        <div className="text-center mt-10 mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium text-sm"
          >
            More Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
