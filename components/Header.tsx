"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Gamepad2, Github, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2">
          <Gamepad2 className="h-6 w-6 text-purple-400" />
          <span className="font-bold text-white">GameDev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#games"
              className="text-purple-200 hover:text-purple-400"
            >
              Games
            </Link>
            <Link
              href="#gamejams"
              className="text-purple-200 hover:text-purple-400"
            >
              Game Jams
            </Link>
            <Link
              href="#about"
              className="text-purple-200 hover:text-purple-400"
            >
              About Me
            </Link>
            <Link
              href="#contact"
              className="text-purple-200 hover:text-purple-400"
            >
              Contact
            </Link>
            <a
              href="https://www.canva.com/design/DAGuNjqj-kg/KKHuDImyZX2UTkjI-q5tug/view?utm_content=DAGuNjqj-kg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65b96da10b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400"
            >
              Resume
            </a>
          </nav>
        </div>

        {/* GitHub Butonu */}
        <div className="hidden md:flex">
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

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Dropdown */}
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
            href="https://www.canva.com/design/DAGuNjqj-kg/KKHuDImyZX2UTkjI-q5tug/view?utm_content=DAGuNjqj-kg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65b96da10b"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-purple-400"
          >
            CV
          </a>
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
