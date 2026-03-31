import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Target,
  BarChart3,
  Shield,
  Layers,
  Globe,
  CheckCircle2,
  ChevronLeft,
  Clock,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const services = [
  { icon: Target, title: "IT Strategy & Roadmapping", description: "Align your technology investments with business goals through comprehensive IT strategy and multi-year roadmaps." },
  { icon: TrendingUp, title: "Digital Transformation", description: "Guide your organization through digital change — from legacy systems to modern cloud-native architectures." },
  { icon: Layers, title: "Enterprise Architecture", description: "Design scalable, resilient enterprise architectures that support growth and adaptability." },
  { icon: Shield, title: "IT Risk & Compliance", description: "Identify risks, ensure regulatory compliance, and build robust governance frameworks." },
  { icon: Globe, title: "Cloud Strategy", description: "Develop a clear cloud adoption strategy — hybrid, multi-cloud, or full migration — tailored to your needs." },
  { icon: Lightbulb, title: "Technology Evaluation", description: "Unbiased assessment of technologies and vendors to ensure you invest in the right tools." },
];

const process = [
  { step: "01", title: "Discovery", description: "Deep dive into your current IT landscape, business objectives, and pain points." },
  { step: "02", title: "Analysis", description: "Assess gaps, risks, and opportunities across your technology stack and processes." },
  { step: "03", title: "Strategy", description: "Deliver a clear, actionable IT roadmap aligned with your business priorities." },
  { step: "04", title: "Implementation Support", description: "Work alongside your team to execute the strategy and ensure successful outcomes." },
];

export default function ITConsultingPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-primary/5 pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link href="/">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-home">
                  <ChevronLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="w-3.5 h-3.5" />
                Service
              </div>
              <div className="max-w-3xl">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                  IT Consulting
                </h1>
                <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                  Strategic technology advisory to drive your business forward with confidence.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our IT consulting practice helps organizations navigate complex technology landscapes, modernize legacy systems, and build the digital capabilities needed to compete and win. We work as an extension of your team, not just as advisors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/25 text-black font-semibold"
                      data-testid="button-consulting-contact"
                    >
                      Start a Conversation
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "5+", label: "Years Experience" },
                { value: "24h", label: "Response Time" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What we offer</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Comprehensive IT consulting services tailored to your organization's needs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
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
          </div>
        </section>

        {/* Process */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our process</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A proven methodology that delivers measurable results.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-6 h-full text-center">
                    <p className="text-4xl font-bold text-primary/30 mb-4">{step.step}</p>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to transform your IT?</h2>
              <p className="text-muted-foreground mb-8">
                Let's start with a no-obligation discovery call to understand your challenges and goals.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-emerald-500 text-black font-semibold shadow-xl shadow-primary/25"
                  data-testid="button-consulting-cta"
                >
                  Book a Discovery Call
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
