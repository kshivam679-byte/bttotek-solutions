import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/tools-data'
import { SectionHeading } from '@/components/section-heading'

export function BlogSection() {
  return (
    <section id="blog" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the blog"
          title="Guides, tips & how-tos"
          description="Learn how to get the most out of our tools with practical, easy-to-follow articles."
          action={
            <a
              href="#blog"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              All articles
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-accent to-secondary">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold leading-snug text-card-foreground transition-colors group-hover:text-primary">
                  <a href={`#${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
