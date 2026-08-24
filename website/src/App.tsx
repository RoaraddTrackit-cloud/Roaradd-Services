import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  BookOpen, 
  Bot, 
  Briefcase, 
  Building2, 
  ChevronDown, 
  ChevronRight,
  Code2, 
  Cpu, 
  FileCode, 
  FileText, 
  Hexagon, 
  History, 
  LayoutDashboard, 
  Leaf, 
  Lightbulb, 
  Lock, 
  Mail, 
  Menu, 
  Network, 
  Pill, 
  Sun, 
  Users, 
  Users2, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

import Home from "@/pages/Home";
import PhotonicCPO from "@/pages/PhotonicCPO";
import PharmaTrade from "@/pages/PharmaTrade";
import Trackit from "@/pages/Trackit";
import Farm from "@/pages/Farm";
import ITConsulting from "@/pages/ITConsulting";
import AIP from "@/pages/AIP";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Ideas from "@/pages/Ideas";
import SolarEye from "@/pages/SolarEye";
import PoleHive from "@/pages/PoleHive";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import Whitepapers from "@/pages/Whitepapers";
import ComingSoon from "@/pages/ComingSoon";
import SolutionDetail from "@/pages/SolutionDetail";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

interface NavItem {
  href: string;
  icon: any;
  name: string;
  desc: string;
}

interface DropdownProps {
  label: string;
  items: NavItem[];
  currentPath: string;
}

function NavDropdown({ label, items, currentPath }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isActive = items.some(item => item.href === currentPath || (item.href !== "/" && currentPath.startsWith(item.href)));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div 
      ref={dropdownRef} 
      className="relative" 
      onMouseEnter={() => setOpen(true)} 
      onMouseLeave={() => setOpen(false)}
    >
      <button 
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors py-2 px-2 rounded-lg cursor-pointer ${
          isActive || open ? "text-white font-semibold" : "text-muted-foreground hover:text-white"
        }`}
        onClick={() => setOpen(!open)}
        onFocus={() => setOpen(true)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${label} menu`}
      >
        {label} 
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.97 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="menu"
            aria-label={`${label} submenu`}
            className="absolute top-full left-0 w-72 p-2 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-2xl shadow-2xl shadow-black/70 z-50 space-y-1"
          >
            {items.map((item) => {
              const isItemActive = currentPath === item.href;
              const Icon = item.icon;
              return item.href.startsWith("http") ? (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  role="menuitem"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </a>
              ) : (
                <Link key={item.name} href={item.href}>
                  <div 
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl transition-all group cursor-pointer ${
                      isItemActive ? "bg-white/10 border border-primary/20" : "hover:bg-white/5"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      isItemActive ? "bg-primary text-white" : "bg-white/5 group-hover:bg-primary/20 text-primary"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors ${isItemActive ? "text-primary font-semibold" : "text-white group-hover:text-primary"}`}>
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
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
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Products (strict order per master spec)
  const products: NavItem[] = [
    { href: "/photonic-cpo", icon: Cpu, name: "Photonic-CPO v4", desc: "Silicon Photonics for AI clusters" },
    { href: "/trackit", icon: LayoutDashboard, name: "Trackit", desc: "Real-time analytics & KPI dashboards" },
    { href: "/farm", icon: Leaf, name: "Farm", desc: "Field-level farm management" },
    { href: "/pharma-trade", icon: Pill, name: "PharmaTrade", desc: "Pharmaceutical trading platform" },
    { href: "/ideas/solareye", icon: Sun, name: "SolarEye", desc: "Road-as-a-sensor fleet intelligence" },
    { href: "/ideas/polehive", icon: Hexagon, name: "PoleHive", desc: "Smart beehive system" },
  ];

  // Solutions (NEW industry / use-case focused)
  const solutions: NavItem[] = [
    { href: "/solutions/ai-infrastructure", icon: Cpu, name: "AI Infrastructure & GPU Clusters", desc: "Sub-picosecond optical cluster fabrics" },
    { href: "/solutions/agriculture", icon: Leaf, name: "Agriculture & Precision Farming", desc: "Circular hydroponics & field telemetry" },
    { href: "/solutions/enterprise-ops", icon: LayoutDashboard, name: "Enterprise Operations & Analytics", desc: "Real-time KPI & telemetry command" },
    { href: "/solutions/ai-agents", icon: Bot, name: "Autonomous AI Agents", desc: "AI-to-AI orchestration & human gates" },
    { href: "/solutions/it-modernization", icon: Building2, name: "IT Modernization & Cloud", desc: "Cloud migration & zero-trust architecture" },
  ];

  // Resources
  const resources: NavItem[] = [
    { href: "/blog", icon: BookOpen, name: "Blog", desc: "Insights & technology deep dives" },
    { href: "/case-studies", icon: FileText, name: "Case Studies", desc: "Enterprise deployments & results" },
    { href: "/whitepapers", icon: FileCode, name: "Whitepapers", desc: "Technical architecture papers" },
    { href: "/docs", icon: Code2, name: "Documentation", desc: "API reference & developer guides" },
    { href: "/changelog", icon: History, name: "Changelog", desc: "Platform updates & releases" },
  ];

  // Company
  const company: NavItem[] = [
    { href: "/about", icon: Users, name: "About Us", desc: "Our story, mission & principles" },
    { href: "/team", icon: Users2, name: "Team", desc: "Leadership & engineering practice" },
    { href: "/careers", icon: Briefcase, name: "Careers", desc: "Join our engineering & product team" },
    { href: "/contact", icon: Mail, name: "Contact", desc: "Get in touch with our team" },
    { href: "/ideas", icon: Lightbulb, name: "Ideas Lab", desc: "Concepts & innovations" },
  ];

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "border-b border-white/10 bg-background/90 backdrop-blur-xl shadow-lg shadow-black/30" 
          : "border-b border-white/5 bg-background/60 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo + Primary Nav Links */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <Network className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Roar<span className="text-primary">Add</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavDropdown label="Products" items={products} currentPath={location} />
            <NavDropdown label="Solutions" items={solutions} currentPath={location} />
            
            {/* AIP Top-Level Link */}
            <Link href="/aip">
              <div 
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                  location === "/aip" || location === "/services/aip"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-white"
                }`}
                title="AI-Native Integration Platform — AI-native integration platform for high-order autonomous enterprise workflows and API orchestration."
              >
                AIP
              </div>
            </Link>

            <NavDropdown label="Resources" items={resources} currentPath={location} />
            <NavDropdown label="Company" items={company} currentPath={location} />
          </div>
        </div>

        {/* Right Side Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <span className="text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer px-2 py-1">
              Contact
            </span>
          </Link>

          <a 
            href="https://recruit.roaradd.com/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all flex items-center gap-1.5"
          >
            <Lock className="w-3.5 h-3.5" /> Employee Login
          </a>

          <Button size="sm" variant="gradient" asChild className="shadow-lg shadow-primary/20">
            <Link href="/contact">Talk to us</Link>
          </Button>

          <Button size="sm" variant="outline" asChild className="border-white/10 hover:border-white/20">
            <Link href="/ideas">💡 Ideas Lab</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden text-muted-foreground hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Over Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }} 
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }} 
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }} 
            transition={{ duration: 0.25, ease: "easeInOut" }} 
            className="lg:hidden border-t border-white/10 bg-background/98 backdrop-blur-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 py-5 space-y-6">
              
              {/* Products Section */}
              <div>
                <div className="px-3 pb-2 text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" /> Products
                </div>
                <div className="space-y-1">
                  {products.map((p) => (
                    <Link key={p.href} href={p.href}>
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <p.icon className="w-4 h-4 text-primary" />
                          <div>
                            <span className="font-medium text-white">{p.name}</span>
                            <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Solutions Section */}
              <div>
                <div className="px-3 pb-2 text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Network className="w-3.5 h-3.5" /> Solutions
                </div>
                <div className="space-y-1">
                  {solutions.map((s) => (
                    <Link key={s.href} href={s.href}>
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <s.icon className="w-4 h-4 text-cyan-400" />
                          <div>
                            <span className="font-medium text-white">{s.name}</span>
                            <p className="text-[11px] text-muted-foreground">{s.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* AIP Section */}
              <div>
                <Link href="/aip">
                  <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-white hover:bg-purple-500/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Bot className="w-5 h-5 text-purple-400" />
                      <div>
                        <span className="font-semibold text-white">AIP Platform</span>
                        <p className="text-[11px] text-purple-200/80">AI-native integration platform for autonomous workflows</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                  </div>
                </Link>
              </div>

              {/* Resources & Company Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="px-3 pb-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Resources</div>
                  <div className="space-y-1">
                    {resources.map((r) => (
                      <Link key={r.href} href={r.href}>
                        <div className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                          {r.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="px-3 pb-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Company</div>
                  <div className="space-y-1">
                    {company.map((c) => (
                      <Link key={c.href} href={c.href}>
                        <div className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                          {c.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA Footer */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Button size="lg" variant="gradient" asChild className="w-full justify-center shadow-xl shadow-primary/20">
                  <Link href="/contact">Talk to us</Link>
                </Button>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <Button size="sm" variant="outline" asChild className="flex-1 border-white/10">
                    <Link href="/ideas">💡 Ideas Lab</Link>
                  </Button>
                  <a 
                    href="https://recruit.roaradd.com/login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-xs text-center font-semibold py-2 px-3 rounded-md border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors"
                  >
                    🔐 Employee Login
                  </a>
                </div>
              </div>

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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Network className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">Roar<span className="text-primary">Add</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infrastructure and intelligence for the next generation of industry.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/photonic-cpo" className="hover:text-white transition-colors">Photonic-CPO v4</Link></li>
              <li><Link href="/trackit" className="hover:text-white transition-colors">Trackit</Link></li>
              <li><Link href="/farm" className="hover:text-white transition-colors">Farm</Link></li>
              <li><Link href="/pharma-trade" className="hover:text-white transition-colors">PharmaTrade</Link></li>
              <li><Link href="/ideas/solareye" className="hover:text-white transition-colors">SolarEye</Link></li>
              <li><Link href="/ideas/polehive" className="hover:text-white transition-colors">PoleHive</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions/ai-infrastructure" className="hover:text-white transition-colors">AI Infrastructure</Link></li>
              <li><Link href="/solutions/agriculture" className="hover:text-white transition-colors">Precision Agriculture</Link></li>
              <li><Link href="/solutions/enterprise-ops" className="hover:text-white transition-colors">Enterprise Operations</Link></li>
              <li><Link href="/solutions/ai-agents" className="hover:text-white transition-colors">Autonomous AI Agents</Link></li>
              <li><Link href="/solutions/it-modernization" className="hover:text-white transition-colors">IT Modernization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/whitepapers" className="hover:text-white transition-colors">Whitepapers</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/ideas" className="hover:text-white transition-colors">Ideas Lab</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} RoarAdd LLC. All rights reserved. Loganville, GA.</p>
          <div className="flex flex-wrap gap-6 items-center">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/aip" className="hover:text-white transition-colors">AIP Gateway</Link>
            <a href="mailto:kalyan.modium@roaradd.com" className="hover:text-white transition-colors">kalyan.modium@roaradd.com</a>
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
        {/* Core & Home */}
        <Route path="/" component={Home} />

        {/* Products */}
        <Route path="/photonic-cpo" component={PhotonicCPO} />
        <Route path="/products/photonic-cpo" component={PhotonicCPO} />
        <Route path="/pharma-trade" component={PharmaTrade} />
        <Route path="/products/pharma-trade" component={PharmaTrade} />
        <Route path="/trackit" component={Trackit} />
        <Route path="/farm" component={Farm} />
        <Route path="/ideas/solareye" component={SolarEye} />
        <Route path="/ideas/polehive" component={PoleHive} />

        {/* Solutions (Industry & Use-Case Focused) */}
        <Route path="/solutions/ai-infrastructure">
          {() => <SolutionDetail solutionKey="ai-infrastructure" />}
        </Route>
        <Route path="/solutions/agriculture">
          {() => <SolutionDetail solutionKey="agriculture" />}
        </Route>
        <Route path="/solutions/enterprise-ops">
          {() => <SolutionDetail solutionKey="enterprise-ops" />}
        </Route>
        <Route path="/solutions/ai-agents">
          {() => <SolutionDetail solutionKey="ai-agents" />}
        </Route>
        <Route path="/solutions/it-modernization">
          {() => <SolutionDetail solutionKey="it-modernization" />}
        </Route>

        {/* AIP & Services */}
        <Route path="/aip" component={AIP} />
        <Route path="/services/aip" component={AIP} />
        <Route path="/services/it-consulting" component={ITConsulting} />

        {/* Company */}
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/careers">
          {() => (
            <ComingSoon 
              title="Careers & Opportunities" 
              category="Careers" 
              description="We are actively expanding our engineering, systems architecture, and autonomous AI research teams. Open positions and developer listings will be posted here shortly."
            />
          )}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/ideas" component={Ideas} />

        {/* Resources */}
        <Route path="/blog" component={Blog} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/whitepapers" component={Whitepapers} />
        <Route path="/docs">
          {() => (
            <ComingSoon 
              title="Technical Documentation" 
              category="Documentation" 
              description="Comprehensive API references, SDK documentation, and architecture integration guides are currently being prepared."
            />
          )}
        </Route>
        <Route path="/documentation">
          {() => (
            <ComingSoon 
              title="Technical Documentation" 
              category="Documentation" 
              description="Comprehensive API references, SDK documentation, and architecture integration guides are currently being prepared."
            />
          )}
        </Route>
        <Route path="/changelog">
          {() => (
            <ComingSoon 
              title="Platform Changelog" 
              category="Changelog" 
              description="Track the latest feature releases, performance improvements, and protocol updates across the RoarAdd ecosystem."
            />
          )}
        </Route>

        {/* Legal */}
        <Route path="/privacy">
          {() => <Legal type="privacy" />}
        </Route>
        <Route path="/terms">
          {() => <Legal type="terms" />}
        </Route>

        {/* 404 Fallback */}
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
        <WouterRouter>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
