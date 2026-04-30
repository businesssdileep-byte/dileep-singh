interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block glass rounded-full px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
