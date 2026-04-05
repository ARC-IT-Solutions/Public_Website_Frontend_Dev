'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote:
      'ARC IT Solutions delivered something we had failed to achieve with two previous agencies — a product that our engineers are proud of and our users actually enjoy. They held a standard we did not even know to ask for.',
    name: 'Sarah Okonkwo',
    title: 'Chief Product Officer',
    company: 'Meridian Financial',
  },
  {
    quote:
      'The level of integration between their design and engineering teams is unlike anything I have seen. When we launched, there was zero gap between what was designed and what was built. That almost never happens.',
    name: 'James Hartwell',
    title: 'Founder & CEO',
    company: 'Halcyon Health',
  },
  {
    quote:
      'We came to ARC IT Solutions for a website. We ended up with a brand identity, a design system, and a technology partner we plan to work with for the next decade. The quality of their thinking is exceptional.',
    name: 'Priya Menon',
    title: 'Managing Director',
    company: 'Arca Architecture Studio',
  },
  {
    quote:
      'In three years of working with ARC IT Solutions, they have never missed a deadline, never delivered work below expectation, and never stopped pushing us to think bigger. They are genuinely part of our team.',
    name: 'Daniel Park',
    title: 'VP Engineering',
    company: 'Vanta Logistics',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="container-site">
        <div style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
          <span className="gold-line" />
          <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>Client Voices</span>
          <h2 id="testimonials-heading" className="text-h1">
            What our clients say.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
          className="testimonials-grid"
        >
          {/* Quote display */}
          <div>
            <svg
              width="48" height="32" viewBox="0 0 48 32" fill="none"
              aria-hidden="true"
              style={{ marginBottom: '2rem', opacity: 0.4 }}
            >
              <path
                d="M0 32V19.2C0 13.867 1.333 9.333 4 5.6 6.667 1.867 10.667 0 16 0h3.2l-2.4 6.4C14.4 7.467 13.067 9.067 12 11.2 10.933 13.333 10.4 15.733 10.4 18.4V32H0zm27.2 0V19.2c0-5.333 1.333-9.867 4-13.6C34.133 1.867 38.133 0 43.2 0H48l-2.4 6.4c-2.4 1.067-3.733 2.667-4.8 4.8C39.733 13.333 39.2 15.733 39.2 18.4V32H27.2z"
                fill="var(--accent-gold)"
              />
            </svg>

            <blockquote>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                  marginBottom: '2rem',
                  transition: 'opacity 0.3s ease',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {t.name}
                </p>
                <p className="text-body-sm" style={{ fontSize: '0.8125rem' }}>
                  {t.title}, {t.company}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Client selector */}
          <nav aria-label="Testimonial navigation">
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {testimonials.map((item, i) => (
                <li key={item.name}>
                  <button
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: i === active ? 'var(--bg-card)' : 'transparent',
                      border: i === active ? '1px solid var(--border-mid)' : '1px solid transparent',
                      padding: '1rem 1.25rem',
                      cursor: 'pointer',
                      borderRadius: '1px',
                      transition: 'all 0.2s ease',
                      borderLeft: i === active ? '2px solid var(--accent-gold)' : '2px solid transparent',
                    }}
                  >
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: i === active ? 500 : 300,
                      color: i === active ? 'var(--text-primary)' : 'var(--text-secondary)',
                      marginBottom: '0.2rem',
                      transition: 'color 0.2s ease',
                    }}>
                      {item.name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}>
                      {item.company}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
