export default function MeridianPreview() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="mer-gold-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mer-blue-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b8dd9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#5b8dd9" stopOpacity="0" />
        </linearGradient>
        <clipPath id="mer-clip"><rect width="800" height="500" /></clipPath>
        <clipPath id="mer-chart-clip"><rect x="248" y="210" width="330" height="130" /></clipPath>
      </defs>
      <g clipPath="url(#mer-clip)">
        {/* Base */}
        <rect width="800" height="500" fill="#09090700" />
        <rect width="800" height="500" fill="#0c0c0a" />

        {/* Sidebar */}
        <rect x="0" y="0" width="192" height="500" fill="#0f0f0d" />
        <rect x="191.5" y="0" width="0.5" height="500" fill="#c9a84c" fillOpacity="0.1" />

        {/* Logo */}
        <text x="20" y="34" fontFamily="Georgia,serif" fontSize="13" fill="#f0ead8" letterSpacing="-0.3">ARC IT</text>
        <text x="80" y="34" fontFamily="Georgia,serif" fontSize="13" fill="#c9a84c" letterSpacing="-0.3"> Solutions</text>

        {/* Nav */}
        {[
          { icon: '▪', label: 'Dashboard', y: 72, active: true },
          { icon: '▪', label: 'Portfolio', y: 100 },
          { icon: '▪', label: 'Analytics', y: 128 },
          { icon: '▪', label: 'Transactions', y: 156 },
          { icon: '▪', label: 'Reports', y: 184 },
          { icon: '▪', label: 'Clients', y: 212 },
          { icon: '▪', label: 'Settings', y: 240 },
        ].map(n => (
          <g key={n.label}>
            {n.active && <>
              <rect x="0" y={n.y - 13} width="192" height="24" fill="#c9a84c" fillOpacity="0.07" />
              <rect x="0" y={n.y - 13} width="2.5" height="24" fill="#c9a84c" />
            </>}
            <text x="22" y={n.y + 4} fontFamily="system-ui,sans-serif" fontSize="11" fill={n.active ? '#f0ead8' : '#3d3d35'}>{n.label}</text>
          </g>
        ))}

        {/* User avatar bottom */}
        <rect x="12" y="455" width="168" height="34" rx="3" fill="#161614" />
        <circle cx="30" cy="472" r="9" fill="#252520" />
        <text x="30" y="476" fontFamily="system-ui" fontSize="8" fill="#c9a84c" textAnchor="middle" fontWeight="600">SO</text>
        <text x="46" y="469" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#a09880">Sarah Okonkwo</text>
        <text x="46" y="481" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#3d3d35">CPO · Meridian</text>

        {/* Main content */}
        <rect x="192" y="0" width="608" height="500" fill="#0c0c0a" />

        {/* Top bar */}
        <rect x="192" y="0" width="608" height="50" fill="#0f0f0d" />
        <rect x="192" y="49.5" width="608" height="0.5" fill="#c9a84c" fillOpacity="0.08" />
        <text x="216" y="20" fontFamily="system-ui,sans-serif" fontSize="9" fill="#3d3d35" letterSpacing="1.5">OVERVIEW</text>
        <text x="216" y="38" fontFamily="Georgia,serif" fontSize="14" fill="#f0ead8" fontWeight="300">Portfolio Dashboard</text>
        <rect x="580" y="13" width="96" height="24" rx="2" fill="#161614" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.2" />
        <text x="628" y="29" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#a09880" textAnchor="middle">Q4 2024  ▾</text>
        <rect x="684" y="13" width="80" height="24" rx="2" fill="#c9a84c" />
        <text x="724" y="29" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#0c0c0a" textAnchor="middle" fontWeight="600">Export</text>

        {/* KPI Cards */}
        {[
          { label: 'TOTAL AUM', value: '$2.04B', sub: '+8.3% YTD', x: 216 },
          { label: 'UNREALISED P&L', value: '+$48.2M', sub: '+2.4%', x: 366 },
          { label: 'ACTIVE ACCOUNTS', value: '340', sub: '+12 this month', x: 516 },
          { label: 'AVG. RETURN', value: '14.7%', sub: 'vs 9.2% benchmark', x: 666 },
        ].map(k => (
          <g key={k.label}>
            <rect x={k.x} y="64" width="136" height="74" rx="2" fill="#0f0f0d" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.12" />
            <text x={k.x + 12} y="82" fontFamily="system-ui,sans-serif" fontSize="8" fill="#3d3d35" letterSpacing="1">{k.label}</text>
            <text x={k.x + 12} y="108" fontFamily="Georgia,serif" fontSize="21" fill="#f0ead8" fontWeight="300">{k.value}</text>
            <rect x={k.x + 12} y="118" width="8" height="8" rx="1" fill="#c9a84c" fillOpacity="0.9" />
            <text x={k.x + 24} y="126" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#c9a84c">{k.sub}</text>
          </g>
        ))}

        {/* Chart panel */}
        <rect x="216" y="152" width="356" height="190" rx="2" fill="#0f0f0d" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.1" />
        <text x="234" y="172" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#3d3d35" letterSpacing="1">PERFORMANCE</text>
        <text x="234" y="188" fontFamily="Georgia,serif" fontSize="13" fill="#f0ead8" fontWeight="300">AUM 12-Month Trend</text>

        {/* Legend */}
        <rect x="432" y="181" width="8" height="2" rx="1" fill="#c9a84c" />
        <text x="444" y="186" fontFamily="system-ui,sans-serif" fontSize="8" fill="#5a5448">Portfolio</text>
        <rect x="493" y="181" width="8" height="2" rx="1" fill="#5b8dd9" fillOpacity="0.7" />
        <text x="505" y="186" fontFamily="system-ui,sans-serif" fontSize="8" fill="#5a5448">Benchmark</text>

        {/* Chart grid */}
        {[210, 233, 256, 279, 302, 325].map(y => (
          <line key={y} x1="248" y1={y} x2="556" y2={y} stroke="#f0ead8" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        {/* Y labels */}
        {[{ l: '$2.1B', y: 213 }, { l: '$2.0B', y: 236 }, { l: '$1.9B', y: 259 }, { l: '$1.8B', y: 282 }, { l: '$1.7B', y: 305 }, { l: '$1.6B', y: 328 }].map(l => (
          <text key={l.l} x="244" y={l.y} fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#3d3d35" textAnchor="end">{l.l}</text>
        ))}

        {/* Area fill gold */}
        <path d="M252,318 C290,310 310,300 340,288 C370,276 390,268 420,255 C450,242 480,232 510,222 C530,215 550,212 554,210 L554,330 L252,330 Z"
          fill="url(#mer-gold-area)" clipPath="url(#mer-chart-clip)" />
        {/* Area fill blue */}
        <path d="M252,325 C285,320 315,316 345,312 C375,308 405,303 435,297 C465,291 495,286 525,280 C540,277 550,275 554,274 L554,330 L252,330 Z"
          fill="url(#mer-blue-area)" clipPath="url(#mer-chart-clip)" />
        {/* Gold line */}
        <path d="M252,318 C290,310 310,300 340,288 C370,276 390,268 420,255 C450,242 480,232 510,222 C530,215 550,212 554,210"
          fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Blue benchmark line */}
        <path d="M252,325 C285,320 315,316 345,312 C375,308 405,303 435,297 C465,291 495,286 525,280 C540,277 550,275 554,274"
          fill="none" stroke="#5b8dd9" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="4,3" />

        {/* Tooltip */}
        <rect x="470" y="218" width="84" height="46" rx="2" fill="#161614" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.5" />
        <text x="512" y="232" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#5a5448" textAnchor="middle">Oct 2024</text>
        <text x="512" y="247" fontFamily="Georgia,serif" fontSize="12" fill="#c9a84c" textAnchor="middle">$2.01B</text>
        <text x="512" y="259" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#3d3d35" textAnchor="middle">+9.2% YTD</text>
        <circle cx="500" cy="228" r="3.5" fill="#0f0f0d" stroke="#c9a84c" strokeWidth="1.5" />

        {/* X labels */}
        {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m, i) => (
          <text key={m} x={252 + i * 60} y="342" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#3d3d35" textAnchor="middle">{m}</text>
        ))}

        {/* Right panel — Allocation */}
        <rect x="586" y="152" width="202" height="190" rx="2" fill="#0f0f0d" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.1" />
        <text x="604" y="172" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#3d3d35" letterSpacing="1">ALLOCATION</text>
        <text x="604" y="188" fontFamily="Georgia,serif" fontSize="13" fill="#f0ead8" fontWeight="300">By Asset Class</text>

        {/* Donut chart */}
        <circle cx="687" cy="245" r="38" fill="none" stroke="#1e1e1a" strokeWidth="16" />
        <circle cx="687" cy="245" r="38" fill="none" stroke="#c9a84c" strokeWidth="16"
          strokeDasharray="95 144" strokeDashoffset="36" strokeLinecap="butt" />
        <circle cx="687" cy="245" r="38" fill="none" stroke="#5b8dd9" strokeWidth="16"
          strokeDasharray="50 144" strokeDashoffset="-59" strokeLinecap="butt" />
        <circle cx="687" cy="245" r="38" fill="none" stroke="#4a7a4a" strokeWidth="16"
          strokeDasharray="28 144" strokeDashoffset="-109" strokeLinecap="butt" />
        <circle cx="687" cy="245" r="38" fill="none" stroke="#8a5a3a" strokeWidth="16"
          strokeDasharray="21 144" strokeDashoffset="-137" strokeLinecap="butt" />
        <text x="687" y="241" fontFamily="Georgia,serif" fontSize="14" fill="#f0ead8" textAnchor="middle" fontWeight="300">66%</text>
        <text x="687" y="253" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#5a5448" textAnchor="middle">Equities</text>

        {/* Legend */}
        {[
          { color: '#c9a84c', label: 'Equities', pct: '66%', y: 300 },
          { color: '#5b8dd9', label: 'Fixed Income', pct: '18%', y: 313 },
          { color: '#4a7a4a', label: 'Alternatives', pct: '10%', y: 326 },
          { color: '#8a5a3a', label: 'Cash', pct: '6%', y: 339 },
        ].map(l => (
          <g key={l.label}>
            <rect x="604" y={l.y - 7} width="7" height="7" rx="1" fill={l.color} />
            <text x="616" y={l.y} fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#a09880">{l.label}</text>
            <text x="778" y={l.y} fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#5a5448" textAnchor="end">{l.pct}</text>
          </g>
        ))}

        {/* Bottom table */}
        <rect x="216" y="356" width="572" height="132" rx="2" fill="#0f0f0d" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.1" />
        <text x="234" y="374" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#3d3d35" letterSpacing="1">TOP HOLDINGS</text>
        <rect x="216" y="380" width="572" height="0.5" fill="#c9a84c" fillOpacity="0.07" />
        {/* Table header */}
        {['Security', 'Type', 'Quantity', 'Price', 'Value', 'P&L'].map((h, i) => (
          <text key={h} x={[234, 334, 424, 494, 574, 680][i]} y="394" fontFamily="system-ui,sans-serif" fontSize="8" fill="#3d3d35" letterSpacing="0.5">{h.toUpperCase()}</text>
        ))}
        <rect x="216" y="398" width="572" height="0.5" fill="#c9a84c" fillOpacity="0.06" />
        {/* Table rows */}
        {[
          { name: 'Apple Inc.', type: 'Equity', qty: '4,200', price: '$189.84', val: '$797,328', pnl: '+12.4%', pnlCol: '#6aaa6a' },
          { name: 'US T-Bond 4.5%', type: 'Fixed Inc.', qty: '500,000', price: '$98.20', val: '$491,000', pnl: '+1.8%', pnlCol: '#6aaa6a' },
          { name: 'Nvidia Corp.', type: 'Equity', qty: '1,100', price: '$486.22', val: '$534,842', pnl: '+38.7%', pnlCol: '#6aaa6a' },
          { name: 'Vanguard FTSE', type: 'ETF', qty: '2,800', price: '$112.44', val: '$314,832', pnl: '-2.1%', pnlCol: '#c06060' },
        ].map((row, i) => (
          <g key={row.name}>
            <rect x="216" y={408 + i * 20} width="572" height="20" fill={i % 2 === 0 ? '#0c0c0a' : '#0f0f0d'} />
            <text x="234" y={422 + i * 20} fontFamily="system-ui,sans-serif" fontSize="9" fill="#a09880">{row.name}</text>
            <text x="334" y={422 + i * 20} fontFamily="system-ui,sans-serif" fontSize="9" fill="#3d3d35">{row.type}</text>
            <text x="424" y={422 + i * 20} fontFamily="system-ui,sans-serif" fontSize="9" fill="#5a5448">{row.qty}</text>
            <text x="494" y={422 + i * 20} fontFamily="system-ui,sans-serif" fontSize="9" fill="#5a5448">{row.price}</text>
            <text x="574" y={422 + i * 20} fontFamily="system-ui,sans-serif" fontSize="9" fill="#a09880">{row.val}</text>
            <text x="680" y={422 + i * 20} fontFamily="system-ui,sans-serif" fontSize="9" fill={row.pnlCol}>{row.pnl}</text>
          </g>
        ))}
      </g>
    </svg>
  )
}
