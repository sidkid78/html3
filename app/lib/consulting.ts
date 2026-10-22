export type ConsultingGroup = "executive" | "domain" | "client" | "competitive" | "services";

export interface ConsultingReport {
  id: string;
  group: ConsultingGroup;
  label: string;
  title: string;
  description: string;
  publicPath: string;
  fileSize: string;
  themeColor: "cyan" | "red" | "amber" | "purple" | "emerald";
}

export const CONSULTING_GROUPS: { id: ConsultingGroup; label: string; blurb: string }[] = [
  { id: "executive", label: "Executive Brief", blurb: "Top-level synthesis of the AI consulting landscape" },
  { id: "domain", label: "Domain Reports", blurb: "Ecosystem, buyers, and service/technology deep dives" },
  { id: "client", label: "Client Demand Workers", blurb: "Industry demand, use cases, drivers and ROI" },
  { id: "competitive", label: "Competitive & Pricing Workers", blurb: "Player taxonomy, monetization, talent, delivery and GTM" },
  { id: "services", label: "Service Offering Workers", blurb: "Readiness, governance and advisory frameworks" },
];

const BASE = "/consulting-research";

export const CONSULTING_REPORTS: ConsultingReport[] = [
  {
    id: "executive-brief",
    group: "executive",
    label: "Exec Brief",
    title: "The Modern AI Consulting Landscape",
    description:
      "Strategic imperatives in an era where pure Time & Materials billing is dead: the executive synthesis across ecosystem, buyers and offerings.",
    publicPath: `${BASE}/executive-brief.html`,
    fileSize: "5.9 MB",
    themeColor: "purple",
  },
  {
    id: "domain-report-1",
    group: "domain",
    label: "Domain 1",
    title: "Domain Report: AI Consulting Ecosystem",
    description:
      "Competitive ecosystem of the modern AI consulting industry: strategy firms, systems integrators, boutiques and hyperscaler-aligned players.",
    publicPath: `${BASE}/domain-report-1.html`,
    fileSize: "6.1 MB",
    themeColor: "cyan",
  },
  {
    id: "domain-report-2",
    group: "domain",
    label: "Domain 2",
    title: "The Buyer Landscape of Enterprise AI Consulting",
    description: "Industries, pain points, and economic drivers shaping enterprise demand for AI consulting.",
    publicPath: `${BASE}/domain-report-2.html`,
    fileSize: "5.1 MB",
    themeColor: "red",
  },
  {
    id: "domain-report-3",
    group: "domain",
    label: "Domain 3",
    title: "Domain Report: Service Offerings & Technology Stacks",
    description:
      "Deconstruction of products, services and technical methodologies: readiness assessments, custom LLM builds and standard service lines.",
    publicPath: `${BASE}/domain-report-3.html`,
    fileSize: "7.2 MB",
    themeColor: "amber",
  },
  {
    id: "worker-clie-1",
    group: "client",
    label: "Client 1",
    title: "Enterprise AI Consulting: Industry Demand & Buyer Profiles",
    description: "Industry demand, production use cases and buyer profiles for enterprise AI consulting.",
    publicPath: `${BASE}/worker-clie-1.html`,
    fileSize: "5.6 MB",
    themeColor: "cyan",
  },
  {
    id: "worker-clie-2",
    group: "client",
    label: "Client 2",
    title: "AI Advisory Strategy Matrix",
    description: "Primary strategic and operational drivers behind AI advisory engagements.",
    publicPath: `${BASE}/worker-clie-2.html`,
    fileSize: "1.0 MB",
    themeColor: "red",
  },
  {
    id: "worker-clie-3",
    group: "client",
    label: "Client 3",
    title: "Enterprise AI Consulting: System Dossier",
    description: "System-level dossier on enterprise AI consulting engagements and delivery.",
    publicPath: `${BASE}/worker-clie-3.html`,
    fileSize: "4.3 MB",
    themeColor: "amber",
  },
  {
    id: "worker-clie-4",
    group: "client",
    label: "Client 4",
    title: "Executive Synthesis: Enterprise AI",
    description: "Enterprise AI consulting expected ROI and performance metrics, synthesized for executives.",
    publicPath: `${BASE}/worker-clie-4.html`,
    fileSize: "0.9 MB",
    themeColor: "emerald",
  },
  {
    id: "worker-comp-1",
    group: "competitive",
    label: "Comp 1",
    title: "AI Consulting Landscape Taxonomy",
    description:
      "Three-tier segmentation by strategic focus, technical depth and delivery scale, with leading representative players.",
    publicPath: `${BASE}/worker-comp-1.html`,
    fileSize: "1.0 MB",
    themeColor: "cyan",
  },
  {
    id: "worker-comp-2",
    group: "competitive",
    label: "Comp 2",
    title: "AI Monetization Shifts: Pricing Models",
    description:
      "Comparison of pricing models as AI-accelerated velocity makes pure Time & Materials counterproductive.",
    publicPath: `${BASE}/worker-comp-2.html`,
    fileSize: "0.9 MB",
    themeColor: "amber",
  },
  {
    id: "worker-comp-3",
    group: "competitive",
    label: "Comp 3",
    title: "Executive Assessment: Talent, Delivery Models & IP",
    description:
      "Talent acquisition, organizational architecture, onshore/offshore delivery models and proprietary productivity tools in AI consulting.",
    publicPath: `${BASE}/worker-comp-3.html`,
    fileSize: "20 KB",
    themeColor: "amber",
  },
  {
    id: "worker-comp-4",
    group: "competitive",
    label: "Comp 4",
    title: "GTM Strategies & Ecosystem Alliances Synthesis",
    description:
      "Cloud and data-platform alliances, top-down vs. bottom-up go-to-market playbooks, and what separates market winners from laggards.",
    publicPath: `${BASE}/worker-comp-4.html`,
    fileSize: "24 KB",
    themeColor: "cyan",
  },
  {
    id: "worker-serv-1",
    group: "services",
    label: "Serv 1",
    title: "Strategic Advisory, Governance & AI Readiness",
    description:
      "AI readiness assessment dimensions, hub-and-spoke operating model, ISO/IEC 42001 and EU AI Act compliance, and stage-gate framework.",
    publicPath: `${BASE}/worker-serv-1.html`,
    fileSize: "16 KB",
    themeColor: "cyan",
  },
];

export function getConsultingReport(id: string): ConsultingReport | undefined {
  const n = id.toLowerCase().trim();
  return CONSULTING_REPORTS.find((r) => r.id === n || (n === "executive" && r.id === "executive-brief"));
}
