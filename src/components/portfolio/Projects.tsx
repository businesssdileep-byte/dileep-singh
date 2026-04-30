import { ArrowUpRight, Github, Home, Database, Car } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    icon: Home,
    title: "Real Estate Price Prediction",
    desc: "Built linear regression models to predict housing prices on the Boston dataset, comparing R-square, correlation and covariance to select the best model.",
    tech: ["Python", "Statistics", "Regression"],
  },
  {
    icon: Database,
    title: "Superstore Supply Chain Database",
    desc: "Designed a relational database with 5 normalized tables and authored complex queries using joins and subqueries to surface supply-chain KPIs.",
    tech: ["SQL", "DDL", "DML", "DQL"],
  },
  {
    icon: Car,
    title: "Car Purchasing Prediction Model",
    desc: "Predicted customer spending on cars using regression, with full EDA, univariate and bivariate analysis to find spending drivers.",
    tech: ["Python", "EDA", "Regression"],
  },
];

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & case studies."
          description="A snapshot of analytical projects spanning prediction, databases, and exploratory analysis."
        />

        <div ref={ref} className="reveal mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden glass-card rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]"
            >
              {/* hover gradient ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37, 99, 235, 0.35), transparent 60%)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />

              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <p.icon size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-sm">
                <a
                  href="https://github.com/businesssdileep-byte?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github size={15} /> Code
                </a>
                <span className="h-3 w-px bg-border" />
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
