import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, Building2, Cpu, Globe, Heart, LayoutDashboard, Leaf, Network, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const team = [
  { name: "Marcus T.", role: "Principal IT Consultant", bio: "15+ years delivering enterprise infrastructure across healthcare, fintech, and logistics.", expertise: ["Cloud Architecture", "Enterprise IT", "GCP"], initials: "MT", color: "from-blue-500/30 to-blue-500/10 border-blue-500/30", textColor: "text-blue-400" },
  { name: "Priya S.", role: "AI & Data Systems Lead", bio: "Former senior data engineer at a Fortune 500. Specializes in AI-powered data pipelines.", expertise: ["AI Integration", "Data Architecture", "Vertex AI"], initials: "PS", color: "from-purple-500/30 to-purple-500/10 border-purple-500/30", textColor: "text-purple-400" },
  { name: "Jordan K.", role: "Security & Compliance Expert", bio: "Certified CISSP and ISO 27001. Has conducted 80+ IT security audits across regulated industries.", expertise: ["IT Security", "Compliance", "SOC 2"], initials: "JK", color: "from-red-500/30 to-red-500/10 border-red-500/30", textColor: "text-red-400" },
  { name: "Alex R.", role: "RoarAdd Product Integrations Lead", bio: "Deep expertise in deploying Trackit and Farm across enterprise clients.", expertise: ["Trackit", "Farm", "System Integration"], initials: "AR", color: "from-green-500/30 to-green-500/10 border-green-500/30", textColor: "text-green-400" },
];

const values = [
  { icon: Zap, color: "text-yellow-400", title: "Speed with Substance", desc: "We ship fast, but never at the expense of quality. Every product is built to last." },
  { icon: ShieldCheck, color: "text-green-400", title: "Safety First", desc: "Human-in-the-loop controls are non-negotiable in everything we build involving AI." },
  { icon: Heart, color: "text-pink-400", title: "Built with Care", desc: "We build tools we would want to use ourselves. That empathy shows in every detail." },
  { icon: Network, color: "text-primary", title: "Ecosystem Thinking", desc: "Every product is designed to connect with the others. No silos. No dead ends." },
  { icon: Globe, color: "text-blue-400", title: "Industry Depth", desc: "We do not just know technology, we understand the industries we serve." },
  { icon: Cpu, color: "text-purple-400", title: "AI-Native", desc: "AI is baked into the foundation of everything we build." },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-16">
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <Badge variant="outline" className="mb-6 py-1 px-3 bg-primary/10 border-primary/20 text-primary text-xs uppercase tracking-widest">About RoarAdd</Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">We build the tools <span className="text-gradient">we wish existed.</span></h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">RoarAdd LLC is a technology company based in Loganville, GA, building interconnected AI-native products and services.</p>
                <p className="text-muted-foreground mb-10">We combine deep expertise in agriculture, enterprise IT, and AI systems under one roof.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gradient" asChild className="gap-2"><Link href="/contact">Work with us <ArrowRight className="w-4 h-4" /></Link></Button>
                  <Button variant="outline" asChild><Link href="/services/it-consulting">Our Services</Link></Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <div className="grid grid-cols-2 gap-4">
                  {[{ value: "2023", label: "Founded" }, { value: "12+", label: "Industries Served" }, { value: "500+", label: "Enterprise Seats" }, { value: "4", label: "Products & Services" }].map(s => (
                    <div key={s.label} className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                      <p className="text-3xl font-extrabold text-white mb-2">{s.value}</p>
                      <p className="text-sm text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 border-t border-white/5 bg-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-8">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg text-left">
                <p>RoarAdd LLC was founded on a simple belief: the best tools are built by people who deeply understand the problems they are solving.</p>
                <p>By combining domain expertise in agriculture, enterprise IT, and AI, we built an ecosystem where every product is genuinely designed for real users — not retrofitted from a generic template.</p>
                <p>Today RoarAdd operates across four areas: Trackit, Farm, IT Consulting, and AIP — all interconnected, all designed to grow with our clients.</p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What we believe</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <Card className="glass-panel h-full"><CardHeader><v.icon className={`w-8 h-8 ${v.color} mb-3`} /><CardTitle className="text-lg">{v.title}</CardTitle><CardDescription>{v.desc}</CardDescription></CardHeader></Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">The people behind the work</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((m, i) => (
                <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="glass-panel h-full border border-white/10">
                    <CardHeader className="pb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} border flex items-center justify-center mb-3`}><span className={`text-lg font-black ${m.textColor}`}>{m.initials}</span></div>
                      <CardTitle className="text-base">{m.name}</CardTitle>
                      <p className={`text-sm font-medium ${m.textColor}`}>{m.role}</p>
                      <CardDescription className="mt-1 text-xs leading-relaxed">{m.bio}</CardDescription>
                    </CardHeader>
                    <div className="px-5 pb-5 flex flex-wrap gap-1">{m.expertise.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
              <p className="text-muted-foreground mb-8">Whether you are interested in products, services, or a partnership — we would love to hear from you.</p>
              <Button size="lg" variant="gradient" asChild className="gap-2"><Link href="/contact">Get in Touch <ArrowRight className="w-4 h-4" /></Link></Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
