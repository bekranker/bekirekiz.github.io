import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function GameCard({
  title,
  image,
  description,
  tags,
  link,
}: GameCardProps) {
  return (
    <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-white mb-2">{title}</CardTitle>
        <CardDescription className="text-purple-200 mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-purple-600/20 text-purple-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button
            asChild
            size="sm"
            className="bg-purple-600 hover:bg-purple-700"
          >
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Play Now
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
