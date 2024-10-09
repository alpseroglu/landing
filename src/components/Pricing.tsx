import React from 'react'

const PricingTier = ({ name, price, features }) => (
  <div className="bg-gray-800 bg-opacity-50 rounded-xl p-8 backdrop-filter backdrop-blur-lg hover:shadow-neon transition duration-300">
    <h3 className="text-2xl font-bold mb-4 text-yellow-400">{name}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal">/mo</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center text-gray-300">
          <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-full transition duration-300">
      Choose Plan
    </button>
  </div>
)

const Pricing = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Flexible Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingTier
          name="Starter"
          price={29}
          features={[
            "1,000 Messages/mo",
            "Basic AI Model",
            "Email Support",
            "1 Chatbot Instance"
          ]}
        />
        <PricingTier
          name="Pro"
          price={79}
          features={[
            "10,000 Messages/mo",
            "Advanced AI Model",
            "Priority Support",
            "5 Chatbot Instances",
            "Custom Training"
          ]}
        />
        <PricingTier
          name="Enterprise"
          price={199}
          features={[
            "Unlimited Messages",
            "State-of-the-Art AI",
            "24/7 Dedicated Support",
            "Unlimited Instances",
            "Full Customization"
          ]}
        />
      </div>
    </section>
  )
}

export default Pricing