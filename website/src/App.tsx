import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useRef, useEffect } from "react";
import { Bot, Building2, ChevronDown, LayoutDashboard, Leaf, Menu, Network, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Home from "@/pages/Home";
import Trackit from "@/pages/Trackit";
import Farm from "@/pages/Farm";
import ITConsulting from "@/pages/ITConsulting";
import AIP from "@/pages/AIP";
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
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl p-2 z-50">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const products = [
    { href: "/trackit", icon: LayoutDashboard, name: "Trackit", desc: "Smart analytics & tracking" },
    { href: "/farm", icon: Leaf, name: "Farm", desc: "Modern farm management" },
  ];
  const services = [
    { href: "/services/it-consulting", icon: Building2, name: "IT Consulting", desc: "Cloud, enterprise & strategy" },
    { href: "/services/aip", icon: Bot, name: "AIP — AI to AI", desc: "Agent-to-agent gateway" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20">
              <Network className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Roar<span className="text-primary">Add</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Home</Link>
          <Dropdown label="Products" items={products} />
          <Dropdown label="Services" items={services} />
          <Link href="/#resources" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Resources</Link>
          <Link href="/#company" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Company</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" variant="ghost" asChild>
            <Link href="/services/it-consulting">Contact</Link>
          </Button>
          <Button size="sm" variant="gradient" asChild>
            <a href="https://roaradd.com/Fruiture" target="_blank" rel="noopener noreferrer">Launch Fruiture</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-muted-foreground hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-1">
          <Link href="/" className="block py-2 text-sm text-muted-foreground hover:text-white">Home</Link>
          <div className="pt-2 pb-1 text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest">Products</div>
          <Link href="/trackit" className="block py-2 text-sm text-muted-foreground hover:text-white">Trackit</Link>
          <Link href="/farm" className="block py-2 text-sm text-muted-foreground hover:text-white">Farm</Link>
          <div className="pt-2 pb-1 text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest">Services</div>
          <Link href="/services/it-consulting" className="block py-2 text-sm text-muted-foreground hover:text-white">IT Consulting</Link>
          <Link href="/services/aip" className="block py-2 text-sm text-muted-foreground hover:text-white">AIP — AI to AI</Link>
          <div className="pt-4">
            <Button size="sm" variant="gradient" className="w-full" asChild>
              <a href="https://roaradd.com/Fruiture" target="_blank" rel="noopener noreferrer">Launch Fruiture</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Network className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">Roar<span className="text-primary">Add</span></span>
            </div>
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
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/services/it-consulting" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} RoarAdd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">API Status</a>
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
