import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const studies = [
  {
    id: 1,
    title: "Revolutionizing Beekeeping with PoleHive",
    excerpt: "How a local apiary increased honey yield by 40% using our autonomous smart hive technology.",
    date: "April 5, 2026",
    category: "AgriTech",
    author: "RoarAdd Team",
    readTime: "10 min read",
    href: "/ideas/polehive"
  },
  {
    id: 2,
    title: "Scaling Enterprise Analytics for Fleet Management",
    excerpt: "Implementation of SolarEye across a fleet of 500 vehicles to optimize route efficiency.",
    date: "March 22, 2026",
    category: "Fleet Intelligence",
    author: "Kalyan Modium",
    readTime: "12 min read",
    href: "/ideas/solareye"
  },
  {
    id: 3,
    title: "AI-to-AI Transaction Protocol in Fintech",
    excerpt: "A pilot program using our AIP gateway to automate B2B negotiations and payments.",
    date: "February 18, 2026",
    category: "Fintech",
    author: "Marcus T.",
    readTime: "15 min read",
    href: "/services/aip"
  }
];

export default function CaseStudies() {
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
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-primary/10 border-primary/20 text-primary uppercase tracking-widest text-xs">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Real Results. <br /><span className="text-gradient">Case Studies.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Detailed breakdowns of how RoarAdd products and services solve complex challenges and drive measurable impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={study.href}>
                    <Card className="glass-panel h-full hover:border-white/20 transition-all group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="text-xs">{study.category}</Badge>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" /> {study.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">{study.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mt-4">
                          {study.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            By <span className="text-white font-medium">{study.author}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{study.date}</div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          Read Case Study <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
