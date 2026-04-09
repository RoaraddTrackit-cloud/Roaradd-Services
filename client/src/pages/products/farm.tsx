import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper, GlassCard } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Sun,
  Droplets,
  Wind,
  Zap,
  ChevronLeft,
  Thermometer,
  FlaskConical,
  CircleDot,
  Layers,
  BatteryCharging,
  Warehouse,
  ArrowDownRight,
  RefreshCw,
} from "lucide-react";
import farmDiagram from "@assets/scientific_circular_agri_system_once_acre_integrated_farm_v3_1775066381943.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const subsystems = [
  {
    icon: Sun,
    color: "yellow",
    title: "Solar Energy System",
    subtitle: "45kW peak · 100kWh battery storage",
    description:
      "Solar panels cover the entire roof surface, generating up to 45kW at peak irradiance. A 100kWh battery bank ensures round-the-clock power for all subsystems — lighting, pumps, climate control, and cold storage — with zero grid dependency as the target.",
    specs: [
      { label: "Peak Generation", value: "45 kW" },
      { label: "Battery Capacity", value: "100 kWh" },
      { label: "Coverage", value: "Full roof" },
    ],
  },
  {
    icon: Layers,
    color: "brown",
    title: "Mushroom Room",
    subtitle: "Substrate 24.1°C · Moisture 75% · Stack 3.5m",
    description:
      "The mushroom cultivation chamber maintains precise microclimate conditions for mycelium growth. Substrate blocks are stacked to 3.5m with 1.1m aisle widths for harvesting access. The room is a natural CO₂ factory — exhaled carbon dioxide from the mycelium respiration is the key input for the next system in the loop.",
    specs: [
      { label: "Substrate Temp", value: "24.1°C" },
      { label: "Internal Moisture", value: "75%" },
      { label: "Stack Height", value: "3.5 m" },
      { label: "Aisle Width", value: "1.1 m" },
    ],
  },
  {
    icon: Wind,
    color: "teal",
    title: "CO₂ Transfer & DAC System",
    subtitle: "0.8 m/s airflow · 92% capture efficiency",
    description:
      "The Direct Air Capture (DAC) connecting duct is the heart of the circular loop. CO₂ exhaled by mushroom mycelium — typically vented to waste in conventional farms — is captured at 92% efficiency and channelled at 0.8 m/s through insulated transfer ducts directly into the hydroponic chamber. Microgreens and hydroponic crops absorb this CO₂ for photosynthesis, accelerating growth without synthetic CO₂ injection.",
    specs: [
      { label: "Airflow Speed", value: "0.8 m/s" },
      { label: "Capture Efficiency", value: "92%" },
      { label: "Source", value: "Mushroom CO₂" },
      { label: "Destination", value: "Hydroponic Chamber" },
    ],
  },
  {
    icon: Droplets,
    color: "blue",
    title: "Hydroponic Chamber",
    subtitle: "2.1 L/min nutrient flow · 50-micron mist · 0.6m tray separation",
    description:
      "The hydroponic chamber operates on a precision aeroponics/NFT hybrid. Nutrient solution flows at 2.1 L/min across multi-tiered trays spaced 0.6m apart — maximising vertical space while allowing light penetration. 50-micron misting nozzles coat root zones with a fine aerosol, reducing water use by up to 90% versus soil farming. CO₂ enrichment from the mushroom room pushes photosynthesis rates significantly above ambient levels.",
    specs: [
      { label: "Nutrient Flow", value: "2.1 L/min" },
      { label: "Mist Droplet Size", value: "50 micron" },
      { label: "Tray Separation", value: "0.6 m" },
      { label: "CO₂ Source", value: "Mushroom DAC" },
    ],
  },
  {
    icon: Wind,
    color: "green",
    title: "Cross Ventilation Design",
    subtitle: "Passive airflow · Gravel permeable surface",
    description:
      "The building is oriented to exploit prevailing winds for passive cross ventilation, reducing mechanical cooling loads. Gravel permeable surfaces on both the roof and the exterior perimeter manage rainwater runoff naturally — recharging groundwater and preventing heat island effects. The native species test plot on site supports biodiversity and pollinator health.",
    specs: [
      { label: "Roof Surface", value: "Gravel permeable" },
      { label: "Exterior", value: "Gravel permeable" },
      { label: "Ventilation", value: "Passive cross-flow" },
      { label: "Biodiversity", value: "Native species plot" },
    ],
  },
  {
    icon: Thermometer,
    color: "cyan",
    title: "Process Room & Cold Storage",
    subtitle: "6m × 8m process area · 3m × 3m walk-in cooler at 2°C",
    description:
      "The main process room (6m × 8m) handles washing, trimming, packaging, and quality control for all produce. Directly adjacent, the walk-in cooler maintains a storage temperature of 2°C — preserving microgreens, mushrooms, and produce at peak freshness and extending shelf life for distribution.",
    specs: [
      { label: "Process Room", value: "6m × 8m" },
      { label: "Walk-in Cooler", value: "3m × 3m" },
      { label: "Storage Temp", value: "2°C" },
    ],
  },
];

const colorMap: Record<string, { icon: string; badge: string; stat: string }> = {
  yellow:  { icon: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",  badge: "text-yellow-400",  stat: "text-yellow-400" },
  brown:   { icon: "bg-amber-700/10 border-amber-700/20 text-amber-500",      badge: "text-amber-500",    stat: "text-amber-500" },
  teal:    { icon: "bg-teal-500/10 border-teal-500/20 text-teal-400",         badge: "text-teal-400",     stat: "text-teal-400" },
  blue:    { icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",         badge: "text-blue-400",     stat: "text-blue-400" },
  green:   { icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", badge: "text-emerald-400", stat: "text-emerald-400" },
  cyan:    { icon: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",         badge: "text-cyan-400",     stat: "text-cyan-400" },
};

const circularSteps = [
  { step: "01", from: "Solar Roof", arrow: "powers", to: "All Subsystems", icon: Sun, color: "yellow" },
  { step: "02", from: "Mushroom Room", arrow: "exhales CO₂ →", to: "DAC Transfer Duct", icon: FlaskConical, color: "brown" },
  { step: "03", from: "DAC Duct (92%)", arrow: "delivers CO₂ →", to: "Hydroponic Chamber", icon: Wind, color: "teal" },
  { step: "04", from: "Microgreens", arrow: "absorb CO₂, produce", to: "Oxygen + Yield", icon: Leaf, color: "green" },
  { step: "05", from: "Nutrient Loop", arrow: "recirculates →", to: "Zero Waste Water", icon: Droplets, color: "blue" },
  { step: "06", from: "Harvest", arrow: "moves to", to: "2°C Cold Storage", icon: Warehouse, color: "cyan" },
];

export default function FarmPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link href="/">
                <button
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                  data-testid="link-back-home"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to Home
                </button>
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                <Leaf className="w-3.5 h-3.5" />
                Scientific Circular Agriculture
              </div>

              <div className="max-w-4xl mb-10">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Farm{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    by Roaradd
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                  A one-acre, fully integrated circular farm — where mushroom CO₂ feeds microgreens, solar panels power everything, and not a single resource goes to waste.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-3xl text-sm">
                  Built around the principle that every output of one system is the input of another. From the DAC CO₂ transfer duct connecting the mushroom room to the hydroponic chamber, to the gravel permeable surfaces managing rainwater — every element is engineered to close the loop.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 shadow-xl shadow-emerald-500/25 text-black font-semibold"
                    data-testid="button-farm-demo"
                  >
                    Request a Walkthrough
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                    Partner With Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Farm Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <GlassCard className="overflow-hidden" glow>
                  <div className="p-3 border-b border-white/5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <span className="text-xs text-muted-foreground">Scientific Circular Agri System — 1 Acre Integrated Farm (v3)</span>
                  </div>
                  <img
                    src={farmDiagram}
                    alt="One-acre integrated circular farm diagram showing mushroom room, hydroponic chamber, CO₂ DAC transfer system, solar panels, and process room"
                    className="w-full object-contain"
                    data-testid="img-farm-diagram"
                  />
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Stats Bar */}
        <section className="py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
              {[
                { value: "45kW", label: "Solar Peak", color: "text-yellow-400" },
                { value: "100kWh", label: "Battery Storage", color: "text-yellow-400" },
                { value: "92%", label: "CO₂ Capture", color: "text-teal-400" },
                { value: "0.8 m/s", label: "DAC Airflow", color: "text-teal-400" },
                { value: "50μm", label: "Mist Droplet", color: "text-blue-400" },
                { value: "2°C", label: "Cold Storage", color: "text-cyan-400" },
              ].map((s) => (
                <div key={s.label} data-testid={`stat-farm-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Circular Loop */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-4">
                <RefreshCw className="w-3 h-3" />
                The Circular Loop
              </div>
              <h2 className="text-4xl font-bold mb-3">Every output feeds the next system</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nothing is wasted. CO₂ that would be exhausted becomes photosynthesis fuel. Solar energy that would be lost becomes battery reserve. Water that would run off becomes groundwater recharge.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {circularSteps.map((step, i) => {
                const colors = colorMap[step.color] || colorMap.green;
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <GlassCard className="p-5 h-full hover:border-emerald-500/15 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${colors.icon}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-muted-foreground/50 tracking-widest">STEP {step.step}</span>
                          <p className="font-semibold text-sm mt-0.5">{step.from}</p>
                          <p className={`text-xs mt-0.5 ${colors.badge}`}>{step.arrow}</p>
                          <p className="font-semibold text-sm">{step.to}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Subsystem Deep Dives */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-3">Subsystem Breakdown</h2>
              <p className="text-muted-foreground max-w-2xl">
                Six precision-engineered systems working in concert. Each one optimised independently, each one dependent on the others.
              </p>
            </motion.div>

            <div className="space-y-6">
              {subsystems.map((sys, i) => {
                const colors = colorMap[sys.color] || colorMap.green;
                const Icon = sys.icon;
                return (
                  <motion.div
                    key={sys.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                  >
                    <GlassCard className="p-6 sm:p-8 hover:border-emerald-500/15 transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border ${colors.icon}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg leading-tight" data-testid={`text-farm-subsystem-${i}`}>
                                {sys.title}
                              </h3>
                              <p className={`text-xs font-medium mt-0.5 ${colors.badge}`}>{sys.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sys.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 content-start">
                          {sys.specs.map((spec) => (
                            <div
                              key={spec.label}
                              className="bg-white/3 border border-white/5 rounded-xl p-3"
                            >
                              <p className="text-xs text-muted-foreground mb-0.5">{spec.label}</p>
                              <p className={`text-base font-bold ${colors.stat}`}>{spec.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl font-bold mb-3">Why circular agriculture?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conventional farming treats every resource as a single-use input. Our model treats every output as a future input.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: CircleDot,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10 border-emerald-500/20",
                  title: "Zero CO₂ Waste",
                  description: "Mushroom mycelium respiration — normally vented — is captured at 92% efficiency and piped directly into the hydroponic chamber as plant fertiliser. CO₂ that was waste becomes growth.",
                },
                {
                  icon: BatteryCharging,
                  color: "text-yellow-400",
                  bg: "bg-yellow-500/10 border-yellow-500/20",
                  title: "Energy Independence",
                  description: "45kW solar peak combined with a 100kWh battery bank means the farm can run entirely off-grid. Pumps, climate control, lighting, and cold storage — all solar powered, all stored for overnight use.",
                },
                {
                  icon: Droplets,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10 border-blue-500/20",
                  title: "90% Less Water",
                  description: "50-micron misting nozzles and recirculating nutrient solution at 2.1 L/min use up to 90% less water than soil farming. Gravel permeable surfaces return surplus rainwater to the groundwater table.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <GlassCard className="p-6 h-full hover:border-emerald-500/15 transition-all duration-300">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${item.bg}`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <GlassCard className="p-10 sm:p-12" glow>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-5">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-3xl font-bold mb-3">Build your circular farm</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you're starting from scratch or retrofitting an existing facility — we can help you design, build, and monitor your integrated circular agricultural system.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold shadow-xl shadow-emerald-500/20"
                    data-testid="button-farm-cta"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
