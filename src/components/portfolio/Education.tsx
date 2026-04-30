import { GraduationCap, BadgeCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const education = [
  { title: "Data Analytics", org: "Great Lakes Institute of Management", note: "Pursuing" },
  { title: "B.Tech", org: "Laxmi Devi Institute of Engineering & Technology", note: "70.3%" },
  { title: "12th Standard", org: "Senior Secondary", note: "88.88%" },
  { title: "10th Standard", org: "Secondary", note: "86.50%" },
];

const certs = [
  "National Skill Development Council Certification",
  "Computer Operator Training – CAIRN",
  "RS-CIT – VMOU Kota",
];

const extras = [
  "Volunteer – Sangram 2K22",
  "Head Coordinator – Farewell Event",
  "Event Coordinator – Fresher's Party",
];

export function Education() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Background" title="Education & beyond." />

        <div ref={ref} className="reveal mt-14 grid gap-6 lg:grid-cols-3">
          {/* Education */}
          <div className="glass-card rounded-3xl p-7 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <ul className="mt-6 divide-y divide-border">
              {education.map((e) => (
                <li key={e.title} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                  </div>
                  <span className="shrink-0 rounded-full glass px-3 py-1 text-xs text-foreground">
                    {e.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certs */}
          <div className="glass-card rounded-3xl p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <BadgeCheck size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full gradient-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Extras */}
          <div className="glass-card rounded-3xl p-7 lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">Extra Activities</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {extras.map((e) => (
                <div
                  key={e}
                  className="glass rounded-2xl p-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
