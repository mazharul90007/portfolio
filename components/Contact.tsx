"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import emailAnimation from "@/public/email.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_qhxicgg",
        "template_sixmgpf",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-16 w-full">
      <div className="w-full">
        <p className="text-white/50 font-medium text-xl md:text-2xl mb-4">
          <span className="mr-2">||</span>Contact Me
        </p>
        <h2 className="text-5xl text-sub font-semibold mb-16">
          Let’s build something amazing together
        </h2>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/20 rounded-2xl shadow-xl overflow-hidden">
          {/* LEFT INFO */}
          <div className="flex flex-col md:flex-row">
            {/* Description Section */}
            <div className="flex flex-col items-center p-6 shadow-md">
              {/* Image */}
              <div className="w-60 h-60">
                <Lottie animationData={emailAnimation}></Lottie>
              </div>

              {/* Contact Info */}
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-semibold text-white/90">
                  Mazharul Islam Sourabh
                </h2>
                <p className="text-white/50 text-lg font-medium">
                  Full Stack Web Developer
                </p>

                {/* Details */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-white/50 text-lg">
                    <FaPhoneAlt className="mr-2 text-white/90" />
                    <span>+880-1939562168</span>
                  </div>
                  <div className="flex items-center text-white/50 text-lg">
                    <FaEnvelope className="mr-2 text-white/90" />
                    <span>mazharul90007@gmail.com</span>
                  </div>
                  <div className="flex items-center text-white/50 text-lg">
                    <FaMapMarkerAlt className="mr-2 text-white/90" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <p className="mt-6 text-center text-white/50 text-base">
                If you have any queries at all, please feel free to reach out,
                and I will gladly answer them. Thanks for visiting.
              </p>
            </div>
          </div>
          {/* RIGHT FORM */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white/90">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-base text-white/50">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-white/50 outline-none"
                />
              </div>

              <div>
                <label className="text-base text-white/50">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-white/50 outline-none"
                />
              </div>

              <div>
                <label className="text-base text-white/50">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-white/50 outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex justify-center items-center gap-2 py-3 px-6 rounded-3xl border border-white/20 text-lg md:text-xl font-medium bg-transparent text-white w-full cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
