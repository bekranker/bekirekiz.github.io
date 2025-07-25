import { ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Sol: Görsel */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/aboutmepp.jpeg" // 👉 buraya kendi görselinin yolunu yaz
            alt="About me"
            className="rounded-2xl shadow-xl max-h-[500px] object-cover"
          />
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

          {/* Resume butonu */}
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
