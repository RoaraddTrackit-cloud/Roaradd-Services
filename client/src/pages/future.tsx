import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Globe,
  Zap,
  Users,
  Clock,
  ChevronLeft,
  Smartphone,
  Wifi,
  Lock,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Bot,
  Brain,
  Shield,
  FileJson,
  KeyRound,
  ScrollText,
  Network,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const smsFeatures = [
  { icon: Globe, title: "Truly Worldwide", description: "Send messages to anyone, anywhere in the world without worrying about international fees or carrier restrictions." },
  { icon: Zap, title: "Instant Delivery", description: "Messages delivered in real-time with ultra-low latency, regardless of network type or geographic location." },
  { icon: Lock, title: "End-to-End Encrypted", description: "All messages are encrypted end-to-end, ensuring your conversations stay private and secure." },
  { icon: Smartphone, title: "Works on Any Device", description: "Access via our mobile app, web interface, or SMS — no special hardware or software required." },
  { icon: Wifi, title: "Works Without Internet", description: "Our mesh network technology enables messaging even in areas with limited or no internet connectivity." },
  { icon: Users, title: "Group Messaging", description: "Create groups, broadcast messages, and coordinate communities across borders effortlessly." },
];

const aipFeatures = [
  { icon: Network, title: "AI Sidecar Architecture", description: "Sits as a non-invasive layer over your existing infrastructure — no rewrites, no migrations. Your legacy systems stay exactly as they are." },
  { icon: Brain, title: "Semantic Gateway", description: "Translates free-form AI agent intent into the structured function calls your existing APIs already understand, automatically." },
  { icon: Shield, title: "Risk-Tiered Governance", description: "Low-risk queries (search, read) execute autonomously. High-risk actions (payments, bookings) pause and require verifiable human authorization." },
  { icon: FileJson, title: "Capability Manifest", description: "A JSON-LD file that publishes exactly what your system can do — structured as an AI-readable menu of intents, not raw API docs." },
  { icon: KeyRound, title: "Agent Identity Verification", description: "Every visiting AI agent must present a cryptographic digital passport before any capability is accessed. Unknown agents are blocked at the gateway." },
  { icon: ScrollText, title: "Natural Language Audit Log", description: "Every AI interaction is logged in plain human-readable language — fully transparent records of what was requested, approved, and executed." },
];

const ideas = [
  {
    id: "free-sms",
    icon: MessageSquare,
    color: "cyan",
    title: "Worldwide Free Text Messages",
    tagline: "Breaking the cost barrier of global communication",
    description:
      "We believe communication is a fundamental human right. This initiative will provide truly free, unlimited SMS and text messaging to anyone in the world — breaking down the barriers of cost, geography, and connectivity.",
    status: "In Development",
    stats: [
      { value: "8B+", label: "People to Connect", sub: "Every person on Earth" },
      { value: "$0", label: "Cost per Message", sub: "Truly free, always" },
      { value: "195", label: "Countries Supported", sub: "No border restrictions" },
    ],
    features: smsFeatures,
    howItWorks: null as string | null,
  },
  {
    id: "aip-protocol",
    icon: Bot,
    color: "violet",
    title: "Autonomous Interface Protocol (AIP)",
    tagline: "Your website — natively readable by AI agents",
    description:
      "The web was built for humans clicking through GUIs. AIP transforms your existing digital presence into a machine-readable node — a semantic layer that lets AI agents discover your capabilities, negotiate intent, and execute actions autonomously, all while keeping humans in control of what matters most.",
    status: "Concept",
    stats: [
      { value: "/aip", label: "Single Entry Point", sub: "One URL, the whole system" },
      { value: "2-Tier", label: "Governance Model", sub: "Auto + human-approved" },
      { value: "0", label: "Code Rewrites", sub: "Pure sidecar, non-invasive" },
    ],
    features: aipFeatures,
    howItWorks:
      "An external AI agent pings your /aip endpoint → the Semantic Gateway interprets its intent → the Capability Manifest matches it to an internal function → Governance checks the risk level. Low-risk? Executed instantly. High-risk? A mandatory pause sends the request to a human for approval. Every step is logged in plain language.",
  },
];

type Idea = typeof ideas[0];

const colorMap: Record<string, { badge: string; icon: string; glow: string; border: string; stat: string }> = {
  cyan: {
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    icon: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    glow: "hover:border-cyan-500/20",
    border: "border-cyan-500/30",
    stat: "text-cyan-400",
  },
  violet: {
    badge: "bg-violet-500/10 border-violet-500/30 text-violet-400",
    icon: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    glow: "hover:border-violet-500/20",
    border: "border-violet-500/30",
    stat: "text-violet-400",
  },
};

function IdeaCard({ idea, index }: { idea: Idea; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const colors = colorMap[idea.color] || colorMap.cyan;
  const Icon = idea.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <GlassCard className={`overflow-hidden transition-all duration-300 ${expanded ? colors.border : ""} ${colors.glow}`}>
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-5">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border ${colors.icon}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold leading-tight" data-testid={`text-idea-title-${idea.id}`}>
                  {idea.title}
                </h3>
                <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-xs font-medium ${colors.badge}`}>
                  <Clock className="w-3 h-3" />
                  {idea.status}
                </span>
              </div>
              <p className={`text-sm font-medium mb-3 ${colors.stat}`}>{idea.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{idea.description}</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Link href="/contact">
              <Button
                size="sm"
                className={`gap-1.5 text-black font-semibold ${
                  idea.color === "violet"
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90"
                    : "bg-gradient-to-r from-cyan-500 to-primary hover:opacity-90"
                }`}
                data-testid={`button-idea-interest-${idea.id}`}
              >
                Express Interest
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
              data-testid={`button-idea-expand-${idea.id}`}
            >
              {expanded ? (
                <>Hide details <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>See details <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/5 px-6 sm:px-8 py-8 space-y-8">
                {idea.stats && (
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {idea.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className={`text-3xl font-bold mb-0.5 ${colors.stat}`}>{stat.value}</p>
                        <p className="text-sm font-semibold mb-0.5">{stat.label}</p>
                        <p className="text-xs text-muted-foreground">{stat.sub}</p>
                      </div>
                    ))}
                  </div>
                )}

                {idea.howItWorks && (
                  <div className={`rounded-xl border p-5 ${colors.badge} bg-opacity-5`}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-70">How It Works</p>
                    <p className="text-sm leading-relaxed">{idea.howItWorks}</p>
                  </div>
                )}

                {idea.features && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Key Components</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {idea.features.map((feature) => (
                        <div
                          key={feature.title}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${colors.icon}`}>
                            <feature.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">{feature.title}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}

export default function FuturePage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link href="/">
                <button
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                  data-testid="link-back-home"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Lightbulb className="w-3.5 h-3.5" />
                Ideas Lab
              </div>

              <div className="max-w-4xl">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Future of{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-primary to-emerald-400 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl">
                  A living collection of bold ideas we're working on — from early concepts to active development. We'll keep adding more as we dream bigger.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm">
                  Each idea here represents our commitment to solving real-world problems through technology. Some are closer than others — but all of them matter.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ideas List */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-1">Current Ideas</h2>
                <p className="text-sm text-muted-foreground">
                  {ideas.length} idea{ideas.length !== 1 ? "s" : ""} in the pipeline — more coming soon
                </p>
              </div>
            </motion.div>

            <div className="space-y-5">
              {ideas.map((idea, i) => (
                <IdeaCard key={idea.id} idea={idea} index={i} />
              ))}
            </div>

            {/* Placeholder teaser */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5"
            >
              <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-1">More ideas on the way</p>
                <p className="text-xs text-muted-foreground/60">
                  We add new ideas periodically as we explore new frontiers.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <GlassCard className="p-10 sm:p-12" glow>
              <Zap className="w-10 h-10 text-primary mx-auto mb-5" />
              <h2 className="text-3xl font-bold mb-3">Have an idea?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                We love collaborating with visionaries. If you have an idea that aligns with our mission, we'd love to hear from you.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-emerald-500 text-black font-semibold shadow-xl shadow-primary/20"
                  data-testid="button-future-cta"
                >
                  Get in Touch
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
