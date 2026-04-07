'use client'

interface ContactItem {
  label: string
  value: string | string[]  
  href: string | null
}

export default function ContactInfoLink({ item }: { item: ContactItem }) {
  return (
    <div style={{ padding: '1.5rem 2rem' }}>
      <span
        className="text-label"
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.625rem' }}
      >
        {item.label}
      </span>
      {/* {item.href ? (
        <a
          href={item.href}
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)')}
        >
          {item.value}
        </a>
      ) : (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--text-secondary)' }}>
          {item.value}
        </p>
      )} */}

      {Array.isArray(item.value) ? (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
    {item.value.map((num, i) => (
      <a
        key={i}
        href={`tel:${num.replace(/\D/g, '')}`}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
      >
        {num}
      </a>
    ))}
  </div>
) : item.href ? (
  <a
    href={item.href}
    style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      fontWeight: 300,
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
  >
    {item.value}
  </a>  
) : (
  <p
    style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      fontWeight: 300,
      color: 'var(--text-secondary)',
    }}
  >
    {item.value}
  </p>
)}
    </div>
  )
}
