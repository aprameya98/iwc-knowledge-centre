export default function TrustTriangleDiagram() {
  return (
    <figure className="my-8">
      <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trust Triangle diagram showing Issuer, Identity Holder, and Verifier relationships" className="w-full max-w-[600px] mx-auto block" style={{ fontFamily: 'Inter, sans-serif' }}>
        <rect width="600" height="380" fill="#FAFAF9" rx="12"/>
        {/* Triangle lines */}
        <line x1="300" y1="60" x2="120" y2="300" stroke="#E5E5E3" strokeWidth="1.5"/>
        <line x1="300" y1="60" x2="480" y2="300" stroke="#E5E5E3" strokeWidth="1.5"/>
        <line x1="120" y1="300" x2="480" y2="300" stroke="#E5E5E3" strokeWidth="1.5"/>

        {/* Arrow: Issuer -> Holder */}
        <defs>
          <marker id="arrow-orange" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#E85C2C"/>
          </marker>
          <marker id="arrow-teal" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#2CBFBF"/>
          </marker>
        </defs>
        <line x1="145" y1="285" x2="268" y2="88" stroke="#E85C2C" strokeWidth="2" markerEnd="url(#arrow-orange)"/>
        <text x="168" y="185" fontSize="11" fill="#E85C2C" transform="rotate(-60,168,185)" textAnchor="middle">Issues a credential</text>

        {/* Arrow: Holder -> Verifier */}
        <line x1="332" y1="88" x2="455" y2="285" stroke="#2CBFBF" strokeWidth="2" markerEnd="url(#arrow-teal)"/>
        <text x="432" y="185" fontSize="11" fill="#2CBFBF" transform="rotate(60,432,185)" textAnchor="middle">Shows credential</text>

        {/* Arrow: Verifier -> Issuer (bottom) */}
        <line x1="456" y1="308" x2="145" y2="308" stroke="#2CBFBF" strokeWidth="2" markerEnd="url(#arrow-teal)"/>
        <text x="300" y="328" fontSize="11" fill="#2CBFBF" textAnchor="middle">Trusts the Issuer</text>

        {/* Issuer node - bottom left */}
        <circle cx="120" cy="300" r="44" fill="#FFF7F0" stroke="#E85C2C" strokeWidth="2"/>
        <text x="120" y="296" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1A1A1A">Issuer</text>
        <text x="120" y="313" textAnchor="middle" fontSize="10" fill="#6B7280">IwC Platform</text>

        {/* Holder node - top center */}
        <circle cx="300" cy="56" r="44" fill="#F0FAFA" stroke="#2CBFBF" strokeWidth="2"/>
        <text x="300" y="50" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1A1A1A">Identity</text>
        <text x="300" y="65" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1A1A1A">Holder</text>

        {/* Verifier node - bottom right */}
        <circle cx="480" cy="300" r="44" fill="#F0FAFA" stroke="#2CBFBF" strokeWidth="2"/>
        <text x="480" y="296" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1A1A1A">Verifier</text>
        <text x="480" y="313" textAnchor="middle" fontSize="10" fill="#6B7280">VwC Tools</text>
      </svg>
      <figcaption className="text-center text-sm mt-2" style={{ color: '#6B7280' }}>
        The Trust Triangle: the three parties in every digital credential transaction
      </figcaption>
    </figure>
  );
}
