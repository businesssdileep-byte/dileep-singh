import { Briefcase, Trophy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    role: "Team Lead",
    company: "Vertex Customer Management",
    period: "2018",
    points: ["Managed customer support team", "Conducted training & quality monitoring"],
    achievement: "Top Performer of the Month",
  },
  {
    role: "Subject Matter Expert (SME)",
    company: "Vertex",
    period: "2017 – 2018",
    points: ["Provided product expertise and team support"],
    achievement: "Top of the Quarter",
  },
  {
    role: "Process Associate",
    company: "RuralShores",
    period: "2015 – 2017",
    points: ["Handled customer queries and complaints"],
    achievement: "Top Performer of the Month",
  },
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Experience" title="A timeline of growth." />

        <div ref={ref} className="reveal relative mt-14">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ background: "linear-gradient(180deg, transparent, oklch(0.72 0.18 255 / 0.5), transparent)" }}
          />

          <ul className="space-y-10">
            {items.map((it, idx) => {
              const left = idx % 2 === 0;
              return (
                <li key={it.role} className="relative md:grid md:grid-cols-2 md:gap-10">
                  {/* node */}
                  <span className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                    <span className="block h-3 w-3 rounded-full gradient-primary shadow-[var(--shadow-glow)]" />
                  </span>

                  <div className={`pl-10 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                    <div className="glass-card inline-block w-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                        <Briefcase size={13} />
                        {it.period}
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold">{it.role}</h3>
                      <p className="text-sm text-muted-foreground">{it.company}</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                        {it.points.map((p) => (
                          <li key={p} className={`flex items-start gap-2 ${left ? "md:justify-end" : ""}`}>
                            {!left && <span className="mt-1.5 h-1 w-1 rounded-full gradient-primary" />}
                            <span>{p}</span>
                            {left && <span className="mt-1.5 h-1 w-1 rounded-full gradient-primary md:order-first" />}
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-foreground`}>
                        <Trophy size={12} className="text-primary" />
                        {it.achievement}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
