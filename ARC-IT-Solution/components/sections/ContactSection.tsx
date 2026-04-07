'use client'

import { useState, useRef } from 'react'

type FormData = {
  name: string
  email: string
  company: string
  budget: string
  message: string
  honeypot: string
  contact_number: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const budgetOptions = [
  { value: '', label: 'Select a budget range' },
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k+', label: '$100,000+' },
  { value: 'discuss', label: "Let's discuss" },
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--bg-secondary)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '1px',
  padding: '0.875rem 1rem',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  fontWeight: 300,
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  WebkitAppearance: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '0.5rem',
}

interface ContactSectionProps {
  standalone?: boolean
}

function ContactForm() {
  const [form, setForm] = useState<FormData>({ name:'', email:'', company:'', budget:'', message:'', honeypot:'' , contact_number:''})
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.message.trim() || form.message.length < 20) e.message = 'Please tell us a bit more about your project (at least 20 characters).'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate() || form.honeypot) return
    setStatus('loading')
    try {
      await new Promise(res => setTimeout(res, 1800))
      setStatus('success')
      setForm({ name:'', email:'', company:'', budget:'', message:'' , contact_number:'', honeypot:'' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="alert" style={{ background:'var(--bg-card)', border:'1px solid var(--border-mid)', padding:'3rem 2.5rem', textAlign:'center' }}>
        <div style={{ width:'48px', height:'48px', border:'1px solid var(--accent-gold)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10l5 5 7-7" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-h3" style={{ marginBottom:'1rem' }}>Message received.</h3>
        <p className="text-body" style={{ marginBottom:'1.5rem' }}>Thank you for reaching out. We will review your enquiry and respond within one business day.</p>
        <button onClick={() => setStatus('idle')} className="btn-ghost" style={{ fontSize:'0.75rem' }}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form" style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
      {/* Honeypot */}
      <div style={{ display:'none' }} aria-hidden="true">
        <input name="honeypot" type="text" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={handleChange} />
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }} className="form-row">
        <div>
          <label htmlFor="name" style={labelStyle}>Name <span aria-label="required" style={{ color:'var(--accent-gold)' }}>*</span></label>
          <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name"
            aria-describedby={errors.name ? 'name-error' : undefined} aria-invalid={!!errors.name}
            style={{ ...inputStyle, borderColor: errors.name ? 'rgba(220,80,80,0.5)' : undefined }}
            onFocus={e=>(e.target.style.borderColor='var(--border-strong)')}
            onBlur={e=>(e.target.style.borderColor=errors.name ? 'rgba(220,80,80,0.5)' : 'var(--border-subtle)')}
          />
          {errors.name && <p id="name-error" role="alert" style={{ color:'rgba(220,80,80,0.8)', fontSize:'0.75rem', marginTop:'0.375rem' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email <span aria-label="required" style={{ color:'var(--accent-gold)' }}>*</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@company.com"
            aria-describedby={errors.email ? 'email-error' : undefined} aria-invalid={!!errors.email}
            style={{ ...inputStyle, borderColor: errors.email ? 'rgba(220,80,80,0.5)' : undefined }}
            onFocus={e=>(e.target.style.borderColor='var(--border-strong)')}
            onBlur={e=>(e.target.style.borderColor=errors.email ? 'rgba(220,80,80,0.5)' : 'var(--border-subtle)')}
          />
          {errors.email && <p id="email-error" role="alert" style={{ color:'rgba(220,80,80,0.8)', fontSize:'0.75rem', marginTop:'0.375rem' }}>{errors.email}</p>}
        </div>
        <div>
    <label htmlFor="contact_number" style={labelStyle}>Contact Number</label>
    <input
      id="contact_number" name="contact_number" type="tel"
      value={form.contact_number} onChange={handleChange} placeholder="+1 (555) 000-0000"
      style={{ ...inputStyle, borderColor: 'var(--border-subtle)' }}
      onFocus={e => (e.target.style.borderColor = 'var(--border-strong)')}
      onBlur={e => (e.target.style.borderColor = 'var(--border-subtle)')}
    />
  </div>
      </div>
      

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }} className="form-row">
        <div>
          <label htmlFor="company" style={labelStyle}>Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={handleChange} placeholder="Company name"
            style={inputStyle} onFocus={e=>(e.target.style.borderColor='var(--border-strong)')} onBlur={e=>(e.target.style.borderColor='var(--border-subtle)')} />
        </div>
        <div>
          <label htmlFor="budget" style={labelStyle}>Budget Range</label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange}
            style={{ ...inputStyle, cursor:'pointer' }} onFocus={e=>(e.target.style.borderColor='var(--border-strong)')} onBlur={e=>(e.target.style.borderColor='var(--border-subtle)')}>
            {budgetOptions.map(opt => <option key={opt.value} value={opt.value} style={{ background:'var(--bg-secondary)' }}>{opt.label}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Project Brief <span aria-label="required" style={{ color:'var(--accent-gold)' }}>*</span></label>
        <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange}
          placeholder="Tell us about your project — what you are building, what challenges you are facing, and what success looks like for you."
          aria-describedby={errors.message ? 'message-error' : undefined} aria-invalid={!!errors.message}
          style={{ ...inputStyle, resize:'vertical', minHeight:'140px', borderColor: errors.message ? 'rgba(220,80,80,0.5)' : undefined }}
          onFocus={e=>(e.target.style.borderColor='var(--border-strong)')} onBlur={e=>(e.target.style.borderColor=errors.message ? 'rgba(220,80,80,0.5)' : 'var(--border-subtle)')} />
        {errors.message && <p id="message-error" role="alert" style={{ color:'rgba(220,80,80,0.8)', fontSize:'0.75rem', marginTop:'0.375rem' }}>{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p role="alert" style={{ color:'rgba(220,80,80,0.8)', fontSize:'0.875rem', padding:'0.875rem 1rem', border:'1px solid rgba(220,80,80,0.3)', borderRadius:'1px' }}>
          Something went wrong. Please try again or email us directly at hello@arcitsolutions.com
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'loading'}
        style={{ justifyContent:'center', opacity: status==='loading' ? 0.7 : 1, cursor: status==='loading' ? 'not-allowed' : 'pointer' }}
        aria-busy={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
        {status !== 'loading' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <p style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-muted)', textAlign:'center', lineHeight:1.6 }}>
        By submitting this form you agree to our Privacy Policy. We do not share your information with third parties.
      </p>
      <style>{`@media(max-width:600px){.form-row{grid-template-columns:1fr !important;}}`}</style>
    </form>
  )
}

export default function ContactSection({ standalone = false }: ContactSectionProps) {
  if (standalone) {
    return <ContactForm />
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding" style={{ background:'var(--bg-primary)', borderTop:'1px solid var(--border-subtle)' }}>
      <div className="container-site">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:'clamp(3rem,7vw,8rem)', alignItems:'start' }} className="contact-grid">
          <div>
            <span className="gold-line" />
            <span className="text-label" style={{ display:'block', marginBottom:'1rem' }}>Start a Project</span>
            <h2 id="contact-heading" className="text-h1" style={{ marginBottom:'1.5rem' }}>Let us build<br/>something together.</h2>
            <p className="text-body" style={{ marginBottom:'2.5rem', maxWidth:'420px' }}>
              Complete the form and we will respond within one business day.
            </p>
            {[
              { label:'Email Us', value:'hello@arcitsolutions.com', href:'mailto:hello@arcitsolutions.com' },
              { label:'Call Us', value:'+1 (415) 000-0000', href:'tel:+14150000000' },
              { label:'Office', value:'San Francisco, CA — Remote Worldwide', href: null },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom:'1.25rem' }}>
                <span className="text-label" style={{ display:'block', marginBottom:'0.25rem', fontSize:'0.625rem' }}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} style={{ fontFamily:'var(--font-body)', fontSize:'0.9375rem', fontWeight:300, color:'var(--text-secondary)', textDecoration:'none', transition:'color 0.2s ease' }}
                     onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-primary)')}
                     onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.color='var(--text-secondary)')}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontFamily:'var(--font-body)', fontSize:'0.9375rem', fontWeight:300, color:'var(--text-secondary)' }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
