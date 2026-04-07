'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'

const previews: Record<string, React.ComponentType> = {
  'meridian-financial-platform': dynamic(() => import('@/components/previews/MeridianPreview')),
  'halcyon-health-app': dynamic(() => import('@/components/previews/HalcyonPreview')),
  'arca-architecture-studio': dynamic(() => import('@/components/previews/ArcaPreview')),
  'vanta-logistics-saas': dynamic(() => import('@/components/previews/VantaPreview')),
}

interface FeaturedProject {
  slug: string
  category: string
  year: string
  title: string
  subtitle: string
}

export default function FeaturedProjectRow({ project }: { project: FeaturedProject }) {
  const Preview = previews[project.slug]

  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          border: '1px solid var(--border-subtle)',
          background: 'var(--bg-primary)',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          transition: 'border-color 0.3s ease',
          cursor: 'pointer',
          overflow: 'hidden',
          minHeight: '200px',
        }}
        className="featured-row"
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-mid)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)')}
      >
        {/* Preview thumbnail */}
        {Preview && (
          <div style={{ background: '#0a0a08', overflow: 'hidden', position: 'relative', borderRight: '1px solid var(--border-subtle)' }}>
            <div style={{ position: 'absolute', inset: 0, transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1)')}
            >
              <Preview />
            </div>
          </div>
        )}

        {/* Text content */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span className="text-label">{project.category}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.year}</span>
          </div>
          <h3 className="text-h3" style={{ marginBottom: '0.625rem', fontSize: 'clamp(1.125rem, 2vw, 1.75rem)', color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p className="text-body-sm" style={{ maxWidth: '480px', marginBottom: '1.5rem' }}>{project.subtitle}</p>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View Case Study
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}
