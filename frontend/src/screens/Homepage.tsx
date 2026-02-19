import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Problem from '../components/Problem.tsx';
import Services from '../components/Services.tsx';
import Contact from '../components/Contact.tsx';


const Homepage = () => {
    const whatsappNumber = "2348058586759"; // Replace with your actual number
  const whatsappMessage = encodeURIComponent(
    "Hi Lovoh Creates, I want to book a free Brand Clarity Session."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleBookSession = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Navbar />
      <section id="home" className="">
        <Hero onBookSession={handleBookSession} whatsappLink={whatsappLink} />
      </section>
      <section id='problem' className="min-h-screen flex items-center justify-center bg-white">
        <Problem />
      </section>
      <section id='services' className="min-h-screen flex items-center justify-center bg-gray-50">
        <Services />
      </section>
      <section id='contact' className="min-h-screen flex items-center justify-center bg-white">
        <Contact />
      </section>
    
    </div>
  )
}

export default Homepage
