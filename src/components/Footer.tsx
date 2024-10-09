import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-yellow-400">FutureChat AI</h2>
            <p className="text-gray-400">Empowering conversations of tomorrow</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 FutureChat AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer