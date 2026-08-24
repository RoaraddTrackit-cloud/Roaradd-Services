import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Bot, Building2, Cpu, LayoutDashboard, Leaf, Network, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface SolutionConfig {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  accentColor: string;
  problemSolved: string;
  keyBenefits: { title: string; desc: string }[];
  primaryProductHref: string;
  primaryProductLabel: string;
}

export const SOLUTIONS_DATA: Record<string, SolutionConfig> = {
  "ai-infrastructure": {
    slug: "ai-infrastructure",
    badge: "Industry Solution — AI Infrastructure",
    title: "AI Infrastructure & GPU Clusters",
    subtitle: "High-density optical interconnects and photonic co-packaged architectures for petascale clusters.",
    description: "Accelerate deep learning throughput and eliminate electronic copper I/O bottlenecks across multi-thousand GPU fabrics.",
    icon: Cpu,
    accentColor: "from-cyan-500/30 to-blue-600/10",
    problemSolved: "Electronic copper interconnects suffer massive thermal resistance and latency decay at 800G/1.6T speeds. Silicon photonics integrates optics directly next to the compute engine.",
    keyBenefits: [
      { title: "Sub-Picosecond Latency", desc: "Co-packaged optical engines place transceivers within millimeters of the GPU/ASIC die." },
      { title: "40% Thermal Reduction", desc: "Replaces power-hungry copper retimers with direct laser modulation." },
      { title: "Linear Cluster Scaling", desc: "Designed for hyperscale transformer training clusters up to 100k accelerators." }
    ],
    primaryProductHref: "/photonic-cpo",
    primaryProductLabel: "Explore Photonic-CPO v4"
  },
  "agriculture": {
    slug: "agriculture",
    badge: "Industry Solution — Agriculture",
    title: "Agriculture & Precision Farming",
    subtitle: "Closed-loop circular hydroponics, environmental telemetry, and real-time yield optimization.",
    description: "Automated sensor networks and mycelium circular systems providing actionable field intelligence and resource conservation.",
    icon: Leaf,
    accentColor: "from-green-500/30 to-emerald-600/10",
    problemSolved: "Volatile weather patterns, soil depletion, and water scarcity threaten crop yields. Precision sensors and automated root-zone monitoring optimize micro-climates continuously.",
    keyBenefits: [
      { title: "90% Water Conservation", desc: "Closed-loop recirculation monitors nutrient levels and pH in real time." },
      { title: "Multi-Tier Environmental Sensing", desc: "Air temperature, humidity, VPD, and CO2 monitored per canopy layer." },
      { title: "Mycelium Substrate Integration", desc: "Bio-circular substrate management for maximum organic yield." }
    ],
    primaryProductHref: "/farm",
    primaryProductLabel: "Explore Farm Platform"
  },
  "enterprise-ops": {
    slug: "enterprise-ops",
    badge: "Industry Solution — Enterprise Operations",
    title: "Enterprise Operations & Analytics",
    subtitle: "Telemetry aggregation, live KPI monitoring, and unified operational control panels.",
    description: "Streamline multi-facility telemetry into actionable real-time dashboards with automated alerting and anomaly detection.",
    icon: LayoutDashboard,
    accentColor: "from-purple-500/30 to-indigo-600/10",
    problemSolved: "Siloed operational data prevents executive leadership from detecting operational bottlenecks until after fiscal loss occurs. Trackit provides sub-second visibility.",
    keyBenefits: [
      { title: "Unified KPI Command", desc: "Aggregate supply chain, workforce, and infrastructure telemetry into one pane." },
      { title: "Predictive Anomaly Detection", desc: "Machine learning triggers proactive alerts before threshold violations occur." },
      { title: "Auditable Governance", desc: "Full audit trails and SOC2-ready data logging across every department." }
    ],
    primaryProductHref: "/trackit",
    primaryProductLabel: "Explore Trackit"
  },
  "ai-agents": {
    slug: "ai-agents",
    badge: "Industry Solution — Agentic Systems",
    title: "Autonomous AI Agents",
    subtitle: "AI-native integration platform for high-order autonomous enterprise workflows and API orchestration.",
    description: "Built on Google's Agent-to-Agent protocol and Vertex AI to empower autonomous software agents to negotiate, query, and transact with strict human oversight.",
    icon: Bot,
    accentColor: "from-pink-500/30 to-purple-600/10",
    problemSolved: "Manual human glue code between APIs creates operational drag. Autonomous agents require structured negotiation protocols, capability discovery, and strict human-in-the-loop safety gates.",
    keyBenefits: [
      { title: "A2A Protocol Discovery", desc: "Standardized agent discovery manifest enables zero-shot capability negotiation." },
      { title: "Human-in-the-Loop Gates", desc: "High-risk financial or operational actions require mandatory human sign-off." },
      { title: "Deterministic Task DAGs", desc: "Multi-agent workflows executed with transactional rollback and audit logs." }
    ],
    primaryProductHref: "/aip",
    primaryProductLabel: "Explore AIP Platform"
  },
  "it-modernization": {
    slug: "it-modernization",
    badge: "Industry Solution — Enterprise IT",
    title: "IT Modernization & Cloud",
    subtitle: "Cloud architecture, container orchestration, and multi-tenant enterprise system transformation.",
    description: "Migrate legacy on-premise infrastructure into serverless, auto-scaling cloud architectures with automated CI/CD and enterprise security.",
    icon: Building2,
    accentColor: "from-blue-500/30 to-cyan-600/10",
    problemSolved: "Legacy monolithic systems suffer high maintenance costs, single-point-of-failure risks, and slow feature delivery. Modernization delivers agility and zero-downtime reliability.",
    keyBenefits: [
      { title: "Serverless & Microservices", desc: "Containerized microservices running on Google Cloud Run and Kubernetes." },
      { title: "Security & IAM Hardening", desc: "Zero-trust network architecture, Identity-Aware Proxy, and centralized secrets." },
      { title: "Automated DevOps Pipelines", desc: "GitOps continuous integration with automated regression testing." }
    ],
    primaryProductHref: "/services/it-consulting",
    primaryProductLabel: "Explore IT Consulting"
  }
};

export default function SolutionDetail({ solutionKey }: { solutionKey: string }) {
  const config = SOLUTIONS_DATA[solutionKey] || SOLUTIONS_DATA["ai-infrastructure"];
  const IconComponent = config.icon;

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br ${config.accentColor} blur-[150px] rounded-full pointer-events-none`} />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-8 cursor-pointer">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.accentColor} border border-white/10 flex items-center justify-center shadow-xl`}>
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
              </div>

              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">{config.badge}</Badge>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                {config.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                {config.subtitle}
              </p>
              
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                {config.description}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="gradient" asChild className="gap-2">
                  <Link href={config.primaryProductHref}>
                    {config.primaryProductLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE PROBLEM SOLVED */}
        <section className="py-16 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-white">Problem Statement & Objective</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {config.problemSolved}
              </p>
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Core Architectural Advantages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Engineered to integrate seamlessly with the broader RoarAdd technology ecosystem.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {config.keyBenefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Card className="glass-panel h-full border-white/10 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg text-white mb-2">{b.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">{b.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
