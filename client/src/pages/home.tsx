import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Code2,
  Smartphone,
  Brain,
  Users,
  Globe,
  Rocket,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero */}
        <section className="relative py-28 sm:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-3.5 h-3.5" />
                Building the future of digital solutions
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Technology that{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                  roars
                </span>{" "}
                forward
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Roaradd delivers cutting-edge software products and IT services that transform businesses and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/25 text-black font-semibold px-8"
                    data-testid="button-hero-cta"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/why-roaradd">
                  <Button size="lg" variant="outline" className="gap-2 border-white/10 hover:bg-white/5">
                    Why Roaradd
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "30+", label: "Happy Clients" },
                { value: "2", label: "Live Products" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Products</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built for real-world impact</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Software products that solve real problems — from project tracking to smart agriculture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "TrackIt",
                  tag: "Live",
                  description: "A powerful project and task tracking platform that keeps teams aligned and projects on schedule.",
                  href: "/products/trackit",
                  external: "https://trackit.roaradd.com",
                  icon: Code2,
                  color: "from-primary to-emerald-400",
                },
                {
                  name: "Farm",
                  tag: "Live",
                  description: "Smart agricultural management platform helping farmers optimize yields and manage resources intelligently.",
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

        {/* Services Preview */}
        <section className="py-24 sm:py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Services</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Expert services, real results</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From strategic IT consulting to cutting-edge AI integration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "IT Consulting",
                  href: "/services/it-consulting",
                  icon: Users,
                  description: "Strategic technology advisory to align your IT infrastructure with business objectives.",
                  highlights: ["Digital Transformation", "IT Strategy", "Technology Roadmaps"],
                },
                {
                  name: "AIP — AI Integration Platform",
                  href: "/services/aip",
                  icon: Brain,
                  description: "Harness the power of AI to automate, predict, and innovate across your entire business.",
                  highlights: ["AI Strategy", "Custom AI Models", "Process Automation"],
                },
              ].map((service) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-8 h-full hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 gap-2">
                        Learn More <ChevronRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                  Let's discuss how Roaradd can help transform your vision into reality.
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
