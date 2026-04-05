import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTABanner from '@/components/sections/CTABanner'
import CaseStudyClient from './CaseStudyClient'
import { projects } from '@/lib/data'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: project.title, description: project.description }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {/* Hero */}
        <section aria-label={`${project.title} — case study`} style={{ background:'var(--bg-primary)', borderBottom:'1px solid var(--border-subtle)', paddingTop:'clamp(7rem,14vw,10rem)', paddingBottom:'clamp(3rem,7vw,5rem)', position:'relative', overflow:'hidden' }}>
          <div aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)', backgroundSize:'80px 80px' }} />
          <div className="container-site" style={{ position:'relative', zIndex:1 }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom:'2rem' }}>
              <ol style={{ display:'flex', alignItems:'center', gap:'0.5rem', listStyle:'none', flexWrap:'wrap' }}>
                <li><Link href="/" style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-muted)', textDecoration:'none' }}>Home</Link></li>
                <li style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}><span style={{ color:'var(--text-muted)', fontSize:'0.75rem' }}>›</span><Link href="/work" style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-muted)', textDecoration:'none' }}>Work</Link></li>
                <li style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}><span style={{ color:'var(--text-muted)', fontSize:'0.75rem' }}>›</span><span style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-secondary)' }} aria-current="page">{project.title}</span></li>
              </ol>
            </nav>
            <span className="gold-line" />
            <span className="text-label" style={{ display:'block', marginBottom:'1rem' }}>{project.category}</span>
            <h1 className="text-h1" style={{ marginBottom:'1rem' }}>{project.title}</h1>
            <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.125rem,2vw,1.5rem)', fontWeight:300, fontStyle:'italic', color:'var(--accent-gold)', marginBottom:'2rem', maxWidth:'640px' }}>{project.subtitle}</p>
            <div style={{ display:'flex', gap:'3rem', flexWrap:'wrap', paddingTop:'2rem', borderTop:'1px solid var(--border-subtle)' }}>
              {[{ label:'Client', value:project.client },{ label:'Year', value:project.year },{ label:'Duration', value:project.duration },{ label:'Team', value:project.team }].map(m => (
                <div key={m.label}>
                  <span className="text-label" style={{ display:'block', marginBottom:'0.25rem', fontSize:'0.6rem' }}>{m.label}</span>
                  <span style={{ fontFamily:'var(--font-body)', fontSize:'0.9375rem', fontWeight:300, color:'var(--text-secondary)' }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section aria-label="Project outcomes" style={{ background:'var(--bg-secondary)', borderBottom:'1px solid var(--border-subtle)' }}>
          <div className="container-site">
            <div style={{ display:'grid', gridTemplateColumns:`repeat(${project.metrics.length},1fr)`, gap:'0' }}>
              {project.metrics.map((m, i) => (
                <div key={m.label} style={{ padding:'2rem', borderRight: i < project.metrics.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                  <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:300, color:'var(--text-primary)', lineHeight:1, marginBottom:'0.375rem' }}>{m.value}</p>
                  <p className="text-body-sm" style={{ fontSize:'0.75rem' }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section aria-label="Case study details" className="section-padding" style={{ background:'var(--bg-primary)' }}>
          <div className="container-site">
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(3rem,7vw,8rem)', alignItems:'start' }} className="case-body-grid">
              <div>
                <span className="text-label" style={{ display:'block', marginBottom:'1rem' }}>The Challenge</span>
                <p className="text-body" style={{ marginBottom:'2.5rem' }}>{project.challenge}</p>
                <span className="text-label" style={{ display:'block', marginBottom:'1rem' }}>Services Delivered</span>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                  {project.services.map(s => (
                    <li key={s} style={{ display:'flex', alignItems:'center', gap:'0.625rem', fontFamily:'var(--font-body)', fontSize:'0.9375rem', fontWeight:300, color:'var(--text-secondary)' }}>
                      <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--accent-gold)', flexShrink:0 }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-label" style={{ display:'block', marginBottom:'1rem' }}>Our Approach</span>
                <p className="text-body" style={{ marginBottom:'2.5rem' }}>{project.solution}</p>
                <div style={{ background:'var(--bg-card)', border:'1px solid var(--border-mid)', padding:'1.5rem', borderLeft:'3px solid var(--accent-gold)' }}>
                  <span className="text-label" style={{ display:'block', marginBottom:'0.75rem' }}>Outcome</span>
                  <p className="text-body">{project.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags */}
        <section aria-label="Technologies" style={{ background:'var(--bg-secondary)', borderTop:'1px solid var(--border-subtle)', borderBottom:'1px solid var(--border-subtle)', padding:'2rem 0' }}>
          <div className="container-site" style={{ display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap' }}>
            <span className="text-label">Technologies</span>
            {project.tags.map(tag => (
              <span key={tag} style={{ padding:'0.3rem 0.875rem', border:'1px solid var(--border-subtle)', borderRadius:'1px', fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-muted)', letterSpacing:'0.04em' }}>{tag}</span>
            ))}
          </div>
        </section>

        {/* Next project — interactive part */}
        <CaseStudyClient nextProject={{ slug: nextProject.slug, title: nextProject.title }} />

        <CTABanner />
      </main>
      <Footer />
      <style>{`.case-body-grid{} @media(max-width:900px){.case-body-grid{grid-template-columns:1fr !important;}}`}</style>
    </>
  )
}
