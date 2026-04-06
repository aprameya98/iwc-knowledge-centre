import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Supported Standards Reference | Issuance with Credence Solution Overview',
  description: 'Full reference list of standards and protocols supported by IwC.',
};

const toc = [
  { id: 'credential-standards', title: 'Credential Standards', level: 2 as const },
  { id: 'issuance-protocols', title: 'Issuance & Presentation Protocols', level: 2 as const },
  { id: 'cryptography', title: 'Cryptography & Security Standards', level: 2 as const },
  { id: 'identity-assurance', title: 'Identity Assurance Frameworks', level: 2 as const },
];

const contentText = `IwC implements a comprehensive set of internationally recognized standards covering credential formats issuance and presentation protocols cryptography and identity assurance frameworks. Credential standards include ISO IEC 18013-5 for mDoc, ISO IEC 18013-7 for mDoc online presentation, ISO IEC 23220 for generic mobile driving licence related services, and W3C Verifiable Credentials 2.0. Issuance and presentation protocols include OpenID4VCI for credential issuance, OpenID4VP for credential presentation, and OpenID Connect. Cryptography standards include ECDSA P-256, FIPS 186-5, FIPS 140-3, AES-256, TLS 1.3, and SHA-256. Identity assurance frameworks include NIST SP 800-63 and W3C VC Barcodes.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/supported-standards"
      title="Supported Standards Reference"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="credential-standards">Credential Standards</h2>
      <table>
        <thead>
          <tr>
            <th>Standard</th>
            <th>Version / Profile</th>
            <th>What IwC Uses It For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ISO/IEC 18013-5</strong></td>
            <td>2021</td>
            <td>mDoc credential format, attribute namespace (<code>org.iso.18013.5.1</code>), Mobile Security Object structure, device engagement (BLE, NFC, QR)</td>
          </tr>
          <tr>
            <td><strong>ISO/IEC 18013-7</strong></td>
            <td>2024</td>
            <td>Online mDoc presentation via HTTPS — extends ISO 18013-5 for remote verification scenarios</td>
          </tr>
          <tr>
            <td><strong>ISO/IEC 23220</strong></td>
            <td>Parts 1–4</td>
            <td>Generic mobile ID services architecture — informs IwC&apos;s approach to multi-document type support and issuer trust</td>
          </tr>
          <tr>
            <td><strong>W3C Verifiable Credentials 2.0</strong></td>
            <td>W3C Recommendation</td>
            <td>JSON-LD credential format, Data Integrity proofs, credential status (StatusList2021), selective disclosure</td>
          </tr>
          <tr>
            <td><strong>W3C Decentralized Identifiers (DID)</strong></td>
            <td>v1.0 W3C Recommendation</td>
            <td>Issuer DID in W3C VC credentials — supports did:web and did:key resolution</td>
          </tr>
          <tr>
            <td><strong>W3C VC Barcodes</strong></td>
            <td>W3C Working Draft</td>
            <td>Encoding W3C VCs in machine-readable barcodes for physical document interoperability</td>
          </tr>
        </tbody>
      </table>

      <h2 id="issuance-protocols">Issuance &amp; Presentation Protocols</h2>
      <table>
        <thead>
          <tr>
            <th>Protocol</th>
            <th>Profile / Version</th>
            <th>What IwC Uses It For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>OpenID for Verifiable Credential Issuance (OpenID4VCI)</strong></td>
            <td>Draft 13+ / HAIP profile</td>
            <td>Credential delivery from IwC to holder wallets — immediate and deferred issuance, pre-authorized code flow</td>
          </tr>
          <tr>
            <td><strong>OpenID for Verifiable Presentations (OpenID4VP)</strong></td>
            <td>Draft 20+</td>
            <td>Online credential presentation from holder wallet to verifier — used with W3C VC credentials</td>
          </tr>
          <tr>
            <td><strong>OpenID Connect (OIDC)</strong></td>
            <td>1.0</td>
            <td>Admin Portal authentication, operator SSO integration</td>
          </tr>
        </tbody>
      </table>

      <h2 id="cryptography">Cryptography &amp; Security Standards</h2>
      <table>
        <thead>
          <tr>
            <th>Standard</th>
            <th>Application in IwC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ECDSA (FIPS 186-5)</strong></td>
            <td>Digital signature algorithm for all credential signing operations</td>
          </tr>
          <tr>
            <td><strong>P-256 (NIST)</strong></td>
            <td>Elliptic curve for ECDSA — used for Document Signer keys and device binding keys</td>
          </tr>
          <tr>
            <td><strong>FIPS 140-3 Level 3</strong></td>
            <td>HSM validation level — AWS CloudHSM used for all signing operations</td>
          </tr>
          <tr>
            <td><strong>AES-256</strong></td>
            <td>Encryption of all data at rest — database, credential records, audit logs</td>
          </tr>
          <tr>
            <td><strong>TLS 1.3</strong></td>
            <td>All data in transit — API connections, OpenID4VCI endpoints, Admin Portal</td>
          </tr>
          <tr>
            <td><strong>SHA-256</strong></td>
            <td>Per-claim hashing for selective disclosure — one digest per credential attribute</td>
          </tr>
          <tr>
            <td><strong>ECDH (X25519)</strong></td>
            <td>Session key establishment for ISO 18013-5 device engagement (BLE/NFC proximity flow)</td>
          </tr>
        </tbody>
      </table>

      <h2 id="identity-assurance">Identity Assurance Frameworks</h2>
      <table>
        <thead>
          <tr>
            <th>Framework</th>
            <th>Relevant Level / Component</th>
            <th>IwC Alignment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>NIST SP 800-63</strong></td>
            <td>IAL2, AAL2, FAL2</td>
            <td>Credential binding, device-bound authenticator, hardware-protected key storage</td>
          </tr>
          <tr>
            <td><strong>NIST SP 800-63B</strong></td>
            <td>AAL2 — hardware-backed authenticator</td>
            <td>Secure Element / TEE key storage for device-bound credentials</td>
          </tr>
          <tr>
            <td><strong>ISO/IEC 29003</strong></td>
            <td>Identity proofing requirements</td>
            <td>IwC consumes attributes verified by upstream systems that conform to this standard</td>
          </tr>
        </tbody>
      </table>
    </ArticleWrapper>
  );
}
