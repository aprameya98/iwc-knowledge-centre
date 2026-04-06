import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Sharing Your Credential via QR Code',
  description: 'How to present your digital credential to a verifier using the QR code sharing feature in the Credence Wallet.',
};

const toc = [
  { id: 'how-qr-sharing-works', title: 'How QR Sharing Works', level: 2 as const },
  { id: 'generating-a-qr-code', title: 'Generating a QR Code', level: 2 as const },
  { id: 'selective-disclosure', title: 'Selective Disclosure', level: 2 as const },
  { id: 'the-verifier-experience', title: 'The Verifier Experience', level: 2 as const },
];

const content = `QR code sharing allows you to present your credential to a verifier by displaying a QR code on your screen that the verifier scans with their verification device or app. To share, open the credential in the Credence Wallet, tap the Share button, and select QR Code. The wallet generates a cryptographically signed QR code that encodes a presentation of your credential. The QR code is single-use and time-limited, typically expiring within 60 seconds, so it cannot be replayed or reused by anyone who captures an image of it. Selective disclosure allows you to share only specific fields rather than your full credential.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/sharing-qr-code"
      title="Sharing Your Credential via QR Code"
      contentText={content}
      toc={toc}
    >
      <h2 id="how-qr-sharing-works">How QR Sharing Works</h2>
      <p>
        QR code sharing is the most widely supported method for presenting your digital credential to a
        verifier. When you generate a QR code, the Credence Wallet creates a cryptographically signed
        presentation of your credential that encodes your selected identity data along with a time-limited
        token. The verifier scans this QR code using an IwC-compatible verification app or device, which
        decodes the presentation, verifies the cryptographic signature against the issuing organization's
        public key, and confirms the credential's validity. The entire verification process completes in
        seconds and does not require the verifier to contact any external service, as all the proof
        material is contained within the QR code itself.
      </p>

      <h2 id="generating-a-qr-code">Generating a QR Code</h2>
      <p>
        To generate a QR code, open the Credence Wallet and locate the credential you want to present.
        Tap the credential card to open the detail view, then tap the <strong>Share</strong> button.
        Select <strong>QR Code</strong> from the sharing options. The wallet will prompt you for biometric
        authentication before generating the code, ensuring that only you can initiate a presentation.
        Once authenticated, the QR code is displayed on a full-screen view. Hold your phone up to the
        verifier's scanner. The QR code includes a countdown timer indicating how many seconds remain
        before it expires. If the code expires before it is scanned, tap <strong>Regenerate</strong> to
        create a new one.
      </p>

      <Callout type="note">
        QR codes are single-use and time-limited. They expire within 60 seconds of generation and cannot
        be reused. Do not share screenshots of your QR code, as an expired or already-scanned QR code
        will be rejected by any verification device.
      </Callout>

      <h2 id="selective-disclosure">Selective Disclosure</h2>
      <p>
        If the verifier requests only specific fields — for example, proof that you are over 18 without
        requiring your exact date of birth — and your issuing organization has enabled selective disclosure
        for your credential, you will be presented with a field selection screen before the QR code is
        generated. Review the fields the verifier is requesting and confirm which ones you consent to
        share. Fields you deselect will not be included in the presentation. Selective disclosure is a
        privacy-preserving feature that allows you to share the minimum necessary information for any given
        interaction.
      </p>

      <h2 id="the-verifier-experience">The Verifier Experience</h2>
      <p>
        On the verifier's side, they use an IwC-compatible verification application or hardware scanner to
        read your QR code. The verification app decodes the presentation, retrieves the issuing
        organization's public key from the IwC trust registry, and verifies the cryptographic signature on
        your credential. Within seconds, the verifier sees a clear confirmation screen displaying your
        shared fields along with a validity indicator. The verifier cannot see any fields you did not
        include in the presentation, and they cannot use the QR code data to access your wallet or request
        additional information. The interaction is complete once the verifier confirms your credential on
        their device.
      </p>
    </ArticleWrapper>
  );
}
