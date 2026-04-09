import { Link } from "wouter";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Zap,
  ChevronLeft,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const contactReasons = [
  { icon: Zap, label: "Start a Project", description: "Tell us what you're building and let's make it happen." },
  { icon: Users, label: "IT Consulting", description: "Get expert advice on your technology strategy." },
  { icon: MessageSquare, label: "Product Demo", description: "See TrackIt or Farm in action with a live demo." },
  { icon: Mail, label: "General Inquiry", description: "Any other questions? We're happy to help." },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link href="/">
                <button
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                  data-testid="link-back-home"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-3.5 h-3.5" />
                Let's Talk
              </div>

              <div className="max-w-2xl mb-14">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-5">
                  Contact Us
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, need strategic advice, or just want to learn more — reach out and we'll get back to you promptly.
                </p>
              </div>

              {/* Primary contact card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-14"
              >
                <GlassCard className="p-8 sm:p-12" glow>
                  <h2 className="text-2xl font-bold mb-8 text-center">Get in touch</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
                    <a
                      href="mailto:Contactus@roaradd.com"
                      className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                      data-testid="link-email"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">Email us at</p>
                        <p className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors" data-testid="text-email">
                          Contactus@roaradd.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+917345460143"
                      className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
                      data-testid="link-phone"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                        <Phone className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">Call us at</p>
                        <p className="font-semibold text-sm group-hover:text-emerald-400 transition-colors" data-testid="text-phone">
                          +91 73454 60143
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Global — Remote First
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Typical response within 24 hours
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Currently accepting new clients
                    </span>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Reason cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold mb-5 text-center text-muted-foreground">How can we help?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {contactReasons.map((reason, i) => (
                    <motion.div
                      key={reason.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <GlassCard className="p-5 text-center h-full hover:border-primary/20 transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                          <reason.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{reason.label}</h3>
                        <p className="text-xs text-muted-foreground">{reason.description}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
