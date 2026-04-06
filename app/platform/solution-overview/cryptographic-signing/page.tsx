import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Cryptographic Signing & Key Management | Issuance with Credence Solution Overview',
  description: 'Per-claim hashing, HSM signing, PKI trust chain, VICAL distribution, and key rotation in IwC.',
};

const toc = [
  { id: 'per-claim-hashing', title: 'Per-Claim Hashing', level: 2 as const },
  { id: 'hsm-signing', title: 'HSM Signing', level: 2 as const },
  { id: 'pki-trust-chain', title: 'PKI Trust Chain', level: 2 as const },
  { id: 'vical', title: 'VICAL Distribution', level: 2 as const },
  { id: 'key-rotation', title: 'Key Rotation', level: 2 as const },
];

const contentText = `IwC's cryptographic architecture is built on the principle that raw personal data and signing keys must never occupy the same layer. Before any signing operation the issuance service computes a SHA-256 digest for every individual claim in the credential. The HSM receives only these digests never the underlying attribute values. For mDoc credentials the signed output is a Mobile Security Object containing the issuer-signed structure with all per-claim digests. For W3C VC credentials the signed output is a Data Integrity proof appended to the JSON-LD document. The HSM signing service uses ECDSA with P-256 curve inside a FIPS 140-3 Level 3 validated AWS CloudHSM. Private keys are generated inside the hardware boundary and never exported in plaintext. The PKI trust chain runs from a Country Signing Certificate Authority at the root through a Document Signer Certificate to the individual credential. VICAL bundles are published to relying parties for offline certificate validation. Key rotation is managed without credential re-issuance using overlapping validity windows.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/cryptographic-signing"
      title="Cryptographic Signing & Key Management"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="per-claim-hashing">Per-Claim Hashing</h2>
      <p>
        Before any signing operation, the Issuance Service computes a SHA-256 digest for every individual claim in the credential. This is the foundation of selective disclosure — each attribute is independently hashed, so a holder can present any subset of claims and a verifier can cryptographically confirm each one without seeing the rest.
      </p>
      <p>
        The HSM receives only these digests — never the underlying attribute values. Raw personal data never crosses the hardware boundary. This is an architectural guarantee, not a policy control.
      </p>

      <h2 id="hsm-signing">HSM Signing</h2>
      <p>
        The signing service operates inside a FIPS 140-3 Level 3 validated AWS CloudHSM cluster. Private keys are generated inside the hardware boundary and are never exported in plaintext under any operational condition.
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Algorithm</td>
            <td>ECDSA</td>
          </tr>
          <tr>
            <td>Curve</td>
            <td>P-256 (NIST)</td>
          </tr>
          <tr>
            <td>Hardware</td>
            <td>AWS CloudHSM</td>
          </tr>
          <tr>
            <td>Validation Level</td>
            <td>FIPS 140-3 Level 3</td>
          </tr>
          <tr>
            <td>Key Export</td>
            <td>Never — keys are non-exportable</td>
          </tr>
          <tr>
            <td>mDoc Output</td>
            <td>Signed Mobile Security Object (MSO)</td>
          </tr>
          <tr>
            <td>W3C VC Output</td>
            <td>Data Integrity proof (JSON-LD)</td>
          </tr>
        </tbody>
      </table>
      <Callout type="important">
        The HSM never receives raw personal data — only SHA-256 digests of individual claims. No signing operation can reconstruct the underlying identity attributes.
      </Callout>

      <h2 id="pki-trust-chain">PKI Trust Chain</h2>
      <p>
        Every IwC-issued credential sits within a formally structured public key infrastructure that enables any compliant verifier to establish cryptographic trust — with no runtime dependency on IwC systems:
      </p>
      <pre>{`Country Signing Certificate Authority (CSCA)
│  Root of trust — operated by or on behalf of the issuing authority
│  Self-signed X.509 certificate
│
▼
Document Signer Certificate (DSC)
│  Issued by the CSCA — scoped to a specific document type or program
│  Signed by CSCA private key
│
▼
Issued Credential (mDoc MSO / W3C VC)
   Signed by Document Signer private key (inside AWS CloudHSM)
   Verifier validates: Credential → DSC → CSCA`}</pre>
      <p>
        This three-tier hierarchy mirrors the structure used in international travel documents (ICAO) and ISO/IEC 18013-5 mDL deployments worldwide — ensuring IwC-issued credentials are compatible with any standards-conformant verifier.
      </p>

      <h2 id="vical">VICAL Distribution</h2>
      <p>
        The Verified Issuer Certificate Authority List (VICAL) is a signed bundle of all trusted Document Signer Certificates for a given jurisdiction or program. IwC publishes VICAL bundles to relying parties, enabling fully offline certificate validation at the point of verification — no network call to IwC required during credential presentation.
      </p>
      <p>
        VICAL bundles are versioned, timestamped, and signed by the CSCA. Relying parties cache the current bundle and refresh on a configurable schedule. This supports air-gapped verification environments, rural deployments, and high-throughput verification scenarios where latency must be eliminated.
      </p>

      <h2 id="key-rotation">Key Rotation</h2>
      <p>
        Document Signer keys have a defined operational lifetime. IwC manages key rotation without requiring re-issuance of existing credentials through an overlapping validity window approach:
      </p>
      <ul>
        <li>A new Document Signer Certificate is generated inside the HSM before the current key expires</li>
        <li>New credentials are signed with the new key immediately upon activation</li>
        <li>Existing credentials remain valid — verifiers accept any DSC chained to a trusted CSCA</li>
        <li>The outgoing key remains in the HSM (read-only, no new signing) for the duration of any credentials it signed</li>
        <li>VICAL bundles are updated to include both the active and the transitioning DSC during the overlap window</li>
      </ul>
      <p>
        The result: zero credential disruption during key rotation. Holders experience no interruption. Verifiers see no gap in trust.
      </p>
    </ArticleWrapper>
  );
}
