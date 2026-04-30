import { Award, TrendingUp, Users2 } from "lucide-react";
import { useCountUp, useReveal } from "@/hooks/use-reveal";

const stats = [
  { icon: TrendingUp, value: 3, suffix: "+", label: "Years Professional Experience" },
  { icon: Award, value: 5, suffix: "+", label: "Performance Awards" },
  { icon: Users2, value: 10, suffix: "+", label: "Team Members Led" },
];

function Stat({ s }: { s: (typeof stats)[number] }) {
  const ref = useCountUp(s.value);
  return (
    <div className="glass-card relative overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1">
      <div
        aria-hidden
        className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-30 blur-2xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
          <s.icon size={22} />
        </div>
        <div className="mt-5 flex items-baseline gap-1">
          <span ref={ref} className="font-display text-5xl font-bold gradient-text">0</span>
          <span className="font-display text-3xl font-bold gradient-text">{s.suffix}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
      </div>
    </div>
  );
}

export function Achievements() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div ref={ref} className="reveal grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <Stat key={s.label} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
