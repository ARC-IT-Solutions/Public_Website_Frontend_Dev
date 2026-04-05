import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import ServiceCard from '@/components/ui/ServiceCard'
import FeaturedProjectRow from '@/components/ui/FeaturedProjectRow'
import { services, projects, stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'ARC IT Solutions — Software Engineering & Creative Design Agency',
  description: 'A dual-discipline agency — software engineering and creative design — built for businesses that refuse to compromise on craft, quality, or longevity.',
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <HeroSection />

        {/* ── Services teaser ── */}
        <section
          id="services-teaser"
          aria-labelledby="services-teaser-heading"
          className="section-padding"
          style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="container-site">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
              <div>
                <span className="gold-line" />
                <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>What We Do</span>
                <h2 id="services-teaser-heading" className="text-h2">
                  Two disciplines.<br />One standard of excellence.
                </h2>
              </div>
              <Link href="/services" className="btn-ghost" style={{ fontSize: '0.75rem' }}>
                All Services →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}>
              {services.map((svc) => (
                <ServiceCard key={svc.slug} svc={svc} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured work ── */}
        <section
          id="work-teaser"
          aria-labelledby="work-teaser-heading"
          className="section-padding"
          style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="container-site">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
              <div>
                <span className="gold-line" />
                <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>Selected Work</span>
                <h2 id="work-teaser-heading" className="text-h2">
                  A record built on<br />results, not promises.
                </h2>
              </div>
              <Link href="/work" className="btn-ghost" style={{ fontSize: '0.75rem' }}>
                View All Work →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {featuredProjects.map((project) => (
                <FeaturedProjectRow key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section
          aria-label="Agency credentials"
          style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)', padding: '2.5rem 0' }}
        >
          <div className="container-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px,1fr))', gap: '0' }}>
              {stats.map((stat, i) => (
                <div key={stat.label} style={{ textAlign: 'center', padding: '1rem', borderRight: i < stats.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.25rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.375rem' }}>
                    {stat.value}
                  </p>
                  <p className="text-body-sm" style={{ fontSize: '0.75rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
