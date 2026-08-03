type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  action?: React.ReactNode
}

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</span>
        <h2 className="mt-2 text-balance font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
