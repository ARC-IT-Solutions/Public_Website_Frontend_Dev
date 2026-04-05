import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  label: string
  title: string
  titleEm?: string          // italic gold word/phrase to inject
  titleEmPosition?: 'before' | 'after' | 'replace'
  subtitle?: string
  breadcrumbs?: Crumb[]
}

export default function PageHero({ label, title, titleEm, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      aria-label={`${title} — page header`}
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
        paddingTop: 'clamp(7rem, 14vw, 10rem)',
        paddingBottom: 'clamp(3rem, 7vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-30%', right: '5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', flexWrap: 'wrap' }}>
              <li>
                <Link href="/" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>›</span>
                  {crumb.href ? (
                    <Link href={crumb.href} style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-secondary)' }} aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <span className="gold-line" />
        <span className="text-label" style={{ display: 'block', marginBottom: '1.25rem' }}>{label}</span>

        <h1 className="text-h1" style={{ maxWidth: '800px', marginBottom: subtitle ? '1.5rem' : 0 }}>
          {titleEm ? (
            <>
              {title}
              {' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>{titleEm}</em>
            </>
          ) : title}
        </h1>

        {subtitle && (
          <p className="text-body" style={{ maxWidth: '560px', fontSize: '1.0625rem' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
