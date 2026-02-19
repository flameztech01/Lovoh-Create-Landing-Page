import React from 'react'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Services from '../components/Services.tsx'
import Whyus from '../components/Whyus.tsx'
import Contact from '../components/Contact.tsx'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
        <Hero />
      </section>
      <section id='services' className="min-h-screen flex items-center justify-center bg-white">
        <Services />
      </section>
      <section id='why-us' className="min-h-screen flex items-center justify-center bg-gray-50">
        <Whyus />
        </section>
        <section id='contact' className="min-h-screen flex items-center justify-center bg-white">
            <Contact />
        </section>
    </div>
  )
}

export default Homepage
