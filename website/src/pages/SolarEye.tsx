import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Battery, Brain, Radio, Shield, Zap, Wifi } from "lucide-react";

const features = [
  { icon: Zap, title: "Solar Battery", desc: "Self-contained power system enabling 24/7 operation on commercial vehicles without parasitic drain.", color: "text-yellow-400", bg: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/20" },
  { icon: Brain, title: "Edge AI Processing", desc: "Onboard neural processing unit detects hazards in real-time, reducing bandwidth needs by 97%.", color: "text-purple-400", bg: "from-purple-500/20 to-purple-500/5 border-purple-500/20" },
  { icon: Radio, title: "Starlink Uplink", desc: "Satellite connectivity enables rural fleet coverage where cellular networks don't reach.", color: "text-blue-400", bg: "from-blue-500/20 to-blue-500/5 border-blue-500/20" },
  { icon: Shield, title: "Tamper-Proof Cartridge", desc: "Hot-swap NVMe data modules with hardware-signed chain of custody for evidence integrity.", color: "text-green-400", bg: "from-green-500/20 to-green-500/5 border-green-500/20" },
  { icon: Wifi, title: "Federated Learning", desc: "Distributed ML across heterogeneous fleets — no raw video leaves the vehicle.", color: "text-cyan-400", bg: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20" },
  { icon: Battery, title: "Real-Time Hazard Broadcast", desc: "Ice patches, construction, accidents detected and broadcast to AVs within seconds.", color: "text-orange-400", bg: "from-orange-500/20 to-orange-500/5 border-orange-500/20" },
];

const specs = [
  { label: "Solar Output", value: "180W", unit: "peak capacity, passive cooling" },
  { label: "Battery Capacity", value: "48kWh", unit: "5-day autonomy, cloudy conditions" },
  { label: "Edge AI Processor", value: "100 TOPS", unit: "real-time object detection at vehicle speed" },
  { label: "Bandwidth Savings", value: "97%", unit: "vs. continuous video upload" },
  { label: "Coverage Area", value: "1,000 units", unit: "southeast regional deployment Phase 1" },
  { label: "MTBF", value: "25,000 hrs", unit: "sealed cartridge design, 8-year durability" },
];

export default function SolarEye() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Link href="/ideas">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4" /> Back to Ideas Lab
                </button>
              </Link>
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-cyan-500/10 border-cyan-500/20 text-cyan-400 uppercase tracking-widest text-xs">01 — Fleet Intelligence</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                SolarEye<br /><span className="text-gradient">The Road as a Sensor</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                SolarEye transforms commercial fleets into a distributed sensor network. Every USPS, UPS, and FedEx vehicle becomes a node in a live, solar-powered intelligence platform that detects road hazards, maps construction zones, and broadcasts safety-critical data to autonomous vehicles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" className="gap-2">View Case Study <ArrowRight className="w-4 h-4" /></Button>
                <Button variant="outline" className="gap-2">Tech Specs</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Image */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
              <img src="/images/solareye-fleet-hero.png" alt="SolarEye solar-powered vehicle-mounted camera system" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <Zap className="w-12 h-12 mb-3 opacity-20" />
                <p className="text-sm opacity-40">SolarEye Fleet Hero Image</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Platform Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">Built for the Road</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 h-full hover:border-white/20 transition-all group">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <f.icon className={`w-6 h-6 ${f.color}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Technical Specifications</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">Performance Numbers</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specs.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <div className="glass-panel p-6 rounded-2xl border border-white/10">
                    <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">{s.label}</p>
                    <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.unit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Image */}
        <section className="py-8 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Data Ecosystem</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">Sensor Network Diagram</h2>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[2/1] flex items-center justify-center relative">
                <img src="/images/solareye-ecosystem-diagram.png" alt="SolarEye data ecosystem and sensor network diagram" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <Radio className="w-12 h-12 mb-3 opacity-20" />
                  <p className="text-sm opacity-40">SolarEye Ecosystem Diagram</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel rounded-3xl p-10 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Interested in SolarEye?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Partner with us on the Phase 1 Georgia pilot deployment or discuss fleet integration opportunities.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gradient" asChild className="gap-2">
                  <a href="mailto:kalyan.modium@roaradd.com?subject=SolarEye Partnership Inquiry">Request Demo <ArrowRight className="w-4 h-4" /></a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/ideas">Back to Ideas Lab</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
