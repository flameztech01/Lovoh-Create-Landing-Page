import { Link } from 'react-router-dom';
import { 
  FiTarget, 
  FiMessageSquare, 
  FiTrendingDown,
  FiArrowRight 
} from 'react-icons/fi';
import { 
  BsLightbulb, 
  BsExclamationTriangle,
  BsCheckCircle 
} from 'react-icons/bs';
import { MdWarning } from 'react-icons/md';

const Problem = () => {
  const painPoints = [
    {
      title: "No clear positioning",
      description: "You blend in with competitors instead of standing out. Your ideal clients can't tell why they should choose you.",
      icon: FiTarget,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Inconsistent messaging",
      description: "Your website says one thing, your social media says another. Confusion kills conversions.",
      icon: FiMessageSquare,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Running ads without strategy",
      description: "Burning through budget on ads that don't convert because your foundation isn't solid.",
      icon: FiTrendingDown,
      color: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

 

  return (
    <section id="problem" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/50 mb-6 shadow-sm">
            <BsExclamationTriangle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">The Reality Check</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Many Brands
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Struggle With Marketing
            </span>
          </h2>
          
          {/* Description with Icon */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MdWarning className="w-5 h-5 text-blue-500 flex-shrink-0" />
            Most businesses hit a wall because they're missing the fundamentals. 
            Here's what's holding you back.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              {/* Icon with Silver Background */}
              <div className={`relative w-14 h-14 ${point.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100`}>
                <point.icon className={`w-7 h-7 ${point.iconColor}`} />
              </div>

              {/* Number Indicator - Silver */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-semibold text-sm border border-gray-200">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {point.description}
              </p>

              {/* Decorative Line - Blue Gradient */}
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

              {/* Silver Dot Pattern */}
              <div className="absolute bottom-4 right-4 flex gap-1">
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Signs Strip */}
        {/* <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl p-6 border border-blue-100">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {warningSigns.map((sign, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm text-gray-600">{sign}</span>
                  {index < warningSigns.length - 1 && (
                    <FiArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Transition/CTA Box - Enhanced Blue Design */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 md:p-10 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
            
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping" />
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-white/20 rounded-full animate-pulse" />
            </div>

            <div className="inline-flex p-3 bg-white/10 rounded-xl backdrop-blur-sm mb-6 border border-white/20">
              <BsLightbulb className="w-8 h-8 text-white" />
            </div>

            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              We help brands define{' '}
              <span className="bg-white/20 px-3 py-1 rounded-lg font-semibold">strategy, messaging,</span> and{' '}
              <span className="bg-white/20 px-3 py-1 rounded-lg font-semibold">structure</span>
              <br className="hidden md:block" />
              <span className="text-blue-100">so marketing actually works.</span>
            </p>

            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <BsCheckCircle className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>Start with a Free Clarity Session</span>
              <FiArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-6 text-sm text-blue-200 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                No commitment required
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                30-minute strategy call
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
