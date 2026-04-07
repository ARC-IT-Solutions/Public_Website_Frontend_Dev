'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/data'

const footerServices = [
  { label:'Software Engineering', href:'/services#software-engineering' },
  { label:'Product Design', href:'/services#product-design' },
  { label:'Brand Identity', href:'/services#brand-identity' },
  { label:'Digital Strategy', href:'/services#digital-strategy' },
]

const footerNav = [
  { label:'Services', href:'/services' },
  { label:'Our Work', href:'/work' },
  { label:'About Us', href:'/about' },
  { label:'Process', href:'/process' },
  { label:'Contact', href:'/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" style={{ borderTop:'1px solid var(--border-subtle)', background:'var(--bg-secondary)', paddingTop:'clamp(3.5rem,7vw,6rem)', paddingBottom:'2rem' }}>
      <div className="container-site">
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr 1fr', gap:'3rem', marginBottom:'4rem' }} className="footer-grid">
          <div>
            <Link href="/" aria-label="ARC IT Solutions — Home" style={{ textDecoration:'none', display:'inline-block', marginBottom:'1.25rem' }}>
              <span style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:400, color:'var(--text-primary)' }}>
                ARC IT<span style={{ color:'var(--accent-gold)' }}> Solutions</span>
              </span>
            </Link>
            <p className="text-body-sm" style={{ marginBottom:'1.5rem', maxWidth:'260px' }}>
              A software engineering and creative design studio built for businesses that think in decades, not quarters.
            </p>
            <address style={{ fontStyle:'normal' }}>
              <a href={`mailto:${siteConfig.email}`} className="text-body-sm" style={{ display:'block', textDecoration:'none', color:'var(--text-secondary)', transition:'color 0.2s ease' }}
                 onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-primary)')}
                 onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-secondary)')}>
                {siteConfig.email}
              </a>
              {/* <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="text-body-sm" style={{ display:'block', textDecoration:'none', color:'var(--text-secondary)', transition:'color 0.2s ease' }}
                 onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-primary)')}
                 onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-secondary)')}>
                {siteConfig.phone}
              </a> */}
              {siteConfig.phone.map((num, i) => (
    <a
      key={i}
      href={`tel:${num.replace(/\D/g, '')}`}
      className="text-body-sm"
      style={{ display: 'block', color: 'var(--text-secondary)' }}
    >
      {num}
    </a>)
)}
            </address>
          </div>

          <div>
            <h3 className="text-label" style={{ marginBottom:'1.25rem', display:'block' }}>Services</h3>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {footerServices.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-body-sm" style={{ textDecoration:'none', transition:'color 0.2s ease', color:'var(--text-secondary)', display:'block' }}
                        onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-primary)')}
                        onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-secondary)')}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label" style={{ marginBottom:'1.25rem', display:'block' }}>Navigation</h3>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {footerNav.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm" style={{ textDecoration:'none', transition:'color 0.2s ease', color:'var(--text-secondary)', display:'block' }}
                        onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-primary)')}
                        onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-secondary)')}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label" style={{ marginBottom:'1.25rem', display:'block' }}>Start a Project</h3>
            <p className="text-body-sm" style={{ marginBottom:'1.5rem' }}>
              Ready to build something that lasts? We would like to hear about your project.
            </p>
            <Link href="/contact" className="btn-ghost" style={{ fontSize:'0.75rem', padding:'0.75rem 1.5rem' }}>
              Enquire Now
            </Link>
          </div>
        </div>

        <div className="hr-gold" />

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem', paddingTop:'1.5rem' }}>
          <p className="text-body-sm" style={{ fontSize:'0.75rem' }}>© {year} ARC IT Solutions. All rights reserved.</p>
          <nav aria-label="Legal navigation">
            <ul style={{ display:'flex', gap:'1.5rem', listStyle:'none', flexWrap:'wrap' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <li key={item}>
                  <Link href="#" style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-muted)', textDecoration:'none', transition:'color 0.2s ease' }}
                        onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-secondary)')}
                        onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-muted)')}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <style>{`@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:600px){.footer-grid{grid-template-columns:1fr !important;}}`}</style>
    </footer>
  )
}
