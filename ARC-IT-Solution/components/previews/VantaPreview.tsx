export default function VantaPreview() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <clipPath id="van-clip"><rect width="800" height="500" /></clipPath>
        <linearGradient id="van-sidebar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0a0e14" />
          <stop offset="100%" stopColor="#0c1018" />
        </linearGradient>
        <linearGradient id="van-bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b8dd9" />
          <stop offset="100%" stopColor="#3a6ab0" />
        </linearGradient>
        <linearGradient id="van-map-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1520" />
          <stop offset="100%" stopColor="#081018" />
        </linearGradient>
      </defs>
      <g clipPath="url(#van-clip)">
        <rect width="800" height="500" fill="#090d12" />

        {/* Sidebar */}
        <rect x="0" y="0" width="180" height="500" fill="url(#van-sidebar)" />
        <rect x="179.5" y="0" width="0.5" height="500" fill="#5b8dd9" fillOpacity="0.12" />

        {/* Logo */}
        <rect x="16" y="16" width="24" height="24" rx="4" fill="#5b8dd9" />
        <text x="28" y="32" fontFamily="system-ui,sans-serif" fontSize="11" fill="#0a0e14" textAnchor="middle" fontWeight="700">V</text>
        <text x="48" y="32" fontFamily="system-ui,sans-serif" fontSize="12" fill="#dce8f5" fontWeight="500">Vanta</text>

        {/* Nav */}
        {[
          { icon: '⬡', label: 'Overview', y: 72, active: true },
          { icon: '◈', label: 'Shipments', y: 100, badge: '12' },
          { icon: '◉', label: 'Fleet', y: 128 },
          { icon: '◆', label: 'Routes', y: 156 },
          { icon: '▣', label: 'Analytics', y: 184 },
          { icon: '◑', label: 'Clients', y: 212 },
          { icon: '▤', label: 'Billing', y: 240 },
          { icon: '⚙', label: 'Settings', y: 268 },
        ].map(n => (
          <g key={n.label}>
            {n.active && <rect x="0" y={n.y - 14} width="180" height="26" fill="#5b8dd9" fillOpacity="0.1" />}
            {n.active && <rect x="0" y={n.y - 14} width="3" height="26" fill="#5b8dd9" />}
            <text x="18" y={n.y + 4} fontFamily="system-ui,sans-serif" fontSize="11" fill={n.active ? '#dce8f5' : '#2a3a4a'}>{n.icon}</text>
            <text x="36" y={n.y + 4} fontFamily="system-ui,sans-serif" fontSize="10.5" fill={n.active ? '#dce8f5' : '#2a3a4a'}>{n.label}</text>
            {n.badge && (
              <>
                <rect x="140" y={n.y - 8} width="24" height="14" rx="7" fill="#5b8dd9" />
                <text x="152" y={n.y + 2} fontFamily="system-ui,sans-serif" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="600">{n.badge}</text>
              </>
            )}
          </g>
        ))}

        {/* User bottom */}
        <rect x="10" y="456" width="160" height="34" rx="4" fill="#0f1520" />
        <circle cx="28" cy="473" r="9" fill="#1a2535" />
        <text x="28" y="477" fontFamily="system-ui,sans-serif" fontSize="8" fill="#5b8dd9" textAnchor="middle" fontWeight="600">DP</text>
        <text x="44" y="470" fontFamily="system-ui,sans-serif" fontSize="9" fill="#8090b0">Daniel Park</text>
        <text x="44" y="482" fontFamily="system-ui,sans-serif" fontSize="8" fill="#2a3a4a">VP Engineering</text>

        {/* Main content */}
        {/* Top bar */}
        <rect x="180" y="0" width="620" height="48" fill="#0c1018" />
        <rect x="180" y="47.5" width="620" height="0.5" fill="#5b8dd9" fillOpacity="0.1" />
        <text x="200" y="20" fontFamily="system-ui,sans-serif" fontSize="9" fill="#2a3a4a" letterSpacing="1.5">LOGISTICS PLATFORM</text>
        <text x="200" y="36" fontFamily="system-ui,sans-serif" fontSize="13" fill="#dce8f5" fontWeight="400">Live Operations</text>
        {/* Search */}
        <rect x="480" y="12" width="160" height="26" rx="4" fill="#0f1520" stroke="#1e2e40" strokeWidth="0.8" />
        <text x="496" y="29" fontFamily="system-ui,sans-serif" fontSize="10" fill="#2a3a4a">⌕  Search shipments...</text>
        {/* Notification */}
        <rect x="652" y="12" width="30" height="26" rx="4" fill="#0f1520" stroke="#1e2e40" strokeWidth="0.8" />
        <text x="667" y="29" fontFamily="system-ui,sans-serif" fontSize="12" fill="#2a3a4a" textAnchor="middle">🔔</text>
        <circle cx="676" cy="15" r="5" fill="#e05a5a" />
        <text x="676" y="19" fontFamily="system-ui,sans-serif" fontSize="7" fill="#fff" textAnchor="middle">3</text>
        <rect x="690" y="12" width="100" height="26" rx="4" fill="#5b8dd9" />
        <text x="740" y="29" fontFamily="system-ui,sans-serif" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="500">+ New Shipment</text>

        {/* KPI row */}
        {[
          { label: 'Active Shipments', val: '1,284', sub: '↑ 48 today', col: '#5b8dd9' },
          { label: 'On-Time Rate', val: '97.8%', sub: '↑ 0.4% vs last wk', col: '#3aaa6a' },
          { label: 'Fleet Utilization', val: '84.2%', sub: '↓ 2.1% capacity avail.', col: '#c9a84c' },
          { label: 'Avg. Transit Time', val: '2.4d', sub: 'Target: 2.6d ✓', col: '#3aaa6a' },
        ].map((k, i) => (
          <g key={k.label}>
            <rect x={200 + i * 148} y="60" width="136" height="70" rx="3" fill="#0f1520" stroke="#1e2e40" strokeWidth="0.8" />
            <rect x={200 + i * 148} y="60" width="136" height="3" rx="1.5" fill={k.col} fillOpacity="0.7" />
            <text x={212 + i * 148} y="82" fontFamily="system-ui,sans-serif" fontSize="8" fill="#2a3a4a" letterSpacing="0.5">{k.label.toUpperCase()}</text>
            <text x={212 + i * 148} y="106" fontFamily="system-ui,sans-serif" fontSize="22" fill="#dce8f5" fontWeight="300">{k.val}</text>
            <text x={212 + i * 148} y="120" fontFamily="system-ui,sans-serif" fontSize="8" fill={k.col}>{k.sub}</text>
          </g>
        ))}

        {/* Map panel */}
        <rect x="200" y="144" width="380" height="210" rx="3" fill="url(#van-map-bg)" stroke="#1e2e40" strokeWidth="0.8" />
        <text x="218" y="162" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#2a3a4a" letterSpacing="1">LIVE MAP</text>
        <text x="218" y="176" fontFamily="system-ui,sans-serif" fontSize="12" fill="#dce8f5" fontWeight="400">Fleet & Shipment Tracking</text>

        {/* Stylised map grid */}
        {[195,220,245,270,295,320,345].map(y => (
          <line key={y} x1="200" y1={y} x2="580" y2={y} stroke="#5b8dd9" strokeOpacity="0.04" strokeWidth="1" />
        ))}
        {[220,260,300,340,380,420,460,500,540].map(x => (
          <line key={x} x1={x} y1="144" x2={x} y2="354" stroke="#5b8dd9" strokeOpacity="0.04" strokeWidth="1" />
        ))}

        {/* Route lines */}
        <path d="M240,220 C280,210 320,230 360,220 C390,212 420,240 460,230 C490,222 520,240 550,235"
          fill="none" stroke="#5b8dd9" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5,3" />
        <path d="M220,290 C270,280 310,300 360,285 C400,272 440,295 480,280 C510,268 540,285 570,275"
          fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="5,3" />
        <path d="M260,320 C300,310 340,330 390,315 C430,302 460,325 510,312 C540,303 560,318 575,310"
          fill="none" stroke="#3aaa6a" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4,4" />

        {/* Vehicle dots */}
        {[
          { x: 350, y: 222, col: '#5b8dd9' },
          { x: 420, y: 228, col: '#5b8dd9' },
          { x: 490, y: 232, col: '#c9a84c' },
          { x: 310, y: 288, col: '#c9a84c' },
          { x: 430, y: 282, col: '#3aaa6a' },
          { x: 390, y: 317, col: '#3aaa6a' },
          { x: 520, y: 280, col: '#e05a5a' },
        ].map((d, i) => (
          <g key={i}>
            <circle cx={d.x} cy={d.y} r="7" fill={d.col} fillOpacity="0.15" />
            <circle cx={d.x} cy={d.y} r="4" fill={d.col} />
            <circle cx={d.x} cy={d.y} r="2" fill="#090d12" />
          </g>
        ))}

        {/* Map legend */}
        {[
          { col: '#5b8dd9', label: 'Express (12)' },
          { col: '#c9a84c', label: 'Standard (28)' },
          { col: '#3aaa6a', label: 'Economy (40)' },
          { col: '#e05a5a', label: 'Delayed (2)' },
        ].map((l, i) => (
          <g key={l.label}>
            <circle cx={216 + i * 88} cy="340" r="4" fill={l.col} />
            <text x={224 + i * 88} y="344" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#4a5a7a">{l.label}</text>
          </g>
        ))}

        {/* Right panel — Shipments table */}
        <rect x="592" y="144" width="208" height="210" rx="3" fill="#0f1520" stroke="#1e2e40" strokeWidth="0.8" />
        <text x="608" y="162" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#2a3a4a" letterSpacing="1">RECENT SHIPMENTS</text>
        <rect x="592" y="168" width="208" height="0.5" fill="#1e2e40" />
        {[
          { id: 'VT-4821', from: 'NYC', to: 'LAX', status: 'In Transit', col: '#5b8dd9' },
          { id: 'VT-4820', from: 'CHI', to: 'MIA', status: 'Delivered', col: '#3aaa6a' },
          { id: 'VT-4819', from: 'LAX', to: 'SEA', status: 'In Transit', col: '#5b8dd9' },
          { id: 'VT-4818', from: 'BOS', to: 'NYC', status: 'Delayed', col: '#e05a5a' },
          { id: 'VT-4817', from: 'MIA', to: 'CHI', status: 'Delivered', col: '#3aaa6a' },
          { id: 'VT-4816', from: 'SEA', to: 'BOS', status: 'Processing', col: '#c9a84c' },
        ].map((s, i) => (
          <g key={s.id}>
            <rect x="592" y={170 + i * 30} width="208" height="30" fill={i % 2 === 0 ? '#0f1520' : '#111825'} />
            <rect x="592" y={170 + i * 30} width="208" height="0.5" fill="#1a2535" />
            <text x="606" y={189 + i * 30} fontFamily="system-ui,sans-serif" fontSize="9" fill="#dce8f5">{s.id}</text>
            <text x="606" y={199 + i * 30} fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2a3a4a">{s.from} → {s.to}</text>
            <rect x="700" y={178 + i * 30} width="60" height="14" rx="3" fill={s.col} fillOpacity="0.15" />
            <text x="730" y={189 + i * 30} fontFamily="system-ui,sans-serif" fontSize="7.5" fill={s.col} textAnchor="middle">{s.status}</text>
          </g>
        ))}

        {/* Bottom charts row */}
        {/* Volume chart */}
        <rect x="200" y="366" width="248" height="122" rx="3" fill="#0f1520" stroke="#1e2e40" strokeWidth="0.8" />
        <text x="218" y="384" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#2a3a4a" letterSpacing="1">WEEKLY VOLUME</text>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => {
          const heights = [52, 68, 44, 78, 60, 32, 20]
          return (
            <g key={d + i}>
              <rect x={220 + i * 30} y={458 - heights[i]} width="18" height={heights[i]} rx="2"
                fill="#5b8dd9" fillOpacity={i === 3 ? 1 : 0.4} />
              <text x={229 + i * 30} y="472" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2a3a4a" textAnchor="middle">{d}</text>
            </g>
          )
        })}

        {/* SLA gauge */}
        <rect x="460" y="366" width="148" height="122" rx="3" fill="#0f1520" stroke="#1e2e40" strokeWidth="0.8" />
        <text x="478" y="384" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#2a3a4a" letterSpacing="1">SLA COMPLIANCE</text>
        <circle cx="534" cy="440" r="36" fill="none" stroke="#1a2535" strokeWidth="10" />
        <circle cx="534" cy="440" r="36" fill="none" stroke="#3aaa6a" strokeWidth="10"
          strokeDasharray="208 226" strokeDashoffset="56" strokeLinecap="butt" />
        <circle cx="534" cy="440" r="36" fill="none" stroke="#e05a5a" strokeWidth="10"
          strokeDasharray="12 226" strokeDashoffset="-152" strokeLinecap="butt" />
        <text x="534" y="436" fontFamily="system-ui,sans-serif" fontSize="14" fill="#dce8f5" textAnchor="middle" fontWeight="500">99.94</text>
        <text x="534" y="449" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2a3a4a" textAnchor="middle">% uptime</text>

        {/* Revenue mini */}
        <rect x="620" y="366" width="180" height="122" rx="3" fill="#0f1520" stroke="#1e2e40" strokeWidth="0.8" />
        <text x="638" y="384" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#2a3a4a" letterSpacing="1">REVENUE MTD</text>
        <text x="638" y="408" fontFamily="system-ui,sans-serif" fontSize="20" fill="#dce8f5" fontWeight="300">$4.28M</text>
        <text x="638" y="422" fontFamily="system-ui,sans-serif" fontSize="8" fill="#3aaa6a">↑ 14.2% vs last month</text>
        <rect x="638" y="434" width="144" height="6" rx="3" fill="#1a2535" />
        <rect x="638" y="434" width="96" height="6" rx="3" fill="#5b8dd9" fillOpacity="0.7" />
        <text x="638" y="452" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2a3a4a">67% of monthly target</text>
        <path d="M638,474 L660,466 L680,470 L700,458 L720,463 L740,452 L760,456 L778,448"
          fill="none" stroke="#5b8dd9" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    </svg>
  )
}
