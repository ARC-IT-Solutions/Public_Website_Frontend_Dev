export default function ArcaPreview() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <clipPath id="arc-clip"><rect width="800" height="500" /></clipPath>
        <clipPath id="arc-img1"><rect x="0" y="0" width="340" height="500" /></clipPath>
        <clipPath id="arc-img2"><rect x="352" y="0" width="220" height="238" /></clipPath>
        <clipPath id="arc-img3"><rect x="352" y="250" width="220" height="250" /></clipPath>
        <linearGradient id="arc-overlay" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0a0a08" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#0a0a08" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="arc-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="60%" stopColor="#0a0a08" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a0a08" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <g clipPath="url(#arc-clip)">
        {/* Dark editorial background */}
        <rect width="800" height="500" fill="#0a0a08" />

        {/* ── LEFT: Large hero image (architectural) ── */}
        <g clipPath="url(#arc-img1)">
          {/* Simulated architectural photo — concrete + glass */}
          <rect x="0" y="0" width="340" height="500" fill="#1a1a14" />
          {/* Building structure lines */}
          <rect x="40" y="0" width="2" height="500" fill="#2a2a20" />
          <rect x="100" y="0" width="2" height="500" fill="#242418" />
          <rect x="160" y="0" width="2" height="500" fill="#2a2a20" />
          <rect x="220" y="0" width="2" height="500" fill="#242418" />
          <rect x="280" y="0" width="2" height="500" fill="#2a2a20" />
          {[0,1,2,3,4,5,6,7,8,9].map(i => (
            <rect key={i} x="0" y={i*52} width="340" height="1" fill="#222218" />
          ))}
          {/* Glass panels */}
          {[0,1,2].map(col => (
            [0,1,2,3,4,5,6,7,8].map(row => (
              <rect key={`${col}-${row}`} x={42 + col * 60} y={2 + row * 52} width="56" height="48"
                fill={`rgba(${30+col*5},${35+row*2},${25+col*3},0.8)`}
                stroke="#1a1a14" strokeWidth="0.5" />
            ))
          ))}
          {/* Light glow through glass */}
          <rect x="42" y="106" width="56" height="48" fill="#c9a84c" fillOpacity="0.08" />
          <rect x="102" y="54" width="56" height="48" fill="#c9a84c" fillOpacity="0.05" />
          <rect x="162" y="158" width="56" height="48" fill="#c9a84c" fillOpacity="0.06" />
          {/* Concrete columns */}
          <rect x="224" y="0" width="54" height="500" fill="#161612" />
          <rect x="284" y="0" width="54" height="500" fill="#121210" />
          {/* Sky suggestion at top */}
          <rect x="0" y="0" width="340" height="60" fill="#0f1014" fillOpacity="0.6" />
          {/* Caption overlay */}
          <rect x="0" y="380" width="340" height="120" fill="url(#arc-fade)" />
          <text x="24" y="432" fontFamily="Georgia,serif" fontSize="18" fill="#f0ead8" fontWeight="300">Halcyon Tower</text>
          <text x="24" y="450" fontFamily="system-ui,sans-serif" fontSize="9" fill="#a09870" letterSpacing="2">MELBOURNE, 2023</text>
          <rect x="24" y="462" width="32" height="1" fill="#c9a84c" />
        </g>
        {/* Gradient overlay on photo edge */}
        <rect x="0" y="0" width="340" height="500" fill="url(#arc-overlay)" />

        {/* ── NAV ── */}
        <rect x="0" y="0" width="800" height="52" fill="#0a0a08" fillOpacity="0.92" />
        <rect x="0" y="51.5" width="800" height="0.5" fill="#c9a84c" fillOpacity="0.1" />
        {/* Logo */}
        <text x="24" y="33" fontFamily="Georgia,serif" fontSize="15" fill="#f0ead8" fontWeight="300" letterSpacing="4">ARCA</text>
        <rect x="24" y="38" width="38" height="0.8" fill="#c9a84c" />
        <text x="80" y="31" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#5a5448" letterSpacing="2">ARCHITECTURE</text>
        <text x="72" y="41" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#5a5448" letterSpacing="2">STUDIO</text>
        {/* Nav links */}
        {['Work', 'Studio', 'Awards', 'Contact'].map((l, i) => (
          <text key={l} x={580 + i * 56} y="30" fontFamily="system-ui,sans-serif" fontSize="9" fill={i === 0 ? '#f0ead8' : '#5a5448'} letterSpacing="1.5">{l.toUpperCase()}</text>
        ))}

        {/* ── RIGHT COLUMN ── */}
        {/* Top-right image panel */}
        <g clipPath="url(#arc-img2)">
          <rect x="352" y="0" width="220" height="238" fill="#141410" />
          {/* Interior shot simulation */}
          {[0,1,2,3,4].map(i => (
            <rect key={i} x="352" y={i * 48} width="220" height="1" fill="#1a1a14" />
          ))}
          <rect x="352" y="0" width="80" height="238" fill="#0f0f0d" />
          <rect x="440" y="0" width="132" height="238" fill="#161612" />
          {/* Window light */}
          <rect x="480" y="40" width="70" height="130" fill="#1e1c14" />
          {[0,1,2,3].map(i => (
            <rect key={i} x="480" y={40 + i*33} width="70" height="1" fill="#2a2818" />
          ))}
          <rect x="515" y="40" width="1" height="130" fill="#2a2818" />
          <rect x="480" y="40" width="70" height="130" fill="#c9a84c" fillOpacity="0.04" />
          {/* Floor lines */}
          <rect x="352" y="200" width="220" height="38" fill="#0d0d0b" />
          {/* Caption */}
          <text x="366" y="225" fontFamily="system-ui,sans-serif" fontSize="8" fill="#3a3a30" letterSpacing="1.5">INTERIOR — PENTHOUSE LEVEL</text>
          <rect x="352" y="237.5" width="220" height="0.5" fill="#c9a84c" fillOpacity="0.1" />
        </g>

        {/* Bottom-right: project info */}
        <rect x="352" y="250" width="220" height="250" fill="#0e0e0c" />
        <rect x="352" y="250" width="220" height="0.5" fill="#c9a84c" fillOpacity="0.08" />
        <text x="370" y="284" fontFamily="system-ui,sans-serif" fontSize="8" fill="#3a3a30" letterSpacing="2">PROJECT INDEX</text>
        <rect x="370" y="292" width="24" height="0.8" fill="#c9a84c" />

        {[
          { num: '001', name: 'Halcyon Tower', loc: 'Melbourne', year: '2023', active: true },
          { num: '002', name: 'The Wharf Precinct', loc: 'Sydney', year: '2022' },
          { num: '003', name: 'Ember Residences', loc: 'Auckland', year: '2022' },
          { num: '004', name: 'Forum Cultural Ctr.', loc: 'Singapore', year: '2021' },
        ].map((p, i) => (
          <g key={p.num}>
            <rect x="352" y={304 + i * 48} width="220" height="47" fill={p.active ? '#141410' : 'transparent'} />
            <rect x="352" y={304 + i * 48} width="220" height="0.5" fill="#1a1a14" />
            {p.active && <rect x="352" y={304 + i * 48} width="2" height="47" fill="#c9a84c" />}
            <text x="370" y={322 + i * 48} fontFamily="system-ui,sans-serif" fontSize="8" fill={p.active ? '#c9a84c' : '#2a2a22'} letterSpacing="1">{p.num}</text>
            <text x="370" y={337 + i * 48} fontFamily="Georgia,serif" fontSize="12" fill={p.active ? '#f0ead8' : '#3a3a30'} fontWeight="300">{p.name}</text>
            <text x="370" y={348 + i * 48} fontFamily="system-ui,sans-serif" fontSize="8" fill="#2a2a22" letterSpacing="1">{p.loc.toUpperCase()} · {p.year}</text>
          </g>
        ))}

        {/* ── FAR RIGHT info panel ── */}
        <rect x="584" y="52" width="216" height="448" fill="#0c0c0a" />
        <rect x="584" y="52" width="0.5" height="448" fill="#c9a84c" fillOpacity="0.08" />

        <text x="604" y="90" fontFamily="system-ui,sans-serif" fontSize="8" fill="#3a3a30" letterSpacing="2">FEATURED PROJECT</text>
        <text x="604" y="114" fontFamily="Georgia,serif" fontSize="22" fill="#f0ead8" fontWeight="300">Halcyon</text>
        <text x="604" y="136" fontFamily="Georgia,serif" fontSize="22" fill="#f0ead8" fontWeight="300">Tower</text>
        <rect x="604" y="148" width="30" height="1" fill="#c9a84c" />

        <text x="604" y="170" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#5a5448" letterSpacing="0">
          68-storey mixed-use tower
        </text>
        <text x="604" y="183" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#5a5448">
          redefining Melbourne's
        </text>
        <text x="604" y="196" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#5a5448">
          central skyline.
        </text>

        {/* Award badges */}
        <rect x="604" y="214" width="84" height="28" rx="2" fill="#141410" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.3" />
        <text x="646" y="232" fontFamily="system-ui,sans-serif" fontSize="8" fill="#c9a84c" textAnchor="middle">Awwwards HM</text>
        <rect x="696" y="214" width="84" height="28" rx="2" fill="#141410" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.3" />
        <text x="738" y="232" fontFamily="system-ui,sans-serif" fontSize="8" fill="#c9a84c" textAnchor="middle">Dezeen Feature</text>

        {/* Stats */}
        {[
          { l: 'Height', v: '285m' },
          { l: 'Floors', v: '68' },
          { l: 'Area', v: '48,000m²' },
          { l: 'Status', v: 'Complete' },
        ].map((s, i) => (
          <g key={s.l}>
            <rect x="604" y={256 + i * 44} width="176" height="0.5" fill="#1a1a14" />
            <text x="604" y={272 + i * 44} fontFamily="system-ui,sans-serif" fontSize="8" fill="#3a3a30" letterSpacing="1">{s.l.toUpperCase()}</text>
            <text x="604" y={286 + i * 44} fontFamily="Georgia,serif" fontSize="14" fill="#a09870" fontWeight="300">{s.v}</text>
          </g>
        ))}

        {/* CTA */}
        <rect x="604" y="446" width="90" height="30" rx="1" fill="#c9a84c" />
        <text x="649" y="465" fontFamily="system-ui,sans-serif" fontSize="9" fill="#0a0a08" textAnchor="middle" fontWeight="600">View Project</text>
        <rect x="702" y="446" width="78" height="30" rx="1" fill="transparent" stroke="#3a3a30" strokeWidth="0.8" />
        <text x="741" y="465" fontFamily="system-ui,sans-serif" fontSize="9" fill="#5a5448" textAnchor="middle">All Work</text>
      </g>
    </svg>
  )
}
