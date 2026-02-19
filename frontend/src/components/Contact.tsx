import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaRegClock,
} from "react-icons/fa";
import {
  MdOutlineMessage,
  MdOutlineSend,
  MdOutlineErrorOutline,
  MdOutlineSchedule,
} from "react-icons/md";
import { BsChatDots, BsLightningCharge, BsCheckCircle } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";



const FORMSPREE_ACTION = "https://formspree.io/f/xvzbbpgb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    challenge: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit to Formspree (no backend)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          challenge: formData.challenge,
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", businessName: "", email: "", phone: "", challenge: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300/10 rounded-full filter blur-3xl" />

        {/* Silver Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(37 99 235 / 0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/50 mb-6 shadow-sm">
            <RiCustomerService2Line className="w-4 h-4 text-blue-600" />
            <span className="text-xs md:text-sm font-medium text-blue-700 uppercase tracking-wider">
              Get In Touch
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Let's
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Talk
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            Tell us about your brand and let's help you scale.
          </p>
        </div>

      

        {/* Contact Grid - Form & WhatsApp */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="group relative bg-white rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

            {/* Header with Icon */}
            <div className="relative flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <MdOutlineMessage className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Send us a message
              </h3>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-transparent rounded-full" />
            </div>

            {/* ✅ Formspree wired here */}
            <form onSubmit={handleSubmit} className="relative space-y-5">
              {/* Optional: set a subject in your inbox */}
              <input type="hidden" name="_subject" value="New Contact Form Submission (Lovoh Creates)" />

              {/* Optional: avoid spam (honeypot) */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                >
                  <FaUser className="w-3 h-3 text-blue-500" />
                  Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Business Name */}
              <div>
                <label
                  htmlFor="businessName"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                >
                  <FaBuilding className="w-3 h-3 text-blue-500" />
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                >
                  <FaEnvelope className="w-3 h-3 text-blue-500" />
                  Email <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                >
                  <FaPhone className="w-3 h-3 text-blue-500" />
                  Phone <span className="text-blue-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+234 XXX XXX XXXX (Call or Whatsapp)"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Challenge Textarea */}
              <div>
                <label
                  htmlFor="challenge"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1"
                >
                  <BsChatDots className="w-3 h-3 text-blue-500" />
                  What is your biggest marketing challenge?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you're struggling with..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <MdOutlineSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  <IoMdCheckmarkCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Thanks! We'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <MdOutlineErrorOutline className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Something went wrong. Please try again or WhatsApp us directly.</span>
                </div>
              )}
            </form>
          </div>

          {/* WhatsApp Card & Quick Info */}
          <div className="space-y-6">
            {/* WhatsApp Card - Enhanced Blue Design */}
            <div className="relative group bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white overflow-hidden shadow-xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />

              {/* Silver Sparkle Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping" />
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-white/20 rounded-full animate-pulse" />
              </div>

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <FaWhatsapp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Chat on WhatsApp
                    <BsLightningCharge className="w-4 h-4 text-yellow-300" />
                  </h3>
                  <p className="text-blue-100 text-sm flex items-center gap-1">
                    <FaRegClock className="w-3 h-3" />
                    Usually replies within 1 hour
                  </p>
                </div>
              </div>

              <p className="relative text-blue-100 mb-6">
                Prefer instant messaging? Reach out on WhatsApp for a faster response.
              </p>

              {/* WhatsApp Button */}
              <Link
                to='https://wa.me/2348055766461'
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <FaWhatsapp className="w-5 h-5 text-blue-600 group-hover/btn:scale-110 transition-transform" />
                <span>Start WhatsApp Chat</span>
                <BsChatDots className="w-4 h-4 text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <p className="relative text-xs text-blue-200 text-center mt-4">
                Click to open WhatsApp • No app needed on desktop
              </p>
            </div>

            {/* Quick Info Card - Silver/White Design */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MdOutlineSchedule className="w-5 h-5 text-blue-600" />
                Response Times
              </h4>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 p-2 hover:bg-blue-50/50 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <FaClock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Email/Form</span>
                    <p className="text-xs text-gray-500">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600 p-2 hover:bg-blue-50/50 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <BsLightningCharge className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">WhatsApp</span>
                    <p className="text-xs text-gray-500">Instant (1 hour average)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600 p-2 hover:bg-blue-50/50 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <BsCheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Free Consultation</span>
                    <p className="text-xs text-gray-500">30-min strategy session</p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
