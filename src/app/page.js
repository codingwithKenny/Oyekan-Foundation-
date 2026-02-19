"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import {
  FaHandsHelping,
  FaBalanceScale,
  FaSeedling,
  FaUserFriends,
  FaHeartbeat,
  FaSchool,
  FaWheelchair,
} from "react-icons/fa";

export default function HomePage() {
  const coreValues = [
    { name: "Compassion", icon: <FaHandsHelping />, desc: "We show empathy and kindness to those we serve." },
    { name: "Integrity", icon: <FaBalanceScale />, desc: "We uphold honesty, transparency, and ethics in all our actions." },
    { name: "Equality", icon: <FaUserFriends />, desc: "We ensure dignity and equal opportunity for everyone." },
    { name: "Collaboration", icon: <FaUserFriends />, desc: "We work with like-minded partners to create sustainable impact." },
    { name: "Empowerment", icon: <FaSeedling />, desc: "We equip communities with skills and resources to thrive." },
    { name: "Accountability", icon: <FaHeartbeat />, desc: "We take responsibility for our programs and measure their effectiveness." },
    { name: "Innovation", icon: <FaSeedling />, desc: "We embrace new solutions and technologies to serve better." },
    { name: "Cultural Sensitivity", icon: <FaUserFriends />, desc: "We respect diverse traditions and values in all communities." },
    { name: "Sustainability", icon: <FaSeedling />, desc: "We create lasting change and strengthen community resilience." },
    { name: "Advocacy", icon: <FaBalanceScale />, desc: "We champion the rights and well-being of the marginalized." },
  ];

  const missions = [
    { title: "Poverty Alleviation", desc: "Support communities with microfinance, soft loans, and vocational training.", icon: <FaHandsHelping /> },
    { title: "Improved Healthcare", desc: "Provide free medical outreaches, medical supplies, and support healthcare workers.", icon: <FaHeartbeat /> },
    { title: "Disability Inclusion", desc: "Promote inclusion with equipment, medical, and financial support.", icon: <FaWheelchair /> },
    { title: "Access to Quality Education", desc: "Offer scholarships, renovate schools, and provide materials to underprivileged children.", icon: <FaSchool /> },
    { title: "Agricultural Development", desc: "Empower farmers with modern tools, training, and quality seeds.", icon: <FaSeedling /> },
    { title: "Youth Empowerment", desc: "Equip young individuals with leadership and entrepreneurship skills.", icon: <FaUserFriends /> },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('./hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-200">
            Empowering Lives, Inspiring Hope
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Oyekan Foundation is dedicated to helping the needy, marginalized, and physically challenged individuals across Nigeria and Africa.
          </p>
          <Link
            href="/donate"
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-8 py-3 rounded-full"
          >
            Donate Now
          </Link>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-700 mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Oyekan Foundation is a not-for-profit organization positively impacting lives of the marginalized and physically challenged in Nigeria and Africa. Guided by compassion, integrity, equality, collaboration, and faith in God.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 md:px-10 bg-green-50">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-green-700 text-3xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">{value.name}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION CARDS */}
      <section className="py-20 px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Our Missions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {missions.map((mission, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-green-700 text-3xl mb-4">{mission.icon}</div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">{mission.title}</h3>
              <p className="text-gray-700 leading-relaxed">{mission.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT / STATISTICS */}
      <section className="bg-green-50 py-20 px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-5xl font-bold text-green-700 mb-2">500+</h3>
            <p className="text-gray-700">Lives Empowered</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-700 mb-2">50</h3>
            <p className="text-gray-700">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-700 mb-2">10</h3>
            <p className="text-gray-700">Years of Service</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Stories of Change</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-700 mb-4">
              "OYEKAN Foundation helped me get a small business loan to start selling goods. Now I support my family."
            </p>
            <p className="font-semibold text-green-700">– Mary, Lagos</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-700 mb-4">
              "Thanks to their scholarship program, I could attend school and pursue my dreams."
            </p>
            <p className="font-semibold text-green-700">– Chinedu, Abuja</p>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-green-600 text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Together, we can bring hope and transformation to lives across Africa. Support Oyekan Foundation’s mission today.
        </p>
        <Link
          href="/donate"
          className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition"
        >
          Get Involved
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white text-center py-8 px-6">
        <p className="text-sm">© {new Date().getFullYear()} Oyekan Foundation. All rights reserved.</p>
        <p className="text-xs mt-2">Guided by compassion, equality, and faith in God.</p>
      </footer>
    </main>
  );
}
