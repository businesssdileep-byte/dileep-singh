import { useState } from "react";
import { Mail, Phone, Linkedin, Send, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    window.location.href = `mailto:singhdilip600@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something with data."
          description="Have a project, opportunity, or just want to say hi? Drop a message."
        />

        <div ref={ref} className="reveal mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info */}
          <div className="glass-card rounded-3xl p-7 lg:col-span-2">
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fastest reply via email. Available Mon–Sat.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:singhdilip600@gmail.com"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl glass">
                    <Mail size={16} className="text-primary" />
                  </span>
                  singhdilip600@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919982462088"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl glass">
                    <Phone size={16} className="text-primary" />
                  </span>
                  +91 99824 62088
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dileep-singh-819397195/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl glass">
                    <Linkedin size={16} className="text-primary" />
                  </span>
                  LinkedIn Profile
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-2">
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
                href="#"
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

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="glass-card rounded-3xl p-7 lg:col-span-3 grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Your name" placeholder="Jane Doe" required />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" required />
            </div>
            <Field name="subject" label="Subject" placeholder="Project opportunity" />
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your data challenge…"
                className="mt-2 w-full resize-none rounded-2xl border border-input bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-ring/60"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              {sent ? "Opening mail…" : "Send message"}
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-ring/60"
      />
    </div>
  );
}
