import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import ContactSection from '@/components/sections/ContactSection'
import ContactInfoLink from '@/components/ui/ContactInfoLink'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with ARC IT Solutions. Tell us about your software engineering or creative design brief and we will respond within one business day.',
}

const contactItems = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\D/g, '')}` },
  { label: 'Location', value: siteConfig.address, href: null },
  { label: 'Response Time', value: 'Within 1 business day', href: null },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          label="Get in Touch"
          title="Let us build something"
          titleEm="together."
          subtitle="Whether you have a precise brief or a vague ambition, we welcome the conversation."
          breadcrumbs={[{ label: 'Contact' }]}
        />

        {/* Contact details strip */}
        <section
          aria-label="Contact information"
          style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '2.5rem 0' }}
        >
          <div className="container-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '0' }} className="contact-strip">
              {contactItems.map((item, i) => (
                <div key={item.label} style={{ borderRight: i < contactItems.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                  <ContactInfoLink item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form layout */}
        <section
          aria-labelledby="form-heading"
          className="section-padding"
          style={{ background: 'var(--bg-primary)' }}
        >
          <div className="container-site">
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(3rem,7vw,8rem)', alignItems: 'start' }}
              className="contact-page-grid"
            >
              <div>
                <span className="gold-line" />
                <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>Project Enquiry</span>
                <h2 id="form-heading" className="text-h2" style={{ marginBottom: '1.5rem' }}>
                  Tell us about<br />your project.
                </h2>
                <p className="text-body" style={{ marginBottom: '2rem' }}>
                  We take on a limited number of new client engagements each quarter to protect the quality of our work. Complete the form and we will review your enquiry carefully.
                </p>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '1.5rem', borderLeft: '2px solid var(--accent-gold)', marginBottom: '1.5rem' }}>
                  <p className="text-body-sm" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-primary)' }}>
                    &ldquo;The people who scoped your project are the people who build it.&rdquo;
                  </p>
                </div>
                <p className="text-body-sm">
                  We aim to respond to all enquiries within one business day. For urgent requirements, please call us directly.
                </p>
              </div>

              <ContactSection standalone />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) { .contact-page-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .contact-strip { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </>
  )
}
