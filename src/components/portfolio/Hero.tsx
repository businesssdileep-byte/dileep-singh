import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* Background layers */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40 blur-3xl animate-[glow-pulse_4s_ease-in-out_infinite]"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground animate-[fade-up_0.6s_ease-out]">
          <Sparkles size={14} className="text-primary" />
          <span>Available for opportunities</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-[fade-up_0.7s_ease-out]">
          Transforming Data into
          <br />
          <span className="gradient-text">Actionable Insights</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground animate-[fade-up_0.8s_ease-out]">
          Data Analyst skilled in <span className="text-foreground">SQL, Python, Tableau & Excel</span>
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground/90 animate-[fade-up_0.9s_ease-out]">
          I help businesses make data-driven decisions by analyzing, visualizing,
          and modeling data effectively.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-[fade-up_1s_ease-out]">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium text-foreground transition-colors hover:bg-white/[0.08]"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6 animate-[fade-up_1.1s_ease-out]">
          {[
            { k: "3+", v: "Years Experience" },
            { k: "10+", v: "Projects & Models" },
            { k: "5+", v: "Tools Mastered" },
          ].map((s) => (
            <div key={s.v} className="glass-card rounded-2xl p-4 sm:p-5">
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                {s.k}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
