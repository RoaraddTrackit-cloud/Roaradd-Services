import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, CloudRain, Leaf, MapPin, Package, Smartphone, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: BarChart3, title: "Yield Tracking", desc: "Log, compare, and forecast crop yields across fields and seasons. Understand what's working and what isn't.", color: "text-green-400" },
  { icon: MapPin, title: "Field Mapping", desc: "Interactive field maps with zone tracking. Assign tasks, log activity, and view status across all your land.", color: "text-yellow-400" },
  { icon: CloudRain, title: "Weather Integration", desc: "Automatically pull in local weather data and correlate it with your yield history to predict optimal planting windows.", color: "text-blue-400" },
  { icon: Package, title: "Inventory & Resources", desc: "Track seeds, fertilizers, fuel, and equipment. Know what you have, what you've used, and when to reorder.", color: "text-orange-400" },
  { icon: Tractor, title: "Equipment Logs", desc: "Log maintenance, track hours, and schedule services for every piece of equipment on the farm.", color: "text-red-400" },
  { icon: Smartphone, title: "Mobile-First", desc: "Use Farm from anywhere in the field. Built for slow internet connections and designed for outdoor use.", color: "text-primary" },
];

export default function Farm() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-green-500/10 blur-[140px] rounded-full pointer-events-none" />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/30 to-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20">Product</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Farm smarter. <span className="text-green-400">Grow better.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Farm is the modern farm management platform — built for operators who want data-driven decisions, not guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 group">
                  Get Started Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">See How It Works</Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Free for small farms. No credit card needed.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="glass-panel rounded-3xl p-6 border border-green-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Season Overview — 2024</span>
                </div>
                <div className="space-y-3">
                  {[
                    { field: "North Field", crop: "Corn", status: "Harvested", yield: "210 bu/ac", color: "bg-green-500/20 text-green-400" },
                    { field: "South Field", crop: "Soybeans", status: "Growing", yield: "Est. 58 bu/ac", color: "bg-yellow-500/20 text-yellow-400" },
                    { field: "East Paddock", crop: "Wheat", status: "Planted", yield: "Pending", color: "bg-blue-500/20 text-blue-400" },
                    { field: "Greenhouse A", crop: "Tomatoes", status: "Harvesting", yield: "3.2 T", color: "bg-green-500/20 text-green-400" },
                  ].map((row) => (
                    <div key={row.field} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <div>
                        <p className="text-sm font-medium text-white">{row.field}</p>
                        <p className="text-xs text-muted-foreground">{row.crop}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{row.yield}</span>
                        <Badge className={`text-xs ${row.color} border-0`}>{row.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything on the farm. In one place.</h2>
              <p className="text-muted-foreground text-lg">From field mapping to equipment logs — Farm handles it all.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Card className="glass-panel h-full">
                    <CardHeader>
                      <f.icon className={`w-8 h-8 ${f.color} mb-2`} />
                      <CardTitle className="text-lg">{f.title}</CardTitle>
                      <CardDescription>{f.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + CROSS-LINK */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to modernize your farm?</h2>
            <p className="text-muted-foreground mb-10">Join thousands of farm operators already using Farm to grow smarter.</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2">
              Start for Free <ArrowRight className="w-4 h-4" />
            </Button>
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-muted-foreground mb-4">Need custom Farm integration for your operation?</p>
              <Button variant="outline" asChild>
                <Link href="/services/it-consulting">Talk to our IT Consulting team <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
