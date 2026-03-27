import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Bell, CheckCircle2, Globe, LayoutDashboard, Lock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards that update instantly. No more waiting for reports to run overnight.", color: "text-primary" },
  { icon: Users, title: "Team Dashboards", desc: "Every team member gets a personalized view of the metrics that matter to their role.", color: "text-blue-400" },
  { icon: Bell, title: "Smart Alerts", desc: "Set thresholds and get notified the moment something needs your attention.", color: "text-yellow-400" },
  { icon: Globe, title: "50+ Integrations", desc: "Connect Trackit to the tools you already use — Slack, Jira, Salesforce, and more.", color: "text-green-400" },
  { icon: Lock, title: "Enterprise Security", desc: "SOC 2-compliant infrastructure. Role-based access. Your data stays yours.", color: "text-red-400" },
  { icon: Zap, title: "No-Code Setup", desc: "Up and running in minutes. Drag-and-drop dashboard builder — no engineering needed.", color: "text-purple-400" },
];

const pricing = [
  { name: "Starter", price: "$29", period: "/mo", features: ["Up to 5 users", "10 dashboards", "30-day data history", "Email support"], cta: "Get Started", highlight: false },
  { name: "Growth", price: "$99", period: "/mo", features: ["Up to 25 users", "Unlimited dashboards", "1-year data history", "Priority support", "API access"], cta: "Start Free Trial", highlight: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited users", "Custom data retention", "Dedicated account manager", "SSO & advanced security", "Custom integrations"], cta: "Contact Sales", highlight: false },
];

export default function Trackit() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">Product</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Track everything. <span className="text-gradient">Miss nothing.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Trackit is the smart analytics and tracking platform for modern teams. From KPIs to daily tasks, get full visibility in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="gradient" className="gap-2 group">
                  Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">Watch Demo</Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="glass-panel rounded-3xl p-6 border border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs text-muted-foreground">Trackit Dashboard</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Monthly Revenue", value: "$48,200", change: "+12%", color: "text-green-400" },
                    { label: "Active Users", value: "2,841", change: "+8%", color: "text-green-400" },
                    { label: "Churn Rate", value: "1.4%", change: "-0.3%", color: "text-green-400" },
                    { label: "Tickets Open", value: "14", change: "-5", color: "text-green-400" },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-sm text-muted-foreground">{m.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white">{m.value}</span>
                        <Badge className={`text-xs ${m.color} bg-green-500/10 border-green-500/20`}>{m.change}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything your team needs</h2>
              <p className="text-muted-foreground text-lg">Built for teams that move fast and can't afford blind spots.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Card className="glass-panel h-full">
                    <CardHeader>
                      <f.icon className={`w-8 h-8 ${f.color} mb-2`} />
                      <CardTitle className="text-lg">{f.title}</CardTitle>
                      <CardDescription>{f.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-muted-foreground text-lg">Start free. Scale as you grow.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, i) => (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className={`glass-panel h-full ${plan.highlight ? 'border-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.15)]' : ''}`}>
                    <CardHeader>
                      {plan.highlight && <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">Most Popular</Badge>}
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                        <span className="text-muted-foreground mb-1">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.highlight ? "gradient" : "outline"}>{plan.cta}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-LINK */}
        <section className="py-16 border-t border-white/5 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-muted-foreground mb-4">Need Trackit deployed across your enterprise?</p>
            <Button variant="outline" asChild>
              <Link href="/services/it-consulting">See our IT Consulting services <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
