import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Trophy,
  Gamepad2,
  Code,
  Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GameDevPortfolioMain from "@/components/GameDevPortfolioMain";
export default function GameDevPortfolio() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    //   {/* Header */}
    //   <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
    //     <div className="container flex h-16 items-center">
    //       <div className="mr-4 flex">
    //         <Link href="#" className="mr-6 flex items-center space-x-2">
    //           <Gamepad2 className="h-6 w-6 text-purple-400" />
    //           <span className="font-bold text-white">GameDev</span>
    //         </Link>
    //       </div>
    //       <nav className="flex items-center space-x-6 text-sm font-medium">
    //         <Link
    //           href="#games"
    //           className="text-purple-200 hover:text-purple-400 transition-colors"
    //         >
    //           Games
    //         </Link>
    //         <Link
    //           href="#game-jams"
    //           className="text-purple-200 hover:text-purple-400 transition-colors"
    //         >
    //           Game Jams
    //         </Link>
    //         <Link
    //           href="#about"
    //           className="text-purple-200 hover:text-purple-400 transition-colors"
    //         >
    //           About Me
    //         </Link>
    //         <Link
    //           href="#contact"
    //           className="text-purple-200 hover:text-purple-400 transition-colors"
    //         >
    //           Contact
    //         </Link>
    //       </nav>
    //       <div className="ml-auto flex items-center space-x-4">
    //         <Button
    //           variant="outline"
    //           size="sm"
    //           className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
    //         >
    //           <Github className="h-4 w-4 mr-2" />
    //           GitHub
    //         </Button>
    //       </div>
    //     </div>
    //   </header>

    //   {/* Hero Section */}
    //   <section className="relative py-20 px-4">
    //     <div className="container mx-auto text-center">
    //       <div className="mb-8">
    //         <Image
    //           src="/placeholder.svg?height=150&width=150"
    //           alt="Profile"
    //           width={150}
    //           height={150}
    //           className="mx-auto rounded-full border-4 border-purple-500"
    //         />
    //       </div>
    //       <h1 className="text-5xl font-bold text-white mb-4">
    //         Alex <span className="text-purple-400">GameDev</span>
    //       </h1>
    //       <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
    //         Indie Game Developer & Designer crafting immersive experiences with
    //         passion for storytelling and innovative gameplay mechanics.
    //       </p>
    //       <div className="flex justify-center space-x-4">
    //         <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
    //           <ExternalLink className="h-4 w-4 mr-2" />
    //           View My Games
    //         </Button>
    //         <Button
    //           variant="outline"
    //           size="lg"
    //           className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
    //         >
    //           <Mail className="h-4 w-4 mr-2" />
    //           Get In Touch
    //         </Button>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Games Section */}
    //   <section id="games" className="py-20 px-4">
    //     <div className="container mx-auto">
    //       <h2 className="text-4xl font-bold text-white text-center mb-12">
    //         Featured <span className="text-purple-400">Games</span>
    //       </h2>
    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    //           <CardHeader className="p-0">
    //             <Image
    //               src="/placeholder.svg?height=200&width=400"
    //               alt="Mystic Quest"
    //               width={400}
    //               height={200}
    //               className="w-full h-48 object-cover rounded-t-lg"
    //             />
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <CardTitle className="text-white mb-2">Mystic Quest</CardTitle>
    //             <CardDescription className="text-purple-200 mb-4">
    //               A fantasy adventure RPG with stunning visuals and deep
    //               storytelling. Explore magical realms and uncover ancient
    //               mysteries.
    //             </CardDescription>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Unity
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 C#
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 RPG
    //               </Badge>
    //             </div>
    //             <div className="flex space-x-2">
    //               <Button
    //                 size="sm"
    //                 className="bg-purple-600 hover:bg-purple-700"
    //               >
    //                 <ExternalLink className="h-4 w-4 mr-2" />
    //                 Play Now
    //               </Button>
    //               <Button
    //                 variant="outline"
    //                 size="sm"
    //                 className="border-purple-500 text-purple-400 bg-transparent"
    //               >
    //                 <Github className="h-4 w-4 mr-2" />
    //                 Source
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    //           <CardHeader className="p-0">
    //             <Image
    //               src="/placeholder.svg?height=200&width=400"
    //               alt="Cosmic Defender"
    //               width={400}
    //               height={200}
    //               className="w-full h-48 object-cover rounded-t-lg"
    //             />
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <CardTitle className="text-white mb-2">
    //               Cosmic Defender
    //             </CardTitle>
    //             <CardDescription className="text-purple-200 mb-4">
    //               Fast-paced space shooter with procedurally generated levels
    //               and intense boss battles. Defend the galaxy!
    //             </CardDescription>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Godot
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 GDScript
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Shooter
    //               </Badge>
    //             </div>
    //             <div className="flex space-x-2">
    //               <Button
    //                 size="sm"
    //                 className="bg-purple-600 hover:bg-purple-700"
    //               >
    //                 <ExternalLink className="h-4 w-4 mr-2" />
    //                 Play Now
    //               </Button>
    //               <Button
    //                 variant="outline"
    //                 size="sm"
    //                 className="border-purple-500 text-purple-400 bg-transparent"
    //               >
    //                 <Github className="h-4 w-4 mr-2" />
    //                 Source
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    //           <CardHeader className="p-0">
    //             <Image
    //               src="/placeholder.svg?height=200&width=400"
    //               alt="Mind Bender"
    //               width={400}
    //               height={200}
    //               className="w-full h-48 object-cover rounded-t-lg"
    //             />
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <CardTitle className="text-white mb-2">Mind Bender</CardTitle>
    //             <CardDescription className="text-purple-200 mb-4">
    //               A mind-bending puzzle platformer that challenges your
    //               perception of reality with unique mechanics.
    //             </CardDescription>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Unity
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 C#
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Puzzle
    //               </Badge>
    //             </div>
    //             <div className="flex space-x-2">
    //               <Button
    //                 size="sm"
    //                 className="bg-purple-600 hover:bg-purple-700"
    //               >
    //                 <ExternalLink className="h-4 w-4 mr-2" />
    //                 Play Now
    //               </Button>
    //               <Button
    //                 variant="outline"
    //                 size="sm"
    //                 className="border-purple-500 text-purple-400 bg-transparent"
    //               >
    //                 <Github className="h-4 w-4 mr-2" />
    //                 Source
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Game Jams Section */}
    //   <section id="game-jams" className="py-20 px-4 bg-slate-800/30">
    //     <div className="container mx-auto">
    //       <h2 className="text-4xl font-bold text-white text-center mb-12">
    //         Game <span className="text-purple-400">Jams</span>
    //       </h2>
    //       <div className="grid md:grid-cols-2 gap-8">
    //         <Card className="bg-slate-800/50 border-purple-500/20">
    //           <CardContent className="p-6">
    //             <div className="flex items-center mb-4">
    //               <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
    //               <CardTitle className="text-white">
    //                 Ludum Dare 52 - 1st Place
    //               </CardTitle>
    //             </div>
    //             <CardDescription className="text-purple-200 mb-4">
    //               "Harvest Moon" - A farming simulation game created in 48
    //               hours. Won first place in the innovation category.
    //             </CardDescription>
    //             <div className="flex items-center text-sm text-purple-300 mb-4">
    //               <Calendar className="h-4 w-4 mr-2" />
    //               January 2024
    //             </div>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-yellow-600/20 text-yellow-300"
    //               >
    //                 48 Hours
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Unity
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Simulation
    //               </Badge>
    //             </div>
    //             <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
    //               <ExternalLink className="h-4 w-4 mr-2" />
    //               View Entry
    //             </Button>
    //           </CardContent>
    //         </Card>

    //         <Card className="bg-slate-800/50 border-purple-500/20">
    //           <CardContent className="p-6">
    //             <div className="flex items-center mb-4">
    //               <Trophy className="h-6 w-6 text-silver-400 mr-2" />
    //               <CardTitle className="text-white">
    //                 Global Game Jam 2024
    //               </CardTitle>
    //             </div>
    //             <CardDescription className="text-purple-200 mb-4">
    //               "Laugh Track" - A comedy-themed party game that brings people
    //               together through humor and silly challenges.
    //             </CardDescription>
    //             <div className="flex items-center text-sm text-purple-300 mb-4">
    //               <Calendar className="h-4 w-4 mr-2" />
    //               February 2024
    //             </div>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-green-600/20 text-green-300"
    //               >
    //                 Team of 4
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Godot
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Party Game
    //               </Badge>
    //             </div>
    //             <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
    //               <ExternalLink className="h-4 w-4 mr-2" />
    //               View Entry
    //             </Button>
    //           </CardContent>
    //         </Card>

    //         <Card className="bg-slate-800/50 border-purple-500/20">
    //           <CardContent className="p-6">
    //             <div className="flex items-center mb-4">
    //               <Trophy className="h-6 w-6 text-orange-400 mr-2" />
    //               <CardTitle className="text-white">
    //                 Mini Jam 145 - 3rd Place
    //               </CardTitle>
    //             </div>
    //             <CardDescription className="text-purple-200 mb-4">
    //               "Tiny Explorer" - A minimalist adventure game with a focus on
    //               exploration and discovery in a tiny world.
    //             </CardDescription>
    //             <div className="flex items-center text-sm text-purple-300 mb-4">
    //               <Calendar className="h-4 w-4 mr-2" />
    //               March 2024
    //             </div>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-orange-600/20 text-orange-300"
    //               >
    //                 72 Hours
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Unity
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Adventure
    //               </Badge>
    //             </div>
    //             <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
    //               <ExternalLink className="h-4 w-4 mr-2" />
    //               View Entry
    //             </Button>
    //           </CardContent>
    //         </Card>

    //         <Card className="bg-slate-800/50 border-purple-500/20">
    //           <CardContent className="p-6">
    //             <div className="flex items-center mb-4">
    //               <Trophy className="h-6 w-6 text-purple-400 mr-2" />
    //               <CardTitle className="text-white">
    //                 Brackeys Game Jam 2023
    //               </CardTitle>
    //             </div>
    //             <CardDescription className="text-purple-200 mb-4">
    //               "Rewind" - A time manipulation puzzle game where players must
    //               use rewind mechanics to solve challenges.
    //             </CardDescription>
    //             <div className="flex items-center text-sm text-purple-300 mb-4">
    //               <Calendar className="h-4 w-4 mr-2" />
    //               September 2023
    //             </div>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-blue-600/20 text-blue-300"
    //               >
    //                 7 Days
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Unity
    //               </Badge>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-purple-600/20 text-purple-300"
    //               >
    //                 Puzzle
    //               </Badge>
    //             </div>
    //             <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
    //               <ExternalLink className="h-4 w-4 mr-2" />
    //               View Entry
    //             </Button>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>

    //   {/* About Me Section */}
    //   <section id="about" className="py-20 px-4">
    //     <div className="container mx-auto">
    //       <h2 className="text-4xl font-bold text-white text-center mb-12">
    //         About <span className="text-purple-400">Me</span>
    //       </h2>
    //       <div className="grid lg:grid-cols-2 gap-12 items-center">
    //         <div>
    //           <Image
    //             src="/placeholder.svg?height=400&width=500"
    //             alt="Workspace"
    //             width={500}
    //             height={400}
    //             className="rounded-lg border border-purple-500/20"
    //           />
    //         </div>
    //         <div className="space-y-6">
    //           <p className="text-purple-200 text-lg leading-relaxed">
    //             Hi! I'm Alex, a passionate indie game developer with over 5
    //             years of experience creating immersive gaming experiences. I
    //             specialize in Unity and Godot, with a love for crafting unique
    //             gameplay mechanics and compelling narratives.
    //           </p>
    //           <p className="text-purple-200 text-lg leading-relaxed">
    //             My journey started with a simple love for games, which evolved
    //             into a deep fascination with the art and science of game
    //             development. I believe that games have the power to tell
    //             stories, evoke emotions, and bring people together.
    //           </p>

    //           <div className="grid md:grid-cols-3 gap-6 mt-8">
    //             <div className="text-center">
    //               <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
    //                 <Code className="h-8 w-8 text-purple-400" />
    //               </div>
    //               <h3 className="text-white font-semibold mb-2">Programming</h3>
    //               <p className="text-purple-200 text-sm">
    //                 C#, GDScript, JavaScript, Python
    //               </p>
    //             </div>
    //             <div className="text-center">
    //               <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
    //                 <Gamepad2 className="h-8 w-8 text-purple-400" />
    //               </div>
    //               <h3 className="text-white font-semibold mb-2">
    //                 Game Engines
    //               </h3>
    //               <p className="text-purple-200 text-sm">
    //                 Unity, Godot, Unreal Engine
    //               </p>
    //             </div>
    //             <div className="text-center">
    //               <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
    //                 <Palette className="h-8 w-8 text-purple-400" />
    //               </div>
    //               <h3 className="text-white font-semibold mb-2">Design</h3>
    //               <p className="text-purple-200 text-sm">
    //                 Game Design, UI/UX, 2D Art
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Contact Section */}
    //   <section id="contact" className="py-20 px-4 bg-slate-800/30">
    //     <div className="container mx-auto max-w-4xl">
    //       <h2 className="text-4xl font-bold text-white text-center mb-12">
    //         Get In <span className="text-purple-400">Touch</span>
    //       </h2>
    //       <div className="grid lg:grid-cols-2 gap-12">
    //         <div>
    //           <h3 className="text-2xl font-semibold text-white mb-6">
    //             Let's Work Together
    //           </h3>
    //           <p className="text-purple-200 mb-8">
    //             I'm always interested in new opportunities, collaborations, and
    //             exciting projects. Whether you have a game idea, need
    //             development help, or just want to chat about games, feel free to
    //             reach out!
    //           </p>

    //           <div className="space-y-4">
    //             <div className="flex items-center">
    //               <Mail className="h-5 w-5 text-purple-400 mr-3" />
    //               <span className="text-purple-200">
    //                 alex.gamedev@email.com
    //               </span>
    //             </div>
    //             <div className="flex items-center">
    //               <Github className="h-5 w-5 text-purple-400 mr-3" />
    //               <span className="text-purple-200">
    //                 github.com/alexgamedev
    //               </span>
    //             </div>
    //             <div className="flex items-center">
    //               <Linkedin className="h-5 w-5 text-purple-400 mr-3" />
    //               <span className="text-purple-200">
    //                 linkedin.com/in/alexgamedev
    //               </span>
    //             </div>
    //           </div>
    //         </div>

    //         <Card className="bg-slate-800/50 border-purple-500/20">
    //           <CardContent className="p-6">
    //             <form className="space-y-4">
    //               <div>
    //                 <label
    //                   htmlFor="name"
    //                   className="block text-sm font-medium text-purple-200 mb-2"
    //                 >
    //                   Name
    //                 </label>
    //                 <Input
    //                   id="name"
    //                   placeholder="Your name"
    //                   className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-purple-300"
    //                 />
    //               </div>
    //               <div>
    //                 <label
    //                   htmlFor="email"
    //                   className="block text-sm font-medium text-purple-200 mb-2"
    //                 >
    //                   Email
    //                 </label>
    //                 <Input
    //                   id="email"
    //                   type="email"
    //                   placeholder="your.email@example.com"
    //                   className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-purple-300"
    //                 />
    //               </div>
    //               <div>
    //                 <label
    //                   htmlFor="message"
    //                   className="block text-sm font-medium text-purple-200 mb-2"
    //                 >
    //                   Message
    //                 </label>
    //                 <Textarea
    //                   id="message"
    //                   placeholder="Tell me about your project or just say hi!"
    //                   rows={4}
    //                   className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-purple-300"
    //                 />
    //               </div>
    //               <Button
    //                 type="submit"
    //                 className="w-full bg-purple-600 hover:bg-purple-700"
    //               >
    //                 <Mail className="h-4 w-4 mr-2" />
    //                 Send Message
    //               </Button>
    //             </form>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="border-t border-purple-500/20 py-8 px-4">
    //     <div className="container mx-auto">
    //       <div className="flex flex-col md:flex-row justify-between items-center">
    //         <div className="flex items-center space-x-2 mb-4 md:mb-0">
    //           <Gamepad2 className="h-5 w-5 text-purple-400" />
    //           <span className="text-white font-semibold">Alex GameDev</span>
    //         </div>
    //         <div className="flex space-x-6">
    //           <Link
    //             href="#"
    //             className="text-purple-200 hover:text-purple-400 transition-colors"
    //           >
    //             <Github className="h-5 w-5" />
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-purple-200 hover:text-purple-400 transition-colors"
    //           >
    //             <Linkedin className="h-5 w-5" />
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-purple-200 hover:text-purple-400 transition-colors"
    //           >
    //             <Mail className="h-5 w-5" />
    //           </Link>
    //         </div>
    //       </div>
    //       <Separator className="my-4 bg-purple-500/20" />
    //       <p className="text-center text-purple-300 text-sm">
    //         © {new Date().getFullYear()} Alex GameDev. All rights reserved. Made
    //         with ❤️ and lots of coffee.
    //       </p>
    //     </div>
    //   </footer>
    // </div>
    <GameDevPortfolioMain />
  );
}
