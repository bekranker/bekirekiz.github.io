import { JamCard } from "./JamCard";

const jams = [
  {
    title: "Magnetron",
    description: "Made for Sandwich Jam.",
    link: "https://murataydinh.itch.io/magnetron",
    image: "magethron.jpg",
  },
  {
    title: "The Greatest Show",
    description: "Made for Mağara Jam.",
    link: "https://baykutay-hakan.itch.io/the-greatest-show",
    image: "thegreatesshow.png",
  },
  {
    title: "Sneezeland",
    description: "Made for Frozen Jam.",
    link: "https://bekranker.itch.io/sneezeland",
    image: "sneezeland.jpg",
  },
  {
    title: "Destina",
    description: "Made for Shelter Jam.",
    link: "https://mubareksincap.itch.io/destina",
    image: "destina.png",
  },
  {
    title: "ColorCurve",
    description: "Made for Phone Jam.",
    link: "https://bekranker.itch.io/colorcurve",
    image: "colorcurve.jpg",
  },
  {
    title: "GameTech",
    description: "A tech-focused jam project.",
    link: "https://bekranker.itch.io/gametech",
    image: "gametech.png",
  },
  {
    title: "Sırayla Oyun Yapmaca",
    description: "Made for Making Games Together 2.",
    link: "https://bekranker.itch.io/sirayla-oyun-yapmaca",
    image: "makinggames2.png",
  },
  {
    title: "Laugh Me",
    description: "Made for GGJ 2024 (UNOG site).",
    link: "https://murataydinh.itch.io/laughme",
    image: "laughme.png",
  },
  {
    title: "Origins",
    description: "Made for Ice Breaking Jam 2.",
    link: "https://bekranker.itch.io/puzzle",
    image: "origins.png",
  },
  {
    title: "Ninjago",
    description: "Made for Jammination 5.",
    link: "https://bekranker.itch.io/ninjago",
    image: "ninjago.png",
  },
  {
    title: "Tough Roads",
    description: "Made for Making Games Together.",
    link: "https://lesodus.itch.io/tough-roads",
    image: "toughroads.png",
  },
  {
    title: "Mag Boy",
    description: "Made for GGJ 2022.",
    link: "https://sevvalbbr.itch.io/mag-boy",
    image: "magboy.png",
  },
  {
    title: "Silhouette of Darkness",
    description: "Made for Pumpkin Jam.",
    link: "https://bekranker.itch.io/silhouette-of-darkness",
    image: "silhouette.png",
  },
];

export default function GameJamsSection() {
  return (
    <section id="gamejams" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Game Jams</h2>
      <div className="grid md:grid-cols-2 gap-6 px-4 max-w-5xl mx-auto">
        {jams.map((jam, index) => (
          <JamCard key={index} {...jam} date="" />
        ))}
      </div>
    </section>
  );
}
