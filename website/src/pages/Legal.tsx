import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Legal({ type = "privacy" }: { type?: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-24 pb-20">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-8 cursor-pointer">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>
              
              <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-primary/10 border-primary/20 text-primary uppercase tracking-widest text-xs">
                Legal & Governance
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                {isPrivacy ? "Privacy Policy" : "Terms of Service"}
              </h1>
              
              <p className="text-sm text-muted-foreground mb-12">
                Last updated: August 2026 · RoarAdd LLC (Loganville, Georgia)
              </p>

              <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
                <section>
                  <h2 className="text-xl font-bold text-white mb-3">1. Overview & Commitment</h2>
                  <p>
                    RoarAdd LLC (&ldquo;RoarAdd&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides enterprise software, hardware co-packaged optics architectures, and autonomous AI integration platforms. We are committed to maintaining rigorous data privacy, enterprise-grade security controls, and transparent governance for all visitors, customers, and autonomous protocol agents.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-3">2. Data Collection & Processing</h2>
                  <p>
                    We collect minimal personal information strictly necessary for commercial engagement, technical support, and account provisioning. We do not sell, rent, or monetize customer telemetry, proprietary source code, or candidate records to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-3">3. Autonomous Agent & API Protocol Standards</h2>
                  <p>
                    All interactions via our AI-Native Integration Platform (AIP) and Agent-to-Agent (A2A) endpoints adhere to verified cryptographic identity standards. High-risk financial, contractual, or operational actions require mandatory human-in-the-loop validation.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-3">4. Security & Compliance</h2>
                  <p>
                    RoarAdd enforces TLS 1.3 encryption in transit, AES-256 at rest, and strict zero-trust IAM boundaries across all cloud infrastructures.
                  </p>
                </section>

                <section className="pt-4 border-t border-white/5">
                  <h2 className="text-xl font-bold text-white mb-3">5. Contact Information</h2>
                  <p>
                    For inquiries regarding privacy, governance, or legal terms, contact our administrative office:
                  </p>
                  <p className="mt-2 text-white font-medium">
                    Email: <a href="mailto:kalyan.modium@roaradd.com" className="text-primary hover:underline">kalyan.modium@roaradd.com</a><br />
                    RoarAdd LLC · Loganville, Georgia, USA
                  </p>
                </section>
              </div>

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
