import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Software engineering, product design, brand identity, and digital strategy — delivered as integrated disciplines by a single expert team.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          label="Our Services"
          title="Two disciplines."
          titleEm="One team."
          subtitle="We operate at the intersection of software engineering and creative design — delivering integrated solutions that most agencies cannot."
          breadcrumbs={[{ label: 'Services' }]}
        />

        <div style={{ background:'var(--bg-primary)' }}>
          {services.map((svc, i) => (
            <article
              key={svc.slug}
              id={svc.slug}
              style={{
                borderBottom:'1px solid var(--border-subtle)',
                background: i % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
              }}
            >
              <div className="container-site section-padding">
                {/* Header row */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(2rem,6vw,7rem)', alignItems:'start', marginBottom:'clamp(2.5rem,5vw,4rem)' }} className="svc-header-grid">
                  <div>
                    <span className="text-label" style={{ display:'block', marginBottom:'0.75rem' }}>{svc.number} — {svc.category}</span>
                    <h2 className="text-h2" style={{ marginBottom:'1rem' }}>{svc.title}</h2>
                    <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1rem,1.5vw,1.25rem)', fontStyle:'italic', color:'var(--accent-gold)', fontWeight:300, lineHeight:1.4 }}>
                      {svc.headline}
                    </p>
                  </div>
                  <div>
                    {svc.longDescription.split('\n\n').map((para, j) => (
                      <p key={j} className="text-body" style={{ marginBottom: j < svc.longDescription.split('\n\n').length - 1 ? '1.25rem' : 0 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Capabilities + Technologies */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:'var(--border-subtle)', border:'1px solid var(--border-subtle)' }} className="svc-caps-grid">
                  <div style={{ background: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-primary)', padding:'2rem' }}>
                    <span className="text-label" style={{ display:'block', marginBottom:'1.25rem' }}>Capabilities</span>
                    <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.5rem 1rem' }}>
                      {svc.capabilities.map((cap) => (
                        <li key={cap} style={{ display:'flex', alignItems:'center', gap:'0.625rem', fontFamily:'var(--font-body)', fontSize:'0.875rem', fontWeight:300, color:'var(--text-secondary)' }}>
                          <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--accent-gold)', flexShrink:0 }} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-primary)', padding:'2rem' }}>
                    <span className="text-label" style={{ display:'block', marginBottom:'1.25rem' }}>Tools & Technologies</span>
                    <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                      {svc.technologies.map((tech) => (
                        <li key={tech} style={{ display:'flex', alignItems:'center', gap:'0.625rem', fontFamily:'var(--font-body)', fontSize:'0.875rem', fontWeight:300, color:'var(--text-secondary)' }}>
                          <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--accent-gold)', flexShrink:0 }} />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <CTABanner />
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .svc-header-grid { grid-template-columns: 1fr !important; }
          .svc-caps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
