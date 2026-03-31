import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Heart,
  Shield,
  Users,
  Globe,
  Target,
  Lightbulb,
  CheckCircle2,
  ChevronLeft,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const reasons = [
  {
    icon: Target,
    title: "Results-First Mentality",
    description: "We don't measure success by lines of code or hours billed. We measure it by the real business outcomes we help you achieve. Every decision we make is tied to your goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Without Complexity",
    description: "We believe the best technology is technology that works. We bring cutting-edge solutions to the table while keeping implementation practical, maintainable, and understandable.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We work as an extension of your team, not as an outside vendor. You get full transparency, direct communication, and a team that genuinely cares about your success.",
  },
  {
    icon: Shield,
    title: "Unwavering Quality",
    description: "We hold ourselves to the highest standards. Every product we ship, every service we deliver is built to last — robust, secure, and scalable for the future.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "We take deadlines seriously. Through careful planning, clear communication, and agile execution, we consistently deliver on time and within scope.",
  },
  {
    icon: Globe,
    title: "Global Impact, Local Care",
    description: "We build solutions with global ambitions while giving each client the personal attention they deserve. You're never just a ticket number to us.",
  },
];

const values = [
  { icon: Heart, title: "Integrity", description: "We say what we mean and do what we say. Always." },
  { icon: Zap, title: "Excellence", description: "Good enough is never good enough for us." },
  { icon: TrendingUp, title: "Growth", description: "We grow alongside our clients and constantly improve." },
  { icon: Star, title: "Boldness", description: "We tackle hard problems that others shy away from." },
];

export default function WhyRoaraddPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link href="/">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-home">
                  <ChevronLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              <div className="max-w-3xl">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                  Why{" "}
                  <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    Roaradd?
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  In a world full of technology companies, Roaradd stands apart. Here's why businesses choose us — and stay with us.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We founded Roaradd with a simple belief: technology should empower people, not confuse them. Every product we build, every service we offer starts with deep understanding of the human and business need behind it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-8 md:p-12" glow>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Our Mission</p>
                <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
                  "To build technology that roars forward — powering businesses with software products and services that create lasting, meaningful impact."
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Reasons */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What sets us apart</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Six reasons our clients keep coming back and sending referrals.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 h-full hover:border-primary/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <reason.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our core values</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The principles that guide every decision we make.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What our clients say</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Roaradd didn't just deliver what we asked for — they helped us realize what we actually needed. The result was better than we imagined.",
                  name: "Sarah M.",
                  role: "CTO, FinTech Startup",
                },
                {
                  quote: "Their IT consulting transformed our approach to technology. We went from reactive firefighting to proactive innovation in just 6 months.",
                  name: "David K.",
                  role: "Director of IT, Manufacturing Co.",
                },
                {
                  quote: "TrackIt has become indispensable for our team. Roaradd built a product that actually fits how developers work.",
                  name: "Priya R.",
                  role: "Engineering Manager, SaaS Company",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-black font-bold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Experience the Roaradd difference</h2>
              <p className="text-muted-foreground mb-8">
                Let's start a conversation about how we can help your business thrive.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-emerald-500 text-black font-semibold shadow-xl shadow-primary/25"
                  data-testid="button-why-cta"
                >
                  Work With Us
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
