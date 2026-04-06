import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import StepFlow from '@/components/content/StepFlow';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Credential Lifecycle & Integration Flow | Credence ID Digital Wallet SDK',
  description: 'How the Credence ID Digital Wallet SDK manages the full credential lifecycle — from activation through refresh, device replacement, and revocation.',
};

const toc = [
  { id: 'lifecycle-overview', title: 'Lifecycle Overview', level: 2 as const },
  { id: 'activation-flow', title: 'Activation Flow', level: 2 as const },
  { id: 'refresh-offline', title: 'Refresh & Offline Verification', level: 2 as const },
  { id: 'device-replacement', title: 'Device Replacement & Revocation', level: 2 as const },
];

const contentText = `The SDK manages the entire lifecycle of a digital credential from initial setup through to revocation, completely remotely. The wallet DocumentStore supports multiple simultaneous credentials, each managed independently. Activation involves the user installing the app and performing on-device biometric and PIN registration, the wallet generating the hardware-backed key pair, the user scanning a QR code or tapping a deep link to trigger an OpenID4VCI credential fetch, biometric validation via a live selfie submitted to the backend, and the signed hardware-bound credential being saved to the encrypted DocumentStore. Silent background refresh automatically fetches fresh Mobile Security Objects based on the template validity window. Multiple staggered MSOs allow offline verification for weeks without backend communication. New device migration generates new keys and re-fetches the credential, automatically revoking the old device without requiring an office visit. Online verifiers see revocation within seconds while offline verifiers detect it when the cached MSO expires.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/sdk/credential-lifecycle"
      title="Credential Lifecycle & Integration Flow"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="lifecycle-overview">Lifecycle Overview</h2>
      <p>
        The SDK manages the entire lifecycle of a digital credential — from initial setup through to revocation — completely remotely, with no office visits or in-person interactions required at any stage. The wallet&apos;s <code>DocumentStore</code> supports multiple simultaneous credentials, each with its own cryptographic binding, refresh schedule, and status state. Credentials of different types, issued by different organizations, can coexist in the same wallet and be managed independently.
      </p>

      <h2 id="activation-flow">Activation Flow</h2>
      <p>
        The end-to-end process for activating a credential in the wallet follows five steps. Each step must succeed before the next begins; a failure at any stage — for example, a failed biometric validation — halts the flow and surfaces a clear error state to the user.
      </p>

      <StepFlow steps={[
        {
          number: 1,
          title: 'Setup',
          description: 'The user installs the app or the SDK-integrated application and completes on-device biometric and PIN registration. This establishes the authentication gate that will protect all subsequent credential operations.',
        },
        {
          number: 2,
          title: 'Key Generation',
          description: 'The wallet generates a hardware-backed ECDSA P-256 key pair inside the Trusted Execution Environment (Android) or Secure Element (iOS). The private key is non-exportable and never leaves the device.',
        },
        {
          number: 3,
          title: 'Credential Fetch (OpenID4VCI)',
          description: 'The user scans a QR code or taps a deep link provided by the issuer. The wallet authenticates using a transaction code, registers its public key via Proof of Possession, and validates the Issuance Service\'s IACA (Issuing Authority Certificate Authority) signature chain to confirm it is communicating with a legitimate issuer.',
        },
        {
          number: 4,
          title: 'Biometric Validation',
          description: 'A live selfie is captured on-device and submitted to the backend. The backend confirms that the person holding the device is the same person named in the credential being issued, preventing an attacker from binding a stolen credential to a new device.',
        },
        {
          number: 5,
          title: 'Storage',
          description: 'The signed, hardware-bound credential is saved to the encrypted DocumentStore on the device. The credential is now available for in-person and online presentation without requiring a network connection.',
        },
      ]} />

      <h2 id="refresh-offline">Refresh & Offline Verification</h2>
      <p>
        <strong>Silent Background Refresh:</strong> Credentials contain <strong>Mobile Security Objects (MSOs)</strong> — time-limited cryptographic structures that verifiers use to confirm a credential&apos;s current validity. The wallet automatically fetches fresh MSOs in the background based on the credential template&apos;s configured validity window. For example, if the template specifies a 32-day window, the wallet will silently refresh the MSO ahead of expiry without any user interaction.
      </p>
      <p>
        If a refresh attempt fails because the credential has been suspended or revoked by the issuer, the wallet detects the failure, marks the credential accordingly, and updates the UI to reflect the changed status. The user is informed the next time they open the wallet.
      </p>
      <p>
        <strong>Multiple MSOs for Offline Verification:</strong> For deployments in low-connectivity environments — such as border checkpoints, rural field offices, or areas with unreliable network coverage — the issuance system can issue a set of staggered MSOs in advance. Each MSO covers a non-overlapping validity window, allowing offline verifiers to successfully verify the credential for weeks without any backend communication. When connectivity is restored, the wallet resynchronizes and replaces consumed MSOs with fresh ones.
      </p>

      <Callout type="tip">
        Staggered MSO issuance is configurable per credential template. Contact your issuance configuration team to set the number of pre-issued MSOs and the stagger interval appropriate for your deployment&apos;s connectivity profile.
      </Callout>

      <h2 id="device-replacement">Device Replacement & Revocation</h2>
      <p>
        <strong>Migrating to a New Device:</strong> When a credential holder moves to a new device — whether through a planned upgrade or in response to a lost or stolen device — the process is entirely self-service and requires no in-person visit to the issuing authority. The holder sets up a new biometric and PIN profile on the new device, and the wallet generates a new hardware-backed key pair. The credential is then re-fetched from the issuance service using the same OpenID4VCI flow as the original activation, creating a fresh cryptographic binding to the new device. The old device&apos;s credential binding is automatically revoked as part of this process.
      </p>
      <p>
        <strong>Revocation Propagation:</strong> The speed at which revocation takes effect depends on how the verifier checks credential status. Online verifiers — those connected to the revocation service at the moment of presentation — see revocation take effect within seconds of it being triggered. Offline verifiers — those operating without a live connection — detect revocation when the currently cached MSO reaches its expiry date, consistent with the validity window configured for that credential template.
      </p>
    </ArticleWrapper>
  );
}
