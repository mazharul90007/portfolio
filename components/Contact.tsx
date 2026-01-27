"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import emailAnimation from "@/public/email.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY,
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background Glows matching other sections */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-3 text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
          <span className="w-10 h-px bg-indigo-500"></span>
          Connect
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tight leading-tight">
          Let’s build something <br />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            amazing together
          </span>
        </h2>

        {/* Main Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Info Bento Card */}
          <div className="lg:col-span-5 relative group p-8 md:p-12 rounded-[3rem] border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col justify-between backdrop-blur-3xl">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-600/15 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-48 h-48 md:w-64 md:h-64 mb-6">
                <Lottie animationData={emailAnimation} loop={true} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Mazharul Islam Sourabh
              </h3>
              <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-8">
                Full Stack Web Developer
              </p>

              <div className="space-y-6 w-full">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-indigo-500/50 transition-colors">
                    <FaPhoneAlt className="text-indigo-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
                      Call Me
                    </span>
                    <span className="text-white/80 font-medium">
                      +880-1939562168
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-indigo-500/50 transition-colors">
                    <FaEnvelope className="text-indigo-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
                      Email Me
                    </span>
                    <span className="text-white/80 font-medium">
                      mazharul90007@gmail.com
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-indigo-500/50 transition-colors">
                    <FaMapMarkerAlt className="text-indigo-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
                      Location
                    </span>
                    <span className="text-white/80 font-medium">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="relative z-10 mt-12 text-white/40 text-sm italic leading-relaxed">
              If you have any queries, please feel free to reach out. I will
              gladly answer them. Thanks for visiting.
            </p>
          </div>

          {/* RIGHT: Form Bento Card */}
          <div className="lg:col-span-7 relative group p-8 md:p-12 rounded-[3rem] border border-white/10 bg-[#0a0a0a] overflow-hidden backdrop-blur-3xl">
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />

            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
              <span className="w-8 h-px bg-indigo-500"></span>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 ml-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={12}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-white/10 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group/btn flex justify-center items-center gap-3 py-4 rounded-2xl uppercase tracking-widest text-sm bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all duration-300 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                <FiSend className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
