export default function IssuanceFlowDiagram() {
  return (
    <figure className="my-8">
      <svg viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IwC Issuance Flow: from application submission through automated checks to credential delivery" className="w-full max-w-[700px] mx-auto block" style={{ fontFamily: 'Inter, sans-serif' }}>
        <rect width="700" height="320" fill="#FAFAF9" rx="12"/>
        {/* Application box */}
        <rect x="20" y="30" width="130" height="80" rx="8" fill="white" stroke="#E5E5E3" strokeWidth="1.5"/>
        <text x="85" y="60" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1A1A1A">Digital ID</text>
        <text x="85" y="76" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1A1A1A">Application</text>
        <text x="85" y="96" textAnchor="middle" fontSize="10" fill="#6B7280">Upload docs</text>
        <text x="85" y="109" textAnchor="middle" fontSize="10" fill="#6B7280">Take selfie</text>

        {/* Arrow to IwC */}
        <line x1="150" y1="70" x2="185" y2="70" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#ga)"/>

        {/* IwC Review box */}
        <rect x="185" y="20" width="230" height="230" rx="8" fill="white" stroke="#E85C2C" strokeWidth="1.5" strokeDasharray="5,3"/>
        <text x="300" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="#E85C2C">IwC Review</text>
        {/* 6 checks grid */}
        {[['OCR','Biometric'],['Liveness','Doc Auth'],['SOR','Fraud']].map((row, ri) =>
          row.map((label, ci) => (
            <g key={`${ri}-${ci}`}>
              <rect x={200 + ci * 105} y={55 + ri * 55} width="95" height="42" rx="6" fill="#F9FAFB" stroke="#E5E5E3" strokeWidth="1"/>
              <text x={247 + ci * 105} y={80 + ri * 55} textAnchor="middle" fontSize="11" fontWeight="500" fill="#1A1A1A">{label}</text>
              <text x={247 + ci * 105} y={93 + ri * 55} textAnchor="middle" fontSize="9" fill="#4CAF7D">● Pass</text>
            </g>
          ))
        )}

        {/* Arrow to decision */}
        <line x1="415" y1="135" x2="450" y2="135" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#ga)"/>

        {/* Decision diamond */}
        <polygon points="480,110 520,135 480,160 440,135" fill="white" stroke="#E5E5E3" strokeWidth="1.5"/>
        <text x="480" y="132" textAnchor="middle" fontSize="9" fill="#1A1A1A">Approve</text>
        <text x="480" y="143" textAnchor="middle" fontSize="9" fill="#1A1A1A">/ Reject</text>

        {/* Approve path */}
        <line x1="520" y1="135" x2="555" y2="135" stroke="#4CAF7D" strokeWidth="1.5" markerEnd="url(#ga-green)"/>
        <text x="537" y="128" textAnchor="middle" fontSize="9" fill="#4CAF7D">✓</text>

        {/* Issuance box */}
        <rect x="555" y="110" width="115" height="50" rx="8" fill="#F0FAFA" stroke="#2CBFBF" strokeWidth="1.5"/>
        <text x="612" y="131" textAnchor="middle" fontSize="10" fontWeight="600" fill="#2CBFBF">Issuance</text>
        <text x="612" y="146" textAnchor="middle" fontSize="9" fill="#6B7280">→ Wallet</text>
        <text x="612" y="157" textAnchor="middle" fontSize="9" fill="#6B7280">delivery</text>

        {/* Reject path */}
        <line x1="480" y1="160" x2="480" y2="210" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#ga-red)"/>
        <text x="490" y="190" fontSize="9" fill="#EF4444">Reject</text>
        <rect x="430" y="210" width="100" height="35" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1"/>
        <text x="480" y="232" textAnchor="middle" fontSize="10" fill="#EF4444">Notification</text>

        <defs>
          <marker id="ga" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6B7280"/></marker>
          <marker id="ga-green" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4CAF7D"/></marker>
          <marker id="ga-red" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#EF4444"/></marker>
        </defs>
      </svg>
      <figcaption className="text-center text-sm mt-2" style={{ color: '#6B7280' }}>IwC issuance process flow</figcaption>
    </figure>
  );
}
