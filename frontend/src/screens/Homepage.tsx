import Navbar from '../components/Navbar.tsx';
import Hero from '../components/Hero.tsx';
import Problem from '../components/Problem.tsx';
import Services from '../components/Services.tsx';
import Contact from '../components/Contact.tsx';

const Homepage = () => {

  const handleBookSession = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero onBookSession={handleBookSession} />
      </section>

      <section id="problem" className="min-h-screen flex items-center justify-center bg-white">
        <Problem />
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center bg-gray-50">
        <Services onCtaClick={handleBookSession} />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
        <Contact />
      </section>
    </div>
  );
};

export default Homepage;
