/**
 * Single source of truth for claims, flags, and placeholders.
 * Replace any `TODO_CONFIRM` value with a real one before enabling the related UI.
 * Never render `TODO_CONFIRM` text on the page — helpers below gate sections.
 */

export const TODO_CONFIRM = "TODO_CONFIRM" as const;

export type TodoConfirm = typeof TODO_CONFIRM;

export function isConfirmed<T>(
  value: T | TodoConfirm | null | undefined,
): value is T {
  return value !== TODO_CONFIRM && value != null && value !== "";
}

export type Testimonial = {
  id: string;
  quote: string;
  /** Full name or "First L." */
  name: string;
  role: string;
  /** Company name or "Upwork client" */
  company: string;
  permission: boolean;
};

export type Founder = {
  id: string;
  name: string;
  role: "Co-Founder";
  /** Path under /public — replace placeholders when photos are ready */
  photo: string;
  photoAlt: string;
  bio?: string;
};

export const siteFacts = {
  companyName: "DevsRoute",
  email: "hello@devsroute.com",
  address: "Block D, MasterCity, Gujranwala, Pakistan",
  locationLabel: "MasterCity, Gujranwala, Pakistan",

  /** Primary CTA — keep label + URL in sync site-wide via site-config */
  calendly: {
    label: "Book a 20-min call",
    href: "https://calendly.com/devsroute/technical-read",
  },

  /** Typical MVP timeline (always safe to state) */
  mvpTimeline: "2-6 weeks",

  /** Safe claims — toggle individually */
  claims: {
    seniorDevelopersOnly: true,
    directDeveloperAccess: true,
    mvpTimeline: true,
  },

  /**
   * Numeric impact stats. Leave as TODO_CONFIRM until verified.
   * TrustProof renders only confirmed items; hides the section if < 3 confirmed.
   */
  stats: {
    onTimeDeliveryPercent: TODO_CONFIRM as number | TodoConfirm,
    productsShipped: TODO_CONFIRM as number | TodoConfirm,
    clientsServed: TODO_CONFIRM as number | TodoConfirm,
    yearsBuilding: TODO_CONFIRM as number | TodoConfirm,
  },

  /** Industry card visibility */
  industries: {
    showOnDemand: false,
    showHealthTech: false,
    showLogistics: false,
  },

  /** Concept / sample portfolio projects (FlowDesk etc.) */
  showConcepts: false,

  /**
   * Real testimonials with permission. Empty = hide ClientStories entirely.
   */
  testimonials: [] as Testimonial[],

  /** Set to a real Upwork profile URL to show the reviews button */
  upworkUrl: TODO_CONFIRM as string | TodoConfirm,

  /** US working-hours overlap — replace when confirmed */
  usTimeOverlap:
    TODO_CONFIRM as string | TodoConfirm /* e.g. "9am–1pm ET overlap, Mon–Fri" */,

  founders: [
    {
      id: "zubair",
      name: "Zubair Ahmad",
      role: "Co-Founder",
      photo: "/brand/team/zubair.jpg",
      photoAlt: "Portrait placeholder for Zubair Ahmad",
    },
    {
      id: "saboor",
      name: "Saboor Shahzad",
      role: "Co-Founder",
      photo: "/brand/team/saboor.jpg",
      photoAlt: "Portrait placeholder for Saboor Shahzad",
    },
    {
      id: "haris",
      name: "Haris Awais",
      role: "Co-Founder",
      photo: "/brand/team/haris.jpg",
      photoAlt: "Portrait placeholder for Haris Awais",
    },
  ] satisfies Founder[],

  /** Do not claim these unless true */
  certifications: {
    hipaa: false,
    soc2: false,
    pci: false,
  },

  social: {
    linkedin: TODO_CONFIRM as string | TodoConfirm,
    upwork: TODO_CONFIRM as string | TodoConfirm,
    clutch: TODO_CONFIRM as string | TodoConfirm,
  },
} as const;

export type SiteFacts = typeof siteFacts;

/** Confirmed testimonials with permission granted */
export function getPublishableTestimonials(): Testimonial[] {
  return siteFacts.testimonials.filter((t) => t.permission && t.quote && t.name);
}

/** Confirmed numeric stats for the impact section */
export function getConfirmedStats(): { id: string; value: string; label: string }[] {
  const items: { id: string; value: string; label: string }[] = [];
  const { stats } = siteFacts;

  if (isConfirmed(stats.onTimeDeliveryPercent)) {
    items.push({
      id: "on-time",
      value: `${stats.onTimeDeliveryPercent}%`,
      label: "on-time delivery",
    });
  }
  if (isConfirmed(stats.productsShipped)) {
    items.push({
      id: "products",
      value: `${stats.productsShipped}+`,
      label: "products shipped",
    });
  }
  if (isConfirmed(stats.clientsServed)) {
    items.push({
      id: "clients",
      value: `${stats.clientsServed}+`,
      label: "clients served",
    });
  }
  if (isConfirmed(stats.yearsBuilding)) {
    items.push({
      id: "years",
      value: `${stats.yearsBuilding}+`,
      label: "years building",
    });
  }

  return items;
}

/** Always-true soft claims for impact when numeric stats are incomplete */
export function getSafeImpactClaims(): { id: string; value: string; label: string }[] {
  const items: { id: string; value: string; label: string }[] = [];
  if (siteFacts.claims.mvpTimeline) {
    items.push({
      id: "mvp-timeline",
      value: siteFacts.mvpTimeline,
      label: "typical MVP timeline",
    });
  }
  if (siteFacts.claims.seniorDevelopersOnly) {
    items.push({
      id: "senior",
      value: "Senior",
      label: "developers only — no junior handoff",
    });
  }
  if (siteFacts.claims.directDeveloperAccess) {
    items.push({
      id: "direct",
      value: "Direct",
      label: "access to the people building your product",
    });
  }
  return items;
}

export function getOrganizationSameAs(): string[] {
  return [
    siteFacts.social.linkedin,
    siteFacts.social.upwork,
    siteFacts.social.clutch,
  ].filter(isConfirmed);
}
