import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Roadmap | Issuance with Credence Solution Overview',
  description: 'Upcoming capabilities in IwC: FIDO2/WebAuthn AAL3 and OS-native wallet integration.',
};

const toc = [
  { id: 'fido2', title: 'FIDO2 / WebAuthn AAL3', level: 2 as const },
  { id: 'os-wallet', title: 'OS-Native Wallet Integration', level: 2 as const },
];

const contentText = `The IwC roadmap focuses on two major capability areas. FIDO2 and WebAuthn AAL3 support is targeted for Q3 2026 enabling hardware-bound passkey authentication for the Admin Portal and issuer-facing operations at NIST AAL3. OS-native wallet integration will extend IwC credential delivery to Apple Wallet and Google Wallet in addition to the Credence ID Digital Wallet and OWF-compatible wallets.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/roadmap"
      title="Roadmap"
      contentText={contentText}
      toc={toc}
    >
      <Callout type="note">
        Roadmap items represent planned capabilities and target timelines. They are subject to change. Contact your Credence ID account team for the latest status on any roadmap item.
      </Callout>

      <h2 id="fido2">FIDO2 / WebAuthn AAL3</h2>
      <p>
        <strong>Target:</strong> Q3 2026
      </p>
      <p>
        IwC will add FIDO2 and WebAuthn support for operator authentication at the NIST Authenticator Assurance Level 3 (AAL3) — the highest level defined in NIST SP 800-63B. This upgrade will:
      </p>
      <ul>
        <li>Enable hardware-bound passkey authentication for Admin Portal access — replacing password-based and software OTP flows for privileged operations</li>
        <li>Require a FIDO2-certified hardware security key (e.g., YubiKey 5 series or equivalent) for AAL3-designated roles — including lifecycle operations such as revocation and PKI management</li>
        <li>Support WebAuthn resident credentials (discoverable credentials) for frictionless authentication without usernames</li>
        <li>Align IwC Admin Portal authentication with the same hardware-bound assurance level required by programs operating under FedRAMP High and equivalent frameworks</li>
      </ul>
      <p>
        Current Admin Portal authentication already supports MFA at AAL2. The FIDO2/WebAuthn addition extends to AAL3 for high-privilege roles without changing the authentication experience for standard operator roles.
      </p>

      <h2 id="os-wallet">OS-Native Wallet Integration</h2>
      <p>
        IwC currently delivers credentials to the Credence ID Digital Wallet and any OpenID4VCI-compatible wallet. The roadmap extends this to the two dominant OS-native wallet platforms:
      </p>
      <ul>
        <li>
          <strong>Apple Wallet (Passes API / ID in Wallet):</strong> iOS 18 and later support digital ID storage in Apple Wallet for supported credential types. IwC will support delivery of ISO/IEC 18013-5 mDoc credentials directly into Apple Wallet via the Apple-defined provisioning flow — enabling holders to use their device&apos;s native wallet for credential storage and NFC-based in-person presentation.
        </li>
        <li>
          <strong>Google Wallet:</strong> Android&apos;s Google Wallet supports the ISO/IEC 18013-5 mDoc format and the OpenID4VCI issuance protocol. IwC will add first-class Google Wallet support — enabling credential delivery and lifecycle management for credentials stored in Google Wallet alongside those in the Credence ID wallet.
        </li>
      </ul>
      <p>
        OS-native wallet integration does not change the IwC issuance pipeline or the cryptographic trust model. The same PKI, the same credential format, and the same lifecycle operations apply — only the delivery endpoint changes.
      </p>
    </ArticleWrapper>
  );
}
