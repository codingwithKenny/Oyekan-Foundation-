"use client";

import Navbar from "../components/Navbar";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Support Oyekan Foundation
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Your contribution helps us empower lives, support education, provide healthcare, and uplift communities in need.
        </p>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Make a Donation
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Any amount you contribute will go directly towards our community programs and initiatives.
        </p>

        {/* Donation Button Placeholder */}
        <button className="bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-green-800 transition">
          Donate Now
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Donations are secure and transparent. We ensure every contribution reaches those in need.
        </p>
      </section>
    </main>
  );
}
