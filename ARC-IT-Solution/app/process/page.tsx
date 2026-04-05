import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import { processSteps } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Process',
  description: 'Our four-phase engagement process — refined across 12 years and 180+ projects to reliably deliver software and design of lasting quality.',
}

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          label="How We Work"
          title="A process refined over"
          titleEm="12 years."
          subtitle="Reliable delivery starts with a reliable process. Ours has been refined across hundreds of engagements and never stops improving."
          breadcrumbs={[{ label: 'Process' }]}
        />

        <section aria-label="Our four-phase process" style={{ background:'var(--bg-primary)' }}>
          {processSteps.map((step, i) => (
            <article
              key={step.phase}
              style={{
                borderBottom:'1px solid var(--border-subtle)',
                background: i % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
              }}
            >
              <div className="container-site section-padding">
                <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:'clamp(3rem,6vw,7rem)', alignItems:'start' }} className="process-body-grid">
                  {/* Left: meta */}
                  <div>
                    <span className="text-label" style={{ display:'block', marginBottom:'0.75rem' }}>{step.phase}</span>
                    <h2 className="text-h2" style={{ marginBottom:'1rem', fontSize:'clamp(1.5rem,2.5vw,2.25rem)' }}>{step.title}</h2>
                    <div style={{ display:'inline-flex', padding:'0.375rem 0.875rem', border:'1px solid var(--border-mid)', borderRadius:'1px', marginBottom:'2rem' }}>
                      <span style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-muted)', letterSpacing:'0.06em', textTransform:'uppercase' }}>{step.duration}</span>
                    </div>

                    <div>
                      <span className="text-label" style={{ display:'block', marginBottom:'1rem', fontSize:'0.625rem' }}>Deliverables</span>
                      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                        {step.deliverables.map((d) => (
                          <li key={d} style={{ display:'flex', alignItems:'center', gap:'0.625rem', fontFamily:'var(--font-body)', fontSize:'0.875rem', fontWeight:300, color:'var(--text-secondary)' }}>
                            <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--accent-gold)', flexShrink:0 }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: detail */}
                  <div>
                    <p className="text-body" style={{ marginBottom:'1.5rem', fontSize:'1.0625rem' }}>{step.description}</p>
                    {step.detail.split('\n\n').map((para, j) => (
                      <p key={j} className="text-body" style={{ marginBottom: j < step.detail.split('\n\n').length - 1 ? '1.25rem' : 0 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* FAQ / principles strip */}
        <section aria-labelledby="principles-heading" className="section-padding" style={{ background:'var(--bg-tertiary)', borderTop:'1px solid var(--border-subtle)' }}>
          <div className="container-site">
            <div style={{ marginBottom:'clamp(2.5rem,5vw,4rem)' }}>
              <span className="gold-line" />
              <span className="text-label" style={{ display:'block', marginBottom:'1rem' }}>Principles</span>
              <h2 id="principles-heading" className="text-h2">How we work, in practice.</h2>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:'1px', background:'var(--border-subtle)', border:'1px solid var(--border-subtle)' }}>
              {[
                { q:'Do you work remotely?', a:'Yes. Our team is distributed across North America and Europe. We have successfully delivered large projects entirely remotely and have the tooling and discipline to do so well.' },
                { q:'How do you handle changes in scope?', a:'We address scope change directly, not quietly. Any change that affects timeline or budget is documented in a Change Order and approved before work begins. No surprises.' },
                { q:'What is your minimum engagement size?', a:'Our minimum engagement is $25,000. Below that threshold, we cannot dedicate the level of attention a project deserves.' },
                { q:'Do you offer retainer arrangements?', a:'Yes. Many clients move to a monthly retainer after their initial project — covering maintenance, iteration, and strategic advisory. Retainer structures are discussed at project close.' },
                { q:'How do you handle intellectual property?', a:'All work product created under a client engagement transfers to the client in full upon final payment. We retain no licence over client code, designs, or brand assets.' },
                { q:'Can you work with our existing team?', a:'Absolutely. We frequently embed with in-house engineering or design teams, functioning as an extension of your team rather than an external supplier.' },
              ].map((item) => (
                <div key={item.q} style={{ background:'var(--bg-primary)', padding:'2rem' }}>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.125rem', fontWeight:400, color:'var(--text-primary)', marginBottom:'0.75rem', lineHeight:1.3 }}>{item.q}</h3>
                  <p className="text-body-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .process-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
