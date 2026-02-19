

const Whyus = () => {
  const benefits = [
    {
      text: "Clean & modern execution",
      description: "We deliver pixel-perfect work that stands out"
    },
    {
      text: "Fast turnaround time",
      description: "Quick delivery without compromising quality"
    },
    {
      text: "Clear communication",
      description: "Regular updates and transparent process"
    },
    {
      text: "Affordable pricing",
      description: "Quality work that fits your budget"
    },
    {
      text: "Long-term support",
      description: "We're here even after project completion"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits List */}
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group"
                  >
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <svg 
                        className="w-5 h-5 text-green-600" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    
                    {/* Benefit Text */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.text}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-10 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700 text-lg italic">
                  "Trusted by startups, students, and growing brands."
                </p>
                <div className="flex items-center mt-4 space-x-2">
                  {/* Star Ratings */}
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(4.9/5 from 50+ reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual/Image/Stats */}
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="space-y-6">
                  {/* Stat 1 */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Projects Completed</span>
                    <span className="text-2xl font-bold text-blue-600">100+</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-blue-600 rounded-full"></div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Happy Clients</span>
                    <span className="text-2xl font-bold text-blue-600">95%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-95/100 h-full bg-green-500 rounded-full"></div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">On-time Delivery</span>
                    <span className="text-2xl font-bold text-blue-600">98%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-98/100 h-full bg-purple-500 rounded-full"></div>
                  </div>

                  {/* Client logos placeholder */}
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center mb-4">Trusted by</p>
                    <div className="flex justify-center space-x-6">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whyus