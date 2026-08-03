import { latestTools } from '@/lib/tools-data'
import { ToolCard } from '@/components/tool-card'
import { SectionHeading } from '@/components/section-heading'

export function LatestSection() {
  return (
    <section id="latest" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Fresh off the press"
        title="Latest tools added"
        description="We ship new tools every week. Here are the newest additions to the BTTOTEK library."
      />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latestTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  )
}
