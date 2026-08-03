import { Wrench, Globe, Share2, Mail, Rss } from 'lucide-react'

const linkGroups = [
  {
    title: 'Tools',
    links: [
      { label: 'PDF Tools', href: '#pdf-tools' },
      { label: 'Image Tools', href: '#image-tools' },
      { label: 'Calculators', href: '#calculators' },
      { label: 'Converters', href: '#converters' },
      { label: 'Developer Tools', href: '#developer' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Blog', href: '#blog' },
      { label: 'Advertise', href: '#advertise' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Disclaimer', href: '#disclaimer' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
    ],
  },
]

const socials = [
  { label: 'Website', href: '#', icon: Globe },
  { label: 'Share', href: '#', icon: Share2 },
  { label: 'Blog RSS', href: '#blog', icon: Rss },
  { label: 'Email', href: '#contact', icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-extrabold text-footer-foreground">
                BTTOTEK<span className="text-primary"> Solutions</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-footer-muted">
              100+ free online tools and calculators built to make your day easier. Fast, private,
              and always free — no signup required.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-footer-border text-footer-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-footer-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-footer-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-footer-border pt-6 sm:flex-row">
          <p className="text-sm text-footer-muted">
            &copy; {new Date().getFullYear()} BTTOTEK Solutions. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#privacy" className="text-sm text-footer-muted transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#disclaimer" className="text-sm text-footer-muted transition-colors hover:text-primary">
              Disclaimer
            </a>
            <a href="#terms" className="text-sm text-footer-muted transition-colors hover:text-primary">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
