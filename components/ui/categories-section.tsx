import { categories } from '@/lib/tools-data'
import { SectionHeading } from '@/components/section-heading'

export function CategoriesSection() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Browse by category"
        title="Explore tools that fit your task"
        description="Jump straight into the category you need — every tool is free and works instantly."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-card-foreground">{cat.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
              <span className="mt-3 text-xs font-semibold text-primary">{cat.count} tools</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
