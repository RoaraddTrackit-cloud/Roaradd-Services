import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Code2,
  Globe,
  Rocket,
  ChevronRight,
  ExternalLink,
  Target,
  TrendingUp,
  Layers,
  Shield,
  Lightbulb,
  Users,
  Brain,
  MessageSquare,
  CheckCircle2,
  Heart,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const itConsultingServices = [
  { icon: Target, title: "IT Strategy & Roadmapping", description: "Align your technology investments with business goals through comprehensive IT strategy and multi-year roadmaps." },
  { icon: TrendingUp, title: "Digital Transformation", description: "Guide your organization through digital change — from legacy systems to modern cloud-native architectures." },
  { icon: Layers, title: "Enterprise Architecture", description: "Design scalable, resilient enterprise architectures that support growth and adaptability." },
  { icon: Shield, title: "IT Risk & Compliance", description: "Identify risks, ensure regulatory compliance, and build robust governance frameworks." },
  { icon: Globe, title: "Cloud Strategy", description: "Develop a clear cloud adoption strategy — hybrid, multi-cloud, or full migration — tailored to your needs." },
  { icon: Lightbulb, title: "Technology Evaluation", description: "Unbiased assessment of technologies and vendors to ensure you invest in the right tools." },
];

const itProcess = [
  { step: "01", title: "Discovery", description: "Deep dive into your current IT landscape, business objectives, and pain points." },
  { step: "02", title: "Analysis", description: "Assess gaps, risks, and opportunities across your technology stack and processes." },
  { step: "03", title: "Strategy", description: "Deliver a clear, actionable IT roadmap aligned with your business priorities." },
  { step: "04", title: "Implementation", description: "Work alongside your team to execute the strategy and ensure successful outcomes." },
];

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* ─── Hero ─── */}
        <section className="relative py-28 sm:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-3.5 h-3.5" />
                Technology • Products • People
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                We build technology{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                  that matters
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
                Roaradd is a technology company on a mission to create meaningful digital products and services — from smart software tools to AI-powered platforms and free global communication for everyone.
              </p>
              <p className="text-base text-muted-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                We believe technology should empower every person and every business — regardless of size, location, or budget. That belief drives every product we ship and every client we serve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/25 text-black font-semibold px-8"
                    data-testid="button-hero-cta"
                  >
                    Work With Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/why-roaradd">
                  <Button size="lg" variant="outline" className="gap-2 border-white/10 hover:bg-white/5">
                    Our Story
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Initiative Pillars ─── */}
        <section className="py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Rocket,
                  title: "Software Products",
                  description: "We build our own products — TrackIt and Farm — solving real problems for real people.",
                },
                {
                  icon: Users,
                  title: "IT Services",
                  description: "We advise and support businesses through IT consulting and AI integration services.",
                },
                {
                  icon: Heart,
                  title: "Global Impact",
                  description: "Our Future of Future initiative is bringing free worldwide messaging to everyone.",
                },
              ].map((pillar) => (
                <motion.div key={pillar.title} variants={fadeInUp}>
                  <GlassCard className="p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <pillar.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Products ─── */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Products</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Software built for the real world</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every product we ship starts with a real problem. We build tools that people actually use and love.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "TrackIt",
                  tag: "Live",
                  description: "A modern project and task tracking platform that keeps teams aligned and ships consistently on schedule.",
                  href: "/products/trackit",
                  external: "https://trackit.roaradd.com",
                  icon: Code2,
                  color: "from-primary to-emerald-400",
                },
                {
                  name: "Farm",
                  tag: "Live",
                  description: "Smart agricultural management platform helping farmers optimize yields and manage their resources with data.",
                  href: "/products/farm",
                  external: null,
                  icon: Globe,
                  color: "from-emerald-400 to-teal-500",
                },
              ].map((product) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-8 h-full hover:border-primary/20 transition-all duration-300 group" glow>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <product.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                        {product.tag}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    <div className="flex gap-3">
                      <Link href={product.href}>
                        <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 gap-2">
                          Learn More <ChevronRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                      {product.external && (
                        <a href={product.external} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 gap-2">
                            Visit <ExternalLink className="w-3.5 h-3.5" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── IT Consulting ─── */}
        <section id="it-consulting" className="py-24 sm:py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">IT Consulting</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                    Strategic technology advisory
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We help businesses navigate complex technology landscapes, modernize legacy systems, and build the digital capabilities needed to compete and win. We work as an extension of your team — not just as advisors.
                  </p>
                </div>
                <div className="flex lg:justify-end gap-8 flex-wrap">
                  {[
                    { value: "50+", label: "Projects Completed" },
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "24h", label: "Response Time" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Service Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {itConsultingServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 h-full hover:border-primary/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Process */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-center mb-8">How we work</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {itProcess.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <GlassCard className="p-6 h-full text-center">
                      <p className="text-4xl font-bold text-primary/30 mb-4">{step.step}</p>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/25 text-black font-semibold"
                  data-testid="button-consulting-cta"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── AIP ─── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-10 md:p-14" glow>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">AIP — AI Integration Platform</p>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Bring AI into every corner of your business
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our AI Integration Platform helps businesses harness machine learning, predictive analytics, and generative AI — from strategy through to deployment and optimization. We make AI practical, not just theoretical.
                  </p>
                  <ul className="space-y-2 mb-8">
                    {["Custom AI model development", "Intelligent process automation", "LLM & Generative AI integration", "Responsible AI governance"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/aip">
                    <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2" data-testid="link-aip">
                      Explore AIP <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {[
                    { label: "Industries Served", value: "10+" },
                    { label: "Models Deployed", value: "30+" },
                    { label: "Avg. Accuracy", value: "93%" },
                    { label: "Automation Rate", value: "60%" },
                  ].map((stat) => (
                    <GlassCard key={stat.label} className="p-5 text-center">
                      <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </GlassCard>
                  ))}
                </motion.div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ─── Future of Future ─── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-10 md:p-14 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                    Coming Soon
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Future of Future —{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">
                    Free global SMS for everyone
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
                  We believe communication is a fundamental human right. Our biggest initiative yet: free, unlimited, worldwide text messaging — available to every person on the planet, with no fees, no barriers, and no borders.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { value: "8B+", label: "People to reach" },
                    { value: "$0", label: "Cost per message" },
                    { value: "195", label: "Countries" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/future">
                  <Button className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 gap-2" data-testid="link-future">
                    Learn About the Initiative <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </GlassCard>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-12 text-center" glow>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4">Ready to build something great?</h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                  Whether you need a product built, a strategy shaped, or AI embedded into your workflow — let's talk.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/25 text-black font-semibold px-8"
                    data-testid="button-cta-contact"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
