import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Camera, Droplets, Leaf, Lock, Microscope, Rocket, Sun, Thermometer } from "lucide-react";

const features = [
  { icon: Sun, title: "Solar-Powered Cone", desc: "Wrap-around cone-shaped solar cap provides 24/7 autonomy for sensors, cameras, and smart locks.", color: "text-yellow-400", bg: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/20" },
  { icon: Rocket, title: "Modular Architecture", desc: "Separate chambers for brood, queen management, honey storage, and ventilation for colony health optimization.", color: "text-orange-400", bg: "from-orange-500/20 to-orange-500/5 border-orange-500/20" },
  { icon: Camera, title: "Unified Camera View", desc: "Single consolidated internal view of the entire colony plus 360° external monitoring for site security.", color: "text-blue-400", bg: "from-blue-500/20 to-blue-500/5 border-blue-500/20" },
  { icon: Droplets, title: "Non-Invasive Extraction", desc: "Flow-Hive-inspired honey-on-tap system harvests without opening the hive or disturbing brood.", color: "text-cyan-400", bg: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20" },
  { icon: Lock, title: "Role-Based Access", desc: "App-controlled, biometric-authenticated harvest lockout with full audit logging and tamper alerts.", color: "text-purple-400", bg: "from-purple-500/20 to-purple-500/5 border-purple-500/20" },
  { icon: Thermometer, title: "Full Sensor Suite", desc: "Temperature, humidity, weight, acoustic, vibration, CO2, moisture, and thermal imaging.", color: "text-pink-400", bg: "from-pink-500/20 to-pink-500/5 border-pink-500/20" },
  { icon: Microscope, title: "Pest Detection", desc: "AI-powered detection of varroa mites, small hive beetles, wax moths, and rodent intrusion.", color: "text-green-400", bg: "from-green-500/20 to-green-500/5 border-green-500/20" },
  { icon: Leaf, title: "Remote Connectivity", desc: "Cellular/LoRaWAN uplink enables cloud analytics, mobile app control, and predictive alerts.", color: "text-emerald-400", bg: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20" },
];

const specs = [
  { label: "Mounting Height", value: "15-20 ft", unit: "predator-resistant elevation" },
  { label: "Total Weight (dry)", value: "85 lbs", unit: "with 3-month honey load: ~160 lbs" },
  { label: "Solar Cap Output", value: "240W", unit: "wrap-around cone architecture" },
  { label: "Battery Capacity", value: "60kWh", unit: "7-day cloudy autonomy" },
  { label: "Brood Capacity", value: "40,000 bees", unit: "single healthy colony" },
  { label: "Annual Honey Yield", value: "80 lbs", unit: "temperate climate average" },
];

export default function PoleHive() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Link href="/ideas">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4" /> Back to Ideas Lab
                </button>
              </Link>
              <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-green-500/10 border-green-500/20 text-green-400 uppercase tracking-widest text-xs">02 — Smart Agriculture</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                PoleHive<br /><span className="text-gradient">The Future of Beekeeping</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                PoleHive One is a next-generation smart beehive mounted 15-20 feet above ground, combining traditional beekeeping wisdom with advanced automation, non-invasive honey extraction, and continuous remote monitoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" className="gap-2">View Design Docs <ArrowRight className="w-4 h-4" /></Button>
                <Button variant="outline" className="gap-2">Prototype Roadmap</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Image */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video flex items-center justify-center relative">
              <img src="/generated-image (2).png" alt="PoleHive One smart beehive mounted on pole with solar cone" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Platform Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">Colony Intelligence</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 h-full hover:border-white/20 transition-all group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <f.icon className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <h3 className="font-bold text-base mb-2">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Cutaway */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Hive Chamber Architecture</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">Internal Systems Diagram</h2>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[2/1] flex items-center justify-center relative">
                <img src="/generated-image (1).png" alt="PoleHive One internal systems diagram showing chambers and sensors" className="w-full h-full object-cover" />
              </div>
            </motion.div>
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
                    <p className="text-xs font-mono uppercase tracking-wider text-green-400 mb-2">{s.label}</p>
                    <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.unit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Dashboard */}
        <section className="py-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Data Analytics Ecosystem</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">Sensor Network & App View</h2>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[2/1] flex items-center justify-center relative">
                <img src="/generated-image.png" alt="PoleHive sensor ecosystem with mobile app and cloud analytics" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel rounded-3xl p-10 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Elevate Your Apiary</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Discuss custom deployments, research partnerships, or Gen 1 production availability.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gradient" asChild className="gap-2">
                  <a href="mailto:kalyan.modium@roaradd.com?subject=PoleHive Inquiry">Request Prototype <ArrowRight className="w-4 h-4" /></a>
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
