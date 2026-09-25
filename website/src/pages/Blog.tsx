import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { POSTS } from "./blog-data";

export default function Blog() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
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
                RoarAdd Insights
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                The <span className="text-gradient">RoarAdd Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Short notes from the team on agent infrastructure, farm telemetry, and building with human oversight.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {POSTS.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="glass-panel h-full hover:border-white/20 transition-all group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{post.category}</Badge>
                          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            By <span className="text-white font-medium">{post.author}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{post.date}</div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
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
