"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Menu, X, Home } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    // Close menu when pressing escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 backdrop-blur-lg bg-black/80">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">NEXUS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/chat" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Chat
          </Link>
          <Link href="/resources" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Resources
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            About
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/chat">
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Start Chatting
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="p-2 md:hidden relative z-50 transition-transform duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white animate-in zoom-in duration-300" />
          ) : (
            <Menu className="w-6 h-6 text-white animate-in zoom-in duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center md:hidden animate-in fade-in duration-300">
          {/* Backdrop overlay - clickable to close menu */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>

          <div
            ref={menuRef}
            className="relative z-10 flex flex-col items-center gap-8 p-8 mx-4 rounded-xl border border-gray-800 bg-gray-900/95 shadow-[0_0_15px_rgba(124,58,237,0.5)] w-[90%] max-w-md animate-in slide-in-from-top-10 duration-500"
          >
            {/* Close button at top right */}
            <button
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            {/* Logo for mobile menu */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_10px_rgba(124,58,237,0.7)]">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold tracking-tight text-white">NEXUS</span>
            </div>

            {/* Navigation links with enhanced styling */}
            <Link
              href="/"
              className="relative w-full px-6 py-3 text-lg font-bold text-white transition-all duration-300 rounded-md bg-gray-800/80 hover:bg-gray-700/80 border-l-4 border-green-500 animate-in slide-in-from-left duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10 flex items-center">
                <Home className="w-5 h-5 mr-2" /> Home
              </span>
            </Link>

            <Link
              href="/chat"
              className="relative w-full px-6 py-3 text-lg font-bold text-white transition-all duration-300 rounded-md bg-gray-800/80 hover:bg-gray-700/80 border-l-4 border-purple-600 animate-in slide-in-from-left duration-300"
              style={{ animationDelay: "100ms" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Chat</span>
            </Link>

            <Link
              href="/resources"
              className="relative w-full px-6 py-3 text-lg font-bold text-white transition-all duration-300 rounded-md bg-gray-800/80 hover:bg-gray-700/80 border-l-4 border-blue-500 animate-in slide-in-from-left duration-300"
              style={{ animationDelay: "200ms" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Resources</span>
            </Link>

            <Link
              href="/about"
              className="relative w-full px-6 py-3 text-lg font-bold text-white transition-all duration-300 rounded-md bg-gray-800/80 hover:bg-gray-700/80 border-l-4 border-cyan-500 animate-in slide-in-from-left duration-300"
              style={{ animationDelay: "300ms" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">About</span>
            </Link>

            {/* CTA Button */}
            <Link
              href="/chat"
              onClick={() => setIsMenuOpen(false)}
              className="w-full mt-4 animate-in fade-in duration-500"
              style={{ animationDelay: "400ms" }}
            >
              <Button
                size="lg"
                className="w-full text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-[0_0_10px_rgba(124,58,237,0.5)]"
              >
                Start Chatting
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

