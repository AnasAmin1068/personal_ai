"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AI Assistant
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/ai-personal" className="hover:text-blue-600">AI Personal</Link>
          <Link href="/upgrade">
            <span className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Upgrade
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-5 text-gray-700 font-medium">
          <button onClick={toggleMenu} className="self-end mb-2">
            <X size={24} />
          </button>
          <Link href="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="hover:text-blue-600">About</Link>
          <Link href="/ai-personal" onClick={toggleMenu} className="hover:text-blue-600">AI Personal</Link>
          <Link href="/upgrade" onClick={toggleMenu}>
            <span className="inline-block text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Upgrade
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
