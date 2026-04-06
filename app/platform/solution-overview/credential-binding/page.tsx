import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Credential Binding | Issuance with Credence Solution Overview',
  description: 'Case record binding, physical card correlation, device-level binding, and audit trail in IwC.',
};

const toc = [
  { id: 'case-binding', title: 'Case Record Binding', level: 2 as const },
  { id: 'physical-card', title: 'Physical Card Correlation', level: 2 as const },
  { id: 'device-binding', title: 'Device-Level Binding', level: 2 as const },
  { id: 'audit-trail', title: 'Audit Trail', level: 2 as const },
];

const contentText = `IwC binds every digital credential to three reference points: the originating case record for auditability, the physical card for parallel lifecycle management, and the holder device for security. Case record binding means every credential carries a case reference number linking it back to the originating application record in the case management system. Physical card correlation ties the digital credential to the physical document via card_serial_version_linkage so that any action on one can trigger a corresponding action on the other. Device-level binding uses cryptographic key attestation to bind the credential to the specific hardware-backed key generated on the holder device during activation. The audit trail captures every lifecycle event for the credential including issuance renewal suspension reinstatement revocation and device migration with full timestamps operator identifiers and action details.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/credential-binding"
      title="Credential Binding"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="case-binding">Case Record Binding</h2>
      <p>
        Every IwC-issued credential is permanently linked to the originating case record in the case management system. The <code>case_reference_number</code> attribute is embedded directly in the credential payload — in the custom namespace — and is included in every signed issuance.
      </p>
      <p>
        This binding means that:
      </p>
      <ul>
        <li>Any lifecycle action on a credential (renewal, revocation, suspension) is traceable back to the original application record</li>
        <li>Operators can look up any credential by case reference from within the IwC Admin Portal</li>
        <li>Audit logs capture the case reference alongside every action — creating a complete, unambiguous chain of custody from application to issuance to expiry</li>
      </ul>

      <h2 id="physical-card">Physical Card Correlation</h2>
      <p>
        For programs that issue both a physical card and a digital credential, IwC maintains a formal linkage between the two via the <code>card_serial_version_linkage</code> attribute. This attribute encodes the physical card&apos;s serial number and version in the digital credential, enabling parallel lifecycle management:
      </p>
      <ul>
        <li>When a physical card is reported lost or stolen, the corresponding digital credential can be revoked simultaneously</li>
        <li>When a physical card is renewed, the digital credential renewal can be triggered from the same workflow</li>
        <li>Verifiers who need to cross-reference a presented digital credential against a physical card record have a direct, auditable link to do so</li>
      </ul>
      <Callout type="note">
        Physical card correlation is optional. Programs that issue digital credentials only — with no physical card — simply omit <code>card_serial_version_linkage</code> from the credential template.
      </Callout>

      <h2 id="device-binding">Device-Level Binding</h2>
      <p>
        During the OpenID4VCI activation flow, the holder&apos;s wallet generates a device-specific key pair inside the hardware-backed Secure Element or TEE. The public key is submitted to IwC as part of the credential request — along with a proof of possession signed by the corresponding private key.
      </p>
      <p>
        IwC embeds this public key into the signed credential. From that point forward, any verifier can confirm that the credential is being presented by the same device that holds the corresponding private key — a cryptographic proof of device binding that cannot be transferred or copied.
      </p>
      <p>
        This binding is what makes replay attacks and credential sharing attacks ineffective: possessing a copy of the credential data is not sufficient — the holder must also control the private key on the bound device.
      </p>

      <h2 id="audit-trail">Audit Trail</h2>
      <p>
        IwC maintains a comprehensive, immutable audit trail for every credential it issues. Every lifecycle event is captured with full context:
      </p>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Captured Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issuance</td>
            <td>Credential ID, case reference, issuer, template version, timestamp, operator</td>
          </tr>
          <tr>
            <td>Activation</td>
            <td>Device key fingerprint, activation timestamp, wallet version</td>
          </tr>
          <tr>
            <td>Renewal</td>
            <td>Previous credential ID, new credential ID, trigger reason, operator, timestamp</td>
          </tr>
          <tr>
            <td>Suspension</td>
            <td>Operator ID, reason code, timestamp</td>
          </tr>
          <tr>
            <td>Reinstatement</td>
            <td>Operator ID, reason code, timestamp</td>
          </tr>
          <tr>
            <td>Revocation</td>
            <td>Operator ID, reason code, timestamp, revocation method</td>
          </tr>
          <tr>
            <td>Device Migration</td>
            <td>Old device key fingerprint, new device key fingerprint, timestamp</td>
          </tr>
        </tbody>
      </table>
      <p>
        Audit logs are accessible via the IwC Admin Portal and exportable via API for integration with external SIEM or compliance systems.
      </p>
    </ArticleWrapper>
  );
}
