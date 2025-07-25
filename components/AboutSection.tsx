"use client";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/aboutmepp.jpeg",
  "/aboutmepp3.jpeg",
  "/aboutmepp4.jpeg",
  "/aboutmepp5.jpg",
  "/aboutmepp6.JPG",
];

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Sol: Galeri */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={images[currentImageIndex]}
            alt="About me gallery"
            className="rounded-2xl shadow-xl w-full h-[500px] object-cover transition-opacity duration-500"
          />

          {/* Dots */}
          <div className="flex mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-purple-600 w-4 h-4"
                    : "bg-purple-300 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sağ: Yazı */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">About Me</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mb-6">
            I'm an indie game developer with 3+ years of experience building web
            and mobile games using Unity game engine. I've participated in many
            game jams, created startups, and enjoy turning creative ideas into
            playable experiences.
          </p>

          {/* Resume Butonu */}
          <a
            href="https://www.canva.com/design/DAGuNjqj-kg/KKHuDImyZX2UTkjI-q5tug/view?utm_content=DAGuNjqj-kg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65b96da10b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
