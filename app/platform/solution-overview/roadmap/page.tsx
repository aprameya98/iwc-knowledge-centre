import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Roadmap | Issuance with Credence Solution Overview',
  description: 'Upcoming capabilities in IwC: FIDO2/WebAuthn AAL3, post-quantum cryptography, and OS-native wallet integration.',
};

const toc = [
  { id: 'fido2', title: 'FIDO2 / WebAuthn AAL3', level: 2 as const },
  { id: 'post-quantum', title: 'Post-Quantum Cryptography', level: 2 as const },
  { id: 'os-wallet', title: 'OS-Native Wallet Integration', level: 2 as const },
];

const contentText = `The IwC roadmap focuses on three major capability areas. FIDO2 and WebAuthn AAL3 support is targeted for Q3 2026 enabling hardware-bound passkey authentication for the Admin Portal and issuer-facing operations at NIST AAL3. Post-quantum cryptography support is in active development targeting CRYSTALS-Dilithium and CRYSTALS-Kyber algorithms to prepare IwC-issued credentials for the post-quantum era. OS-native wallet integration will extend IwC credential delivery to Apple Wallet and Google Wallet in addition to the Credence ID Digital Wallet and OWF-compatible wallets.`;

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

      <h2 id="post-quantum">Post-Quantum Cryptography</h2>
      <p>
        IwC&apos;s current cryptographic foundation — ECDSA P-256 — is secure against all known classical attacks. However, sufficiently powerful quantum computers are expected to break elliptic curve cryptography using Shor&apos;s algorithm. NIST finalized its first post-quantum cryptography (PQC) standards in 2024, and Credence ID is actively working to integrate them into IwC.
      </p>
      <p>
        The planned PQC integration covers:
      </p>
      <ul>
        <li>
          <strong>CRYSTALS-Dilithium (ML-DSA):</strong> NIST-standardized lattice-based digital signature algorithm — the primary replacement for ECDSA in credential signing. Dilithium signatures will be embedded in the MSO and W3C VC proof in parallel with the existing ECDSA signature during a transition period.
        </li>
        <li>
          <strong>CRYSTALS-Kyber (ML-KEM):</strong> NIST-standardized key encapsulation mechanism — for protecting session key establishment in the ISO 18013-5 device engagement flow (currently using ECDH X25519).
        </li>
        <li>
          <strong>Hybrid mode:</strong> During the transition period, credentials will carry both classical and post-quantum signatures. Verifiers that support PQC can validate the Dilithium signature; verifiers that do not yet support PQC will continue to validate the ECDSA signature. No credential re-issuance is required when PQC-only mode is activated.
        </li>
      </ul>
      <Callout type="important">
        Post-quantum readiness requires HSM support for PQC algorithms. AWS CloudHSM support for CRYSTALS-Dilithium is in active development. IwC will activate PQC signing once HSM-level support is certified to the required FIPS validation level.
      </Callout>

      <h2 id="os-wallet">OS-Native Wallet Integration</h2>
      <p>
        IwC currently delivers credentials to the Credence ID Digital Wallet and any OpenID4VCI-compatible wallet, including OWF multipaz SDK-based implementations. The roadmap extends this to the two dominant OS-native wallet platforms:
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
