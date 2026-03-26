import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Menu,
  X,
  ChevronDown,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const navItems = [
  {
    label: "Products",
    children: [
      { label: "TrackIt", href: "/products/trackit", description: "Project & task tracking platform" },
      { label: "Farm", href: "/products/farm", description: "Smart agricultural management" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "IT Consulting", href: "/services/it-consulting", description: "Strategic technology advisory" },
      { label: "AIP", href: "/services/aip", description: "AI integration platform" },
    ],
  },
  { label: "Future of Future", href: "/future" },
  { label: "Why Roaradd", href: "/why-roaradd" },
  { label: "Contact Us", href: "/contact" },
];

function DropdownMenu({ items }: { items: { label: string; href: string; description: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 backdrop-blur-xl bg-black/80 border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
    >
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <div className="px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer group">
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {item.label}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <motion.div
                className="w-9 h-9 bg-gradient-to-br from-primary to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Zap className="w-4 h-4 text-black" />
              </motion.div>
              <span className="text-lg font-bold tracking-tight" data-testid="text-logo">
                Roaradd
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <DropdownMenu items={item.children} />
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.label} href={item.href!}>
                  <button
                    className={`px-3 py-2 text-sm transition-colors rounded-lg hover:bg-white/5 ${
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </button>
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button
                className="hidden sm:flex gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-lg shadow-primary/25 text-black font-semibold"
                data-testid="button-get-started"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-white/5"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full text-left px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {child.label}
                          </button>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link key={item.label} href={item.href!}>
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg"
                      >
                        {item.label}
                      </button>
                    </Link>
                  )
                )}
                <div className="pt-2">
                  <Link href="/contact">
                    <Button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full bg-gradient-to-r from-primary to-emerald-500 text-black font-semibold"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-emerald-400 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold">Roaradd</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building the future of digital solutions, one innovation at a time.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Products</p>
            <ul className="space-y-2">
              <li><Link href="/products/trackit"><span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">TrackIt</span></Link></li>
              <li><Link href="/products/farm"><span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Farm</span></Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Services</p>
            <ul className="space-y-2">
              <li><Link href="/services/it-consulting"><span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">IT Consulting</span></Link></li>
              <li><Link href="/services/aip"><span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">AIP</span></Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Company</p>
            <ul className="space-y-2">
              <li><Link href="/why-roaradd"><span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Why Roaradd</span></Link></li>
              <li><Link href="/future"><span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Future of Future</span></Link></li>
              <li><Link href="/contact"><span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Contact Us</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Roaradd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Global
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              hello@roaradd.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function GlassCard({
  children,
  className = "",
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl ${
        glow ? "shadow-[0_0_30px_rgba(34,197,94,0.15)]" : ""
      } ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
