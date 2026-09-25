import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PharmaTrade() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 pt-16">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-xs uppercase tracking-widest text-primary">Not a public product</p>
        <h1 className="text-4xl font-extrabold">PharmaTrade is not listed</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          PharmaTrade is not a current RoarAdd public product. If you followed an old link, the live platforms are Photonic-CPO, Trackit, Farm, and AIP.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="gradient" asChild>
            <Link href="/">Go to homepage</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Ask about status</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
