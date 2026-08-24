import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Bot, Building2, Cpu, Globe, Mail, MapPin, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Team() {
  const leadership = [
    {
      name: "Kalyan Modium",
      role: "Founder & Chief Executive Officer",
      location: "Atlanta, GA",
      email: "kalyan.modium@roaradd.com",
      bio: "Enterprise technology architect and entrepreneur with deep expertise in cloud infrastructure, utility platforms (Oracle/SAP), autonomous agent systems, and sustainable hardware innovations.",
      domains: ["Enterprise Systems", "Silicon Photonics", "Autonomous Agents", "Cloud Scale"]
    }
  ];

  const domains = [
    {
      domain: "AI & Autonomous Systems",
      icon: Bot,
      focus: "Agent-to-agent negotiation protocols, Vertex AI integration, high-order workflow orchestration, and strict human-in-the-loop governance."
    },
    {
      domain: "Hardware & Photonics",
      icon: Cpu,
      focus: "Silicon photonic co-packaged optical interconnects (CPO) engineered for next-generation multi-hundred-gigabit transformer AI clusters."
    },
    {
      domain: "Enterprise Solutions & IT",
      icon: Building2,
      focus: "Zero-trust enterprise architectures, multi-tenant cloud orchestration, automated CI/CD pipelines, and systems transformation."
    }
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="pt-24 pb-20">
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
              <Link href="/">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-6 cursor-pointer">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-primary/10 border-primary/20 text-primary uppercase tracking-widest text-xs">
                RoarAdd Organization
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                Leadership & <span className="text-gradient">Engineering Team</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A multidisciplinary team spanning enterprise IT, high-density silicon photonics, sustainable IoT telemetry, and autonomous intelligence.
              </p>
            </motion.div>

            {/* Leadership Card */}
            <div className="max-w-3xl mx-auto mb-20">
              {leadership.map((leader, i) => (
                <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Card className="glass-panel border-white/10 p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white shadow-xl shadow-primary/20">
                        KM
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                          <Badge variant="secondary" className="text-xs">{leader.role}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary" /> {leader.location}</span>
                          <a href={`mailto:${leader.email}`} className="flex items-center gap-1 hover:text-white transition-colors"><Mail className="w-3.5 h-3.5 text-primary" /> {leader.email}</a>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                        <div className="flex flex-wrap gap-2">
                          {leader.domains.map(d => (
                            <Badge key={d} variant="outline" className="text-xs bg-white/5 border-white/10">{d}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Practice Areas */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Core Engineering Disciplines</h2>
                <p className="text-muted-foreground">Cross-domain engineering teams collaborating across hardware, software, and autonomous systems.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {domains.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <motion.div key={d.domain} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
                      <Card className="glass-panel h-full border-white/10 p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{d.domain}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{d.focus}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-white/5">
              <p className="text-muted-foreground mb-6">Interested in collaborating or joining our technical advisory network?</p>
              <div className="flex justify-center gap-4">
                <Button size="lg" variant="gradient" asChild>
                  <Link href="/contact">Talk to us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/careers">View Open Roles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
