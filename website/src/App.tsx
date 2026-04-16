import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Building2, ChevronDown, LayoutDashboard, Leaf, Lightbulb, Mail, Menu, Network, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Home from "@/pages/Home";
import Trackit from "@/pages/Trackit";
import Farm from "@/pages/Farm";
import ITConsulting from "@/pages/ITConsulting";
import AIP from "@/pages/AIP";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Ideas from "@/pages/Ideas";
import SolarEye from "@/pages/SolarEye";
import PoleHive from "@/pages/PoleHive";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import Whitepapers from "@/pages/Whitepapers";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Dropdown({ label, items }: { label: string; items: { href: string; icon: React.ElementType; name: string; desc: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-white transition-colors">
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.97 }} transition={{ duration: 0.15 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl p-2 z-50">
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  useEffect(() => { setMobileOpen(false); }, [location]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const products = [
    { href: "/trackit", icon: LayoutDashboard, name: "Trackit", desc: "Smart analytics & tracking" },
    { href: "/farm", icon: Leaf, name: "Farm", desc: "Modern farm management" },
  ];
  const services = [
    { href: "/services/it-consulting", icon: Building2, name: "IT Consulting", desc: "Cloud, enterprise & strategy" },
    { href: "/services/aip", icon: Bot, name: "AIP — AI to AI", desc: "Agent-to-agent gateway" },
  ];
  const company = [
    { href: "/about", icon: Users, name: "About Us", desc: "Our story & team" },
    { href: "/contact", icon: Mail, name: "Contact", desc: "Get in touch" },
    { href: "/ideas", icon: Lightbulb, name: "Ideas Lab", desc: "Concepts & innovations" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/8 bg-background/90 backdrop-blur-xl shadow-lg shadow-black/20" : "border-b border-white/5 bg-background/60 backdrop-blur-xl"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/"><div className="flex items-center gap-2.5 cursor-pointer group"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform"><Network className="w-4.5 h-4.5 text-white" /></div><span className="text-lg font-bold tracking-tight text-white">Roar<span className="text-primary">Add</span></span></div></Link>
        <div className="hidden md:flex items-center gap-7">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Home</Link>
          <Dropdown label="Products" items={products} />
          <Dropdown label="Services" items={services} />
          <Link href="/#resources" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Resources</Link>
          <Dropdown label="Company" items={company} />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" variant="ghost" asChild><Link href="/contact">Contact</Link></Button>
          <Button size="sm" variant="gradient" asChild><Link href="/ideas">💡 Ideas Lab</Link></Button>
        </div>
        <button className="md:hidden text-muted-foreground hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="md:hidden border-t border-white/5 bg-background/98 backdrop-blur-xl overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all">Home</Link>
              <div className="pt-2 pb-1 px-3 text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest">Products</div>
              <Link href="/trackit" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all"><LayoutDashboard className="w-4 h-4 text-primary" /> Trackit</Link>
              <Link href="/farm" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all"><Leaf className="w-4 h-4 text-green-400" /> Farm</Link>
              <div className="pt-2 pb-1 px-3 text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest">Services</div>
              <Link href="/services/it-consulting" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all"><Building2 className="w-4 h-4 text-blue-400" /> IT Consulting</Link>
              <Link href="/services/aip" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all"><Bot className="w-4 h-4 text-purple-400" /> AIP — AI to AI</Link>
              <div className="pt-2 pb-1 px-3 text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest">Company</div>
              <Link href="/about" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all"><Users className="w-4 h-4 text-yellow-400" /> About Us</Link>
              <Link href="/contact" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all"><Mail className="w-4 h-4 text-pink-400" /> Contact</Link>
              <Link href="/ideas" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all"><Lightbulb className="w-4 h-4 text-yellow-400" /> Ideas Lab</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4"><div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center"><Network className="w-4 h-4 text-white" /></div><span className="font-bold text-white">Roar<span className="text-primary">Add</span></span></div>
            <p className="text-sm text-muted-foreground leading-relaxed">Products and services for the next generation of business.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/trackit" className="text-sm text-muted-foreground hover:text-white transition-colors">Trackit</Link></li>
              <li><Link href="/farm" className="text-sm text-muted-foreground hover:text-white transition-colors">Farm</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/it-consulting" className="text-sm text-muted-foreground hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link href="/services/aip" className="text-sm text-muted-foreground hover:text-white transition-colors">AIP — AI to AI</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/ideas" className="text-sm text-muted-foreground hover:text-white transition-colors">Ideas Lab</Link></li>
              <li><a href="mailto:kalyan.modium@roaradd.com" className="text-sm text-muted-foreground hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} RoarAdd LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/services/aip" className="hover:text-white transition-colors">API Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/trackit" component={Trackit} />
        <Route path="/farm" component={Farm} />
        <Route path="/services/it-consulting" component={ITConsulting} />
        <Route path="/services/aip" component={AIP} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/ideas" component={Ideas} />
        <Route path="/ideas/solareye" component={SolarEye} />
        <Route path="/ideas/polehive" component={PoleHive} />
        <Route path="/blog" component={Blog} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/whitepapers" component={Whitepapers} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
