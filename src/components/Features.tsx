import React from 'react'
import { Zap, Shield, Cpu } from 'lucide-react'

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-gray-800 bg-opacity-50 rounded-xl backdrop-filter backdrop-blur-lg hover:shadow-neon transition duration-300">
    {icon}
    <h3 className="text-2xl font-bold mt-4 mb-2 text-yellow-400">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
)

const Features = () => {
  return (
    <section className="py-20 bg-gray-900 bg-opacity-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Cutting-Edge Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature
          icon={<Zap size={48} className="text-yellow-400" />}
          title="Lightning Fast"
          description="Experience unparalleled speed with our optimized AI infrastructure."
        />
        <Feature
          icon={<Shield size={48} className="text-yellow-400" />}
          title="Ultra Secure"
          description="Your conversations are protected with state-of-the-art encryption."
        />
        <Feature
          icon={<Cpu size={48} className="text-yellow-400" />}
          title="AI-Powered"
          description="Harness the power of advanced machine learning for natural conversations."
        />
      </div>
    </section>
  )
}

export default Features