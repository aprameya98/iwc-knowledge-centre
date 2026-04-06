import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Supported Standards & Protocols | Credence ID Digital Wallet SDK',
  description: 'The international standards and protocols the Credence ID Digital Wallet SDK uses for credential issuance, in-person presentation, and online presentation.',
};

const toc = [
  { id: 'standards-overview', title: 'Standards Overview', level: 2 as const },
  { id: 'provisioning-issuance', title: 'Provisioning & Issuance', level: 2 as const },
  { id: 'in-person-presentation', title: 'In-Person Presentation', level: 2 as const },
  { id: 'online-presentation', title: 'Online Presentation', level: 2 as const },
];

const contentText = `The SDK relies on international standards to ensure interoperability and security. Provisioning and issuance use OpenID for Verifiable Credential Issuance including deferred issuance. In-person presentation uses ISO 18013-5 with device engagement, session encryption via ephemeral ECDH key exchange, and selective disclosure. Online presentation uses OpenID for Verifiable Presentations with HTTPS, certificate pinning, and real-time status checking.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/sdk/supported-standards"
      title="Supported Standards & Protocols"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="standards-overview">Standards Overview</h2>
      <p>
        The Credence ID Digital Wallet SDK is built entirely on published international standards rather than proprietary protocols. This means any ecosystem participant — issuer, holder, or verifier — that is spec-compliant can interoperate with the wallet without custom integration work. The standards also provide a stable, auditable foundation that regulatory and compliance teams can evaluate against independently.
      </p>

      <Callout type="note">
        Because all protocols are publicly specified and openly implemented, the SDK does not create a dependency on Credence ID infrastructure for credential presentation. A credential issued through IwC can be presented to any verifier that implements the relevant standard.
      </Callout>

      <h2 id="provisioning-issuance">Provisioning & Issuance</h2>
      <p>
        Credential provisioning uses <strong>OpenID for Verifiable Credential Issuance (OpenID4VCI)</strong>, the emerging IETF and OpenID Foundation standard for credential delivery. The wallet connects to any OpenID4VCI-compliant issuance service — it is not restricted to Credence ID&apos;s own backend.
      </p>
      <p>
        The SDK also supports <strong>Deferred Issuance</strong>, a flow within OpenID4VCI that handles cases where a credential is not immediately available at the time of the initial request. This is common in workflows where a background check, manual review, or administrative approval must occur before the credential can be signed and delivered. The wallet stores a deferred credential reference and automatically polls the issuance service until the credential is ready, at which point it fetches and stores it without requiring the user to reinitiate the flow.
      </p>

      <h2 id="in-person-presentation">In-Person Presentation</h2>
      <p>
        In-person credential presentation follows <strong>ISO 18013-5</strong>, the international standard for mobile driving licences and digital identity documents. This standard defines the full interaction flow between a wallet (the holder&apos;s device) and a reader (the verifier&apos;s device) when they are physically co-located.
      </p>
      <p>
        The protocol covers three key areas:
      </p>
      <ul>
        <li>
          <strong>Device engagement</strong> — the wallet and reader establish a connection via QR code or NFC tap. The engagement phase is designed to prevent relay attacks by tying the session to the physical proximity of the two devices.
        </li>
        <li>
          <strong>Session encryption</strong> — once engaged, all data exchanged in the session is encrypted using an ephemeral ECDH key exchange. A new key pair is generated for each session, ensuring that no two sessions share keying material and that captured session traffic cannot be replayed or decrypted later.
        </li>
        <li>
          <strong>Selective disclosure</strong> — the verifier specifies exactly which data elements they are requesting. The wallet presents only those elements — nothing beyond what was requested is transmitted. The holder sees the request and must authorize it before any data is sent.
        </li>
      </ul>

      <h2 id="online-presentation">Online Presentation</h2>
      <p>
        Online credential presentation uses <strong>OpenID for Verifiable Presentations (OpenID4VP)</strong>, which enables a holder to present credentials to a relying party over HTTPS without physical proximity. The protocol is designed for use in browser-based and app-to-server flows, such as identity verification for onboarding, age verification for access-controlled services, or entitlement checks in government benefit portals.
      </p>
      <p>
        The SDK&apos;s implementation of OpenID4VP includes two additional protections beyond the base protocol:
      </p>
      <ul>
        <li>
          <strong>Certificate pinning</strong> — the wallet validates the verifier&apos;s TLS certificate against a pinned trust anchor before transmitting any data. This prevents man-in-the-middle attacks where an attacker intercepts the presentation request before it reaches the legitimate verifier.
        </li>
        <li>
          <strong>Real-time status checking</strong> — at the moment of presentation, the verifier can query the credential&apos;s revocation status in real time, confirming it has not been suspended or revoked since issuance. This ensures that a credential stolen or compromised prior to the presentation session cannot be successfully used.
        </li>
      </ul>
    </ArticleWrapper>
  );
}
