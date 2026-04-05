'use client'

import Link from 'next/link'

interface Project {
  slug: string
  category: string
  year: string
  duration: string
  title: string
  subtitle: string
  description: string
  metrics: { value: string; label: string }[]
  services: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          padding: 'clamp(2rem, 4vw, 3rem)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--bg-primary)',
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
              <span className="text-label">{project.category}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.year}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>· {project.duration}</span>
            </div>
            <h2
              className="text-h2"
              style={{ marginBottom: '0.75rem', fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', color: 'var(--text-primary)' }}
            >
              {project.title}
            </h2>
            <p className="text-body-sm" style={{ maxWidth: '600px', marginBottom: '1.5rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {project.metrics.slice(0, 3).map((m) => (
                <div key={m.label}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.25rem' }}>
                    {m.value}
                  </p>
                  <p className="text-body-sm" style={{ fontSize: '0.7rem' }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', flexShrink: 0 }}>
            <div style={{ width: '44px', height: '44px', border: '1px solid var(--border-mid)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', alignItems: 'flex-end' }}>
              {project.services.map((s) => (
                <span
                  key={s}
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.04em', border: '1px solid var(--border-subtle)', padding: '0.2rem 0.625rem', borderRadius: '1px', whiteSpace: 'nowrap' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
