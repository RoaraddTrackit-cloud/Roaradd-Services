import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  title: string;
  category?: string;
  description?: string;
}

export default function ComingSoon({ 
  title = "Resource", 
  category = "Coming Soon",
  description = "We are currently preparing this section with in-depth technical documentation, guides, and specifications. Check back shortly or reach out to our engineering team."
}: ComingSoonProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      
      <main className="pt-24 pb-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-8 cursor-pointer">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-600/10 border border-primary/20 flex items-center justify-center shadow-xl shadow-primary/10">
                  <Clock className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>

              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-primary/10 border-primary/20 text-primary uppercase tracking-widest text-xs">
                {category}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                {title} <span className="text-gradient">Under Construction</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="gradient" asChild>
                  <Link href="/contact">Talk to us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/photonic-cpo">Explore Products</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
