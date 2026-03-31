import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import TrackItPage from "@/pages/products/trackit";
import FarmPage from "@/pages/products/farm";
import AIPPage from "@/pages/services/aip";
import FuturePage from "@/pages/future";
import WhyRoaraddPage from "@/pages/why-roaradd";
import ContactPage from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products/trackit" component={TrackItPage} />
      <Route path="/products/farm" component={FarmPage} />
      <Route path="/services/aip" component={AIPPage} />
      <Route path="/future" component={FuturePage} />
      <Route path="/why-roaradd" component={WhyRoaraddPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
