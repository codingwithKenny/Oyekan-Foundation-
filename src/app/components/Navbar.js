"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.jpeg"
              alt="Oyekan Foundation Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-700 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-700 focus:outline-none text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg flex flex-col items-center gap-4 py-4 text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-green-700 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
