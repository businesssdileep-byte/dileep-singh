import { Linkedin, Mail, Github } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 grid gap-8 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-primary-foreground">
                D
              </span>
              <span className="gradient-text">Dileep Singh</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Data Analyst & aspiring Data Scientist — turning numbers into narratives.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/dileep-singh-819397195/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:bg-white/[0.08]"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/businesssdileep-byte?tab=repositories"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:bg-white/[0.08]"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:singhdilip600@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:bg-white/[0.08]"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dileep Singh. Crafted with data & care.
        </p>
      </div>
    </footer>
  );
}
