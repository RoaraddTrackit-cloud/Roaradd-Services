import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE = "https://roaradd.com";
const DEFAULT_TITLE = "RoarAdd — Infrastructure and intelligence for industry";
const DEFAULT_DESC =
  "AI-native software, silicon photonics, and autonomous agent gateways from RoarAdd LLC in Loganville, Georgia.";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "RoarAdd — Infrastructure and intelligence for industry",
    description: DEFAULT_DESC,
  },
  "/photonic-cpo": {
    title: "Photonic-CPO v4 | RoarAdd",
    description: "800G/1.6T silicon photonics co-packaged optics engineered to cut GPU cluster interconnect energy.",
  },
  "/trackit": {
    title: "Trackit analytics platform | RoarAdd",
    description: "Real-time KPI dashboards, alerts, and team analytics for modern operations teams.",
  },
  "/farm": {
    title: "Farm management software | RoarAdd",
    description: "Field-level farm management for yield tracking, weather, inventory, and equipment logs.",
  },
  "/aip": {
    title: "AIP — AI-to-AI gateway | RoarAdd",
    description: "Agent-to-agent gateway with human-in-the-loop controls, built on Google A2A and Vertex AI.",
  },
  "/about": {
    title: "About RoarAdd LLC",
    description: "RoarAdd builds interconnected, AI-native tools across agriculture, enterprise analytics, and high-performance compute.",
  },
  "/team": {
    title: "Team | RoarAdd",
    description: "Leadership and engineering practice at RoarAdd LLC, based in Loganville, Georgia.",
  },
  "/contact": {
    title: "Contact RoarAdd",
    description: "Talk with RoarAdd about Trackit, Farm, Photonic-CPO, AIP, or IT consulting.",
  },
  "/ideas": {
    title: "Ideas Lab | RoarAdd",
    description: "Concepts and prototypes from RoarAdd, including SolarEye and PoleHive.",
  },
  "/ideas/solareye": {
    title: "SolarEye concept | RoarAdd Ideas Lab",
    description: "A research concept that turns commercial fleets into road-condition sensor networks.",
  },
  "/ideas/polehive": {
    title: "PoleHive concept | RoarAdd Ideas Lab",
    description: "A research concept for modular, solar-autonomous smart beehives.",
  },
  "/blog": {
    title: "Blog | RoarAdd",
    description: "Notes on AI-to-AI infrastructure, AgriTech, and human-in-the-loop systems.",
  },
  "/case-studies": {
    title: "Field notes | RoarAdd",
    description: "Honest notes on RoarAdd pilots, prototypes, and product deployments — not invented customer wins.",
  },
  "/whitepapers": {
    title: "Whitepapers | RoarAdd",
    description: "Technical writing from RoarAdd on optics, farm telemetry, and agent gateways.",
  },
  "/privacy": {
    title: "Privacy Policy | RoarAdd",
    description: "How RoarAdd LLC handles personal information.",
  },
  "/terms": {
    title: "Terms of Service | RoarAdd",
    description: "Terms governing use of roaradd.com and RoarAdd services.",
  },
  "/pharmatrade": {
    title: "PharmaTrade | RoarAdd",
    description: "PharmaTrade is not a public product. Contact RoarAdd if you need the current status.",
  },
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const exact = PAGE_META[location];
    const fallbackKey = Object.keys(PAGE_META).find((k) => k !== "/" && location.startsWith(k));
    const meta = exact || (fallbackKey ? PAGE_META[fallbackKey] : undefined) || {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESC,
    };

    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", `${SITE}${location}`);
    upsertMeta("property", "og:site_name", "RoarAdd");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);

    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE}${location === "/" ? "/" : location}`;
  }, [location]);

  return null;
}
