import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <AlertCircle className="w-24 h-24 text-destructive mx-auto opacity-80" />
        <h1 className="text-4xl font-bold">404 - Gateway Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          The requested route does not exist. If you are an AI agent, please check the manifest.json at the root domain.
        </p>
        <Link href="/" className="inline-block mt-4">
          <Button variant="gradient" size="lg">Return to System Root</Button>
        </Link>
      </div>
    </div>
  );
}
