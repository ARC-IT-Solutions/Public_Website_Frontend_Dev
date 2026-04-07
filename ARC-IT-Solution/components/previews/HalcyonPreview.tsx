export default function HalcyonPreview() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="hal-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1a12" />
          <stop offset="100%" stopColor="#080f0c" />
        </linearGradient>
        <linearGradient id="hal-green" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3aaa6a" stopOpacity="0" />
          <stop offset="100%" stopColor="#3aaa6a" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="hal-heart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e05a5a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#e05a5a" stopOpacity="0" />
        </linearGradient>
        <clipPath id="hal-clip"><rect width="800" height="500" /></clipPath>
        <clipPath id="hal-phone1"><rect x="62" y="30" width="204" height="440" rx="28" /></clipPath>
        <clipPath id="hal-phone2"><rect x="310" y="30" width="204" height="440" rx="28" /></clipPath>
        <clipPath id="hal-phone3"><rect x="558" y="30" width="204" height="440" rx="28" /></clipPath>
      </defs>
      <g clipPath="url(#hal-clip)">
        <rect width="800" height="500" fill="#070c09" />

        {/* Subtle grid */}
        {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
          <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="500" stroke="#3aaa6a" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        {[0,1,2,3,4,5,6].map(i => (
          <line key={`h${i}`} x1="0" y1={i*84} x2="800" y2={i*84} stroke="#3aaa6a" strokeOpacity="0.03" strokeWidth="1" />
        ))}

        {/* ─── PHONE 1 — Dashboard ─── */}
        {/* Frame */}
        <rect x="62" y="30" width="204" height="440" rx="28" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
        <rect x="64" y="32" width="200" height="436" rx="27" fill="#0d1a12" />
        <clipPath id="p1c"><rect x="64" y="32" width="200" height="436" rx="27" /></clipPath>

        {/* Phone 1 content */}
        <g clipPath="url(#p1c)">
          {/* Status bar */}
          <rect x="64" y="32" width="200" height="28" fill="#0a1610" />
          <text x="80" y="50" fontFamily="system-ui,sans-serif" fontSize="9" fill="#a0b8a0">9:41</text>
          <rect x="218" y="42" width="28" height="10" rx="3" fill="none" stroke="#a0b8a0" strokeWidth="1.2" />
          <rect x="220" y="44" width="20" height="6" rx="1.5" fill="#3aaa6a" />
          <rect x="247" y="44" width="2" height="6" rx="1" fill="#a0b8a0" />

          {/* Notch */}
          <rect x="130" y="32" width="68" height="18" rx="0" fill="#0a1610" />
          <rect x="142" y="35" width="44" height="12" rx="6" fill="#111" />

          {/* Header */}
          <text x="80" y="82" fontFamily="system-ui,sans-serif" fontSize="10" fill="#5a7a5a">Good morning,</text>
          <text x="80" y="98" fontFamily="Georgia,serif" fontSize="16" fill="#e8f5e8" fontWeight="300">James ✦</text>

          {/* Health ring */}
          <circle cx="164" cy="160" r="44" fill="none" stroke="#1a2a1a" strokeWidth="10" />
          <circle cx="164" cy="160" r="44" fill="none" stroke="#3aaa6a" strokeWidth="10"
            strokeDasharray="220 276" strokeDashoffset="69" strokeLinecap="round" />
          <circle cx="164" cy="160" r="33" fill="none" stroke="#1a2a1a" strokeWidth="8" />
          <circle cx="164" cy="160" r="33" fill="none" stroke="#e05a5a" strokeWidth="8"
            strokeDasharray="165 208" strokeDashoffset="52" strokeLinecap="round" />
          <circle cx="164" cy="160" r="22" fill="none" stroke="#1a2a1a" strokeWidth="6" />
          <circle cx="164" cy="160" r="22" fill="none" stroke="#5b8dd9" strokeWidth="6"
            strokeDasharray="96 138" strokeDashoffset="35" strokeLinecap="round" />
          <text x="164" y="156" fontFamily="system-ui,sans-serif" fontSize="9" fill="#5a7a5a" textAnchor="middle">Today</text>
          <text x="164" y="169" fontFamily="Georgia,serif" fontSize="14" fill="#e8f5e8" textAnchor="middle" fontWeight="300">82%</text>

          {/* Stats row */}
          {[
            { label: 'Steps', val: '8,432', icon: '◈', x: 82 },
            { label: 'Sleep', val: '7.4h', icon: '◉', x: 144 },
            { label: 'Cal.', val: '1,840', icon: '◆', x: 206 },
          ].map(s => (
            <g key={s.label}>
              <rect x={s.x - 22} y="218" width="48" height="52" rx="8" fill="#0f1f0f" stroke="#1e3a1e" strokeWidth="0.8" />
              <text x={s.x} y="234" fontFamily="system-ui,sans-serif" fontSize="10" fill="#3aaa6a" textAnchor="middle">{s.icon}</text>
              <text x={s.x} y="249" fontFamily="Georgia,serif" fontSize="11" fill="#e8f5e8" textAnchor="middle">{s.val}</text>
              <text x={s.x} y="262" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#3a5a3a" textAnchor="middle">{s.label}</text>
            </g>
          ))}

          {/* Heart rate mini chart */}
          <rect x="75" y="284" width="178" height="68" rx="8" fill="#0f1f0f" stroke="#1e3a1e" strokeWidth="0.8" />
          <text x="88" y="300" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#3a5a3a">Heart Rate</text>
          <text x="88" y="314" fontFamily="Georgia,serif" fontSize="14" fill="#e05a5a" fontWeight="300">72 <tspan fontFamily="system-ui,sans-serif" fontSize="9" fill="#3a5a3a">bpm</tspan></text>
          <path d="M145,328 L152,318 L158,336 L165,308 L172,336 L178,322 L184,328 L190,328 L196,322 L202,328 L210,328 L216,334 L222,328 L234,328"
            fill="none" stroke="#e05a5a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Upcoming */}
          <text x="80" y="372" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#3a5a3a">Upcoming</text>
          <rect x="75" y="378" width="178" height="36" rx="6" fill="#0f1f0f" stroke="#1e3a1e" strokeWidth="0.8" />
          <rect x="80" y="385" width="3" height="22" rx="1.5" fill="#3aaa6a" />
          <text x="90" y="396" fontFamily="system-ui,sans-serif" fontSize="9" fill="#a0c0a0">Dr. Chen — Cardiology</text>
          <text x="90" y="407" fontFamily="system-ui,sans-serif" fontSize="8" fill="#3a5a3a">Tomorrow, 10:30 AM</text>

          {/* Bottom nav */}
          <rect x="64" y="424" width="200" height="44" fill="#09140a" />
          <rect x="64" y="424" width="200" height="0.5" fill="#1e3a1e" />
          {['⌂', '♥', '◎', '⚕', '☰'].map((ic, i) => (
            <text key={ic} x={92 + i * 40} y="451" fontFamily="system-ui,sans-serif" fontSize="16" fill={i === 0 ? '#3aaa6a' : '#2a3a2a'} textAnchor="middle">{ic}</text>
          ))}
        </g>
        {/* Frame border overlay */}
        <rect x="62" y="30" width="204" height="440" rx="28" fill="none" stroke="#2a2a2a" strokeWidth="1.5" />

        {/* ─── PHONE 2 — Medications ─── */}
        <rect x="310" y="30" width="204" height="440" rx="28" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
        <rect x="312" y="32" width="200" height="436" rx="27" fill="#0e1520" />
        <clipPath id="p2c"><rect x="312" y="32" width="200" height="436" rx="27" /></clipPath>
        <g clipPath="url(#p2c)">
          <rect x="312" y="32" width="200" height="28" fill="#0b1218" />
          <text x="328" y="50" fontFamily="system-ui,sans-serif" fontSize="9" fill="#8090b0">9:41</text>
          <rect x="466" y="42" width="28" height="10" rx="3" fill="none" stroke="#8090b0" strokeWidth="1.2" />
          <rect x="468" y="44" width="20" height="6" rx="1.5" fill="#5b8dd9" />
          <rect x="312" y="32" width="200" height="18" fill="#0b1218" />
          <rect x="380" y="35" width="44" height="12" rx="6" fill="#111" />

          <text x="328" y="82" fontFamily="system-ui,sans-serif" fontSize="9" fill="#4a5a7a">Medications</text>
          <text x="328" y="98" fontFamily="Georgia,serif" fontSize="16" fill="#dce8f5" fontWeight="300">Today's Schedule</text>

          {/* Progress */}
          <rect x="328" y="110" width="176" height="6" rx="3" fill="#1a2030" />
          <rect x="328" y="110" width="110" height="6" rx="3" fill="#5b8dd9" />
          <text x="328" y="128" fontFamily="system-ui,sans-serif" fontSize="8" fill="#4a5a7a">3 of 5 taken today</text>

          {/* Med cards */}
          {[
            { name: 'Lisinopril', dose: '10mg', time: '8:00 AM', done: true },
            { name: 'Metformin', dose: '500mg', time: '8:00 AM', done: true },
            { name: 'Atorvastatin', dose: '20mg', time: '12:00 PM', done: true },
            { name: 'Aspirin', dose: '81mg', time: '6:00 PM', done: false },
            { name: 'Vitamin D3', dose: '1000 IU', time: '8:00 PM', done: false },
          ].map((med, i) => (
            <g key={med.name}>
              <rect x="324" y={142 + i * 52} width="176" height="44" rx="8" fill={med.done ? '#0f1520' : '#131a28'} stroke={med.done ? '#1e2a40' : '#2a3a5a'} strokeWidth="0.8" />
              <circle cx="344" cy={164 + i * 52} r="10" fill={med.done ? '#5b8dd9' : '#1a2535'} />
              {med.done && <text x="344" y={168 + i * 52} fontFamily="system-ui,sans-serif" fontSize="10" fill="#0e1520" textAnchor="middle">✓</text>}
              <text x="362" y={158 + i * 52} fontFamily="system-ui,sans-serif" fontSize="10" fill={med.done ? '#8090b0' : '#dce8f5'}>{med.name}</text>
              <text x="362" y={170 + i * 52} fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#4a5a7a">{med.dose} · {med.time}</text>
              {!med.done && <rect x="452" y={158 + i * 52} width="40" height="18" rx="5" fill="#5b8dd9" />}
              {!med.done && <text x="472" y={170 + i * 52} fontFamily="system-ui,sans-serif" fontSize="8" fill="#0e1520" textAnchor="middle">Take</text>}
            </g>
          ))}

          <rect x="312" y="424" width="200" height="44" fill="#0b1218" />
          <rect x="312" y="424" width="200" height="0.5" fill="#1e2a40" />
          {['⌂', '♥', '◎', '⚕', '☰'].map((ic, i) => (
            <text key={ic} x={340 + i * 40} y="451" fontFamily="system-ui,sans-serif" fontSize="16" fill={i === 3 ? '#5b8dd9' : '#2a3040'} textAnchor="middle">{ic}</text>
          ))}
        </g>
        <rect x="310" y="30" width="204" height="440" rx="28" fill="none" stroke="#2a2a2a" strokeWidth="1.5" />

        {/* ─── PHONE 3 — Analytics ─── */}
        <rect x="558" y="30" width="204" height="440" rx="28" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
        <rect x="560" y="32" width="200" height="436" rx="27" fill="#1a0d10" />
        <clipPath id="p3c"><rect x="560" y="32" width="200" height="436" rx="27" /></clipPath>
        <g clipPath="url(#p3c)">
          <rect x="560" y="32" width="200" height="28" fill="#150a0c" />
          <text x="576" y="50" fontFamily="system-ui,sans-serif" fontSize="9" fill="#b08090">9:41</text>
          <rect x="628" y="35" width="44" height="12" rx="6" fill="#111" />

          <text x="576" y="82" fontFamily="system-ui,sans-serif" fontSize="9" fill="#6a3a45">Vitals</text>
          <text x="576" y="98" fontFamily="Georgia,serif" fontSize="16" fill="#f5e8ec" fontWeight="300">Health Trends</text>

          {/* Heart rate trend chart */}
          <rect x="572" y="110" width="176" height="110" rx="8" fill="#150a0c" stroke="#2a1520" strokeWidth="0.8" />
          <text x="584" y="126" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6a3a45">HEART RATE · 7 DAYS</text>
          <text x="584" y="140" fontFamily="Georgia,serif" fontSize="14" fill="#e05a5a">72 <tspan fontFamily="system-ui,sans-serif" fontSize="8" fill="#6a3a45">avg bpm</tspan></text>

          {/* HR bars */}
          {[68, 75, 71, 82, 70, 73, 72].map((v, i) => (
            <g key={i}>
              <rect x={586 + i * 22} y={175 - (v - 65) * 1.8} width="14" height={(v - 65) * 1.8 + 6} rx="3"
                fill={v > 78 ? '#e05a5a' : '#8a3a45'} fillOpacity={i === 6 ? 1 : 0.6} />
              <text x={593 + i * 22} y="210" fontFamily="system-ui,sans-serif" fontSize="7" fill="#4a2030" textAnchor="middle">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
              </text>
            </g>
          ))}

          {/* Sleep score */}
          <rect x="572" y="230" width="84" height="84" rx="8" fill="#150a0c" stroke="#2a1520" strokeWidth="0.8" />
          <text x="614" y="248" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#6a3a45" textAnchor="middle">SLEEP</text>
          <text x="614" y="268" fontFamily="Georgia,serif" fontSize="20" fill="#f5e8ec" textAnchor="middle" fontWeight="300">7.4</text>
          <text x="614" y="280" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#6a3a45" textAnchor="middle">hrs avg</text>
          <rect x="580" y="288" width="68" height="4" rx="2" fill="#2a1520" />
          <rect x="580" y="288" width="48" height="4" rx="2" fill="#c9a84c" fillOpacity="0.7" />
          <text x="614" y="302" fontFamily="system-ui,sans-serif" fontSize="7" fill="#6a3a45" textAnchor="middle">Good</text>

          {/* Stress score */}
          <rect x="664" y="230" width="84" height="84" rx="8" fill="#150a0c" stroke="#2a1520" strokeWidth="0.8" />
          <text x="706" y="248" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#6a3a45" textAnchor="middle">STRESS</text>
          <text x="706" y="268" fontFamily="Georgia,serif" fontSize="20" fill="#f5e8ec" textAnchor="middle" fontWeight="300">34</text>
          <text x="706" y="280" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#6a3a45" textAnchor="middle">Low</text>
          <circle cx="706" cy="295" r="10" fill="none" stroke="#1a0d10" strokeWidth="4" />
          <circle cx="706" cy="295" r="10" fill="none" stroke="#3aaa6a" strokeWidth="4"
            strokeDasharray="22 63" strokeDashoffset="16" />
          <text x="706" y="299" fontFamily="system-ui,sans-serif" fontSize="7" fill="#3aaa6a" textAnchor="middle">34%</text>

          {/* Blood pressure */}
          <rect x="572" y="324" width="176" height="60" rx="8" fill="#150a0c" stroke="#2a1520" strokeWidth="0.8" />
          <text x="584" y="340" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6a3a45">BLOOD PRESSURE</text>
          <text x="584" y="358" fontFamily="Georgia,serif" fontSize="18" fill="#f5e8ec" fontWeight="300">118<tspan fontSize="12" fill="#6a3a45">/</tspan>76</text>
          <text x="584" y="372" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#3aaa6a">Normal range ✓</text>
          {/* Mini sparkline */}
          <path d="M680,358 L690,350 L700,354 L710,346 L720,350 L730,348 L740,353"
            fill="none" stroke="#e05a5a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Achievements */}
          <rect x="572" y="394" width="176" height="24" rx="6" fill="#1e1410" stroke="#2a1e10" strokeWidth="0.8" />
          <text x="580" y="410" fontFamily="system-ui,sans-serif" fontSize="9" fill="#c9a84c">🏆 7-day streak achieved!</text>

          <rect x="560" y="424" width="200" height="44" fill="#150a0c" />
          <rect x="560" y="424" width="200" height="0.5" fill="#2a1520" />
          {['⌂', '♥', '◎', '⚕', '☰'].map((ic, i) => (
            <text key={ic} x={588 + i * 40} y="451" fontFamily="system-ui,sans-serif" fontSize="16" fill={i === 1 ? '#e05a5a' : '#3a2028'} textAnchor="middle">{ic}</text>
          ))}
        </g>
        <rect x="558" y="30" width="204" height="440" rx="28" fill="none" stroke="#2a2a2a" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
