import GameCard from "./GameCard";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const games = [
  {
    title: "Basket-Ball",
    description:
      "A fantasy adventure RPG with stunning visuals and deep storytelling.",
    image: `${BASE_PATH}/basketball.png`,
    tags: ["Unity", "C#", "Physic-Based"],
    link: "https://www.crazygames.com/game/basket-ball",
  },
  {
    title: "Bounce It",
    description:
      "Fast-paced space shooter with procedural levels and intense boss fights.",
    image: `${BASE_PATH}/bounceit.png`,
    tags: ["Unity", "C#", "Game Design", "Puzzle"],
    link: "https://www.addictinggames.com/puzzle/bounce-it",
  },
  {
    title: "Ball Throw",
    description:
      "2D physics game with 55 levels using a catapult to knock down chocolate boxes.",
    image: `${BASE_PATH}/ballthrow.jpeg`,
    tags: ["Unity", "C#", "Puzzle", "Physic-Based"],
    link: "https://payidargames.itch.io/ballthrow",
  },
  {
    title: "Space Shooter",
    description:
      "2D physics game with 55 levels using a catapult to knock down chocolate boxes.",
    image: `${BASE_PATH}/spaceshooter.png`,
    tags: ["Unity", "C#", "Vampire Survivors Like", "Game Design"],
    link: "https://bekranker.itch.io/space-shooter",
  },
  {
    title: "Oops! My King",
    description:
      "A bold tactical game where strategy, luck, and courage collide through cards and coins on a chess-inspired battlefield.",
    image: `${BASE_PATH}/oopsmyking.png`,
    tags: ["Unity", "C#", "Board Game"],
    link: "https://murataydinh.itch.io/oopsmyking",
  },
  {
    title: "The Mazer",
    description:
      "Use different mechanics to increase the player's stress factor and encourage them to create a maze to solve the puzzle.",
    image: `${BASE_PATH}/themazer.png`,
    tags: ["Unity", "C#", "Puzzle"],
    link: "https://murataydinh.itch.io/themazer",
  },
];

export default function GamesSection() {
  return (
    <section id="games" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured <span className="text-purple-400">Games</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              image={game.image}
              tags={game.tags}
              link={game.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
