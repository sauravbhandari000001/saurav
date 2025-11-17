import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The best shop{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                private cheats and more!
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              This catalog of cheats has an endless number of unique possibilities!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gaming" size="lg" asChild>
                <Link to="/products">OUR PRODUCTS</Link>
              </Button>
              <Button
                variant="gamingSecondary"
                size="lg"
                onClick={() => window.open("https://discord.gg/zaliantud", "_blank")}
              >
                SUPPORT
              </Button>
            </div>
          </div>

          {/* Right side - Product showcase */}
          <div className="space-y-4">
            <div className="grid gap-3">
              <ProductCard 
                name="Zaliant Permanent HWID Spoofer" 
                description="Permanent hardware ID spoofing" 
                price="14.99" 
                letter="Z"
                color="from-blue-500 to-blue-600"
                link="/product/permanent-hwid-spoofer"
              />
              <ProductCard 
                name="Zaliant Valorant Private" 
                description="Private build 0% ban chance" 
                price="14.99" 
                letter="Z"
                color="from-emerald-500 to-emerald-600"
                link="/product/valorant-private"
              />
              <ProductCard 
                name="Zaliant Valorant Pro" 
                description="Included vanguard bypass low ban chance" 
                price="14.99" 
                letter="Z"
                color="from-purple-500 to-purple-600"
                link="/product/valorant-pro"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  letter: string;
  color: string;
  link: string;
}

const ProductCard = ({ name, description, price, letter, color, link }: ProductCardProps) => {
  return (
    <Link to={link} className="block">
      <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg`}>
              {letter}
            </div>
            <div>
              <div className="font-semibold text-foreground">{name}</div>
              <div className="text-sm text-muted-foreground">{description}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Starting from</div>
            <div className="text-lg font-bold text-primary">{price} $</div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
