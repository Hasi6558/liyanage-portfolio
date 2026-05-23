import { Check, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { BrowserFrame, Carousel } from "./Carousel";
import projectsData from "@/data/projects.json";
import { AndroidMockup } from "react-device-mockup";
import haulage1 from "@/assets/projects/haulage1.png";
import haulage2 from "@/assets/projects/haulage2.png";
import haulage3 from "@/assets/projects/haulage3.png";
import haulage4 from "@/assets/projects/haulage4.png";
import haulage5 from "@/assets/projects/haulage5.jpg";
import haulage6 from "@/assets/projects/haulage6.png";
import phhQuotation1 from "@/assets/projects/phh-quotation1.png";
import phhQuotation2 from "@/assets/projects/phh-quotation2.png";
import phhQuotation3 from "@/assets/projects/phh-quotation3.png";
import phhQuotation4 from "@/assets/projects/phh-quotation4.jpg";
import phhQuotation5 from "@/assets/projects/phh-quotation5.jpg";
import sttTool1 from "@/assets/projects/stt-tool1.png";
import sttTool2 from "@/assets/projects/stt-tool2.png";
import sttTool3 from "@/assets/projects/stt-tool3.png";
import haulage7 from "@/assets/projects/haulage7.png";
import mobile1 from "@/assets/projects/mobile/haulage-mobile1.jpeg";
import mobile2 from "@/assets/projects/mobile/haulage-mobile2.jpeg";
import mobile3 from "@/assets/projects/mobile/haulage-mobile3.jpeg";
import mobile5 from "@/assets/projects/mobile/haulage-mobile5.jpeg";
import mobile6 from "@/assets/projects/mobile/haulage-mobile6.jpeg";
import mobile7 from "@/assets/projects/mobile/haulage-mobile7.jpeg";
import mobile8 from "@/assets/projects/mobile/haulage-mobile8.jpeg";
import mobile9 from "@/assets/projects/mobile/haulage-mobile9.jpeg";
import { useState } from "react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type Project = {
  title: string;
  type: string;
  projectKind: string;
  description: string;
  features: string[];
  tech?: string[];
  year: string | null;
  team: string;
  duration: string | null;
  device: "browser" | "phone";
  links: {
    github: string | null;
    live: string | null;
  };
  images: string[];
};

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
function Meta({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span>{p.year}</span>
      <span className="text-primary/60">•</span>
      <span>{p.team}</span>
      <span className="text-primary/60">•</span>
      <span>{p.duration}</span>
    </div>
  );
}

function IconLinks({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-2">
      {p.links.github && (
        <a
          href={p.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${p.title} source on GitHub`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-primary
                     hover:bg-primary/10 hover:border-primary/60 transition-colors"
        >
          <Github className="h-4 w-4" />
        </a>
      )}
      {p.links.live && (
        <a
          href={p.links.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${p.title} live site`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-primary
                     hover:bg-primary/10 hover:border-primary/60 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function ProjectPreview({ p }: { p: Project }) {
  return (
    <div
      className={
        p.device === "phone" ?
          "mx-auto w-full max-w-[390px]"
        : "mx-auto w-full max-w-[640px]"
      }
    >
      {p.device === "phone" ?
        <AndroidMockup screenWidth={320} className="mx-auto" navBar="swipe">
          <Carousel images={p.images} alt={p.title} />
        </AndroidMockup>
      : <BrowserFrame>
          <Carousel images={p.images} alt={p.title} />
        </BrowserFrame>
      }
    </div>
  );
}

function ProjectPreviewShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center bg-background/40 rounded-xl py-8 px-5 min-h-[280px]">
      {children}
    </div>
  );
}

const haulageImages = [
  haulage1,
  haulage2,
  haulage3,
  haulage4,
  haulage5,
  haulage6,
  haulage7,
];

const phhQuotationImages = [
  phhQuotation1,
  phhQuotation2,
  phhQuotation3,
  phhQuotation4,
  phhQuotation5,
];

const sttToolImages = [sttTool1, sttTool2, sttTool3];

const mobileAppImages = [
  mobile1,
  mobile2,
  mobile3,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
  mobile9,
];

type ProjectsData = {
  featured: Project;
  grid: Array<Project & { tech?: string[]; device: "browser" | "mobile" }>;
};

function FeaturedCard({ p }: { p: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group rounded-2xl border border-border/60 bg-card/40 p-6 md:p-10
                 hover:border-primary/40 transition-colors backdrop-blur-sm
                 shadow-[0_4px_24px_-4px_hsla(190,100%,50%,0.12)]
                 hover:shadow-[0_8px_40px_-8px_hsla(190,100%,50%,0.28)]"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(420px,640px)_1fr] lg:gap-12 lg:items-center">
        {/* Screenshot */}
        <ProjectPreviewShell>
          <ProjectPreview p={p} />
        </ProjectPreviewShell>

        {/* Info */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{p.type}</Badge>
            <span className="inline-block rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              {p.projectKind}
            </span>
          </div>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold">{p.title}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {p.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-4 pt-5 border-t border-border/60">
            <Meta p={p} />
            <IconLinks p={p} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   Grid card (compact)
───────────────────────────────────────────── */
function GridCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group w-full rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8
                 hover:border-primary/40 hover:-translate-y-1 transition-all backdrop-blur-sm
                 shadow-[0_4px_24px_-4px_hsla(190,100%,50%,0.08)]
                 hover:shadow-[0_8px_32px_-8px_hsla(190,100%,50%,0.22)]"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(420px,640px)_1fr] lg:items-center lg:gap-8">
        {/* Device preview */}
        <ProjectPreviewShell>
          <ProjectPreview p={p} />
        </ProjectPreviewShell>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{p.type}</Badge>
            <span className="inline-block rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              {p.projectKind}
            </span>
          </div>
          <h3 className="mt-3 text-xl md:text-2xl font-bold">{p.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {p.description}
          </p>

          <ul className="mt-4 space-y-1.5">
            {p.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <Check className="h-3.5 w-3.5 mt-0.5 text-primary flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-border/60 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Meta p={p} />
            <IconLinks p={p} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [deviceFilter, setDeviceFilter] = useState<"web" | "mobile">("web");

  const data = projectsData as ProjectsData;

  const featured = {
    ...data.featured,
    images: haulageImages,
  };
  const grid = data.grid.map((project, index) => {
    if (project.device === "mobile") {
      return {
        ...project,
        device: "phone" as const,
        images: mobileAppImages,
      };
    }

    if (index === 0) {
      return {
        ...project,
        images: phhQuotationImages,
        device: "browser" as const,
      };
    }

    if (index === 1) {
      return { ...project, images: sttToolImages, device: "browser" as const };
    }

    if (index === 2) {
      return { ...project, images: haulageImages, device: "browser" as const };
    }

    return {
      ...project,
      device: "browser" as const,
    };
  });

  const filteredProjects = grid.filter((project) =>
    deviceFilter === "web" ?
      project.device === "browser"
    : project.device === "phone",
  );

  const visibleProjects =
    deviceFilter === "mobile" ?
      grid.filter((project) => project.device === "phone")
    : filteredProjects;

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-border/30 section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mt-4" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A look at recent products I've built end-to-end from idea to
            deployment.
          </p>
        </motion.div>

        {/* Featured project */}
        {/* <FeaturedCard p={featured} /> */}

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-border/70 bg-card/80 p-1 shadow-sm">
            {[
              { key: "web", label: "Web" },
              { key: "mobile", label: "Mobile" },
            ].map((option) => {
              const active = deviceFilter === option.key;

              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() =>
                    setDeviceFilter(option.key as "web" | "mobile")
                  }
                  aria-pressed={active}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ?
                      "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid projects */}
        <div
          className={`relative mt-8 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isExpanded ? "max-h-none" : "max-h-[980px] md:max-h-[1080px]"
          }`}
        >
          <div className="space-y-6">
            {visibleProjects.length > 0 ?
              visibleProjects.map((p, idx) => (
                <GridCard key={p.title} p={p} index={idx} />
              ))
            : <div className="rounded-2xl border border-border/60 bg-card/40 p-8 text-center text-sm text-muted-foreground">
                No mobile projects added yet.
              </div>
            }
          </div>

          {!isExpanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/95 to-transparent" />
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/90 px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/50 hover:bg-primary/10"
          >
            {isExpanded ? "Show less" : "Expand projects"}
            <ExternalLink
              className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
