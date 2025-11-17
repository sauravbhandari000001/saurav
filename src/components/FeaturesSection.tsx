import { Card } from "@/components/ui/card";
import { Shield, Zap, Users, Lock, Crown, Headphones } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Undetected",
      description: "Advanced anti-detection technology keeps your account safe",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for maximum FPS and minimal system impact",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Expert support team available around the clock",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "Safe and anonymous payment methods supported",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Crown,
      title: "Premium Quality",
      description: "Top-tier cheats developed by professional teams",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Headphones,
      title: "Regular Updates",
      description: "Constant updates to stay ahead of game patches",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Zaliant Services?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide the most reliable and secure gaming tools with unmatched quality and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] text-center">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};