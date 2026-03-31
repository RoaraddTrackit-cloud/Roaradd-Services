import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  BarChart3,
  Cloud,
  Droplets,
  Sun,
  Zap,
  Shield,
  Globe,
  ChevronLeft,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const features = [
  { icon: BarChart3, title: "Yield Analytics", description: "Track crop performance across fields with detailed analytics and historical comparisons." },
  { icon: Cloud, title: "Weather Integration", description: "Real-time weather data integration to help you make informed farming decisions." },
  { icon: Droplets, title: "Irrigation Management", description: "Smart irrigation scheduling based on soil moisture, weather forecasts, and crop needs." },
  { icon: Sun, title: "Crop Health Monitoring", description: "AI-powered crop health detection using satellite imagery and on-ground sensor data." },
  { icon: Shield, title: "Pest & Disease Alerts", description: "Early warning system for pest outbreaks and disease detection to minimize crop loss." },
  { icon: Globe, title: "Market Price Tracker", description: "Live commodity prices and market trends to help you sell at the right time." },
];

export default function FarmPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link href="/">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-home">
                  <ChevronLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                <Leaf className="w-3.5 h-3.5" />
                Live Product
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                    Farm
                  </h1>
                  <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                    Smart agricultural management platform that empowers farmers with data-driven insights.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    From small farms to large agricultural operations, Farm brings modern technology to traditional farming. Monitor crops, manage resources, predict yields, and maximize profitability.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-500/90 hover:to-teal-500/90 shadow-xl shadow-emerald-500/25 text-black font-semibold"
                        data-testid="button-farm-demo"
                      >
                        Request Demo
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div>
                  <GlassCard className="p-6" glow>
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Farm Dashboard</p>
                        <p className="text-xs text-muted-foreground">Season Overview — 2025</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[
                        { label: "Total Fields", value: "12", unit: "hectares" },
                        { label: "Avg. Yield", value: "4.2T", unit: "per field" },
                        { label: "Water Saved", value: "34%", unit: "vs last year" },
                        { label: "Health Score", value: "92", unit: "out of 100" },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="text-xl font-bold text-emerald-400">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.unit}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[
                        { field: "North Field — Maize", health: 95 },
                        { field: "South Field — Wheat", health: 88 },
                        { field: "East Field — Rice", health: 76 },
                      ].map((item) => (
                        <div key={item.field}>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>{item.field}</span>
                            <span>{item.health}%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                              style={{ width: `${item.health}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Precision agriculture, simplified</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Advanced tools that give farmers a competitive edge in a changing climate.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 h-full hover:border-emerald-500/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <GlassCard className="p-12" glow>
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Transform your farm today</h2>
              <p className="text-muted-foreground mb-8">
                Join farmers already using Farm to grow smarter and more sustainably.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold shadow-xl shadow-emerald-500/25"
                  data-testid="button-farm-cta"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
