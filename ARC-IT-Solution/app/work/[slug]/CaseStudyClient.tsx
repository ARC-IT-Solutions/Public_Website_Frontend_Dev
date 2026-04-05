'use client'

import Link from 'next/link'

interface Props {
  nextProject: { slug: string; title: string }
}

export default function CaseStudyClient({ nextProject }: Props) {
  return (
    <section aria-label="Next case study" style={{ background:'var(--bg-primary)', borderBottom:'1px solid var(--border-subtle)' }}>
      <Link href={`/work/${nextProject.slug}`} style={{ textDecoration:'none', display:'block' }}>
        <div
          className="container-site"
          style={{ padding:'3rem clamp(1.25rem,4vw,4rem)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'2rem', transition:'background 0.3s ease', cursor:'pointer' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.03)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
        >
          <div>
            <span className="text-label" style={{ display:'block', marginBottom:'0.5rem' }}>Next Project</span>
            <h3 className="text-h3" style={{ color:'var(--text-primary)', fontSize:'clamp(1.125rem,2vw,1.75rem)' }}>{nextProject.title}</h3>
          </div>
          <div style={{ width:'48px', height:'48px', border:'1px solid var(--border-mid)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </section>
  )
}
