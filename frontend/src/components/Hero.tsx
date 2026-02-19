import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Logo - Mobile Only (since navbar already has logo) */}
        <div className="md:hidden text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Lovoh Creates</h1>
        </div>

        {/* Main Hero Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-12 md:pt-20">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Creative Digital Solutions That{' '}
            <span className="text-blue-600">Move Your Brand Forward</span>
          </h1>

          {/* Subtext / Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl">
            Design. Websites. Apps. Consultation. Strategy.
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl">
            We bring your ideas to life with clean and professional execution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started Today
            </button>
            
            {/* Secondary CTA */}
            <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Talk to Us
            </button>
          </div>

          {/* Optional: Small trust indicator or stat */}
          <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>100+ Projects Delivered</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>5+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Optional: Decorative elements or simple illustration */}
        <div className="absolute left-0 right-0 bottom-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="relative h-32">
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero