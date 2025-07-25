import { Button } from "./ui/button";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/pp3.png"
            alt="Profile"
            width={150}
            height={150}
            className="mx-auto rounded-full border-4 border-purple-500"
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">
          Bekir Ekiz <span className="text-purple-400">GameDev</span>
        </h1>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Unity & C# developer with 3+ years of experience creating engaging,
          user-focused games. Passionate about blending game tech and AI to
          design innovative, inspiring player experiences.
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 text-base sm:px-4 sm:py-1 sm:text-sm"
            asChild
          >
            <a
              href="https://bekranker.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View My Games
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent px-6 py-2 text-base sm:px-4 sm:py-1 sm:text-sm"
          >
            <a href="mailto:bekirekiz02@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
