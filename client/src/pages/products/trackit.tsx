import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  BarChart3,
  Users,
  Clock,
  Zap,
  Target,
  Bell,
  GitBranch,
  ChevronLeft,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const features = [
  { icon: Target, title: "Task Management", description: "Create, assign, and track tasks with ease. Set priorities, deadlines, and dependencies." },
  { icon: Users, title: "Team Collaboration", description: "Keep your entire team aligned with real-time updates, comments, and mentions." },
  { icon: BarChart3, title: "Progress Analytics", description: "Visualize project health with burndown charts, velocity tracking, and custom dashboards." },
  { icon: Clock, title: "Time Tracking", description: "Log hours directly on tasks. Generate accurate timesheets and billing reports." },
  { icon: Bell, title: "Smart Notifications", description: "Stay informed with intelligent alerts for deadlines, blockers, and team updates." },
  { icon: GitBranch, title: "Sprint Planning", description: "Run agile sprints with backlog management, sprint boards, and retrospective tools." },
];

export default function TrackItPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

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
                <Zap className="w-3.5 h-3.5" />
                Live Product
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                    TrackIt
                  </h1>
                  <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                    The modern project and task tracking platform built for teams that move fast and ship consistently.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    From solo developers to enterprise teams, TrackIt adapts to how you work. Plan sprints, track progress, collaborate seamlessly, and ship on time — every time.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://trackit.roaradd.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/25 text-black font-semibold"
                        data-testid="button-visit-trackit"
                      >
                        Visit TrackIt
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                        Request Demo
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div>
                  <GlassCard className="p-6" glow>
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-emerald-400 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Q2 Product Launch</p>
                        <p className="text-xs text-muted-foreground">Sprint 4 — In Progress</p>
                      </div>
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                        On Track
                      </span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { task: "Design system update", status: "done", user: "AL" },
                        { task: "API endpoint refactor", status: "done", user: "MK" },
                        { task: "Beta testing phase", status: "progress", user: "SJ" },
                        { task: "Documentation", status: "progress", user: "PR" },
                        { task: "Final QA review", status: "todo", user: "AL" },
                      ].map((item) => (
                        <div key={item.task} className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                              item.status === "done"
                                ? "bg-primary border-primary"
                                : item.status === "progress"
                                ? "border-primary/60 bg-primary/20"
                                : "border-white/20"
                            }`}
                          />
                          <span
                            className={`text-sm flex-1 ${
                              item.status === "done" ? "line-through text-muted-foreground" : ""
                            }`}
                          >
                            {item.task}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium">
                            {item.user}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Progress</span>
                        <span>60%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[60%] bg-gradient-to-r from-primary to-emerald-400 rounded-full" />
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Everything your team needs</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Powerful features designed to keep projects moving and teams productive.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 h-full hover:border-primary/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Start tracking smarter today</h2>
              <p className="text-muted-foreground mb-8">
                Join teams already using TrackIt to ship faster and stay organized.
              </p>
              <a href="https://trackit.roaradd.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-emerald-500 text-black font-semibold shadow-xl shadow-primary/25"
                >
                  Get Started Free
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
