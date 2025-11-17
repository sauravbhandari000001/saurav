import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import valorantPrivateImage from "@/assets/valprivatebox.png";
import valorantProImage from "@/assets/valprobox.png";
import hwidSpooferImage from "@/assets/permspooferbox.png";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Checkout popup states
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [coupon, setCoupon] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!selectedProductId || !selectedVariantId) return;

    try {
      const returnUrl = window.location.origin + '/checkout-success';

      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          coupon_code: coupon || undefined,
          currency: "eur",
          product_id: selectedProductId,
          variant_id: selectedVariantId,
          quantity: 1,
          returnUrl
        }),
      });

      const data = await response.json();

      if (data?.checkout_url) {
        window.location.href = data.checkout_url;
        return;
      }

      const candidates = data?.redirectCandidates || [];
      if (candidates.length > 0) {
        window.location.href = candidates[0];
        return;
      }

      if (data?.session?.id) {
        window.location.href = `https://zaliantservices.sellhub.cx/checkout/${data.session.id}`;
        return;
      }

      alert("Checkout failed: couldn't obtain redirect URL. Check server logs.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong creating the checkout session. See console.");
    }
  };

  const productData: Record<string, any> = {
    "valorant-private": {
      product_id: "6215c574-5ff5-495e-9f9f-f1122b11bb3b",
      title: "Valorant Private",
      description: "Private build 0% ban chance",
      image: valorantPrivateImage,
      category: "VALORANT",
      features: {
        "Main Features": ["Enable Aimbot","Recoil Control System","Smooth","Visible Check","Draw FOV","Aim Position","RCS Speed","FOV Shape","Trigger Bot","Trigger Bot Delay","2D Box","Corner Box","Head","Skeleton","Healthbar","Distance","Snapline","Unlock All"],
        "Misc Features": ["Change menu color","VSync","Visible Check","Stream Proof","Deatmatch Mode"],
      },
      plans: [
        { duration: "1 Week", price: "$14.99", variant_id: "0cb95b78-8080-41e5-aacd-6daab2b59c80" },
        { duration: "1 Month", price: "$39.99", variant_id: "e280a6b0-b720-4107-a651-7e32bd617dd5" },
        { duration: "Lifetime", price: "$99.99", variant_id: "4c8c7b3c-51b1-4bf0-bd0d-c0883594f1f8" },
      ],
      showcaseUrl: "https://www.youtube.com/watch?v=-JnZUz6eGvA",
    },
    "valorant-pro": {
      product_id: "9dcbac2e-4e41-47c7-bd91-805abe6bcd0d",
      title: "Valorant Pro",
      description: "Included vanguard bypass low ban chance",
      image: valorantProImage,
      category: "VALORANT",
      features: {
        Aimbot: ["Enable Aimbot","Silent Aim [Hold]","Visible Check","Recoil Control","Draw FOV","FOV Value adjustment","Smooth aiming controls","Bone selection (Head, Neck, Chest)","FOV Color customization","Customizable keybinds"],
        Visuals: ["2D Box ESP","3D Box ESP","Corner Box","Vis Check [ESP]","Skeleton display","Head ESP","Agent Icon","Health Bar","Snapline","Weapon Info","Material customization for hands and weapons","SpikeInfo","Wireframe on Enemy/Hand/Gun","Material options for hands and weapons"],
        Chams: ["Chams ESP","Visible Chams","Rainbow Chams [Only Enemy]","Rainbow Chams [All Entity]","Intensity adjustment","RGB color customization"],
        Exploits: ["No Spread","Skip Tutorial","Unlock ALL","Bunny Hop","Big Gun customization","Big Gun 3D perspective","Big Gun Wireframe","3D FOV Changer with value adjustment","ThirdPerson mode with distance control","Spin Bot with speed adjustment"],
      },
      plans: [
        { duration: "3 Days", price: "$14.99", variant_id: "d6bdacfa-a847-4a8a-978c-0e50e3044331" },
        { duration: "1 Week", price: "$34.99", variant_id: "700de951-ade9-4d16-be21-a7b3a677cd65" },
        { duration: "1 Month", price: "$74.99", variant_id: "36eeaae7-c6c9-47ef-a1ce-4697ee670a57" },
        { duration: "Lifetime", price: "$149.99", variant_id: "c79944ff-9208-4f2b-8b2b-f90114a2bc02" },
      ],
      showcaseUrl: "https://www.youtube.com/watch?v=TyOF-ucfCNQ",
    },
    "permanent-hwid-spoofer": {
      product_id: "65c8784d-3bde-4040-a2e9-4a75233ca9fd",
      title: "Permanent HWID Spoofer",
      description: "Permanent hardware ID spoofing solution",
      image: hwidSpooferImage,
      category: "SPOOFER",
      features: ["Permanent HWID spoofing","Works with Windows 10-11","Works with Intel-Amd","Works with all anti-cheats","Works with all motherboards (both locked & unlocked)","Included TPM Bypass for Valorant","Supports all major games","Easy one-click operation","No traces left behind","Lifetime updates"],
      plans: [
        { duration: "Onetime", price: "$14.99", variant_id: "d4bf4962-d633-4ebf-ba63-da3750a5c577" },
        { duration: "Lifetime", price: "$39.99", variant_id: "e117729e-19dc-43df-bc83-15857e73d69e" },
      ],
      showcaseUrl: "https://www.youtube.com/watch?v=1kzXq6g-nbk",
    },
  };

  const product = productData[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
            <Button asChild className="mt-6"><Link to="/products">View All Products</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side */}
            <div>
              <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-lg mb-6 cursor-pointer hover:opacity-90 transition-opacity">
                    <img src={product.image} alt={product.title} className="w-full aspect-video object-cover" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                  <img src={product.image} alt={product.title} className="w-full h-auto rounded-lg" />
                </DialogContent>
              </Dialog>

              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{product.description}</p>

              <div className="mb-6">
                <Button variant="gamingSecondary" className="w-full" onClick={() => window.open(product.showcaseUrl, "_blank")}>
                  <Play className="w-4 h-4 mr-2" />
                  Watch Showcase
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Features:</h3>
                  {typeof product.features === "object" && !Array.isArray(product.features) ? (
                    <div className="space-y-6">
                      {Object.entries(product.features).map(([category, features]) => (
                        <div key={category} className="space-y-3">
                          <h4 className="text-lg font-medium text-primary">{category}:</h4>
                          <ul className="space-y-2">
                            {(features as string[]).map((feature, index) => (
                              <li key={index} className="flex items-center text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Right side - plans */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
              <div className="space-y-4">
                {product.plans.map((plan: any, index: number) => (
                  <Card key={index} className={`p-6 relative ${plan.popular ? "border-primary bg-primary/5" : "bg-card/50"}`}>
                    {plan.popular && <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">Most Popular</Badge>}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{plan.duration}</h3>
                        <p className="text-muted-foreground text-sm">Full access</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{plan.price}</div>
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "gaming" : "outline"}
                      onClick={() => {
                        setSelectedProductId(product.product_id);
                        setSelectedVariantId(plan.variant_id);
                        setIsCheckoutDialogOpen(true);
                      }}
                    >
                      Purchase {plan.duration}
                    </Button>
                  </Card>
                ))}
              </div>

              {/* Checkout popup */}
              <Dialog open={isCheckoutDialogOpen} onOpenChange={setIsCheckoutDialogOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Enter Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Email</Label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                    </div>
                    <div>
                      <Label>Coupon Code (optional)</Label>
                      <Input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter coupon code" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleCheckout}>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Important Notice</h4>
                <p className="text-sm text-muted-foreground">
                  Please use our products responsibly. We are not responsible for any bans or consequences that may result from using our software. Use at your own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
