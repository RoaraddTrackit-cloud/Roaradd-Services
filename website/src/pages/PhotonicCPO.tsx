import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Cpu,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Mail,
  Layers,
  Activity,
  Server,
  FileText
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

export default function PhotonicCPO() {
  const [gpuCount, setGpuCount] = useState(32000);
  const [electricityRate, setElectricityRate] = useState(0.12);

  // Math Calculations: 85% energy savings on SERDES interconnects
  const copperPowerMw = (gpuCount * 12.5 * 8) / 1_000_000; // ~3.2 MW for 32k GPUs
  const cpoPowerMw = copperPowerMw * 0.15; // 85% savings
  const savedPowerMw = copperPowerMw - cpoPowerMw;
  const annualSavingsUSD = savedPowerMw * 1000 * 8760 * electricityRate;

  return (
    <div className="min-pt-24 min-h-screen bg-background text-foreground pt-20">
      <div className="relative overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-primary/10 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-60 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

        {/* ─── Hero Section ─── */}
        <section className="relative py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                RoarAdd Hardware & Optics • Photonic-CPO v4
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Silicon Photonics{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-primary to-purple-400 bg-clip-text text-transparent">
                  Co-Packaged Optics v4
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Next-generation 800G / 1.6T optical engine designed to eliminate copper SERDES thermal bottlenecks, delivering an <b>85% reduction in interconnect power consumption</b> across hyperscale AI GPU clusters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#calculator">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-cyan-500 to-primary hover:from-cyan-400 hover:to-primary/90 text-black font-semibold shadow-xl shadow-cyan-500/25 px-8"
                  >
                    <Activity className="w-4 h-4" />
                    Calculate Energy Savings
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2 border-white/10 hover:bg-white/5 text-white">
                    <Mail className="w-4 h-4" />
                    Request Technical Briefing
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
                <p className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">85%</p>
                <p className="text-sm text-muted-foreground">Energy Draw Reduction</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">1.8 pJ/bit</p>
                <p className="text-sm text-muted-foreground">Energy Efficiency (vs 12.0 pJ/bit)</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1">800G / 1.6T</p>
                <p className="text-sm text-muted-foreground">Optical Switch Bandwidth</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">62%</p>
                <p className="text-sm text-muted-foreground">Net Contribution Margin</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Technical Specifications & Architectural Moat ─── */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Architectural Innovations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Engineered using wafer-scale 2.5D/3D packaging IP to replace power-hungry copper board traces with high-density laser optical engines.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">85% Energy Elimination</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                By co-packaging optical engines directly next to switch ASICs, CPO cuts signal drive voltage from 12.0 pJ/bit down to 1.8 pJ/bit, freeing up critical facility power.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-primary/20 bg-white/5 backdrop-blur-xl hover:border-primary/40 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">2.5D/3D Wafer Packaging</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilizes foundry silicon photonics process design kits (PDKs) and high-power External Laser Source (ELSFP) dies to deliver zero-latency optical interconnects.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Red-Team Audited</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pure-Python valuation math with Pydantic evidence verification. Passes 4-battery stress tests under +15% inflation with 62% contribution margins.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ─── Interactive Calculator Section ─── */}
        <section id="calculator" className="py-20 bg-gradient-to-b from-black/60 to-background border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Interactive Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">AI Cluster Energy & ROI Calculator</h2>
              <p className="text-muted-foreground">
                Estimate facility power recovery and annual utility cost savings for your GPU deployment.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    GPU Cluster Size: <span className="text-cyan-400 font-bold">{gpuCount.toLocaleString()} GPUs</span>
                  </label>
                  <input
                    type="range"
                    min="4000"
                    max="128000"
                    step="4000"
                    value={gpuCount}
                    onChange={(e) => setGpuCount(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>4K GPUs</span>
                    <span>128K GPUs</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Electricity Rate: <span className="text-emerald-400 font-bold">${electricityRate.toFixed(2)} / kWh</span>
                  </label>
                  <input
                    type="range"
                    min="0.06"
                    max="0.25"
                    step="0.01"
                    value={electricityRate}
                    onChange={(e) => setElectricityRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$0.06/kWh</span>
                    <span>$0.25/kWh</span>
                  </div>
                </div>
              </div>

              {/* Calculator Output */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-black/60 border border-white/5 text-center">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Legacy Copper Power</p>
                  <p className="text-2xl font-bold text-red-400">{copperPowerMw.toFixed(2)} MW</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Reclaimed MW Power</p>
                  <p className="text-2xl font-bold text-cyan-400">{savedPowerMw.toFixed(2)} MW</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Est. Annual Savings</p>
                  <p className="text-2xl font-bold text-emerald-400">${(annualSavingsUSD / 1_000_000).toFixed(2)} M/yr</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Executive Contact & Briefing CTA ─── */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-white/5 to-cyan-500/5 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Request Executive Briefing & Datasheet</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect directly with Kalyan Modium (Founder & Managing Director, RoarAdd LLC) to review 2.5D packaging benchmark packets and pilot availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 shadow-lg shadow-cyan-500/25">
                  <Mail className="w-4 h-4" />
                  Schedule Briefing Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
