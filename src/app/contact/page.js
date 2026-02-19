"use client";

import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Have questions or want to get involved? Reach out to us and we’ll respond as soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <form className="bg-white shadow-lg rounded-lg p-8 grid gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input type="text" id="name" placeholder="Your full name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"/>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" placeholder="Your email address" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"/>
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input type="text" id="subject" placeholder="Subject" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"/>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" rows="5" placeholder="Your message" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"/>
          </div>

          <button type="submit" className="bg-green-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-800 transition">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
