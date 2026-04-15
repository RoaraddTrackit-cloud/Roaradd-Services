import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, Building2, LayoutDashboard, Leaf, Mail, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-16">
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-primary/10 border-primary/20 text-primary uppercase tracking-widest text-xs">Get in Touch</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Let's talk about <span className="text-gradient">your project.</span></h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Whether you are exploring our products, need IT consulting, or want to integrate AIP, we are here to help.</p>
            </motion.div>
          </div>
        </section>
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="glass-panel rounded-3xl p-8 border border-white/10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3">Message sent!</h3>
                      <p className="text-muted-foreground mb-6">We will get back to you within 1 to 2 business days.</p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>Send another</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Full Name</label>
                          <Input placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="bg-white/5 border-white/10" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Email</label>
                          <Input type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="bg-white/5 border-white/10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Company (optional)</label>
                        <Input placeholder="Your company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="bg-white/5 border-white/10" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Message</label>
                        <textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} required rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                      </div>
                      <Button type="submit" variant="gradient" size="lg" className="w-full gap-2">Send Message <ArrowRight className="w-4 h-4" /></Button>
                    </form>
                  )}
                </div>
              </motion.div>
              <div className="space-y-6">
                <div className="glass-panel rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-2"><Mail className="w-5 h-5 text-primary" /><h3 className="font-semibold text-white">Email</h3></div>
                  <a href="mailto:kalyan.modium@roaradd.com" className="text-muted-foreground hover:text-white">kalyan.modium@roaradd.com</a>
                </div>
                <div className="glass-panel rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-2"><MapPin className="w-5 h-5 text-green-400" /><h3 className="font-semibold text-white">Location</h3></div>
                  <p className="text-muted-foreground">Loganville, GA, United States</p>
                </div>
                <div className="glass-panel rounded-2xl p-6 border border-white/10">
                  <h3 className="font-semibold text-white mb-4">What can we help with?</h3>
                  <div className="space-y-2">
                    {[
                      { icon: LayoutDashboard, color: "text-primary", name: "Trackit", href: "/trackit" },
                      { icon: Leaf, color: "text-green-400", name: "Farm", href: "/farm" },
                      { icon: Building2, color: "text-blue-400", name: "IT Consulting", href: "/services/it-consulting" },
                      { icon: Bot, color: "text-purple-400", name: "AIP", href: "/services/aip" },
                    ].map(item => (
                      <Link key={item.name} href={item.href}>
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                          <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">{item.name}</span>
                          <ArrowRight className="w-3 h-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
