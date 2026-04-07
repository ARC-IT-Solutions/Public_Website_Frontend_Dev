'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'

const previews: Record<string, React.ComponentType> = {
  'meridian-financial-platform': dynamic(() => import('@/components/previews/MeridianPreview')),
  'halcyon-health-app': dynamic(() => import('@/components/previews/HalcyonPreview')),
  'arca-architecture-studio': dynamic(() => import('@/components/previews/ArcaPreview')),
  'vanta-logistics-saas': dynamic(() => import('@/components/previews/VantaPreview')),
}

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
  const Preview = previews[project.slug]

  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          border: '1px solid var(--border-subtle)',
          background: 'var(--bg-primary)',
          transition: 'border-color 0.3s ease',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-mid)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)')}
      >
        {/* Preview image */}
        {Preview && (
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            background: '#0a0a08',
            overflow: 'hidden',
            position: 'relative',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
            }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1)')}
            >
              <Preview />
            </div>
          </div>
        )}

        {/* Card content */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="text-label">{project.category}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.year}</span>
            </div>
            <div style={{ width: '36px', height: '36px', border: '1px solid var(--border-mid)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <h2 className="text-h3" style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)' }}>
            {project.title}
          </h2>
          <p className="text-body-sm" style={{ marginBottom: '1.25rem' }}>{project.subtitle}</p>

          {/* Metrics */}
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.2rem' }}>
                  {m.value}
                </p>
                <p className="text-body-sm" style={{ fontSize: '0.7rem' }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
