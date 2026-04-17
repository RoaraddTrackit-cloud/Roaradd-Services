import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, Building2, Cpu, Globe, Heart, Leaf, LayoutDashboard, Mail, MapPin, Network, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "2023", label: "Founded" },
  { value: "12+", label: "Industries Served" },
  { value: "4", label: "Core Products" },
  { value: "500+", label: "Enterprise Seats" },
];

const values = [
  { icon: Zap, color: "text-yellow-400", title: "Speed with Substance", desc: "We ship fast without sacrificing quality, security, or long-term maintainability." },
  { icon: Shield, color: "text-green-400", title: "Safety First", desc: "Every product we build puts compliance, data security, and human oversight at the core." },
  { icon: Heart, color: "text-pink-400", title: "Built with Care", desc: "From pollinators to enterprise infrastructure, we care deeply about every problem we solve." },
  { icon: Network, color: "text-primary", title: "Ecosystem Thinking", desc: "We design products that connect — with each other, with your team, and with the world." },
  { icon: Globe, color: "text-blue-400", title: "Industry Depth", desc: "Our team brings real-world experience across utility, agriculture, cloud, and AI systems." },
  { icon: Cpu, color: "text-purple-400", title: "AI-Native", desc: "AI is not a feature for us — it is the foundation every product is built upon." },
];

const products = [
  { icon: LayoutDashboard, href: "/trackit", name: "Trackit", desc: "Smart analytics and KPI tracking for modern enterprise teams." },
  { icon: Leaf, href: "/farm", name: "Farm", desc: "Data-driven farm management — from row crops to apiary operations." },
  { icon: Bot, href: "/services/aip", name: "AIP — AI to AI", desc: "Agent-to-agent gateway built on Google A2A Protocol and Vertex AI." },
  { icon: Building2, href: "/services/it-consulting", name: "IT Consulting", desc: "Cloud strategy, enterprise integration, and Oracle/SAP systems expertise." },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-primary/5 border-primary/20 text-primary">
                About RoarAdd LLC
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Built for the Next Generation<br /><span className="text-gradient">of Business</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                RoarAdd LLC is an AI-native, multi-domain technology company based in Loganville, Georgia. We build intelligent software platforms that span enterprise IT, sustainable agriculture, pollinator intelligence, and autonomous AI systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="gradient" asChild className="gap-2">
                  <Link href="/ideas">Explore Our Ideas Lab <ArrowRight className="w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-white/5 bg-secondary/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <p className="text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Badge variant="outline" className="mb-4">Founder & CEO</Badge>
                <h2 className="text-3xl font-extrabold mb-4">Kalyan Modium</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kalyan is a seasoned IT professional and entrepreneur with deep expertise in enterprise technology, cloud infrastructure, and utility systems. With hands-on experience delivering Oracle Utilities, SAP CRM/Billing, and cloud transformation programs at major utility companies, he brings rare cross-domain technical and operational depth to RoarAdd.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Based in the Atlanta, Georgia area, Kalyan founded RoarAdd LLC to bridge the gap between cutting-edge AI, sustainable agriculture, and enterprise software — creating an ecosystem of tools that are both technically rigorous and practically useful. From AI-powered bee hive monitoring to enterprise analytics platforms, every product reflects his belief that great technology should work across industries.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Loganville, Georgia, USA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:kalyan.modium@roaradd.com" className="hover:text-white transition-colors">kalyan.modium@roaradd.com</a>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
                <div className="glass-panel rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-3">Technical Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Oracle Utilities","SAP CRM & Billing","Cloud Infrastructure","Python","TypeScript","React","AWS","Google Cloud","GitHub Actions","Agile / SAFe","AI Systems","API Integration"].map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div className="glass-panel rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-3">Industry Experience</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Utility & Energy","Enterprise IT","Agriculture","AI / ML Platforms","Government Contracting","Renewable Energy","Precision Farming","Pollinator Science"].map(ind => (
                      <Badge key={ind} variant="outline" className="text-xs border-white/10">{ind}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Badge variant="outline" className="mb-4">Our Mission</Badge>
            <h2 className="text-3xl font-extrabold mb-6">Where Technology, Agriculture,<br />and Innovation Converge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RoarAdd LLC is a purpose-driven, diverse enterprise that blends technology, sustainable agriculture, and AI innovation to create resilient, future-ready solutions. We bring together coders, farmers, data thinkers, and community-minded builders to incubate ideas that solve real-world problems — whether in the field, in the data center, or in the market.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="text-3xl font-extrabold">What We Stand For</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-panel rounded-2xl p-6">
                  <v.icon className={`w-6 h-6 ${v.color} mb-3`} />
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-20 bg-secondary/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Ecosystem</Badge>
              <h2 className="text-3xl font-extrabold">Products & Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((p, i) => (
                <Link key={i} href={p.href}>
                  <div className="glass-panel rounded-2xl p-6 hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <p.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-primary transition-colors">{p.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* NVIDIA / Partnership CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border border-primary/20">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">NVIDIA Inception Candidate</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Seeking Technology & Innovation Partners</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                RoarAdd is actively pursuing NVIDIA Inception membership and partnerships with forward-thinking organizations in AI, agriculture, and enterprise technology. We are building GPU-accelerated AI pipelines for pollinator intelligence and precision farming — and we are looking for collaborators, investors, and ecosystem partners who share our vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild className="gap-2">
                  <a href="mailto:kalyan.modium@roaradd.com">Partner With Us <ArrowRight className="w-4 h-4" /></a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/ideas">View Our Ideas Lab</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
