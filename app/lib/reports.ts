export interface WorkerReport {
  id: string;
  workerNumber: string;
  slug: string;
  title: string;
  shortTitle: string;
  theater: string;
  classification: string;
  themeColor: "cyan" | "red" | "amber";
  status: string;
  publicPath: string;
  description: string;
  highlights: string[];
  keyStats: { label: string; value: string }[];
  threatVectors: string[];
  parentReportId: string;
}

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
  workerAnnexes?: WorkerReport[];
}

export const WORKER_REPORTS_DOMAIN_1: WorkerReport[] = [
  {
    id: "worker-1",
    workerNumber: "1.1",
    slug: "iran-axis-of-resistance",
    title: "Threat Assessment: Iran and the Axis of Resistance",
    shortTitle: "Axis of Resistance",
    theater: "Levant, Persian Gulf & Bab al-Mandab",
    classification: "CLASSIFIED // CENTCOM SECURE",
    themeColor: "red",
    status: "ACTIVE OPERATIONAL INTEL",
    publicPath: "/worker-1.html",
    parentReportId: "domain-report-1",
    description:
      "Deep tactical assessment detailing proxy force attrition, Hezbollah arsenal degradation, Houthi maritime dominance in the Red Sea, and Iran's strategic shift to normalized preemptive sovereign deterrence.",
    highlights: [
      "Hezbollah rocket arsenal degraded by ~80%; tactical shift to suicide/FPV drones under direct IRGC oversight",
      "Houthis operate as the most kinetically viable proxy, commanding the Bab al-Mandab maritime chokepoints",
      "Iranian total-war doctrinal posture with decentralized subterranean missile/drone launch complexes",
      "Severed Syrian overland land bridge forced transition to maritime gray-zone smuggling and localized fabrication",
    ],
    keyStats: [
      { label: "Hezbollah Munitions", value: "~15k Left" },
      { label: "Rocket Attrition", value: "~80% Degraded" },
      { label: "Maritime Choke", value: "Bab al-Mandab" },
      { label: "Doctrine", value: "Sovereign Deterrence" },
    ],
    threatVectors: [
      "Subterranean TEL Complexes",
      "Houthi Anti-Ship Ballistics",
      "FPV Drone Swarms",
      "Cryptocurrency & Hawala Rails",
    ],
  },
  {
    id: "worker-1-2",
    workerNumber: "1.2",
    slug: "regional-deadlock-2024",
    title: "Geopolitical Fault Lines: Regional Deadlock 2024",
    shortTitle: "Regional Deadlock",
    theater: "Middle East & Regional Airspace Architecture",
    classification: "TELEMETRY // GEO-STRAT ANALYSIS",
    themeColor: "cyan",
    status: "ACTIVE DIPLOMATIC MONITORING",
    publicPath: "/worker-1-2.html",
    parentReportId: "domain-report-1",
    description:
      "Exhaustive analysis of the Gaza and Lebanon ceasefire tracks (UNSCR 2735 / 1701), border sovereignty friction, regional air defense coordination, and the frozen status of the Abraham Accords.",
    highlights: [
      "Gaza Track deadlocked over permanent IDF presence along Philadelphi and Netzarim corridors",
      "Lebanon Track (UNSCR 1701) requires heavy arms withdrawal north of Litani and 5k-10k LAF deployment",
      "CENTCOM CAOC telemetry and Link-16 coordination successful, but GCC enforces strict offensive strike bans",
      "Abraham Accords reduced to 'Cold Peace' intelligence baseline; Saudi normalization remains deadlocked",
    ],
    keyStats: [
      { label: "UNSCR 2735", value: "Deadlocked" },
      { label: "UNSCR 1701", value: "Active Negotiation" },
      { label: "Suez Canal Impact", value: "-50% to -60%" },
      { label: "Saudi Normalization", value: "Barred / Pre-State" },
    ],
    threatVectors: [
      "Philadelphi Friction",
      "Netzarim Screening",
      "Sovereign Airspace Violations",
      "West Bank Transfer Risks",
    ],
  },
  {
    id: "worker-1-3",
    workerNumber: "1.3",
    slug: "centcom-tactical-summary",
    title: "US CENTCOM Force Posture & Kinetic Operations",
    shortTitle: "CENTCOM Tactical",
    theater: "CENTCOM Area of Responsibility",
    classification: "TOP SECRET // NOFORN // COMMAND SUMMARY",
    themeColor: "amber",
    status: "COMBAT POSTURE ACTIVE",
    publicPath: "/worker-1-3.html",
    parentReportId: "domain-report-1",
    description:
      "Operational order-of-battle overview covering rotational Carrier Strike Groups, B-2/B-1B Bomber Task Force deployments, Operation Poseidon Archer against the Houthis, and multi-tier IAMD network architecture.",
    highlights: [
      "Naval Component: Nimitz-class CSGs with Aegis SM-2/SM-3/SM-6/Tomahawk destroyers and nuclear SSN/SSGN submarines",
      "Air Component: CAOC at Al Udeid AB coordinating F-15Es, F-35As, and B-2 Spirit stealth bombers deploying 30,000 lb GBU-57 MOPs",
      "Operation Poseidon Archer shifted from reactive defense to systemic destruction of subterranean Houthi TELs",
      "Direct deterrence combines denial (massed drone/missile interception) with strategic bunker-busting punishment",
    ],
    keyStats: [
      { label: "B-2 Bunker Busters", value: "GBU-57 MOP" },
      { label: "Syria Personnel", value: "~900 Forward" },
      { label: "Iraq Personnel", value: "~2,500 Bilateral" },
      { label: "IAMD Interceptors", value: "SM-3 / THAAD / PAC-3" },
    ],
    threatVectors: [
      "Subterranean Houthi Command",
      "Anti-Ship Ballistic Missiles",
      "Militia HIMARS Counter-Battery",
      "Tower 22 Drone Asymmetry",
    ],
  },
  {
    id: "worker-1-4",
    workerNumber: "1.4",
    slug: "us-israel-frontline-operations",
    title: "Tactical Briefing: US-Israel Security Alliance & Frontline Operations",
    shortTitle: "US-Israel Frontline",
    theater: "Gaza Strip, Southern Lebanon & Levant",
    classification: "CLASSIFIED // EYES ONLY // COMMAND OVERVIEW",
    themeColor: "cyan",
    status: "ACTIVE FRONTLINE OPERATIONS",
    publicPath: "/worker-1-4.html",
    parentReportId: "domain-report-1",
    description:
      "Strategic briefing on US military assistance, WRSA-I stockpile drawdowns, forward-deployed THAAD batteries, IDF leadership decapitation operations in Gaza and Lebanon, and acute bilateral friction points.",
    highlights: [
      "Sustainment via tens of thousands of JDAMs, SDBs, Hellfires, and expedited access to WRSA-I pre-positioned stocks",
      "Forward deployment of US-manned THAAD battery with ~100 personnel directly to Israel for MRBM defense",
      "IDF tactical decapitation of top leadership (Sinwar, Deif, Nasrallah) and disassembly of Hamas standing battalions",
      "Acute bilateral friction regarding urban 2,000-lb Mk-84 bombs, NSM-20 reviews, and 'Day After' political governance",
    ],
    keyStats: [
      { label: "US THAAD Troops", value: "~100 On-Site" },
      { label: "Leadership Decap.", value: "Sinwar / Nasrallah" },
      { label: "Hamas Structure", value: "Asymmetric Cells" },
      { label: "Bilateral Friction", value: "High / NSM-20" },
    ],
    threatVectors: [
      "Urban Civilian Harm Liability",
      "Subterranean Gaza Pockets",
      "Litani River Buffer Clashes",
      "Post-War Governance Void",
    ],
  },
];

export const EXECUTIVE_REPORT: DomainReport = {
  id: "executive-report",
  number: 0,
  slug: "executive-strategic-brief",
  title: "Executive Strategic Brief: Global Threat Posture",
  shortTitle: "Executive Strategic Brief",
  theater: "Global Multi-Theater Integration & Strategic Oversight",
  classification: "TOP-TIER // EXECUTIVE STRATEGIC BRIEF",
  themeColor: "cyan",
  status: "ACTIVE EXECUTIVE DIRECTIVE",
  revision: "2026 High-Level Strategic Synthesis",
  publicPath: "/executive-report.html",
  description:
    "Comprehensive executive-level synthesis integrating multi-theater defense intelligence: Cross-domain frictions between US-China strategic competition, European defense adaptations against Russian revanchism, and Middle East deterrence architectures.",
  highlights: [
    "Highest-Impact Strategic Insights across Indo-Pacific, Eastern European, and CENTCOM AORs",
    "Identified Tensions & Contradictions: Industrial munition capacity constraints across simultaneous conflict zones",
    "Cross-Domain Linkages: Axis of Resistance alignment with broader multipolar revisionist strategic partners",
    "Prioritized Next Steps: Theater deconfliction, munition industrial base expansion, and alliance interoperability",
  ],
  keyStats: [
    { label: "Theaters Integrated", value: "Indo-Pac / Europe / ME" },
    { label: "Readiness Focus", value: "Multi-Domain" },
    { label: "Industrial Base", value: "Surge Priority" },
    { label: "Executive Level", value: "Command Oversight" },
  ],
  threatVectors: [
    "Simultaneous Multi-Front Strains",
    "Precision Munition Depletion",
    "Subsea & Space Asymmetry",
    "Treaty Framework Dissolution",
  ],
  fileSize: "5.6 MB",
};

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
      "Comprehensive multi-domain intelligence synthesis detailing US-China bilateral frictions, advanced semiconductor warfare, Taiwan Strait kinetic flashpoints, and critical infrastructure cyber pre-positioning. Accompanied by 4 tactical frontline worker assessments.",
    highlights: [
      "Economic & Semiconductor Technological Warfare (export restrictions, lithography, supply chain bifurcations)",
      "Indo-Pacific Military Posturing (A2/AD bubbles, carrier strike group rotations, amphibious readiness)",
      "Cyber Espionage & Critical Infrastructure Pre-positioning (telecom, electrical grids, subsea cables)",
      "Accompanied by 4 Tactical Intelligence Annexes (Axis of Resistance, Regional Deadlock, CENTCOM Posture, US-Israel Operations)",
    ],
    keyStats: [
      { label: "Equilibrium Prob.", value: "60%" },
      { label: "Escalation Prob.", value: "30%" },
      { label: "Tactical Annexes", value: "04 Modules" },
      { label: "Theater Vectors", value: "Multi-Domain" },
    ],
    threatVectors: [
      "Semiconductor Blockades",
      "Taiwan Strait Posture",
      "Volt Typhoon Infiltration",
      "Space / Counter-Space",
    ],
    fileSize: "6.2 MB",
    workerAnnexes: WORKER_REPORTS_DOMAIN_1,
  },
  {
    id: "domain-report-2",
    number: 2,
    slug: "us-russia-european-security",
    title: "Domain Report: US-Russia & European Security",
    shortTitle: "US-Russia & European Security",
    theater: "Eastern Europe & NATO Strategic Flank",
    classification: "UNCLASSIFIED // DEFENSE SYNTHESIS",
    themeColor: "red",
    status: "ACTIVE INTEL // DEFENSE SYNTHESIS",
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
      { label: "Theater", value: "Eastern Flank" },
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
    slug: "middle-east-theater",
    title: "Domain Report: Middle East Theater",
    shortTitle: "Middle East Theater",
    theater: "CENTCOM AOR, Levant & Persian Gulf",
    classification: "UNCLASSIFIED // DEFENSE SYNTHESIS",
    themeColor: "amber",
    status: "ACTIVE OPERATIONAL INTEL",
    revision: "2026 Strategic Assessment",
    publicPath: "/domain-report-3.html",
    description:
      "Comprehensive strategic and tactical intelligence synthesis for the Middle East Theater: Force posture, kinetic strike campaigns, Iran and Axis of Resistance threat assessments, US-Israel frontline alliance, and regional diplomacy.",
    highlights: [
      "US CENTCOM Force Posture and Kinetic Operations (rotational CSGs, B-2/B-1B bomber task forces, multi-tier IAMD)",
      "Iran and the Axis of Resistance Threat Assessment (Hezbollah degradation, Houthi Red Sea blockade, sovereign deterrence)",
      "US-Israel Security Alliance and Frontline Operations (munitions sustainment, THAAD deployment, decapitation strikes)",
      "Regional Diplomacy, Ceasefire Negotiations, and Arab Alliances (Gaza/Lebanon tracks, UNSCR 2735/1701, Abraham Accords)",
    ],
    keyStats: [
      { label: "Primary Theater", value: "CENTCOM AOR" },
      { label: "Kinetic Tempo", value: "High Intensity" },
      { label: "IAMD Integration", value: "Multi-Tier" },
      { label: "Deterrence", value: "Total-War Footing" },
    ],
    threatVectors: [
      "Subterranean Missile Complexes",
      "Bab al-Mandab Maritime Choke",
      "Urban High-Tonnage Blast",
      "Multi-Front Regional Escalation",
    ],
    fileSize: "5.9 MB",
    workerAnnexes: WORKER_REPORTS_DOMAIN_1,
  },
];

// Helper function to resolve any report or worker by ID, slug, or alias
export function getReportById(idOrSlug: string): DomainReport | undefined {
  const normalized = idOrSlug.toLowerCase().trim();

  // Check Executive Report
  if (
    normalized === "executive-report" ||
    normalized === "executive" ||
    normalized === "exec" ||
    normalized === "executive-strategic-brief" ||
    normalized === "0"
  ) {
    return EXECUTIVE_REPORT;
  }

  // Alias for domain-correction to domain-report-3
  if (
    normalized === "domain-correction" ||
    normalized === "middle-east-theater" ||
    normalized === "middle-east"
  ) {
    return DOMAIN_REPORTS[2];
  }

  // Check Domain Reports
  const domainMatch = DOMAIN_REPORTS.find(
    (r) =>
      r.id.toLowerCase() === normalized ||
      r.slug.toLowerCase() === normalized ||
      String(r.number) === normalized ||
      normalized === `report-${r.number}` ||
      normalized === `report${r.number}`
  );
  if (domainMatch) return domainMatch;

  // Check Worker Reports
  const workerMatch = WORKER_REPORTS_DOMAIN_1.find(
    (w) =>
      w.id.toLowerCase() === normalized ||
      w.slug.toLowerCase() === normalized ||
      w.workerNumber === normalized ||
      normalized === `worker${w.workerNumber.replace(".", "-")}` ||
      normalized === `worker-${w.workerNumber.replace(".", "-")}`
  );

  if (workerMatch) {
    // Map worker to DomainReport interface for unified viewer rendering
    return {
      id: workerMatch.id,
      number: 1, // associated with domain report 1
      slug: workerMatch.slug,
      title: workerMatch.title,
      shortTitle: workerMatch.shortTitle,
      theater: workerMatch.theater,
      classification: workerMatch.classification,
      themeColor: workerMatch.themeColor,
      status: workerMatch.status,
      revision: `Tactical Annex ${workerMatch.workerNumber} (Domain Report 1)`,
      publicPath: workerMatch.publicPath,
      description: workerMatch.description,
      highlights: workerMatch.highlights,
      keyStats: workerMatch.keyStats,
      threatVectors: workerMatch.threatVectors,
      fileSize: "Tactical Brief",
      workerAnnexes: WORKER_REPORTS_DOMAIN_1,
    };
  }

  return undefined;
}
