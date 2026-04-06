export default function LifecycleDiagram() {
  const stages = [
    { num: '01', title: 'Enrollment', desc: 'Identity data captured', color: '#E85C2C' },
    { num: '02', title: 'Issuance', desc: 'Verified & credentialed', color: '#2CBFBF' },
    { num: '03', title: 'Holding', desc: 'Stored in wallet', color: '#E85C2C' },
    { num: '04', title: 'Verification', desc: 'Presented to verifier', color: '#4CAF7D' },
  ];
  return (
    <figure className="my-8">
      <svg viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Digital ID Lifecycle: four stages from Enrollment through Verification" className="w-full max-w-[640px] mx-auto block" style={{ fontFamily: 'Inter, sans-serif' }}>
        <rect width="640" height="160" fill="#FAFAF9" rx="12"/>
        {stages.map((s, i) => {
          const cx = 80 + i * 160;
          return (
            <g key={s.num}>
              <circle cx={cx} cy="70" r="36" fill="white" stroke={s.color} strokeWidth="2"/>
              <text x={cx} y="64" textAnchor="middle" fontSize="18" fontWeight="700" fill={s.color}>{s.num}</text>
              <text x={cx} y="82" textAnchor="middle" fontSize="10" fill="#9CA3AF">stage</text>
              <text x={cx} y="122" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1A1A1A">{s.title}</text>
              <text x={cx} y="140" textAnchor="middle" fontSize="11" fill="#6B7280">{s.desc}</text>
              {i < 3 && (
                <line x1={cx + 36} y1="70" x2={cx + 124} y2="70" stroke="#E85C2C" strokeWidth="2" markerEnd="url(#arr)"/>
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#E85C2C"/>
          </marker>
        </defs>
      </svg>
    </figure>
  );
}
