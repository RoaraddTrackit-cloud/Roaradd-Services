import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground px-6">
      <div className="text-center space-y-6">
        <AlertCircle className="w-16 h-16 text-primary mx-auto opacity-80" />
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          That URL is not a published RoarAdd page. Check the address or go back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="gradient" size="lg">Back to homepage</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">Contact us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
