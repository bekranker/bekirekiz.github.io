"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Gamepad2, Github, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2">
          <Gamepad2 className="h-6 w-6 text-purple-400" />
          <span className="font-bold text-white">GameDev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#games"
            className="text-purple-200 hover:text-purple-400 transition-colors"
          >
            Games
          </Link>
          <Link
            href="#gamejams"
            className="text-purple-200 hover:text-purple-400 transition-colors"
          >
            Game Jams
          </Link>
          <Link
            href="#about"
            className="text-purple-200 hover:text-purple-400 transition-colors"
          >
            About Me
          </Link>
          <Link
            href="#contact"
            className="text-purple-200 hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* GitHub Button - Desktop */}
        <div className="hidden md:flex ml-6">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
          >
            <a
              href="https://github.com/bekranker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-purple-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-slate-800 text-purple-200 px-4 py-4 space-y-4">
          <Link
            href="#games"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-purple-400"
          >
            Games
          </Link>
          <Link
            href="#gamejams"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-purple-400"
          >
            Game Jams
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-purple-400"
          >
            About Me
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-purple-400"
          >
            Contact
          </Link>
          <a
            href="https://github.com/bekranker"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-purple-400"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
