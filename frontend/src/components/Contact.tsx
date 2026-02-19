import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '1234567890'; // Add your WhatsApp number here
    const message = encodeURIComponent("Hi Lovoh Creates! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Contact Info & Quick Actions */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Quick Contact
                </h3>

                {/* WhatsApp Quick Button */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full mb-6 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                  </svg>
                  <span>Chat with us on WhatsApp</span>
                </button>

                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>hello@lovohcreates.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>

                {/* Response Time Badge */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">⏱️ Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Samuel Njoku"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 234 567 890"
                    />
                  </div>

                  {/* Service Needed Dropdown */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="creative-design">Creative Design</option>
                      <option value="website-development">Website Development</option>
                      <option value="app-development">App Development</option>
                      <option value="digital-consultation">Digital Consultation</option>
                      <option value="custom-solutions">Custom Solutions</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and consent to being contacted.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact