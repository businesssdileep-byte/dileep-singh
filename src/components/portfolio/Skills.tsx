import { Database, Code2, BarChart3, FileSpreadsheet, Sigma, Activity } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    icon: Database,
    title: "Data Tools",
    items: ["MS Excel", "SQL", "Tableau"],
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "Pandas", "NumPy"],
  },
  {
    icon: Sigma,
    title: "Analytics",
    items: [
      "Descriptive Statistics",
      "Correlation & Covariance",
      "Linear Regression",
      "Data Wrangling",
      "Exploratory Data Analysis",
    ],
  },
];

const tools = [
  { icon: FileSpreadsheet, label: "Excel" },
  { icon: Database, label: "SQL" },
  { icon: BarChart3, label: "Tableau" },
  { icon: Code2, label: "Python" },
  { icon: Activity, label: "Statistics" },
  { icon: Sigma, label: "Regression" },
];

export function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A complete data toolkit."
          description="From wrangling raw datasets to presenting predictive models, every layer of the analytics stack."
        />

        <div ref={ref} className="reveal mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative glass-card rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <g.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full gradient-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tool marquee */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <div
              key={t.label}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <t.icon size={16} className="text-primary" />
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
