import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageWrapper, GlassCard } from "@/components/layout";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Loader2,
  MessageSquare,
  Users,
  Zap,
  CheckCircle2,
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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@roaradd.com",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-3.5 h-3.5" />
                Let's Talk
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you have a project in mind, need strategic advice, or just want to learn more about what we do — we'd love to hear from you.
              </p>
            </motion.div>

            {/* Contact Reasons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {contactReasons.map((reason, i) => (
                <motion.div
                  key={reason.label}
                  initial={{ opacity: 0, y: 20 }}
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

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6">
                    <h2 className="font-semibold mb-5">Get in touch</h2>
                    <div className="space-y-4">
                      {[
                        { icon: Mail, label: "Email", value: "hello@roaradd.com" },
                        { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                        { icon: MapPin, label: "Location", value: "Global — Remote First" },
                        { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{item.label}</p>
                            <p className="text-sm font-medium">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6 mt-6">
                    <h3 className="font-semibold mb-3">What happens next?</h3>
                    <div className="space-y-3">
                      {[
                        "We review your message within 24 hours",
                        "We schedule a discovery call",
                        "We send a tailored proposal",
                        "We get to work!",
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-primary font-semibold">{i + 1}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8" glow>
                  <h2 className="font-semibold text-lg mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Name *</label>
                        <Input
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50"
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Email *</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50"
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Company</label>
                        <Input
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50"
                          data-testid="input-company"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Phone</label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Subject</label>
                      <Input
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50"
                        data-testid="input-subject"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        placeholder="Tell us about your project, challenge, or question..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50 min-h-[140px] resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-lg shadow-primary/25 text-black font-semibold"
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Currently accepting new clients</p>
                    <p className="text-sm text-muted-foreground">We have capacity for 3 new projects this quarter.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available now — Typical response within 24 hours
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
