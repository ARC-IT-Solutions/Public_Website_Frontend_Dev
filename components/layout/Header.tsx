'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const closeMenu = () => setMenuOpen(false)

  const bgTransparent = isHome && !scrolled

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease',
          background: bgTransparent ? 'transparent' : 'rgba(13,13,11,0.94)',
          borderBottom: bgTransparent ? '1px solid transparent' : '1px solid rgba(201,168,76,0.1)',
          backdropFilter: bgTransparent ? 'none' : 'blur(18px)',
          WebkitBackdropFilter: bgTransparent ? 'none' : 'blur(18px)',
        }}
      >
        <div className="container-site" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'72px' }}>
          <Link href="/" aria-label="ARC IT Solutions — Home" style={{ textDecoration:'none' }}>
            <span style={{ fontFamily:'var(--font-display)', fontSize:'1.375rem', fontWeight:400, letterSpacing:'-0.01em', color:'var(--text-primary)' }}>
              ARC IT Solutions<span style={{ color:'var(--accent-gold)' }}>.</span>
            </span>
          </Link>

          <nav role="navigation" aria-label="Primary navigation" style={{ display:'flex', alignItems:'center', gap:'2.5rem' }}>
            <ul id="desktop-nav" style={{ display:'flex', alignItems:'center', gap:'2rem', listStyle:'none' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: 400,
                        letterSpacing: '0.06em',
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        transition: 'color 0.2s ease',
                        borderBottom: isActive ? '1px solid var(--accent-gold)' : '1px solid transparent',
                        paddingBottom: '2px',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link href="/contact" id="desktop-cta" className="btn-primary" style={{ padding:'0.6rem 1.5rem', fontSize:'0.75rem' }}>
              Get in Touch
            </Link>

            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              id="hamburger"
              style={{ background:'none', border:'none', cursor:'pointer', padding:'8px', display:'none', flexDirection:'column', gap:'5px' }}
            >
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display:'block', width:'22px', height:'1px',
                  background:'var(--text-primary)',
                  transition:'all 0.3s ease',
                  transformOrigin:'center',
                  transform: menuOpen
                    ? i===0 ? 'rotate(45deg) translate(4px,4px)'
                    : i===1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(4px,-4px)'
                    : 'none',
                }} />
              ))}
            </button>
          </nav>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position:'fixed', inset:0,
          background:'rgba(13,13,11,0.98)',
          backdropFilter:'blur(20px)',
          display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'2rem',
          transition:'opacity 0.4s ease, visibility 0.4s ease',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          zIndex: 99,
        }}
      >
        <nav>
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.75rem' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    fontFamily:'var(--font-display)',
                    fontSize:'2.25rem',
                    fontWeight:300,
                    color: pathname === link.href ? 'var(--accent-gold)' : 'var(--text-primary)',
                    textDecoration:'none',
                    letterSpacing:'-0.01em',
                    transition:'color 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact" className="btn-primary" onClick={closeMenu}>
          Get in Touch
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #desktop-nav { display: none !important; }
          #desktop-cta { display: none !important; }
          #hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
