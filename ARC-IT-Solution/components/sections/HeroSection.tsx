'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '12+', label: 'Years in Practice' },
  { value: '180+', label: 'Projects Delivered' },
  { value: '60+', label: 'Clients Served' },
  { value: '98%', label: 'Retention Rate' },
]

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0, h = 0

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * window.devicePixelRatio
      canvas.height = h * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    // Subtle grid lines
    const drawGrid = (t: number) => {
      ctx.clearRect(0, 0, w, h)

      // Horizontal lines
      const cols = 6
      const rows = 8
      for (let c = 0; c <= cols; c++) {
        const x = (c / cols) * w
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        const alpha = 0.025 + Math.sin(t * 0.001 + c * 0.5) * 0.008
        ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
      for (let r = 0; r <= rows; r++) {
        const y = (r / rows) * h
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        const alpha = 0.025 + Math.sin(t * 0.0008 + r * 0.4) * 0.008
        ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    const tick = (t: number) => {
      drawGrid(t)
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      aria-label="ARC IT Solutions — Software Engineering and Creative Design Agency"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '60%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1, paddingBottom: 'clamp(4rem, 8vw, 7rem)', paddingTop: '120px' }}>

        {/* Label */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="text-label">Est. 2012 — Software & Design</span>
          <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--accent-gold)', opacity: 0.4 }} />
        </div>

        {/* Main headline */}
        <h1
          className="text-hero"
          style={{ maxWidth: '900px', marginBottom: '2rem' }}
        >
          We craft software
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>and design</em>
          <br />
          that endures.
        </h1>

        <p
          className="text-body"
          style={{ maxWidth: '520px', marginBottom: '3rem', fontSize: '1.0625rem' }}
        >
          ARC IT Solutions is a dual-discipline agency — software engineering and creative design — built for businesses that refuse to compromise on craft, quality, or longevity.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/contact" className="btn-primary">
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/work" className="btn-ghost">
            View Our Work
          </a>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '0',
            marginTop: 'clamp(4rem, 8vw, 7rem)',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                paddingRight: '2rem',
                borderRight: i < stats.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingLeft: i > 0 ? '2rem' : '0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 300,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  marginBottom: '0.375rem',
                }}
              >
                {stat.value}
              </p>
              <p className="text-body-sm" style={{ fontSize: '0.75rem' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: 'clamp(1.25rem, 4vw, 4rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 1,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.625rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          writingMode: 'vertical-rl',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, var(--accent-gold-muted), transparent)',
        }} />
      </div>
    </section>
  )
}
