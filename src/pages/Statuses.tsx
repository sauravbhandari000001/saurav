import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Statuses() {
  const statusTypes = [
    { name: "More stable", color: "bg-green-500", description: "Highly recommended" },
    { name: "Working", color: "bg-blue-500", description: "Currently functional" },
    { name: "Use At Own Risk", color: "bg-yellow-500", description: "Caution advised" },
    { name: "Updating", color: "bg-orange-500", description: "Currently being updated" }
  ];

  const products = [
    {
      game: "VALORANT",
      cheats: [
        {
          name: "Zaliant Valorant Private",
          status: "More stable",
          statusColor: "bg-green-500",
          lastUpdate: "2025-08-20"
        },
        {
          name: "Zaliant Valorant Pro",
          status: "More stable", 
          statusColor: "bg-green-500",
          lastUpdate: "2025-08-22"
        }
      ]
    },
    {
      game: "HWID SPOOFER",
      cheats: [
        {
          name: "Permanent HWID Spoofer",
          status: "More stable",
          statusColor: "bg-green-500", 
          lastUpdate: "2025-08-19"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Product Statuses
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The statuses of our products posted on our website. The information is current at the time. We follow all changes, improvements and software updates. This page was created to inform users about the status of our products.
            </p>
            <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm">
                A recommendation for use does not give a 100% guarantee that you will not be banned. The product status can be updated at any time.
              </p>
            </div>
          </div>

          {/* Status Legend */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Status Legend</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {statusTypes.map((status, index) => (
                <Card key={index} className="p-4 text-center bg-card/50 backdrop-blur-sm">
                  <div className={`w-4 h-4 ${status.color} rounded-full mx-auto mb-2`}></div>
                  <h3 className="font-semibold text-sm mb-1">{status.name}</h3>
                  <p className="text-xs text-muted-foreground">{status.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Products Status */}
          <div className="space-y-8">
            {products.map((gameCategory, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6 text-primary">{gameCategory.game}</h2>
                <div className="grid gap-4">
                  {gameCategory.cheats.map((cheat, cheatIndex) => (
                    <Card key={cheatIndex} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 ${cheat.statusColor} rounded-full`}></div>
                          <div>
                            <h3 className="text-lg font-semibold">{cheat.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Last updated: {new Date(cheat.lastUpdate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`${
                            cheat.status === 'More stable' ? 'border-green-500 text-green-500' :
                            cheat.status === 'Working' ? 'border-blue-500 text-blue-500' :
                            cheat.status === 'Use At Own Risk' ? 'border-yellow-500 text-yellow-500' :
                            'border-orange-500 text-orange-500'
                          }`}
                        >
                          {cheat.status}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Join our Discord server to receive real-time updates about product statuses, new releases, and important announcements.
              </p>
              <a 
                href="https://discord.gg/zaliantud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}