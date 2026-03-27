import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, CheckCircle2, Cloud, Cpu, Database, Globe, LayoutDashboard, Linkedin, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  { icon: Cloud, title: "Cloud Migration", desc: "Seamless migration to Google Cloud, AWS, or Azure. We assess, plan, and execute with zero downtime.", color: "text-blue-400" },
  { icon: LayoutDashboard, title: "Trackit Enterprise Setup", desc: "We deploy and configure Trackit for your entire organization — with custom dashboards, SSO, and training.", color: "text-primary" },
  { icon: Shield, title: "IT Security Audits", desc: "Comprehensive security reviews covering access controls, data protection, and compliance readiness.", color: "text-red-400" },
  { icon: Database, title: "Data Architecture", desc: "Design robust data pipelines and storage strategies that scale with your business.", color: "text-yellow-400" },
  { icon: Cpu, title: "AI Integration", desc: "Bring AI into your workflows — from automation to predictive analytics. We handle the technical complexity.", color: "text-purple-400" },
  { icon: Globe, title: "Team Training", desc: "On-site and remote training programs. We ensure your team can use and maintain the systems we build.", color: "text-green-400" },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We start with a free 30-minute consultation to understand your goals, pain points, and existing setup." },
  { step: "02", title: "Assessment & Proposal", desc: "Our team audits your current systems and delivers a clear proposal with scope, timeline, and pricing." },
  { step: "03", title: "Implementation", desc: "We execute the plan with weekly check-ins, full documentation, and a dedicated project manager." },
  { step: "04", title: "Handover & Support", desc: "Your team gets full ownership with training and optional ongoing support packages." },
];

const team = [
  {
    name: "Marcus T.",
    role: "Principal IT Consultant",
    bio: "15+ years delivering enterprise infrastructure across healthcare, fintech, and logistics. Led cloud migrations for organizations with 500+ seat deployments.",
    expertise: ["Cloud Architecture", "Enterprise IT", "GCP"],
    initials: "MT",
    color: "from-blue-500/30 to-blue-500/10 border-blue-500/30",
    textColor: "text-blue-400",
  },
  {
    name: "Priya S.",
    role: "AI & Data Systems Lead",
    bio: "Former senior data engineer at a Fortune 500. Specializes in designing AI-powered data pipelines and integrating machine learning into existing workflows.",
    expertise: ["AI Integration", "Data Architecture", "Vertex AI"],
    initials: "PS",
    color: "from-purple-500/30 to-purple-500/10 border-purple-500/30",
    textColor: "text-purple-400",
  },
  {
    name: "Jordan K.",
    role: "Security & Compliance Expert",
    bio: "Certified in CISSP and ISO 27001. Has conducted 80+ IT security audits across regulated industries — finance, healthcare, and government.",
    expertise: ["IT Security", "Compliance", "SOC 2"],
    initials: "JK",
    color: "from-red-500/30 to-red-500/10 border-red-500/30",
    textColor: "text-red-400",
  },
  {
    name: "Alex R.",
    role: "RoarAdd Product Integrations Lead",
    bio: "Deep expertise in deploying Trackit and Farm across enterprise clients. Your dedicated point of contact for all RoarAdd ecosystem implementations.",
    expertise: ["Trackit", "Farm", "System Integration"],
    initials: "AR",
    color: "from-green-500/30 to-green-500/10 border-green-500/30",
    textColor: "text-green-400",
  },
];

export default function ITConsulting() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Service</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Technology strategy. <span className="text-blue-400">Human expertise.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our IT consulting team helps businesses modernize their tech stack, migrate to the cloud, and implement enterprise-grade tools — including Trackit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 group">
                  Book a Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">View Case Studies</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="glass-panel rounded-3xl p-8 border border-blue-500/20 space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-400" />
                  <span className="font-semibold text-white">Why clients choose us</span>
                </div>
                {[
                  "Experts who have shipped enterprise systems across 12+ industries",
                  "Honest scoping — we don't upsell work you don't need",
                  "Deep integration with the RoarAdd product ecosystem",
                  "Fixed-price projects or flexible retainers",
                  "Post-delivery support with SLA options",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TEAM BIOS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The people behind the work</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real practitioners — not generalists. Our team brings hands-on experience from industries like fintech, healthcare, agriculture, and enterprise tech.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="glass-panel h-full border border-white/10 hover:border-white/20 transition-all">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} border flex items-center justify-center mb-4`}>
                        <span className={`text-xl font-black ${member.textColor}`}>{member.initials}</span>
                      </div>
                      <CardTitle className="text-lg leading-snug">{member.name}</CardTitle>
                      <p className={`text-sm font-medium ${member.textColor}`}>{member.role}</p>
                      <CardDescription className="mt-2 leading-relaxed">{member.bio}</CardDescription>
                    </CardHeader>
                    <div className="px-6 pb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What we deliver</h2>
              <p className="text-muted-foreground text-lg">From cloud migrations to AI integration — our scope is broad, our execution is precise.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Card className="glass-panel h-full">
                    <CardHeader>
                      <s.icon className={`w-8 h-8 ${s.color} mb-2`} />
                      <CardTitle className="text-lg">{s.title}</CardTitle>
                      <CardDescription>{s.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How we work</h2>
              <p className="text-muted-foreground text-lg">A simple, transparent process from first call to final handover.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="glass-panel rounded-2xl p-6 border border-white/10 h-full">
                    <span className="text-4xl font-black text-blue-500/30">{p.step}</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's talk about your project</h2>
            <p className="text-muted-foreground mb-10">Book a free 30-minute discovery call. No commitment, no sales pressure.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <div className="mt-12 pt-8 border-t border-white/5 grid sm:grid-cols-2 gap-6 text-left">
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <p className="text-sm text-muted-foreground mb-3">Want Trackit deployed at scale across your org?</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/trackit">See Trackit Enterprise <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <p className="text-sm text-muted-foreground mb-3">Interested in AI-to-AI capabilities for your business?</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/aip">Explore AIP — AI to AI <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
