'use client'

import Link from 'next/link'

interface FeaturedProject {
  slug: string
  category: string
  year: string
  title: string
  subtitle: string
}

export default function FeaturedProjectRow({ project }: { project: FeaturedProject }) {
  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--bg-primary)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'center',
          transition: 'background 0.3s ease, border-color 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'rgba(201,168,76,0.04)'
          el.style.borderColor = 'var(--border-mid)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--bg-primary)'
          el.style.borderColor = 'var(--border-subtle)'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.625rem' }}>
            <span className="text-label">{project.category}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.year}</span>
          </div>
          <h3 className="text-h3" style={{ marginBottom: '0.5rem', fontSize: 'clamp(1.125rem, 2vw, 1.625rem)', color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p className="text-body-sm" style={{ maxWidth: '600px' }}>{project.subtitle}</p>
        </div>
        <div style={{ width: '40px', height: '40px', border: '1px solid var(--border-mid)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
