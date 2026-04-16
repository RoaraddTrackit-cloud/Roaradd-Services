import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Download, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const whitepapers = [
  {
    id: 1,
    title: "The Architecture of Autonomous AI Agents",
    excerpt: "Exploring the protocol layer and safety gates required for secure AI-to-AI transactions in enterprise environments.",
    date: "April 10, 2026",
    category: "AI Safety",
    author: "Kalyan Modium",
    fileSize: "2.4 MB"
  },
  {
    id: 2,
    title: "IoT-Driven Sustainability in Modern Agriculture",
    excerpt: "A comprehensive guide on leveraging low-power sensor networks to reduce resource waste and increase harvest predictability.",
    date: "March 15, 2026",
    category: "Sustainability",
    author: "RoarAdd Research",
    fileSize: "3.1 MB"
  },
  {
    id: 3,
    title: "Edge AI in Fleet Operations: A New Paradigm",
    excerpt: "Analyzing the shift from centralized cloud processing to real-time edge intelligence for autonomous vehicle networks.",
    date: "February 28, 2026",
    category: "Edge Computing",
    author: "Marcus T.",
    fileSize: "1.8 MB"
  }
];

export default function Whitepapers() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <Link href="/">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-blue-500/10 border-blue-500/20 text-blue-400 uppercase tracking-widest text-xs">
                Technical Research
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Deep Dives & <br /><span className="text-gradient">Whitepapers.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Technical insights, industry analysis, and original research from the RoarAdd team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whitepapers.map((paper, i) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="glass-panel h-full hover:border-white/20 transition-all group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">{paper.category}</Badge>
                        <span className="text-xs text-muted-foreground">{paper.date}</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{paper.title}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {paper.excerpt}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          Authored by <span className="text-white font-medium">{paper.author}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2 text-xs">
                          <Download className="w-3.5 h-3.5" /> {paper.fileSize}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
