"use client";
import '../globals.css';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import waterAnimation from "../animations/water-wave";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      await emailjs.send(
        "service_8a9vvuu",
        "template_2zsmb0j",
        {
          ...form,
          time: new Date().toLocaleString(),
        },
        "fLoPoaQqnYypuyRdY"
      );
      await emailjs.send(
        "service_8a9vvuu",
        "template_pd46nrv",
        { name: form.name, email: form.email },
        "fLoPoaQqnYypuyRdY"
      );
      setFeedback("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setFeedback("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        position: "relative",
        backgroundColor: "black !important",  // force black background
      }}
    >
      {/* Lottie animation as background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          filter: "brightness(0.6)",
        }}
      >
        <Lottie
          animationData={waterAnimation}
          loop={false}
          autoplay={true}
          style={{ width: "100%", height: "100%", transformOrigin: "center" }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        // Reverse the animation by controlling speed & direction:
        // Lottie-react doesn't have direct reverse prop,
        // but you can try playing segments in reverse,
        // or play normally and flip container vertically:
        // We'll flip container vertically:
        />
      </div>

      {/* Flip container vertically to reverse animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "scaleY(-1)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "brightness(0.6)",
        }}
      >
        <Lottie
          animationData={waterAnimation}
          loop={false}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>

      {/* Form container */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-lg w-full p-10 bg-black bg-opacity-80 backdrop-blur-md rounded-md shadow-lg"
      >
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Contact Us</h2>

        <label htmlFor="name" className="block mb-2 text-white font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-5 p-3 rounded-md border border-gray-600 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="email" className="block mb-2 text-white font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-5 p-3 rounded-md border border-gray-600 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="phone" className="block mb-2 text-white font-semibold">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-5 p-3 rounded-md border border-gray-600 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="subject" className="block mb-2 text-white font-semibold">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full mb-5 p-3 rounded-md border border-gray-600 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="message" className="block mb-2 text-white font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full mb-6 p-3 rounded-md border border-gray-600 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {feedback && (
          <p className="mt-4 text-center text-green-400 font-medium">{feedback}</p>
        )}
      </form>
    </div>
  );
}
