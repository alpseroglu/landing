import React from 'react'
import { Bot } from 'lucide-react'

const Hero = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          AI CHAT<br />BOT OF<br />THE FUTURE
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Experience the next generation of conversational AI with our cutting-edge chatbot platform.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:shadow-neon">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>
        <Bot size={300} className="text-yellow-400 mx-auto relative z-10" />
      </div>
    </div>
  )
}

export default Hero