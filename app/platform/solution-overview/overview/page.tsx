import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Overview | Issuance with Credence Solution Overview',
  description: 'What Issuance with Credence (IwC) is, its role in the Credence ID ecosystem, and its key value proposition.',
};

const toc = [
  { id: 'what-is-iwc', title: 'What Is IwC?', level: 2 as const },
  { id: 'role-in-ecosystem', title: 'Role in the Credence ID Ecosystem', level: 2 as const },
  { id: 'key-value-proposition', title: 'Key Value Proposition', level: 2 as const },
];

const contentText = `Issuance with Credence IwC is Credence ID's flagship credential issuance and lifecycle management platform purpose-built to transform verified identity data into secure privacy-preserving digital credentials that holders trust and relying parties can verify instantly. IwC connects to any authoritative identity data source ingests pre-verified attributes and delivers cryptographically signed digital credentials directly to holder wallets. The result is a complete standards-based digital credentialing layer that is fast to deploy simple to operate and built to scale. IwC is the engine at the heart of the Credence ID digital identity stack connecting upstream to any identity data source via a lightweight secure API downstream delivering signed credentials to holder wallets over OpenID4VCI and alongside working with the Credence ID Digital Wallet SDK and Verify with Credence for end-to-end relying party verification.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/overview"
      title="Overview"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="what-is-iwc">What Is IwC?</h2>
      <p>
        <strong>Issuance with Credence™ (IwC)</strong> is Credence ID&apos;s flagship credential issuance and lifecycle management platform — purpose-built to transform verified identity data into secure, privacy-preserving digital credentials that holders trust and relying parties can verify instantly.
      </p>
      <p>
        IwC connects to any authoritative identity data source, ingests pre-verified attributes, and delivers cryptographically signed digital credentials directly to holder wallets. The result: a complete, standards-based digital credentialing layer that is fast to deploy, simple to operate, and built to scale.
      </p>

      <h2 id="role-in-ecosystem">Role in the Credence ID Ecosystem</h2>
      <p>
        IwC is the engine at the heart of the Credence ID digital identity stack — the platform that turns verified identity data into trusted, verifiable credentials:
      </p>
      <ul>
        <li>
          <strong>Upstream:</strong> IwC connects to any identity data source via a lightweight, secure API. Identity proofing stays with the system that owns it. IwC picks up from the point of verified data.
        </li>
        <li>
          <strong>Downstream:</strong> Signed credentials are delivered to holder wallets over OpenID4VCI — the global open standard for credential provisioning — in minutes.
        </li>
        <li>
          <strong>Alongside:</strong> IwC works in lockstep with the Credence ID Digital Wallet SDK for credential storage and presentation, and Verify with Credence™ (VwC) for end-to-end relying party verification.
        </li>
      </ul>

      <h2 id="key-value-proposition">Key Value Proposition</h2>
      <table>
        <thead>
          <tr>
            <th>Capability</th>
            <th>What It Means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Template-Driven, No Code Required</strong></td>
            <td>Define new credential types, configure schemas, and publish — all through a guided UI. No custom development. No vendor involvement. Full administrative control.</td>
          </tr>
          <tr>
            <td><strong>Dual-Standard from Day One</strong></td>
            <td>Issue ISO/IEC 18013-5 mDoc (CBOR) and W3C Verifiable Credentials 2.0 (JSON-LD) from a single data model — maximizing interoperability across every verification scenario.</td>
          </tr>
          <tr>
            <td><strong>HSM-Backed, FIPS-Validated Signing</strong></td>
            <td>Every credential is signed inside a FIPS 140-3 Level 3 validated Hardware Security Module. Private keys never leave the hardware boundary.</td>
          </tr>
          <tr>
            <td><strong>Lifecycle-Complete</strong></td>
            <td>From first issuance to final revocation — activation, renewal, replacement, suspension, reinstatement, and re-adjudication are all built in and fully automated.</td>
          </tr>
          <tr>
            <td><strong>Privacy by Design</strong></td>
            <td>Per-claim hashing enables selective disclosure. Derived attributes let verifiers confirm exactly what they need without seeing anything they don&apos;t.</td>
          </tr>
        </tbody>
      </table>
    </ArticleWrapper>
  );
}
