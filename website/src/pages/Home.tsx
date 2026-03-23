import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Bot, Building2, Cpu, FileText, Globe, LayoutDashboard, Leaf, Network, ShieldCheck, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-primary/10 border-primary/20 text-primary uppercase tracking-widest text-xs">
                The RoarAdd Ecosystem
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] mb-8">
                <span className="text-gradient">Roar</span>Add
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Products and services built for the next generation of business — from smart SaaS tools to AI-to-AI advertising infrastructure.
              </p>
              <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                One ecosystem. Multiple solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="gradient" asChild className="gap-2 group">
                  <Link href="/trackit">Explore Trackit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services/aip">Discover AIP</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Products</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Purpose-built software that solves real problems.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Link href="/trackit">
                  <Card className="glass-panel h-full hover:border-primary/40 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <LayoutDashboard className="w-7 h-7 text-primary" />
                      </div>
                      <Badge className="w-fit mb-2 bg-primary/10 text-primary border-primary/20">Product</Badge>
                      <CardTitle className="text-2xl">Trackit</CardTitle>
                      <CardDescription className="text-base">Smart tracking and analytics for modern teams. Monitor what matters — from tasks to KPIs — all in one dashboard.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["Real-time Analytics", "Team Dashboards", "Custom KPIs", "Integrations"].map(f => (
                          <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Link href="/farm">
                  <Card className="glass-panel h-full hover:border-green-500/40 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Leaf className="w-7 h-7 text-green-400" />
                      </div>
                      <Badge className="w-fit mb-2 bg-green-500/10 text-green-400 border-green-500/20">Product</Badge>
                      <CardTitle className="text-2xl">Farm</CardTitle>
                      <CardDescription className="text-base">Modern farm management software. Track yields, manage operations, and grow smarter with data-driven decisions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["Yield Tracking", "Operations", "Resource Planning", "Reports"].map(f => (
                          <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-green-400 font-medium text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Expert-led services that extend your capabilities.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Link href="/services/it-consulting">
                  <Card className="glass-panel h-full hover:border-blue-500/40 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Building2 className="w-7 h-7 text-blue-400" />
                      </div>
                      <Badge className="w-fit mb-2 bg-blue-500/10 text-blue-400 border-blue-500/20">Service</Badge>
                      <CardTitle className="text-2xl">IT Consulting</CardTitle>
                      <CardDescription className="text-base">Strategic technology consulting from experts who understand modern infrastructure, cloud migrations, and enterprise integration.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["Cloud Strategy", "Enterprise Trackit", "IT Audits", "Team Training"].map(f => (
                          <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 font-medium text-sm group-hover:gap-3 transition-all">
                        Book a Consultation <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <Link href="/services/aip">
                  <Card className="glass-panel h-full hover:border-purple-500/40 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Bot className="w-7 h-7 text-purple-400" />
                      </div>
                      <Badge className="w-fit mb-2 bg-purple-500/10 text-purple-400 border-purple-500/20">Service</Badge>
                      <CardTitle className="text-2xl">AIP — AI to AI</CardTitle>
                      <CardDescription className="text-base">The cutting-edge AI Entry Point gateway. Let autonomous AI agents discover, negotiate, and transact with your platform directly.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["A2A Protocol", "Agent Gateway", "Human-in-the-Loop", "Vertex AI"].map(f => (
                          <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:gap-3 transition-all">
                        Explore AIP <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY ROARADD */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why RoarAdd?</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, color: "text-yellow-400", title: "Built for Speed", desc: "From idea to deployment — our products ship fast and our consulting delivers results without endless delays." },
                { icon: Network, color: "text-primary", title: "Interconnected Ecosystem", desc: "Our products and services are designed to work together. Trackit integrates into consulting. AIP enhances everything." },
                { icon: ShieldCheck, color: "text-green-400", title: "Human-Centered Safety", desc: "Even in our most automated services, human-in-the-loop controls ensure you're always in command." },
                { icon: Globe, color: "text-blue-400", title: "Google Cloud Native", desc: "Built on world-class infrastructure — Vertex AI, Cloud SQL, and IAM — for security and scale." },
                { icon: Users, color: "text-pink-400", title: "Real Expertise", desc: "Our consultants have shipped enterprise systems across industries. We bring hands-on experience, not just advice." },
                { icon: Cpu, color: "text-purple-400", title: "AI-First Design", desc: "From Trackit's analytics to AIP's agent gateway, AI is baked into every layer — not bolted on later." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}>
                  <Card className="glass-panel h-full">
                    <CardHeader>
                      <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section id="resources" className="py-24 border-t border-white/5 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Resources</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Guides, case studies, and documentation to help you get the most from the RoarAdd ecosystem.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  color: "text-primary",
                  bg: "from-primary/20 to-primary/5 border-primary/20",
                  label: "Blog",
                  title: "Insights & Updates",
                  desc: "Deep dives into product updates, AI trends, farm tech innovations, and enterprise IT strategy from the RoarAdd team.",
                  cta: "Read the Blog",
                },
                {
                  icon: FileText,
                  color: "text-blue-400",
                  bg: "from-blue-500/20 to-blue-500/5 border-blue-500/20",
                  label: "Case Studies",
                  title: "Real Results",
                  desc: "See how businesses use Trackit for analytics, Farm for operations, and our IT Consulting team to transform their technology stack.",
                  cta: "View Case Studies",
                },
                {
                  icon: Globe,
                  color: "text-green-400",
                  bg: "from-green-500/20 to-green-500/5 border-green-500/20",
                  label: "Documentation",
                  title: "Docs & API Reference",
                  desc: "Technical guides for integrating Trackit, setting up Farm, and connecting to the AIP gateway. Built for developers.",
                  cta: "Open Docs",
                },
              ].map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="glass-panel h-full hover:border-white/20 transition-all group cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <Badge variant="secondary" className="w-fit text-xs mb-2">{item.label}</Badge>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex items-center gap-2 ${item.color} font-medium text-sm group-hover:gap-3 transition-all`}>
                        {item.cta} <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPANY */}
        <section id="company" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Badge variant="outline" className="mb-6 py-1 px-3 bg-primary/10 border-primary/20 text-primary text-xs uppercase tracking-widest">About Us</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  We build the tools <span className="text-gradient">we wish existed.</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  RoarAdd started with a simple idea: the next generation of business tools should be interconnected, AI-native, and built by people who actually understand the industries they serve.
                </p>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  From Trackit's real-time analytics to Farm's field-level data management to AIP's AI-to-AI gateway — every product and service in our ecosystem is designed to work together and grow with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/services/it-consulting">Meet Our Team <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/services/it-consulting">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "12+", label: "Industries Served" },
                    { value: "4", label: "Core Products & Services" },
                    { value: "500+", label: "Enterprise Seats Deployed" },
                    { value: "100%", label: "Human-in-the-Loop for High-Risk AI" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                      <p className="text-3xl font-extrabold text-white mb-2">{stat.value}</p>
                      <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-muted-foreground text-lg mb-10">Whether you need a product, a service, or both — we have a solution in the RoarAdd ecosystem.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="gradient" asChild className="gap-2">
                  <a href="https://roaradd.com/Fruiture" target="_blank" rel="noopener noreferrer">Launch Fruiture <ArrowRight className="w-4 h-4" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services/it-consulting">Book a Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
