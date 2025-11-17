import { Card } from "@/components/ui/card";
import gameScreenshot1 from "@/assets/valorant.jpg";
import gameScreenshot2 from "@/assets/spoofer.png";
import { Link } from "react-router-dom";

export const PopularGamesSection = () => {
  const games = [
    {
      title: "VALORANT",
      image: gameScreenshot1,
      category: "Starting from $14.99",
      players: "1000+",
      link: "/valorant",
    },
    {
      title: "HWID SPOOFER",
      image: gameScreenshot2,
      category: "Starting from $14.99",
      players: "1200+",
      link: "/spoofer",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular games</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most popular games in our catalog with premium cheats
            and tools
          </p>
        </div>

        {/* Centered game cards under heading */}
        <div className="flex justify-center flex-wrap gap-6">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GameCardProps {
  title: string;
  image: string;
  category: string;
  players: string;
  link: string;
}

const GameCard = ({ title, image, category, players, link }: GameCardProps) => {
  return (
    <Link to={link} className="block">
      <Card className="group w-64 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-sm text-white/80">{category}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/80">
                  {title === "VALORANT" || title === "HWID SPOOFER"
                    ? "Users"
                    : "Players"}
                </div>
                <div className="font-semibold text-primary">{players}</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
