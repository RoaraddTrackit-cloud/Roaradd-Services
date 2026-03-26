import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Bot,
  Zap,
  BarChart3,
  Shield,
  Layers,
  CheckCircle2,
  ChevronLeft,
  Cpu,
  GitBranch,
  Sparkles,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const capabilities = [
  { icon: Brain, title: "Custom AI Model Development", description: "Build and train AI models specific to your data and business domain for unmatched accuracy." },
  { icon: Bot, title: "Intelligent Automation", description: "Automate complex, decision-heavy workflows with AI agents that learn and adapt over time." },
  { icon: BarChart3, title: "Predictive Analytics", description: "Forecast trends, detect anomalies, and make proactive decisions powered by machine learning." },
  { icon: Layers, title: "AI Integration & APIs", description: "Seamlessly integrate AI capabilities into your existing applications and workflows via our APIs." },
  { icon: Cpu, title: "LLM & Generative AI", description: "Leverage large language models for content generation, summarization, and intelligent Q&A." },
  { icon: Shield, title: "Responsible AI & Governance", description: "Ensure your AI systems are transparent, fair, and compliant with regulations and ethics standards." },
];

const useCases = [
  { industry: "Healthcare", use: "Medical document analysis, diagnosis support, patient risk prediction" },
  { industry: "Finance", use: "Fraud detection, credit scoring, market trend analysis" },
  { industry: "Retail", use: "Demand forecasting, personalized recommendations, inventory optimization" },
  { industry: "Manufacturing", use: "Predictive maintenance, quality control, supply chain optimization" },
];

export default function AIPPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

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
                <Brain className="w-3.5 h-3.5" />
                Service
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3">
                    AIP
                  </h1>
                  <p className="text-2xl text-muted-foreground mb-4">AI Integration Platform</p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We help businesses harness the full power of artificial intelligence — from strategy and model development to deployment and ongoing optimization. AIP is our end-to-end AI service for the modern enterprise.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/25 text-black font-semibold"
                        data-testid="button-aip-contact"
                      >
                        Explore AIP
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div>
                  <GlassCard className="p-6" glow>
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-violet-500 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">AIP Live Dashboard</p>
                        <p className="text-xs text-muted-foreground">Model performance overview</p>
                      </div>
                      <span className="ml-auto flex items-center gap-1.5 text-xs text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Live
                      </span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { model: "Customer Churn Predictor", accuracy: 94, status: "Active" },
                        { model: "Demand Forecasting v2", accuracy: 91, status: "Active" },
                        { model: "Document Classifier", accuracy: 97, status: "Training" },
                      ].map((model) => (
                        <div key={model.model} className="bg-white/5 rounded-xl p-3">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium">{model.model}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              model.status === "Active"
                                ? "bg-primary/20 text-primary border border-primary/30"
                                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            }`}>
                              {model.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full"
                                style={{ width: `${model.accuracy}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">{model.accuracy}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      3 models actively processing data
                    </div>
                  </GlassCard>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Platform capabilities</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A full suite of AI services to address every aspect of your intelligent transformation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 h-full hover:border-primary/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <cap.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Industry applications</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                AIP delivers measurable value across a wide range of industries.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <GitBranch className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{uc.industry}</h3>
                      <p className="text-sm text-muted-foreground">{uc.use}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to become AI-powered?</h2>
              <p className="text-muted-foreground mb-8">
                Start with an AI readiness assessment — we'll identify the highest-impact opportunities in your business.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-emerald-500 text-black font-semibold shadow-xl shadow-primary/25"
                  data-testid="button-aip-cta"
                >
                  Get AI Assessment
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
