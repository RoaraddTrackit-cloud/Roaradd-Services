import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Pill,
  ShieldCheck,
  Zap,
  Activity,
  Mail,
  CheckCircle2,
  FileText,
  Building2,
  Lock,
  FlaskConical
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function PharmaTrade() {
  const [allocationUnits, setAllocationUnits] = useState(1500);
  const [unitPriceUsd, setUnitPriceUsd] = useState(4500);

  // Math Calculations: Apollo v4 68.5% Net Margin Arbitrage
  const grossRevenueUsd = allocationUnits * unitPriceUsd;
  const netContributionMarginUsd = grossRevenueUsd * 0.685;
  const threeYearCumulativeYieldUsd = netContributionMarginUsd * 2.71;

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="relative overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-primary/10 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-60 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

        {/* ─── Hero Section ─── */}
        <section className="relative py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                <Pill className="w-4 h-4" />
                RoarAdd Life Sciences • Apollo Protocol v4
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Specialized Pharma &{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Healthcare Trade Arbitrage
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Mitigating FDA essential drug shortages and securing high-purity biopharma allocations through <b>EU-GMP certified CDMO partnerships</b> and <b>DSCSA-compliant track & trace channels</b>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#calculator">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-semibold shadow-xl shadow-emerald-500/25 px-8"
                  >
                    <Activity className="w-4 h-4" />
                    Calculate Arbitrage Yield
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2 border-white/10 hover:bg-white/5 text-white">
                    <Mail className="w-4 h-4" />
                    Request Compliance Packet
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Key Performance Metrics Bar ─── */}
        <section className="py-12 border-y border-white/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">68.5% – 74.0%</p>
                <p className="text-sm text-muted-foreground">Net Contribution Margin</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-teal-300 mb-1">8.97 / 10</p>
                <p className="text-sm text-muted-foreground">Apollo v4 Caliber Score</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">$220M</p>
                <p className="text-sm text-muted-foreground">Combined Unrisked TAM</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">SAL 10⁻⁶</p>
                <p className="text-sm text-muted-foreground">Sterility Assurance Level</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Technical Specifications & Compliance Moat ─── */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Regulatory & Manufacturing Compliance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every pharmaceutical trade deal is backed by active Drug Master Files (DMFs), clean FDA EIR inspection histories, and zero active Import Alerts.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-white/5 backdrop-blur-xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Bachem DMF 032941 (GLP-1)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Solid-phase peptide precursor synthesis with HPLC purity ≥ 99.1% and endotoxin limits &lt; 0.05 EU/mg. 2,400 kg uncommitted intermediate capacity.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-xl hover:border-teal-500/40 transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Euroapi DMF 018420 (Oncology)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sterile injectable API supply lines for Cisplatin, Carboplatin, and Methotrexate. Gamma-sterilized single-use barrier containment (SAL 10⁻⁶).
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">DSCSA Track & Trace</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Interoperable EPCIS electronic data exchange for full US Drug Supply Chain Security Act compliance and Section 804 import protection.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ─── Interactive Calculator Section ─── */}
        <section id="calculator" className="py-20 bg-gradient-to-b from-black/60 to-background border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Interactive Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Pharma Allocation & Arbitrage Calculator</h2>
              <p className="text-muted-foreground">
                Estimate 3-year cumulative net yield and contribution margins for specialty pharmaceutical allocations.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Allocation Volume: <span className="text-emerald-400 font-bold">{allocationUnits.toLocaleString()} Units/kg</span>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={allocationUnits}
                    onChange={(e) => setAllocationUnits(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>500 Units</span>
                    <span>5,000 Units</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Unit Price: <span className="text-teal-300 font-bold">${unitPriceUsd.toLocaleString()} / Unit</span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={unitPriceUsd}
                    onChange={(e) => setUnitPriceUsd(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal-300"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$1,000</span>
                    <span>$15,000</span>
                  </div>
                </div>
              </div>

              {/* Calculator Output */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-black/60 border border-white/5 text-center">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Annual Gross Revenue</p>
                  <p className="text-2xl font-bold text-white">${(grossRevenueUsd / 1_000_000).toFixed(2)} M</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Annual Net Margin (68.5%)</p>
                  <p className="text-2xl font-bold text-emerald-400">${(netContributionMarginUsd / 1_000_000).toFixed(2)} M</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Est. 3-Year Cumulative Yield</p>
                  <p className="text-2xl font-bold text-teal-300">${(threeYearCumulativeYieldUsd / 1_000_000).toFixed(2)} M</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Executive Contact & Briefing CTA ─── */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-white/5 to-emerald-500/5 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Inspect Compliance & DMF Packets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect directly with Kalyan Modium (Founder & Managing Director, RoarAdd LLC) to review FDA FEI facility registrations and batch availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 shadow-lg shadow-emerald-500/25">
                  <Mail className="w-4 h-4" />
                  Schedule Executive Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
