import RoaraddHero from "@/components/RoaraddHero";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Mail,
  MapPin,
  Loader2,
  Rocket,
  BarChart3,
  Globe,
  Cpu,
  Bot,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Clock,
  Target,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(34, 197, 94, 0.2)",
      "0 0 40px rgba(34, 197, 94, 0.4)",
      "0 0 20px rgba(34, 197, 94, 0.2)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function GlassCard({ children, className = "", glow = false }: { children: React.ReactNode; className?: string; glow?: boolean }) {
  return (
    <div className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl ${glow ? 'shadow-[0_0_30px_rgba(34,197,94,0.15)]' : ''} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {     if (id === "it-consulting") { window.location.href = "/it-consulting"; return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Zap className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight" data-testid="text-logo">Roaradd</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["services", "products", "roadmap", "contact", "it-consulting"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
                data-testid={`link-${item}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:flex gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-lg shadow-primary/25"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
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

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/5"
          >
            <nav className="flex flex-col gap-4">
              {["services", "products", "roadmap", "contact", "it-consulting"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => scrollToSection("contact")} className="w-full bg-gradient-to-r from-primary to-emerald-500">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge className="px-4 py-2 bg-primary/10 border-primary/20 text-primary" data-testid="badge-hero">
              <Sparkles className="w-3 h-3 mr-2" />
              Service-Oriented Technology Company
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            data-testid="text-hero-title"
          >
            Powering Your
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            data-testid="text-hero-description"
          >
            Roaradd is a service-oriented company delivering cutting-edge software solutions, 
            innovative products, and strategic technology consulting to transform businesses worldwide.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/30 text-lg px-8"
              data-testid="button-start-project"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="gap-2 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-lg px-8"
              data-testid="button-explore-services"
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard className="inline-block px-8 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { value: "100+", label: "Projects Delivered" },
                  { value: "99%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support Available" },
                  { value: "10+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={index} className="text-center" data-testid={`stat-${index}`}>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
    features: ["Full-stack Development", "API Integration", "Legacy Modernization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter Development"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your operations.",
    features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform your data into actionable insights with our data engineering expertise.",
    features: ["Data Pipelines", "Analytics", "Machine Learning"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security assessments and solutions.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Leverage artificial intelligence to automate processes and drive innovation.",
    features: ["AI Integration", "Process Automation", "Chatbots"],
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 bg-primary/10 border-primary/20 text-primary" data-testid="badge-services">
            <Layers className="w-3 h-3 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-services-title">
            Software Services That
            <br />
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive software development services designed to accelerate your
            digital transformation journey and achieve measurable outcomes.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard className="h-full p-6 hover:border-primary/30 transition-all duration-300 group" glow={false}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrackItSection() {
  return (
    <section id="products" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-emerald-500/5" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="overflow-hidden" glow={true}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 px-4 py-2 bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
                  <Rocket className="w-3 h-3 mr-2" />
                  Featured Product
                </Badge>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    TrackIt
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  The ultimate project and task management platform designed for modern teams. 
                  TrackIt streamlines workflows, enhances collaboration, and delivers actionable 
                  insights to keep your projects on track.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Real-time collaboration and task tracking",
                    "Intuitive Kanban boards and timeline views",
                    "Powerful analytics and reporting dashboards",
                    "Seamless integrations with your favorite tools",
                    "Enterprise-grade security and compliance",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://trackit.roaradd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  data-testid="link-trackit"
                >
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-xl shadow-primary/30"
                  >
                    Visit TrackIt
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="relative p-8 lg:p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5" />
                <motion.div
                  animate={glowPulse.animate}
                  className="relative w-full max-w-md"
                >
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-500 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">TrackIt Dashboard</h4>
                        <p className="text-sm text-muted-foreground">Project Overview</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-sm">Active Tasks</span>
                        <Badge variant="secondary">24</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-sm">Completed</span>
                        <Badge className="bg-primary/20 text-primary">156</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-sm">Team Members</span>
                        <Badge variant="secondary">12</Badge>
                      </div>
                    </div>

                    <div className="mt-6 h-24 rounded-lg bg-gradient-to-r from-primary/20 via-emerald-500/20 to-teal-500/20 flex items-end p-4">
                      <div className="flex gap-2 items-end w-full">
                        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-primary to-emerald-400 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

const roadmapItems = [
  {
    icon: Globe,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with AI-powered recommendations and analytics.",
    status: "Coming Q2 2026",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "IoT Management Suite",
    description: "Comprehensive platform for managing and monitoring IoT devices at scale.",
    status: "Coming Q3 2026",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "AI Assistant Platform",
    description: "Enterprise AI assistant with custom training and integration capabilities.",
    status: "Coming Q4 2026",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Data Analytics Hub",
    description: "Unified data analytics platform with real-time insights and visualization.",
    status: "Coming Q1 2027",
    color: "from-teal-500 to-green-500",
  },
];

function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
            <Target className="w-3 h-3 mr-2" />
            Future Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              {" "}Roadmap
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're constantly innovating and expanding our service offerings. 
            Here's a glimpse of what's coming next.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <GlassCard className="p-6 inline-block max-w-md">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {item.status}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </GlassCard>
                </div>

                <div className="relative flex-shrink-0 hidden lg:block">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg`} />
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? "right-full mr-4" : "left-full ml-4"} -translate-y-1/2 w-8 h-px bg-gradient-to-r ${item.color}`} />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 bg-primary/10 border-primary/20 text-primary" data-testid="badge-contact">
            <Mail className="w-3 h-3 mr-2" />
            Get in Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Reach out and let's discuss how Roaradd 
            can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-primary"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-primary"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-primary"
                    data-testid="input-company"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary resize-none"
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-lg shadow-primary/25"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a
                    href="mailto:hello@roaradd.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    hello@roaradd.com
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <span className="text-muted-foreground" data-testid="text-location">
                    San Francisco, CA & Remote Worldwide
                  </span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" glow={true}>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Why Choose Roaradd?
              </h4>
              <ul className="space-y-3">
                {[
                  "Expert team with 10+ years of experience",
                  "Transparent pricing with no hidden costs",
                  "Agile methodology for faster delivery",
                  "Dedicated support and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Roaradd</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-4">
              A service-oriented technology company delivering cutting-edge software solutions
              and innovative products to transform businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://trackit.roaradd.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2 border-white/10 bg-white/5">
                  <BarChart3 className="w-4 h-4" />
                  TrackIt
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Custom Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>AI & Automation</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="https://trackit.roaradd.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  TrackIt
                </a>
              </li>
              <li className="text-muted-foreground/50">E-Commerce (Coming Soon)</li>
              <li className="text-muted-foreground/50">IoT Suite (Coming Soon)</li>
              <li className="text-muted-foreground/50">AI Platform (Coming Soon)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            {currentYear} Roaradd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <RoaraddHero />
            <HeroSection />
        <ServicesSection />
        <TrackItSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
