"use client";
import { Button } from "./ui/button";
import { Gamepad2, Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="#" className="mr-6 flex items-center space-x-2">
            <Gamepad2 className="h-6 w-6 text-purple-400" />
            <span className="font-bold text-white">GameDev</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
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
        <div className="ml-auto flex items-center space-x-4">
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
      </div>
    </header>
  );
}
