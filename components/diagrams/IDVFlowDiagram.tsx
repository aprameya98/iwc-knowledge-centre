export default function IDVFlowDiagram() {
  const steps = [
    { label: 'User', sub: 'Applicant' },
    { label: 'Document &\nSelfie Capture', sub: 'ID + photo' },
    { label: 'Application\nSubmitted', sub: 'Secure upload' },
    { label: 'Review\nCenter', sub: 'Adjudication' },
    { label: 'Verified\nIdentity', sub: 'LoA confirmed' },
    { label: 'Proceed to\nIssuance', sub: 'IwC flow' },
  ];
  return (
    <figure className="my-8">
      <svg viewBox="0 0 700 130" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IDV enrollment flow from user through document capture to issuance" className="w-full max-w-[700px] mx-auto block" style={{ fontFamily: 'Inter, sans-serif' }}>
        <rect width="700" height="130" fill="#FAFAF9" rx="12"/>
        {steps.map((s, i) => {
          const cx = 60 + i * 110;
          return (
            <g key={i}>
              <rect x={cx - 45} y="20" width="90" height="60" rx="8" fill="white" stroke={i === steps.length - 1 ? '#4CAF7D' : '#E5E5E3'} strokeWidth={i === steps.length - 1 ? 2 : 1}/>
              {s.label.split('\n').map((line, li) => (
                <text key={li} x={cx} y={50 + li * 14} textAnchor="middle" fontSize="11" fontWeight="500" fill="#1A1A1A">{line}</text>
              ))}
              <text x={cx} y="92" textAnchor="middle" fontSize="10" fill="#6B7280">{s.sub}</text>
              {i < steps.length - 1 && (
                <line x1={cx + 45} y1="50" x2={cx + 65} y2="50" stroke="#E85C2C" strokeWidth="1.5" markerEnd="url(#idv-arr)"/>
              )}
            </g>
          );
        })}
        <defs>
          <marker id="idv-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#E85C2C"/></marker>
        </defs>
      </svg>
    </figure>
  );
}
