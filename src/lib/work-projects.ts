import {
  deliveredProjects,
  type DeliveredProject,
} from "@/components/home/projects-delivered-data";

export type WorkFilter =
  | "All"
  | "Web Apps"
  | "SaaS"
  | "eCommerce";

export type WorkProject = DeliveredProject & {
  filters: WorkFilter[];
  tags: string[];
};

const workProjectMeta: Record<
  string,
  { filters: Exclude<WorkFilter, "All">[]; tags: string[] }
> = {
  flowdesk: {
    filters: ["SaaS", "Web Apps"],
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  northpeak: {
    filters: ["Web Apps", "SaaS"],
    tags: ["React", "TypeScript", "APIs", "Data Viz"],
  },
  havenhome: {
    filters: ["Web Apps"],
    tags: ["Next.js", "Search", "Maps", "CMS"],
  },
  marketly: {
    filters: ["eCommerce", "Web Apps"],
    tags: ["React", "Payments", "Catalog", "Analytics"],
  },
  caresync: {
    filters: ["Web Apps"],
    tags: ["UX", "React", "Web portals", "Portals"],
  },
  fleetcore: {
    filters: ["Web Apps", "SaaS"],
    tags: ["Dashboards", "APIs", "Real-time", "Cloud"],
  },
};

export const workFilters: WorkFilter[] = [
  "All",
  "Web Apps",
  "SaaS",
  "eCommerce",
];

export const workProjects: WorkProject[] = deliveredProjects.map((project) => ({
  ...project,
  ...workProjectMeta[project.id],
}));

export const featuredWorkProjects = workProjects.slice(0, 2);
export const gridWorkProjects = workProjects.slice(2);
