import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import valorantPrivateImage from "@/assets/valprivatebox.png";
import valorantProImage from "@/assets/valprobox.png";
import hwidSpooferImage from "@/assets/permspooferbox.png";

export default function AllProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allProducts = [
    {
      id: "valorant-private",
      title: "Zaliant Valorant Private",
      description: "Private build 0% ban chance",
      image: valorantPrivateImage,
      category: "VALORANT",
      price: "$14.99"
    },
    {
      id: "valorant-pro",
      title: "Zaliant Valorant Pro", 
      description: "Included vanguard bypass low ban chance",
      image: valorantProImage,
      category: "VALORANT",
      price: "$14.99"
    },
    {
      id: "permanent-hwid-spoofer",
      title: "Zaliant Permanent HWID Spoofer",
      description: "Permanent hardware ID spoofing solution",
      image: hwidSpooferImage,
      category: "SPOOFER",
      price: "$14.99"
    }
  ];

  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Browse our complete catalog of premium cheats and tools
            </p>

            {/* Search Box */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your search.</p>
            </div>
          )}
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
  price: string;
}

const ProductCard = ({ id, title, description, image, category, price }: ProductCardProps) => {
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
            <div className="flex items-end justify-between text-white">
              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-sm text-white/80">{description}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{price}</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};