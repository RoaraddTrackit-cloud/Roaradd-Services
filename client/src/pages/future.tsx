import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Globe,
  Zap,
  Shield,
  Users,
  Clock,
  CheckCircle2,
  ChevronLeft,
  Smartphone,
  Wifi,
  Lock,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const features = [
  { icon: Globe, title: "Truly Worldwide", description: "Send messages to anyone, anywhere in the world without worrying about international fees or carrier restrictions." },
  { icon: Zap, title: "Instant Delivery", description: "Messages delivered in real-time with ultra-low latency, regardless of network type or geographic location." },
  { icon: Lock, title: "End-to-End Encrypted", description: "All messages are encrypted end-to-end, ensuring your conversations stay private and secure." },
  { icon: Smartphone, title: "Works on Any Device", description: "Access via our mobile app, web interface, or SMS — no special hardware or software required." },
  { icon: Wifi, title: "Works Without Internet", description: "Our mesh network technology enables messaging even in areas with limited or no internet connectivity." },
  { icon: Users, title: "Group Messaging", description: "Create groups, broadcast messages, and coordinate communities across borders effortlessly." },
];

export default function FuturePage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link href="/">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-home">
                  <ChevronLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
                <Clock className="w-3.5 h-3.5" />
                Coming Soon
              </div>
              <div className="max-w-4xl">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Future of{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-primary to-emerald-400 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                <p className="text-2xl text-muted-foreground mb-6 leading-relaxed">
                  Free worldwide text messages & SMS — for everyone, forever.
                </p>
                <p className="text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                  We believe communication is a fundamental human right. Our next major initiative will provide truly free, unlimited SMS and text messaging to anyone in the world — breaking down the barriers of cost, geography, and connectivity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="gap-2 bg-gradient-to-r from-cyan-500 to-primary hover:opacity-90 shadow-xl shadow-cyan-500/20 text-black font-semibold"
                      data-testid="button-future-notify"
                    >
                      Get Early Access
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                      Partner With Us
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-8 md:p-12" glow>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  { value: "8B+", label: "People to Connect", sub: "Every person on Earth" },
                  { value: "$0", label: "Cost per Message", sub: "Truly free, always" },
                  { value: "195", label: "Countries Supported", sub: "No border restrictions" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                    <p className="font-semibold mb-1">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">How it works</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Built on next-generation infrastructure to make free global messaging a reality.
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
                  <GlassCard className="p-6 h-full hover:border-cyan-500/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our phased approach to launching free global messaging.
              </p>
            </motion.div>
            <div className="space-y-6">
              {[
                { phase: "Phase 1", title: "Beta Launch", time: "Q3 2025", description: "Invite-only beta with 10,000 early users across 20 countries. Testing core messaging infrastructure.", done: true },
                { phase: "Phase 2", title: "Regional Rollout", time: "Q4 2025", description: "Expand to 50+ countries with group messaging, media sharing, and SMS gateway integration.", done: false },
                { phase: "Phase 3", title: "Global Launch", time: "Q1 2026", description: "Full worldwide launch with free SMS to any number, offline mesh network, and developer APIs.", done: false },
                { phase: "Phase 4", title: "Platform Ecosystem", time: "2026+", description: "Open the platform to developers, NGOs, and governments for custom integrations and social impact programs.", done: false },
              ].map((item, i) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className={`p-6 ${item.done ? "border-primary/20" : ""}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.done ? "bg-primary/20 border border-primary/30" : "bg-white/5 border border-white/10"
                      }`}>
                        {item.done ? (
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        ) : (
                          <Clock className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-semibold text-cyan-400">{item.phase}</span>
                          <span className="text-xs text-muted-foreground">{item.time}</span>
                        </div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
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
              <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Be part of the movement</h2>
              <p className="text-muted-foreground mb-8">
                Join our early access list and help shape the future of free global communication.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-cyan-500 to-primary text-black font-semibold shadow-xl shadow-cyan-500/20"
                  data-testid="button-future-cta"
                >
                  Join Early Access
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
