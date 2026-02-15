"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">JD</span>
            </div>
            <span className="font-bold text-xl text-white tracking-wide">
              John <span className="text-orange-500">Doe</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-white hover:text-orange-400 transition font-medium">Home</Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-orange-400 transition">Portfolio</Link>
            <Link href="#services" className="text-gray-300 hover:text-orange-400 transition">Services</Link>
            <Link href="#about" className="text-gray-300 hover:text-orange-400 transition">About</Link>
            <Link href="#blog" className="text-gray-300 hover:text-orange-400 transition">Blog</Link>
            <Link href="#contact" className="text-gray-300 hover:text-orange-400 transition">Contact</Link>

            <button className="px-6 py-2.5 bg-orange-500 text-black rounded-full font-bold hover:bg-orange-600 hover:scale-105 transition-all duration-300">
              Hire Me
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 z-10 right-0 h-full w-64 bg-black border-l border-orange-500/30 transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex  flex-col mt-20 px-6 space-y-6">
          <Link href="#home" className="text-white hover:text-orange-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#portfolio" className="text-gray-300 hover:text-orange-400" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="#services" className="text-gray-300 hover:text-orange-400" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#about" className="text-gray-300 hover:text-orange-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#blog" className="text-gray-300 hover:text-orange-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="#contact" className="text-gray-300 hover:text-orange-400" onClick={() => setIsOpen(false)}>Contact</Link>

          <button className="mt-4 px-6 py-2.5 bg-orange-500 text-black rounded-full font-bold hover:bg-orange-600 transition-all duration-300">
            Hire Me
          </button>
        </div>
      </div>
    </>
  )
}
