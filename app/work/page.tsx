import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected case studies from ARC IT Solutions — software engineering and creative design for ambitious businesses.',
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          label="Selected Work"
          title="A record built on results,"
          titleEm="not promises."
          subtitle="Every project here represents a real business challenge, a rigorous process, and a measurable outcome."
          breadcrumbs={[{ label: 'Work' }]}
        />

        <section aria-label="Case studies" style={{ background: 'var(--bg-primary)', paddingBottom: 'clamp(4rem,8vw,7rem)' }}>
          <div className="container-site">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginTop: '-1px' }}>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
