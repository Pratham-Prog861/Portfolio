"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const projects = [
    {
      title: "AI Connect Pro",
      description: "This AI helps you find solutions to your problems",
      image: "/landing_page.png",
      github: "https://github.com/Pratham-Prog861/AI-Connect",
      live: "https://aiconnectpro.netlify.app/"
    },
    {
      title: "Music Player", 
      description: "This is a music player that you can use to play your favorite songs",
      image: "/music-player.png",
      github: "https://github.com/Pratham-Prog861/music-player",
      live: "https://phdmusic.netlify.app/"
    },
    {
      title: "Currency Converter",
      description: "This is an age calculator that you can use to calculate your age",
      image: "/currency-convertor.png", 
      github: "https://github.com/Pratham-Prog861/Streamlit/blob/main/currency_convertor.py",
      live: "https://phd-convertor.streamlit.app/"
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
    }
  ]
  return (
    <div className="h-[170vh] bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-white mb-4'>My Projects</h1>
          <p className='text-xl text-gray-400'>Showcasing my journey through code and creativity</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className='bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700'
            >
              <div className='relative h-48 overflow-hidden'>
                <Link href={project.github} target='_blank'>
                  <Image 
                    src={project.image}
                    alt={`${project.title} landing page`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </Link>
              </div>
              
              <div className='p-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>{project.title}</h2>
                <p className='text-gray-400 mb-4 line-clamp-2'>
                  {project.description}
                </p>
                
                <div className='flex gap-4'>
                  {project.github && (
                    <Link 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex-1 text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                      className='flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Live Demo
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <h1 className="text-3xl font-semibold text-white opacity-75">More Projects Coming Soon...</h1>
        <p className="text-gray-400">Stay tuned for exciting new projects!</p>
      </div>
    </div>
  )
}

export default page