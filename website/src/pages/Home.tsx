import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Bot, 
  Building2, 
  Cpu, 
  Hexagon, 
  LayoutDashboard, 
  Leaf, 
  Lock, 
  Network, 
  Pill, 
  ShieldCheck, 
  Sparkles, 
  Sun, 
  Users, 
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const STATS_DATA = [
  { value: "12+", label: "Industries Served", desc: "AI Infrastructure, Pharma, AgriTech, and Enterprise IT" },
  { value: "500+", label: "Enterprise Seats", desc: "Deployments designed for secure, high-throughput scale" },
  { value: "100%", label: "Human-in-the-Loop", desc: "Deterministic safety gates built into every agent workflow" },
  { value: "4", label: "Core Products", desc: "Foundational hardware, software, and autonomous protocols" },
];

const PRODUCTS_LIST = [
  {
    href: "/photonic-cpo",
    badge: "Optics Hardware",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: Cpu,
    iconColor: "text-cyan-400",
    name: "Photonic-CPO v4",
    desc: "Silicon Photonics for AI clusters. 800G/1.6T co-packaged optical engines placing transceivers within millimeters of compute dies.",
    tags: ["85% Energy Cut", "800G/1.6T Optics", "1.8 pJ/bit", "2.5D Packaging"]
  },
  {
    href: "/trackit",
    badge: "Enterprise Platform",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    icon: LayoutDashboard,
    iconColor: "text-primary",
    name: "Trackit",
    desc: "Real-time analytics & KPI dashboards. Aggregate facility, supply chain, and operational telemetry into a unified command pane.",
    tags: ["Real-time Analytics", "Custom KPIs", "Audit Logs", "Sub-Second Ingestion"]
  },
  {
    href: "/farm",
    badge: "AgriTech Platform",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: Leaf,
    iconColor: "text-green-400",
    name: "Farm",
    desc: "Field-level farm management software. Circular hydroponics, multi-tier canopy sensing, and mycelium substrate telemetry.",
    tags: ["90% Water Savings", "Canopy Sensing", "Yield Tracking", "Root-Zone Telemetry"]
  },
  {
    href: "/pharma-trade",
    badge: "Life Sciences",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: Pill,
    iconColor: "text-emerald-400",
    name: "PharmaTrade",
    desc: "Pharmaceutical trading platform. Real-time FDA shortage tracking and biopharma supply chain arbitrage intelligence.",
    tags: ["Shortage Intelligence", "FDA Database Sync", "Institutional Arbitrage", "Verified Suppliers"]
  },
  {
    href: "/ideas/solareye",
    badge: "Fleet Intelligence",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: Sun,
    iconColor: "text-amber-400",
    name: "SolarEye",
    desc: "Road-as-a-sensor fleet intelligence. Turn commercial vehicle fleets into real-time road condition and pavement telemetry networks.",
    tags: ["Pavement Telemetry", "Fleet Sensor Kits", "Edge Vision", "Municipal Dashboards"]
  },
  {
    href: "/ideas/polehive",
    badge: "Pollinator Science",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: Hexagon,
    iconColor: "text-purple-400",
    name: "PoleHive",
    desc: "Smart beehive system. Acoustic analysis and internal climate sensing to monitor colony health and pollination viability.",
    tags: ["Acoustic Biomarkers", "Brood Temperature", "Cellular Uplink", "Colony Analytics"]
  }
];

const SOLUTIONS_LIST = [
  {
    href: "/solutions/ai-infrastructure",
    icon: Cpu,
    title: "AI Infrastructure & GPU Clusters",
    desc: "Sub-picosecond optical cluster fabrics that eliminate thermal resistance and electronic copper bottlenecks at 800G/1.6T scale."
  },
  {
    href: "/solutions/agriculture",
    icon: Leaf,
    title: "Agriculture & Precision Farming",
    desc: "Automated closed-loop hydroponics and field environmental telemetry for high-yield, water-efficient crop cultivation."
  },
  {
    href: "/solutions/enterprise-ops",
    icon: LayoutDashboard,
    title: "Enterprise Operations & Analytics",
    desc: "Sub-second KPI tracking and predictive anomaly detection across multi-facility operations."
  },
  {
    href: "/solutions/ai-agents",
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "AI-native integration platform for high-order autonomous workflows and API orchestration with mandatory human approval gates."
  },
  {
    href: "/solutions/it-modernization",
    icon: Building2,
    title: "IT Modernization & Cloud",
    desc: "Enterprise cloud transformation, serverless containerization, and zero-trust security architectures."
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <FloatingOrb className="top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[140px]" />
      <FloatingOrb className="top-40 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />
      <FloatingOrb className="bottom-1/3 left-1/3 w-[350px] h-[350px] bg-blue-500/10 blur-[100px]" />

      <main>
        {/* =========================================================================
            HERO SECTION (Exact Copy Match per Master Prompt)
        ========================================================================= */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-primary/10 border-primary/20 text-primary uppercase tracking-widest text-xs">
                THE ROARADD ECOSYSTEM
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1] text-white">
                Infrastructure and intelligence for the <span className="text-gradient">next generation of industry.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                AI-native software, silicon photonics, and autonomous agent gateways — built to work together.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Button size="lg" variant="gradient" asChild className="gap-2 shadow-xl shadow-primary/20 text-base">
                  <a href="#products">Explore Products <ArrowRight className="w-4 h-4" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/10 hover:border-white/20 text-base">
                  <Link href="/contact">Talk to us</Link>
                </Button>
              </div>

              {/* STATS ROW (12+ / 500+ / 100% / 4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
                {STATS_DATA.map((s, i) => (
                  <motion.div 
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="glass-panel p-5 rounded-2xl border border-white/10"
                  >
                    <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
                    <h3 className="text-sm font-bold text-primary mb-1">{s.label}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            TRUST & INDUSTRY SOCIAL PROOF SECTION
        ========================================================================= */}
        <section className="py-12 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Trusted by engineering & operations teams across key industries
              </p>
            </div>

            {/* Industry Domains Badges (Real implied industries, Zero fake logos) */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-6">
              {[
                "AI Infrastructure & Compute Clusters",
                "Pharmaceutical Shortage Intelligence",
                "Precision Agriculture & Hydroponics",
                "Enterprise Operations & Analytics",
                "Modern Cloud Systems Architecture"
              ].map(industry => (
                <div key={industry} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs md:text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                  {industry}
                </div>
              ))}
            </div>

            {/* Awaiting Official Assets Container */}
            <div className="text-center pt-2">
              <span className="text-[11px] text-muted-foreground/60 italic">
                Client & Partner Institutional Portfolio (Official logo assets undergoing partner clearance)
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRODUCTS SECTION (All 6 Products in Strict Order)
        ========================================================================= */}
        <section id="products" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 py-1 px-3 bg-primary/10 border-primary/20 text-primary text-xs uppercase tracking-widest">
                Our Technology Portfolio
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Integrated Products & Hardware</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Purpose-built hardware and software engineered for high-performance enterprise scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {PRODUCTS_LIST.map((prod, idx) => {
                const Icon = prod.icon;
                return (
                  <motion.div 
                    key={prod.name} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <Link href={prod.href}>
                      <Card className="glass-panel h-full hover:border-primary/40 transition-all cursor-pointer group flex flex-col justify-between">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <Icon className={`w-6 h-6 ${prod.iconColor}`} />
                          </div>
                          <Badge className={`w-fit mb-2 ${prod.badgeColor}`}>{prod.badge}</Badge>
                          <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">{prod.name}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">{prod.desc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {prod.tags.map(t => (
                              <Badge key={t} variant="secondary" className="text-[11px] bg-white/5">{t}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all pt-2 border-t border-white/5">
                            Learn More <ArrowRight className="w-4 h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SOLUTIONS SECTION (Industry & Use-Case Focused)
        ========================================================================= */}
        <section className="py-24 border-t border-white/5 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 py-1 px-3 bg-cyan-500/10 border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-widest">
                Domain Solutions
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Solutions by Industry & Architecture</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover how RoarAdd technologies combine to solve domain-specific bottlenecks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS_LIST.map((sol, i) => {
                const Icon = sol.icon;
                return (
                  <motion.div key={sol.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link href={sol.href}>
                      <Card className="glass-panel h-full hover:border-cyan-500/30 transition-all group cursor-pointer p-6 flex flex-col justify-between">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{sol.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sol.desc}</p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                          View Architecture <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            AIP CALLOUT SECTION
        ========================================================================= */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-background to-background relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">AI-Native Integration Platform</Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  AIP — Autonomous Agent Gateway
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  AI-native integration platform for high-order autonomous enterprise workflows and API orchestration. Built on Google Agent-to-Agent protocol and Vertex AI with mandatory human-in-the-loop safety gates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="gradient" asChild>
                    <Link href="/aip">Explore AIP Gateway</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Talk to us</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                <Bot className="w-72 h-72 text-purple-400" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FINAL CALL TO ACTION
        ========================================================================= */}
        <section className="py-24 border-t border-white/5 bg-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Badge variant="outline" className="mb-4 py-1 px-3 bg-primary/10 border-primary/20 text-primary text-xs uppercase tracking-widest">
                Start a Conversation
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to deploy the next generation of industry?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Connect directly with our engineering and architecture leadership to discuss custom deployments, pilot programs, or partner integrations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="gradient" asChild className="gap-2 shadow-xl shadow-primary/20">
                  <Link href="/contact">Talk to us <ArrowRight className="w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/10">
                  <Link href="/ideas">Explore Ideas Lab</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
