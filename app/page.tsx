import { SiteHeader } from '@/components/site-header'
import { HeroSearch } from '@/components/hero-search'
import { CategoriesSection } from '@/components/categories-section'
import { FeaturedSection } from '@/components/featured-section'
import { LatestSection } from '@/components/latest-section'
import { BlogSection } from '@/components/blog-section'
import { SiteFooter } from '@/components/site-footer'
import { AdSlot } from '@/components/ad-slot'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BTTOTEK Solutions',
  url: 'https://bttotek.com',
  description: '100+ free online tools and calculators. Fast, free, and reliable.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://bttotek.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <HeroSearch />

        {/* Top ad — placed after meaningful content per AdSense best practices */}
        <AdSlot format="leaderboard" className="py-8" label="Advertisement" />

        <CategoriesSection />
        <FeaturedSection />

        <AdSlot format="horizontal" className="py-8" label="Advertisement" />

        <LatestSection />
        <BlogSection />

        <AdSlot format="horizontal" className="py-8" label="Advertisement" />
      </main>
      <SiteFooter />
    </div>
  )
}
