export interface DomainReport {
  id: string;
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  theater: string;
  classification: string;
  themeColor: "cyan" | "red" | "amber";
  status: string;
  revision: string;
  publicPath: string;
  description: string;
  highlights: string[];
  keyStats: { label: string; value: string }[];
  threatVectors: string[];
  fileSize: string;
}

export const DOMAIN_REPORTS: DomainReport[] = [
  {
    id: "domain-report-1",
    number: 1,
    slug: "strategic-competition",
    title: "Domain Report: US-China Strategic Competition",
    shortTitle: "Strategic Competition",
    theater: "Indo-Pacific & Technological Domain",
    classification: "UNCLASSIFIED // STRATEGIC SYNTHESIS",
    themeColor: "cyan",
    status: "ACTIVE MONITORING",
    revision: "2026 Q1 Assessment",
    publicPath: "/domain-report-1.html",
    description:
      "Comprehensive multi-domain intelligence synthesis detailing US-China bilateral frictions, advanced semiconductor warfare, Taiwan Strait kinetic flashpoints, and critical infrastructure cyber pre-positioning.",
    highlights: [
      "Economic & Semiconductor Technological Warfare (export restrictions, lithography, supply chain bifurcations)",
      "Indo-Pacific Military Posturing (A2/AD bubbles, carrier strike group rotations, amphibious readiness)",
      "Cyber Espionage & Critical Infrastructure Pre-positioning (telecom, electrical grids, subsea cables)",
      "Near-Term Trajectories: 60% Managed Equilibrium, 30% Escalation, 10% Kinetic Breach",
    ],
    keyStats: [
      { label: "Equilibrium Prob.", value: "60%" },
      { label: "Escalation Prob.", value: "30%" },
      { label: "Kinetic Risk", value: "10%" },
      { label: "Theater Vectors", value: "Multi-Domain" },
    ],
    threatVectors: [
      "Semiconductor Blockades",
      "Taiwan Strait Posture",
      "Volt Typhoon Infiltration",
      "Space / Counter-Space",
    ],
    fileSize: "6.2 MB",
  },
  {
    id: "domain-report-2",
    number: 2,
    slug: "us-russia-european-security",
    title: "Domain Report: US-Russia & European Security (2025 Revised)",
    shortTitle: "US-Russia & Europe (2025)",
    theater: "Eastern Europe & NATO Strategic Flank",
    classification: "UNCLASSIFIED // DEFENSE SYNTHESIS",
    themeColor: "red",
    status: "ACTIVE INTEL (2025 REVISED)",
    revision: "2025 Revised Edition",
    publicPath: "/domain-report-2.html",
    description:
      "High-tempo tactical and strategic assessment covering frontline conventional warfare dynamics in Ukraine, NATO collective defense adaptation, macroeconomic sanction impacts, and nuclear deterrence posture following recent treaty suspensions.",
    highlights: [
      "Conventional War in Ukraine (tactical adaptations, drone-centric attrition, deep strike capabilities)",
      "NATO Posture & European Defense Industrial Adaptation (munition production, 2% GDP defense benchmarks)",
      "Economic Warfare & Sanctions (hydrocarbon redirection, secondary sanctions, sovereign reserve freezes)",
      "Nuclear Posture & Strategic Rhetoric (New START treaty suspension dynamics, tactical warhead posturing)",
    ],
    keyStats: [
      { label: "Defense Mobilization", value: "Accelerated" },
      { label: "Sanction Pressure", value: "High Intensity" },
      { label: "Nuclear Posture", value: "Heightened" },
      { label: "Revision Year", value: "2025" },
    ],
    threatVectors: [
      "Eastern Flank Attrition",
      "Defense Industrial Bottlenecks",
      "Energy & Hydrocarbon Shift",
      "Strategic Deterrence Erosion",
    ],
    fileSize: "5.7 MB",
  },
  {
    id: "domain-report-3",
    number: 3,
    slug: "us-russia-baseline-2024",
    title: "Domain Report: US-Russia & European Security (2024 Baseline)",
    shortTitle: "US-Russia & Europe (2024)",
    theater: "Eastern Europe & European Strategic Architecture",
    classification: "UNCLASSIFIED // HISTORICAL BASELINE",
    themeColor: "amber",
    status: "BASELINE ARCHIVE (2024)",
    revision: "2024 Baseline Assessment",
    publicPath: "/domain-report-3.html",
    description:
      "Foundational intelligence baseline establishing core operational metrics, early military mobilizations, and initial macroeconomic impacts prior to late-2025 doctrinal shifts in strategic treaty compliance.",
    highlights: [
      "Baseline Frontline Analysis (early maneuver war transitions to layered fortified attrition)",
      "Initial NATO Enhanced Forward Presence (battlegroup scale-up and Baltic air policing benchmarks)",
      "First-Tier Western Sanctions Regimes (SWIFT de-listings, asset immobilizations, price-cap mechanisms)",
      "Nuclear Doctrine Baseline (status of nuclear consultations prior to late-stage suspensions)",
    ],
    keyStats: [
      { label: "Baseline Period", value: "Late 2024" },
      { label: "Sanction Regimes", value: "Tier-1 / Price Cap" },
      { label: "Treaty Status", value: "Pre-Suspension" },
      { label: "Revision Year", value: "2024" },
    ],
    threatVectors: [
      "Fortified Line Attrition",
      "Supply Chain Rerouting",
      "Early Warning Disconnects",
      "Hybrid & Grey-Zone Threats",
    ],
    fileSize: "5.7 MB",
  },
];

export function getReportById(idOrSlug: string): DomainReport | undefined {
  const normalized = idOrSlug.toLowerCase().trim();
  return DOMAIN_REPORTS.find(
    (r) =>
      r.id.toLowerCase() === normalized ||
      r.slug.toLowerCase() === normalized ||
      String(r.number) === normalized ||
      normalized === `report-${r.number}` ||
      normalized === `report${r.number}`
  );
}
