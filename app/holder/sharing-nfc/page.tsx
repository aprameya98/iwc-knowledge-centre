import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Sharing Your Credential via NFC',
  description: 'How to present your digital credential to a verifier using NFC tap-to-share in the Credence Wallet.',
};

const toc = [
  { id: 'how-nfc-sharing-works', title: 'How NFC Sharing Works', level: 2 as const },
  { id: 'activating-and-tapping', title: 'Activating and Tapping', level: 2 as const },
  { id: 'nfc-vs-qr', title: 'NFC vs QR Code', level: 2 as const },
];

const content = `NFC (Near Field Communication) tap-to-share allows you to present your credential by holding your phone against a compatible NFC reader. To use NFC sharing, open your credential, tap Share, select NFC, and then tap the back of your phone against the reader when prompted. The credential presentation is transmitted wirelessly over a range of a few centimetres. NFC sharing requires both your phone and the verifier's reader to support NFC. It is faster and more reliable in high-throughput environments such as access control gates compared to QR code scanning.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/sharing-nfc"
      title="Sharing Your Credential via NFC"
      contentText={content}
      toc={toc}
    >
      <h2 id="how-nfc-sharing-works">How NFC Sharing Works</h2>
      <p>
        Near Field Communication (NFC) is a short-range wireless technology that allows data to be
        exchanged between two NFC-enabled devices held in close proximity — typically within a few
        centimetres. When you use NFC sharing in the Credence Wallet, your phone acts as an NFC tag and
        transmits a cryptographically signed presentation of your credential to the verifier's NFC reader.
        The reader decodes the presentation, verifies the signature, and confirms the credential's
        validity — all without the need to display or scan a visual code. This makes NFC sharing
        particularly well-suited to high-throughput environments such as access control gates, turnstiles,
        and check-in desks where speed and convenience are important.
      </p>

      <Callout type="note">
        NFC sharing requires both your phone and the verifier's reader to support NFC. Not all smartphones
        support NFC — check your device specifications if you are unsure. The NFC reader at the
        verification point must also be configured to accept IwC credential presentations.
      </Callout>

      <h2 id="activating-and-tapping">Activating and Tapping</h2>
      <p>
        To share your credential via NFC, open the Credence Wallet and tap the relevant credential card
        to open the detail view. Tap the <strong>Share</strong> button and select <strong>NFC</strong>
        from the sharing options. You will be prompted for biometric authentication. Once authenticated,
        the app will display a readiness screen indicating that NFC is active. Hold the back of your phone
        flat against the NFC reader — the NFC antenna in most smartphones is located near the top-centre
        of the rear of the device. You will feel a brief vibration and see a confirmation on screen when
        the transfer is complete. The verifier's device will simultaneously display the credential data
        it received.
      </p>

      <h2 id="nfc-vs-qr">NFC vs QR Code</h2>
      <p>
        Both NFC and QR code sharing provide cryptographically secure credential presentations, but each
        method has different advantages depending on the context. NFC is faster in throughput-intensive
        environments, requires no visual alignment, and works in all lighting conditions including darkness.
        It is ideal for physical access control and scenarios where a fixed reader is installed. QR code
        sharing, on the other hand, works on any smartphone regardless of NFC support, requires no special
        reader hardware beyond a standard camera, and can be used in remote or online verification contexts
        where the verifier is not physically present. In most cases, your issuing organization or verifier
        will indicate which method to use for a given interaction.
      </p>
    </ArticleWrapper>
  );
}
