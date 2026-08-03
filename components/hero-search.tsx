'use client'

import { useMemo, useState } from 'react'
import { Search, Sparkles, X } from 'lucide-react'
import { featuredTools, latestTools, categories, type Tool } from '@/lib/tools-data'

const allTools: Tool[] = [...featuredTools, ...latestTools].filter(
  (tool, i, arr) => arr.findIndex((t) => t.slug === tool.slug) === i,
)

const popular = ['PDF to Word', 'BMI', 'EMI', 'Word Counter', 'QR Code']

export function HeroSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allTools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q),
      )
      .slice(0, 6)
  }, [query])

  return (
    <section id="search" className="relative overflow-hidden bg-gradient-to-b from-accent/60 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          100+ free tools, no signup required
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Every online tool you need, <span className="text-primary">in one place</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          BTTOTEK Solutions brings you fast, free, and reliable calculators, converters, and utilities —
          built to work instantly right in your browser.
        </p>

        <div className="relative mx-auto mt-9 max-w-2xl">
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
            <Search className="ml-2 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 100+ tools — try 'PDF', 'EMI', 'compress'…"
              aria-label="Search tools and calculators"
              className="w-full bg-transparent py-2 text-base text-foreground outline-none placeholder:text-muted-foreground"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {query && (
            <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-border bg-card text-left shadow-xl">
              {results.length > 0 ? (
                <ul className="max-h-80 overflow-y-auto py-2">
                  {results.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <li key={tool.slug}>
                        <a
                          href={`#${tool.slug}`}
                          className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-accent"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold text-card-foreground">
                              {tool.name}
                            </span>
                            <span className="block truncate text-xs text-muted-foreground">{tool.category}</span>
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <p className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No tools match “{query}”. Try a different keyword.
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {popular.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setQuery(term)}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {term}
            </button>
          ))}
        </div>

        <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4">
          {[
            { value: '100+', label: 'Free tools' },
            { value: `${categories.length}`, label: 'Categories' },
            { value: '100%', label: 'Browser based' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card/60 py-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-2xl font-extrabold text-primary">{stat.value}</dd>
              <dd className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
