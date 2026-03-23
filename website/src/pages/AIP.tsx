import { motion } from "framer-motion";
import { Link } from "wouter";
import { AlertTriangle, ArrowRight, Bot, Building2, CheckCircle2, Globe, Key, LayoutDashboard, Leaf, Lock, Network, Server, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  { icon: Globe, title: "Check Ad Availability", risk: "LOW RISK", riskColor: "text-green-400 bg-green-500/10 border-green-500/20", desc: "Query open ad slots in real time by category, geography, or budget range. Returns live inventory data from Cloud SQL.", color: "text-primary" },
  { icon: Bot, title: "Retrieve Analytics", risk: "LOW RISK", riskColor: "text-green-400 bg-green-500/10 border-green-500/20", desc: "Pull campaign performance data — impressions, CTR, conversions — directly into an external agent's workflow.", color: "text-blue-400" },
  { icon: ShieldCheck, title: "Book Ad Space", risk: "HIGH RISK — Requires Human Approval", riskColor: "text-orange-400 bg-orange-500/10 border-orange-500/20", desc: "Submit booking requests for specific budgets and categories. Triggers a human-in-the-loop confirmation before any transaction is processed.", color: "text-purple-400" },
];

const steps = [
  { icon: Globe, title: "Discovery", desc: "An external AI agent scans roaradd.com's HTML and finds the <link rel=\"aip-gateway\"> signpost.", num: "1" },
  { icon: Network, title: "Handshake", desc: "The agent calls /v1/handshake to initiate contact and receive the capability manifest.", num: "2" },
  { icon: Bot, title: "Capability Query", desc: "The agent reads the manifest and selects a low-risk action — such as checking ad availability.", num: "3" },
  { icon: ShieldCheck, title: "Human-in-the-Loop", desc: "For high-risk actions like booking, a human operator reviews and approves before execution.", num: "4" },
  { icon: CheckCircle2, title: "Completion", desc: "The transaction is confirmed and both sides receive structured confirmation over A2A protocol.", num: "5" },
];

export default function AIP() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">Service — AI to AI</Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                The <span className="text-gradient">AI Entry Point</span><br />for roaradd.com
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Built on Google's Agent-to-Agent (A2A) Protocol and Vertex AI, AIP enables autonomous AI agents to discover, negotiate, and interact with roaradd.com's advertising platform — no human intermediary needed for low-risk actions.
              </p>
              <p className="text-muted-foreground mb-12 max-w-xl mx-auto">The internet is going agent-first. We're ready.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="gradient" asChild className="gap-2">
                  <a href="https://roaradd.com/Fruiture" target="_blank" rel="noopener noreferrer">Launch roaradd.com/Fruiture <ArrowRight className="w-4 h-4" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services/it-consulting">Talk to Our Team</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How the AIP Gateway works</h2>
              <p className="text-muted-foreground text-lg">A five-step flow from discovery to confirmed transaction.</p>
            </div>
            <div className="relative">
              <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-purple-500/50 to-transparent hidden md:block" />
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <motion.div key={s.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 z-10">
                        <s.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="glass-panel rounded-2xl p-5 flex-1 border border-white/10">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold text-purple-400/60">STEP {s.num}</span>
                          <h3 className="font-bold text-white">{s.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What AI agents can do</h2>
              <p className="text-muted-foreground text-lg">Three core capabilities exposed via the AIP gateway, each with appropriate risk controls.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="glass-panel h-full">
                    <CardHeader>
                      <c.icon className={`w-8 h-8 ${c.color} mb-2`} />
                      <Badge className={`w-fit text-xs mb-2 ${c.riskColor} border`}>{c.risk}</Badge>
                      <CardTitle className="text-lg">{c.title}</CardTitle>
                      <CardDescription>{c.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CODE SNIPPET */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Making roaradd.com discoverable to AI</h2>
              <p className="text-muted-foreground">A simple HTML signpost tells any visiting AI agent that an AIP gateway exists.</p>
            </div>
            <div className="glass-panel rounded-2xl overflow-hidden border border-purple-500/20">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">index.html — &lt;head&gt;</span>
              </div>
              <pre className="p-6 text-sm font-mono overflow-x-auto leading-relaxed text-slate-300">{`<link
  rel="aip-gateway"
  href="https://api.roaradd.com/v1/handshake"
/>
<meta
  name="aip-capabilities"
  content="ad-booking, analytics-retrieval, inventory-check"
/>`}</pre>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Built on Google Cloud</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Zap, name: "Vertex AI", color: "text-yellow-400" },
                { icon: Network, name: "A2A Protocol", color: "text-primary" },
                { icon: Server, name: "Cloud SQL", color: "text-blue-400" },
                { icon: Globe, name: "Cloud Registry", color: "text-green-400" },
                { icon: Key, name: "IAM", color: "text-orange-400" },
                { icon: Lock, name: "Gemini Brain", color: "text-purple-400" },
              ].map((tech) => (
                <div key={tech.name} className="glass-panel rounded-2xl p-4 border border-white/10 text-center">
                  <tech.icon className={`w-7 h-7 ${tech.color} mx-auto mb-2`} />
                  <p className="text-xs font-medium text-muted-foreground">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAFETY NOTE */}
        <section className="py-16 border-t border-white/5 bg-orange-500/5">
          <div className="max-w-3xl mx-auto px-6 flex gap-5 items-start">
            <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-white mb-2">Human-in-the-Loop Safety</h3>
              <p className="text-muted-foreground text-sm">High-risk actions — such as booking ad space or committing budget — always require explicit human operator approval before execution. No autonomous agent can complete a financial transaction without a human reviewing and confirming the request. This is non-negotiable in our AIP design.</p>
            </div>
          </div>
        </section>

        {/* CROSS-LINK */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-muted-foreground mb-8">AIP works best as part of the full RoarAdd ecosystem.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                <LayoutDashboard className="w-7 h-7 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-3">AIP integrates natively with Trackit — expose your analytics to AI agents automatically.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/trackit">Explore Trackit <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
              <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                <Leaf className="w-7 h-7 text-green-400 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-3">Let AI agents query your farm data — yield reports, inventory, and field status via AIP.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/farm">Explore Farm <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
              <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                <Building2 className="w-7 h-7 text-blue-400 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-3">Want AIP integrated into your existing infrastructure? Our team handles the implementation.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/it-consulting">Talk to IT Consulting <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
