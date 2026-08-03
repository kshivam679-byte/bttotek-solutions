import { ArrowUpRight } from 'lucide-react'
import type { Tool } from '@/lib/tools-data'
import { cn } from '@/lib/utils'

const badgeStyles: Record<NonNullable<Tool['badge']>, string> = {
  Popular: 'bg-primary/10 text-primary',
  New: 'bg-emerald-500/10 text-emerald-600',
  Trending: 'bg-accent text-accent-foreground',
}

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon
  return (
    <a
      href={`#${tool.slug}`}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {tool.badge ? (
          <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-semibold', badgeStyles[tool.badge])}>
            {tool.badge}
          </span>
        ) : (
          <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
        )}
      </div>
      <h3 className="mt-4 font-heading text-base font-bold text-card-foreground">{tool.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
      <span className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
        {tool.category}
      </span>
    </a>
  )
}
