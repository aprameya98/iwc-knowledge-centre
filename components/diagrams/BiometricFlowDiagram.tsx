export default function BiometricFlowDiagram() {
  return (
    <figure className="my-8">
      <svg viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Biometric verification flow: selfie capture through liveness detection to matching and success" className="w-full max-w-[640px] mx-auto block" style={{ fontFamily: 'Inter, sans-serif' }}>
        <rect width="640" height="160" fill="#FAFAF9" rx="12"/>
        {/* Step 1 */}
        <rect x="20" y="40" width="120" height="60" rx="8" fill="white" stroke="#E5E5E3" strokeWidth="1.5"/>
        <text x="80" y="66" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1A1A1A">Selfie</text>
        <text x="80" y="82" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1A1A1A">Capture</text>
        <text x="80" y="96" textAnchor="middle" fontSize="10" fill="#6B7280">Live photo</text>

        <line x1="140" y1="70" x2="165" y2="70" stroke="#E85C2C" strokeWidth="1.5" markerEnd="url(#bio-arr)"/>

        {/* Step 2: Dual liveness */}
        <rect x="165" y="25" width="140" height="90" rx="8" fill="white" stroke="#2CBFBF" strokeWidth="1.5"/>
        <text x="235" y="45" textAnchor="middle" fontSize="11" fontWeight="600" fill="#2CBFBF">Dual-Layer</text>
        <text x="235" y="59" textAnchor="middle" fontSize="11" fontWeight="600" fill="#2CBFBF">Liveness</text>
        <rect x="175" y="65" width="58" height="28" rx="5" fill="#F0FAFA" stroke="#2CBFBF" strokeWidth="1"/>
        <text x="204" y="83" textAnchor="middle" fontSize="10" fill="#2CBFBF">Passive</text>
        <rect x="241" y="65" width="54" height="28" rx="5" fill="#F0FAFA" stroke="#2CBFBF" strokeWidth="1"/>
        <text x="268" y="83" textAnchor="middle" fontSize="10" fill="#2CBFBF">Active</text>

        <line x1="305" y1="70" x2="330" y2="70" stroke="#E85C2C" strokeWidth="1.5" markerEnd="url(#bio-arr)"/>

        {/* Step 3: 1:1 Matching */}
        <rect x="330" y="30" width="145" height="80" rx="8" fill="white" stroke="#E5E5E3" strokeWidth="1.5"/>
        <text x="402" y="52" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1A1A1A">1:1 Biometric</text>
        <text x="402" y="66" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1A1A1A">Matching</text>
        <text x="402" y="84" textAnchor="middle" fontSize="10" fill="#6B7280">ID Portrait vs</text>
        <text x="402" y="97" textAnchor="middle" fontSize="10" fill="#6B7280">Live Selfie</text>

        <line x1="475" y1="70" x2="500" y2="70" stroke="#4CAF7D" strokeWidth="1.5" markerEnd="url(#bio-arr-green)"/>

        {/* Step 4: Success */}
        <rect x="500" y="40" width="120" height="60" rx="8" fill="#F0FFF4" stroke="#4CAF7D" strokeWidth="2"/>
        <text x="560" y="66" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4CAF7D">Verification</text>
        <text x="560" y="81" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4CAF7D">Successful</text>
        <text x="560" y="95" textAnchor="middle" fontSize="16">✓</text>

        <defs>
          <marker id="bio-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#E85C2C"/></marker>
          <marker id="bio-arr-green" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4CAF7D"/></marker>
        </defs>
      </svg>
      <figcaption className="text-center text-sm mt-2" style={{ color: '#6B7280' }}>Biometric verification flow</figcaption>
    </figure>
  );
}
