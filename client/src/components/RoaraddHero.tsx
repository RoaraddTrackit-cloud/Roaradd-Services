export default function RoaraddHero() {
  return (
    <section className="roaradd-hero">
      <div className="roaradd-hero-inner">
        {/* Left: copy */}
        <div className="roaradd-hero-copy">
          <p className="roaradd-hero-kicker">
            IT portfolio &amp; transformation consulting for utilities and enterprises
          </p>

          <h1 className="roaradd-hero-title">
            Make your IT portfolio run like a profit center, not a cost sink.
          </h1>

          <p className="roaradd-hero-subtitle">
            Roaradd partners with utilities and mid&#8209;market enterprises to fix overloaded IT portfolios
            and complex SAP/AMI programs&#8212;unlocking 20%+ efficiency gains and multi&#8209;million cost savings.
          </p>

          <ul className="roaradd-hero-bullets">
            <li>Fractional IT Director support without adding full&#8209;time headcount.</li>
            <li>Transparent, defensible portfolio prioritization and governance.</li>
            <li>Rescues for troubled ERP and AMI/MDM transformations.</li>
          </ul>

          <div className="roaradd-hero-ctas">
            <a href="#contact" className="roaradd-btn roaradd-btn-primary">
              Book a Strategy Call
            </a>
            <a href="#resources" className="roaradd-btn roaradd-btn-ghost">
              View Playbooks &amp; Checklists
            </a>
          </div>

          <div className="roaradd-hero-proof">
            <span className="roaradd-proof-metric">20%+</span>
            <span className="roaradd-proof-text">
              portfolio efficiency improvement and over 15M in savings delivered across ERP &amp; AMI programs.
            </span>
          </div>
        </div>

        {/* Right: visual card */}
        <aside className="roaradd-hero-panel" aria-label="Sample portfolio impact">
          <div className="roaradd-panel-header">
            <span>Portfolio snapshot</span>
            <span className="roaradd-status-pill">Before &#8594; After</span>
          </div>
          <div className="roaradd-panel-grid">
            <div className="roaradd-panel-item">
              <span className="roaradd-label">Zombie projects</span>
              <span className="roaradd-chip roaradd-chip-danger">&#8722;35%</span>
            </div>
            <div className="roaradd-panel-item">
              <span className="roaradd-label">On&#8209;time delivery</span>
              <span className="roaradd-chip roaradd-chip-success">+22%</span>
            </div>
            <div className="roaradd-panel-item">
              <span className="roaradd-label">Business&#8209;aligned spend</span>
              <span className="roaradd-chip roaradd-chip-success">+18%</span>
            </div>
            <div className="roaradd-panel-item">
              <span className="roaradd-label">Exec. confidence</span>
              <span className="roaradd-chip">Board&#8209;ready</span>
            </div>
          </div>
          <p className="roaradd-panel-note">
            Example outcomes from a 12&#8209;month portfolio and transformation engagement.
          </p>
        </aside>
      </div>

      {/* Mini-services strip */}
      <div className="roaradd-services-strip" id="services">
        <h2 className="roaradd-services-heading">How Roaradd creates leverage for you</h2>
        <div className="roaradd-services-grid">
          <article className="roaradd-service-card">
            <h3>Fractional IT Director</h3>
            <p>
              Part&#8209;time executive leadership to align strategy, run governance, and make
              tough trade&#8209;offs without adding a full&#8209;time headcount.
            </p>
          </article>

          <article className="roaradd-service-card">
            <h3>Portfolio &amp; Prioritization Overhaul</h3>
            <p>
              8&#8211;12 week engagement to score, sequence, and right&#8209;size your IT portfolio with
              a model your teams can actually follow.
            </p>
          </article>

          <article className="roaradd-service-card">
            <h3>ERP / AMI Transformation Rescue</h3>
            <p>
              Focused intervention on troubled SAP or AMI/MDM programs&#8212;stabilizing delivery,
              clarifying scope, and getting you back on the business case.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
