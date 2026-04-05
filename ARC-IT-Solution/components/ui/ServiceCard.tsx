'use client'

import Link from 'next/link'

interface Service {
  slug: string
  number: string
  title: string
  description: string
}

export default function ServiceCard({ svc }: { svc: Service }) {
  return (
    <Link href={`/services#${svc.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        style={{
          background: 'var(--bg-card)',
          padding: '2rem',
          height: '100%',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg-tertiary)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card)')}
      >
        <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>{svc.number}</span>
        <h3 className="text-h3" style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {svc.title}
        </h3>
        <p className="text-body-sm">{svc.description}</p>
      </div>
    </Link>
  )
}
