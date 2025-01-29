"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import zerodevlogo from "@/public/zerodevslogo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-6 mt-0">
        <Link href="/" className="flex items-center">
          <div className="relative">
            <Image
              src={zerodevlogo}
              alt="Zero dev logo"
              className="object-contain"
              priority
              width={200}
              height={200}
            />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">HOME</Link>
          <Link href="/projects" className="hover:text-gray-300 transition-colors">PROJECTS</Link>
          <Link href="/podcast" className="hover:text-gray-300 transition-colors">PODCAST</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">ABOUT</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">BLOGS</Link>

        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 text-black
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link 
            href="/" 
            className="w-full text-center py-2 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link 
            href="/projects" 
            className="w-full text-center py-2 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            PROJECTS
          </Link>
          <Link 
            href="/podcast" 
            className="w-full text-center py-2 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            PODCAST
          </Link>
          <Link 
            href="/about" 
            className="w-full text-center py-2 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link 
            href="/blog" 
            className="w-full text-center py-2 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            BLOGS
          </Link>          
          
        </div>
      </div>
    </nav>
  )
}