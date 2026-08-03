import { ArrowRight } from 'lucide-react'
import { featuredTools } from '@/lib/tools-data'
import { ToolCard } from '@/components/tool-card'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedSection() {
  return (
    <section id="featured" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured tools"
          title="The tools people use every day"
          description="Hand-picked favourites trusted by thousands of visitors each week."
          action={
            <a
              href="#latest"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              View all tools
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
