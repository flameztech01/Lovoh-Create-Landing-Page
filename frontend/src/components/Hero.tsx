import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaStar, FaUsers } from "react-icons/fa";
import { BsChatDots, BsCalendarCheck } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

interface HeroProps {
  onBookSession: () => void;
  whatsappLink: string;
}

const Hero = ({ onBookSession, whatsappLink }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle background animation (optional)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const initParticles = () => {
      particles = [];
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.2 + 0.1,
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${particle.opacity * 0.5})`; // Blue particles
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Decorative Elements - Blue & Silver */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge / Indicator - Blue & Silver */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/50 mb-8 md:mb-10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-blue-700">
              Limited Spots Available for Q2 2026
            </span>
          </div>

          {/* Headline - Silver to Blue Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight">
            Is Your Brand Ready for
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                {" "}Q2 2026?
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 -z-0 rounded-lg"></span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            If your messaging isn't clear, your marketing won't convert.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent font-semibold">
              Let's refine your brand strategy before you spend another naira on ads.
            </span>
          </p>

          {/* CTA Buttons - Blue & White */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button
              onClick={onBookSession}
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden shadow-md"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <BsCalendarCheck className="w-5 h-5" />
                Book Free Brand Clarity Session
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <Link
              to='https://wa.me/qr/I6P5AWU6GHDQE1'
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden shadow-sm"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaWhatsapp className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                Chat on WhatsApp
                <BsChatDots className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </span>
            </Link>
          </div>

          {/* Social Proof / Stats - Silver/Blue */}
          <div className="mt-12 pt-8 border-t border-blue-100">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 bg-gray-50/80 px-4 py-2 rounded-full border border-gray-200">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gray-600 font-medium flex items-center gap-1">
                  <FaUsers className="w-4 h-4 text-blue-500" />
                  50+ brands
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50/80 px-4 py-2 rounded-full border border-gray-200">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  4.9/5 from 100+ reviews
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50/80 px-4 py-2 rounded-full border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-600 font-medium">Response within 1hr</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          {/* <div className="mt-8 flex items-center justify-center gap-6">
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
              No credit card required
            </div>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
              100% money-back guarantee
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator - Blue & Silver */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
           onClick={() => {
             const element = document.getElementById("problem");
             if (element) {
               element.scrollIntoView({ behavior: "smooth" });
             }
           }}>
        <div className="w-7 h-12 border-2 border-blue-200 rounded-full flex justify-center bg-white/50 backdrop-blur-sm shadow-sm hover:border-blue-300 transition-colors">
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
        <MdKeyboardArrowDown className="w-4 h-4 text-blue-400 mt-1 mx-auto" />
      </div> */}
    </section>
  );
};

export default Hero;