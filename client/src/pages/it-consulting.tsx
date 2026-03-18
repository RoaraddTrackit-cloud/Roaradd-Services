export default function ITConsulting() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Roaradd</span>
            </a>
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; Back to Home
            </a>
          </div>
        </div>
      </div>
      <div className="pt-16 w-full" style={{ height: "100vh" }}>
        <iframe
          src="https://roaradd-services-554356588618.us-east1.run.app/"
          title="Roaradd IT Portfolio & Transformation Consulting"
          className="w-full border-0"
          style={{ height: "calc(100vh - 64px)" }}
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
