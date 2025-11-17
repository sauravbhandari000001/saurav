import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import hwidSpooferImage from "@/assets/permspooferbox.png";

export default function SpooferPage() {
  const products = [
    {
      id: "permanent-hwid-spoofer",
      title: "Zaliant Permanent HWID Spoofer",
      description: "Permanent hardware ID spoofing solution",
      image: hwidSpooferImage,
      category: "Starting from $14.99"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Zaliant Hardware Spoofer Products
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional hardware ID spoofing tools for ultimate protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, description, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white">
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-sm text-white/80">{description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};