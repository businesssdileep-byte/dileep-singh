import { Brain, LineChart, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const strengths = [
  { icon: Brain, title: "Analytical Thinking", desc: "Breaking down complex problems into measurable, testable hypotheses." },
  { icon: LineChart, title: "Data-Driven Decisions", desc: "Translating raw data into clear, actionable business outcomes." },
  { icon: Users, title: "Communication & Leadership", desc: "Years of leading teams and presenting insights to stakeholders." },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="A passionate analyst, by design." />

        <div ref={ref} className="reveal mt-14 grid gap-8 md:grid-cols-5">
          <div className="glass-card md:col-span-2 rounded-3xl p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a passionate <span className="text-foreground font-medium">Data Analyst</span> with strong
              problem-solving and analytical skills. I specialize in extracting meaningful
              insights from data and applying statistical techniques to solve real-world
              business problems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Currently enhancing my expertise through advanced
              <span className="text-foreground font-medium"> Data Analytics training</span> at
              Great Lakes Institute of Management.
            </p>
          </div>

          <div className="md:col-span-3 grid gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <div
                key={s.title}
                className="group glass-card rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] sm:[&:nth-child(3)]:col-span-2"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
