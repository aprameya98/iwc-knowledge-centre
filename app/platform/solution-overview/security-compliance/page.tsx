import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Security & Compliance | Issuance with Credence Solution Overview',
  description: 'Data protection, NIST alignment, FIPS 140-3 compliance, and architecture-level security controls in IwC.',
};

const toc = [
  { id: 'data-at-rest', title: 'Data at Rest', level: 2 as const },
  { id: 'data-in-transit', title: 'Data in Transit', level: 2 as const },
  { id: 'architecture-security', title: 'Architecture-Level Security', level: 2 as const },
  { id: 'nist-alignment', title: 'NIST SP 800-63 Alignment', level: 2 as const },
  { id: 'fips', title: 'FIPS 140-3 Compliance', level: 2 as const },
];

const contentText = `IwC is built to meet the security and compliance requirements of government identity programs. Data at rest is encrypted using AES-256. Data in transit is protected by TLS 1.3 with mutual authentication for all system-to-system connections. Architecture-level security controls include separation of concerns between the issuance service and HSM signing service, role-based access control with principle of least privilege, and comprehensive audit logging. IwC aligns with NIST SP 800-63 Digital Identity Guidelines at Identity Assurance Level 2. The HSM signing infrastructure is FIPS 140-3 Level 3 validated using AWS CloudHSM.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/security-compliance"
      title="Security & Compliance"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="data-at-rest">Data at Rest</h2>
      <p>
        All data stored within the IwC platform is encrypted at rest using AES-256 encryption. This covers:
      </p>
      <ul>
        <li>Credential records and audit logs in the IwC database</li>
        <li>Credential offer tokens and session state</li>
        <li>Template configurations and issuer metadata</li>
        <li>Exported analytics data and scheduled report outputs</li>
      </ul>
      <p>
        Database encryption keys are managed through AWS Key Management Service (KMS) and rotated on a configurable schedule. Raw identity attributes are not stored permanently — they are consumed during credential assembly and discarded once the signed credential artifact is produced.
      </p>

      <h2 id="data-in-transit">Data in Transit</h2>
      <p>
        All data in transit within the IwC platform and between IwC and external systems is protected by TLS 1.3. System-to-system API connections — including the integration with case management systems and the connection between the Issuance Service and the HSM — use mutual TLS (mTLS), requiring certificate-based authentication on both ends of every connection.
      </p>
      <p>
        The OpenID4VCI credential delivery endpoint uses TLS 1.3 with HSTS enforced. Certificate pinning is supported for wallet integrations that require it.
      </p>

      <h2 id="architecture-security">Architecture-Level Security</h2>
      <p>
        IwC&apos;s security posture is enforced at the architectural level — not just through configuration or policy:
      </p>
      <ul>
        <li>
          <strong>Separation of concerns:</strong> The Issuance Service and the HSM Signing Service are separate components. The Issuance Service never has access to signing keys. The HSM never receives raw personal data. No single component can compromise both.
        </li>
        <li>
          <strong>Role-Based Access Control (RBAC):</strong> Every action in the Admin Portal is scoped to a role. Operators can only perform the lifecycle actions their role permits. All actions are logged with operator identity and timestamp.
        </li>
        <li>
          <strong>Principle of least privilege:</strong> Service accounts are scoped to the minimum permissions required for their function. Cross-service calls are authenticated and authorized at every hop.
        </li>
        <li>
          <strong>Immutable audit logs:</strong> All platform events — credential issuance, lifecycle changes, operator actions, API calls — are written to an append-only audit log. Logs cannot be modified or deleted by any operator, regardless of role.
        </li>
        <li>
          <strong>Network segmentation:</strong> The HSM signing service operates in an isolated network segment with no direct public internet access. All inbound requests are mediated by the Issuance Service.
        </li>
      </ul>

      <h2 id="nist-alignment">NIST SP 800-63 Alignment</h2>
      <p>
        IwC is designed to support programs operating at NIST SP 800-63 Identity Assurance Level 2 (IAL2) and Authenticator Assurance Level 2 (AAL2):
      </p>
      <table>
        <thead>
          <tr>
            <th>NIST Control Area</th>
            <th>IwC Implementation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Identity Proofing (IAL2)</td>
            <td>IwC consumes pre-verified attributes from the upstream identity proofing system — IAL2 is enforced by the source, not duplicated by IwC</td>
          </tr>
          <tr>
            <td>Credential Binding</td>
            <td>Cryptographic device binding via hardware-backed key attestation — proof of possession at activation and every presentation</td>
          </tr>
          <tr>
            <td>Authenticator Strength (AAL2)</td>
            <td>Device-bound credential stored in Secure Element or TEE — meets AAL2 requirements for hardware-protected authenticator</td>
          </tr>
          <tr>
            <td>Revocation</td>
            <td>Real-time revocation via StatusList2021 (W3C VC) and issuer status endpoint (mDoc)</td>
          </tr>
          <tr>
            <td>Audit and Accountability</td>
            <td>Immutable, timestamped audit log for every lifecycle event — operator identity captured on all actions</td>
          </tr>
        </tbody>
      </table>

      <h2 id="fips">FIPS 140-3 Compliance</h2>
      <p>
        Every credential issued by IwC is signed inside a FIPS 140-3 Level 3 validated Hardware Security Module — AWS CloudHSM. This is the highest level of HSM validation commercially available in a cloud environment and meets the requirements of programs operating under FIPS-mandated cryptographic controls.
      </p>
      <Callout type="important">
        FIPS 140-3 Level 3 validation means that private signing keys are generated inside the hardware boundary, are non-exportable in plaintext under any circumstance, and are protected against physical tampering by tamper-evident and tamper-responsive mechanisms.
      </Callout>
      <p>
        The ECDSA P-256 signing algorithm used by IwC is on the NIST-approved algorithm list and is compliant with FIPS 186-5 (Digital Signature Standard).
      </p>
    </ArticleWrapper>
  );
}
