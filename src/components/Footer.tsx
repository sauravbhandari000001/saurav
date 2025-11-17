import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with info cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Range of Products</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Range of cheats from simple wallhack and no stamina to exclusive features: god mode or teleport (and others)
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Community Access</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Regular customers get the opportunity to get into a private group and communicate with the cheating community
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Payment Flexibility</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We understand how important it is to have payment flexibility, so we offer a variety of payment options to meet your needs
            </p>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main content section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Products for Online Games</h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto text-sm">
            Our site sells cheats for online games. We try to choose only the best software from time-tested developers. We have technical support, which helps to solve your problems that arise at the time of installation of cheats. Constant discounts, promo codes for various holidays and loyal attitude of the administration to customers. We are a new site and opened a couple months ago, but in the field of cheats we are already 10 years. We are ready to pick up a cheat for your needs, contact us and ask your question. Our site is in great demand for cheats for dayz, cheats for eft, cheats for rust and other games. We always welcome new customers. Join our Telegram channel to receive timely and relevant information about the update of private cheats, as well as special discounts! We are glad to see you on our site!
          </p>
        </div>

        {/* Warning box */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-12 flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-lg">!</span>
          </div>
          <p className="text-foreground">
            Even when using any cheat in the game, you can encounter a block, so it is important to play with the utmost care!
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Footer navigation */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Zaliant Services
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <div className="space-y-2">
              <div><Link to="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Main</Link></div>
              <div><Link to="/products" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Our Products</Link></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Other</h4>
            <div className="space-y-2">
              <div><Link to="/statuses" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Statuses</Link></div>
              <div><Link to="/faq" className="text-muted-foreground hover:text-foreground text-sm transition-colors">FAQ</Link></div>
              <div><Link to="/terms-of-use" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of use</Link></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Subscribe to us</h4>
            <div className="flex space-x-3 mb-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-muted-foreground hover:text-foreground"
                onClick={() => window.open('https://www.youtube.com/@RespawnX6969', '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-muted-foreground hover:text-foreground"
                onClick={() => window.open('https://discord.gg/zaliantud', '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Payment methods and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">© 2023 ZALIANT SERVICES</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>VISA</span>
              <span>MasterCard</span>
              <span>PayPal</span>
              <span>GPay</span>
              <span>Apple Pay</span>
              <span>Bitcoin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};