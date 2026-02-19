import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BsChatDots, BsCalendarCheck } from "react-icons/bs";

interface HeroProps {
  onBookSession: () => void;
  whatsappLink: string;
}

const Hero = ({ onBookSession }: HeroProps) => {
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
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.15 + 0.05,
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

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${particle.opacity})`;
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
        style={{ opacity: 0.4 }}
      />

      {/* Decorative Elements - Minimal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      {/* Main Content - Left/Right Layout */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/50 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-blue-700">
                Only 5 Spots Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Is Your Brand <br className="hidden sm:block" />
              Ready for{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Q2 2026?
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 -z-0 rounded-lg hidden sm:block"></span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              If your messaging isn't clear, your marketing won't convert.{' '}
              <span className="block mt-2 bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent font-semibold">
                Let's refine your brand strategy before you spend another budget on advertising.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
              <button
                onClick={onBookSession}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <BsCalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Free Brand Clarity Session
              </button>

              <Link
                to="https://wa.me/qr/I6P5AWU6GHDQE1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                Chat on WhatsApp
                <BsChatDots className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-[2.5rem] blur-2xl opacity-50"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img 
                  src="/picture1.png" 
                  alt="Brand Strategy"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>

              {/* Floating badge - positioned on image */}
              <div className="absolute -bottom-3 -left-3 bg-white px-4 py-2 rounded-xl shadow-lg border border-blue-100">
                <p className="text-xs font-semibold text-blue-600">Strategy Session</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;