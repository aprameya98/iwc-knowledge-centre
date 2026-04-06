import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Architecture | Issuance with Credence Solution Overview',
  description: 'Core components of the IwC platform and how the credential issuance flow works end to end.',
};

const toc = [
  { id: 'core-components', title: 'Core Components', level: 2 as const },
  { id: 'how-it-all-flows', title: 'How It All Flows', level: 2 as const },
];

const contentText = `The IwC architecture is composed of four core components. The Credential Template and Data Model Engine is the configuration layer where administrators define credential schemas attribute namespaces required and optional fields MSO controls and visual branding entirely through a UI without touching code. The Issuance Service is the processing core that ingests verified identity attributes assembles credential payloads computes per-claim SHA-256 digests constructs mDoc and W3C VC structures and manages OpenID4VCI credential endpoints. The HSM Signing Service is the security layer that receives only hashed digests never raw personal data and signs using the Document Signer private key inside a FIPS 140-3 Level 3 validated AWS CloudHSM. The Lifecycle and Admin Portal is the control center providing a web-based console for template management lifecycle operations PKI and trust management RBAC controls and real-time analytics. The architecture enforces a clean separation of concerns at every layer. No single component ever has access to both raw personal data and signing keys simultaneously.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/architecture"
      title="Architecture"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="core-components">Core Components</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>What It Does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Credential Template &amp; Data Model Engine</strong></td>
            <td>The configuration layer. Administrators define credential schemas, attribute namespaces, required/optional fields, MSO controls, and visual branding — entirely through a UI, without touching code.</td>
          </tr>
          <tr>
            <td><strong>Issuance Service (Credential Engine)</strong></td>
            <td>The processing core. Ingests verified identity attributes, assembles credential payloads, computes per-claim SHA-256 digests, constructs mDoc and W3C VC structures, and manages OpenID4VCI credential endpoints.</td>
          </tr>
          <tr>
            <td><strong>HSM / Signing Service</strong></td>
            <td>The security layer. Receives only hashed digests — never raw personal data. Signs using the Document Signer private key (ECDSA P-256) inside a FIPS 140-3 Level 3 validated AWS CloudHSM. Returns a signed MSO or W3C VC proof.</td>
          </tr>
          <tr>
            <td><strong>Lifecycle &amp; Admin Portal</strong></td>
            <td>The control center. A web-based console for template management, lifecycle operations, PKI and trust management, RBAC controls, and real-time analytics — all in one place.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="how-it-all-flows">How It All Flows</h2>
      <p>
        The following sequence describes the end-to-end flow from an authoritative identity data source through to credential delivery in the holder&apos;s wallet:
      </p>
      <pre>{`Identity Data Source (any authoritative system)
│
│  Verified identity attributes (Mutual TLS, encrypted API)
▼
Issuance Service (Credential Engine)
│
│  Per-claim SHA-256 digests — raw PII never leaves this layer
▼
HSM / Signing Service (AWS CloudHSM — FIPS 140-3 L3)
│
│  Signed MSO / VC proof (ECDSA P-256)
▼
Issuance Service — Final Credential Assembly
  (CBOR-encoded mDoc  OR  JSON-LD W3C VC)
│
│  OpenID4VCI — deferred or immediate delivery
▼
Holder Wallet (Hardware-backed Secure Element / TEE)`}</pre>

      <Callout type="important">
        The architecture enforces a clean separation of concerns at every layer. No single component ever has access to both raw personal data and signing keys simultaneously.
      </Callout>
    </ArticleWrapper>
  );
}
