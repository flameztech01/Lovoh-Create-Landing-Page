import React from 'react'

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Creative Design",
      description: "Logos, branding, posters, digital assets."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Website Development",
      description: "Modern, responsive, fast websites."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "App Development",
      description: "Mobile & web app solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Digital Consultation",
      description: "Strategy, business tech guidance."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Custom Solutions",
      description: "Unique digital builds tailored to you."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              {/* Description - exactly 1 line */}
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: CTA under services */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need something specific?{' '}
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors"
            >
              Let's talk about your project
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services