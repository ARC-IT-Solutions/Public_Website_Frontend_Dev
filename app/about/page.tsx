import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import { values, recognition, teamStats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description: 'ARC IT Solutions was founded in 2012 with a single conviction: that the best digital work requires mastery of both engineering and design, under one roof.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          label="About ARC IT Solutions"
          title="Twelve years of building"
          titleEm="what matters."
          subtitle="A dual-discipline studio founded on the conviction that software and design belong together."
          breadcrumbs={[{ label: 'About' }]}
        />

        {/* Story */}
        <section
          aria-labelledby="story-heading"
          className="section-padding"
          style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="container-site">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,7vw,8rem)', alignItems: 'start' }} className="two-col-grid">
              <div>
                <span className="gold-line" />
                <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>Our Story</span>
                <h2 id="story-heading" className="text-h2" style={{ marginBottom: '2rem' }}>
                  Built at the intersection of two disciplines.
                </h2>
                <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                  ARC IT Solutions was founded in 2012 with a single conviction: that the best digital work requires mastery of both engineering and design. Not one outsourced to the other — both practised at the highest level, under one roof.
                </p>
                <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                  We have grown deliberately, turning down projects that did not align with our values, and building a team of 38 specialists who are regarded among the best in their fields.
                </p>
                <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                  Our clients range from Series A startups to global enterprises. What they have in common is a refusal to accept mediocrity — in their products, their brands, or the partners they choose to build with.
                </p>
                <p className="text-body">
                  What has remained constant across twelve years and hundreds of projects is the standard we hold ourselves to. We build things that last — software that scales, brands that age well, partnerships that deepen over time.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Stats grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}>
                  {teamStats.map((s) => (
                    <div key={s.label} style={{ background: 'var(--bg-card)', padding: '1.75rem' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.375rem' }}>
                        {s.value}
                      </p>
                      <p className="text-body-sm" style={{ fontSize: '0.75rem' }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recognition */}
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '1.75rem' }}>
                  <span className="text-label" style={{ display: 'block', marginBottom: '1.25rem' }}>Recognition</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {recognition.map((r) => (
                      <li key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--text-secondary)' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          aria-labelledby="values-heading"
          className="section-padding"
          style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="container-site">
            <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
              <span className="gold-line" />
              <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>Our Values</span>
              <h2 id="values-heading" className="text-h2">
                The principles that<br />guide every decision.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1px', background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}>
              {values.map((v, i) => (
                <div key={v.title} style={{ background: 'var(--bg-primary)', padding: '2.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.875rem', letterSpacing: '0.08em' }}>
                    0{i + 1}
                  </span>
                  <h3 className="text-h3" style={{ marginBottom: '0.875rem', fontSize: '1.125rem' }}>{v.title}</h3>
                  <p className="text-body-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we operate */}
        <section
          aria-labelledby="approach-heading"
          className="section-padding"
          style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="container-site">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,7vw,8rem)' }} className="two-col-grid">
              <div>
                <span className="gold-line" />
                <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>How We Operate</span>
                <h2 id="approach-heading" className="text-h2" style={{ marginBottom: '2rem' }}>
                  Small by design.<br />Senior by default.
                </h2>
              </div>
              <div>
                <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                  We are a studio of 38 people. We will not be 200 people. That is a decision, not a limitation. At this size, we can guarantee that every project is touched by people who are genuinely expert in what they do — not delegated to graduates while the seniors win the next pitch.
                </p>
                <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                  Every client works with a lead engineer and a lead designer who are senior practitioners, not account managers. The people who scoped your project are the people who build it.
                </p>
                <p className="text-body">
                  We take on fewer projects than we are offered. This is intentional. It is what allows us to say, without qualification, that every project we deliver reflects our best work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <style>{`@media(max-width:900px){.two-col-grid{grid-template-columns:1fr !important;}}`}</style>
    </>
  )
}
