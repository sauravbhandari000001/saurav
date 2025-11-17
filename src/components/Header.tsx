
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Shield, Star, HelpCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/753fa75c-6bee-4238-9f39-efe68886fe90.png" 
            alt="Zaliant Services" 
            className="h-10 w-auto"
          />
          <div className="text-xl font-bold gradient-animated bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Zaliant Services
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary font-medium hover:text-primary/80 transition-colors">
            Main
          </Link>
          <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
            Our Products
          </Link>
          <Link to="/statuses" className="text-muted-foreground hover:text-primary transition-colors">
            Statuses
          </Link>
          <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="secondary" 
            size="sm" 
            className="hidden md:flex glow-purple hover:glow-purple-strong transition-all duration-300"
            onClick={() => window.open('https://myvouch.es/zaliantservices', '_blank')}
          >
            <Star className="w-4 h-4 mr-2" />
            Reviews
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-primary font-medium hover:text-primary/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Main
            </Link>
            <Link 
              to="/products" 
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Products
            </Link>
            <Link 
              to="/statuses" 
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Statuses
            </Link>
            <Link 
              to="/faq" 
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-fit glow-purple"
              onClick={() => {
                window.open('https://myvouch.es/zaliantservices', '_blank');
                setIsMenuOpen(false);
              }}
            >
              <Star className="w-4 h-4 mr-2" />
              Reviews
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
