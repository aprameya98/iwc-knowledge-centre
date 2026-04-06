import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';
import VwC_Honeycomb from '@/public/VwC_HoneyComb.png';
import Tap2iD_Verification from '@/public/Verification_2.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Stage 4: Verification',
  description: 'How digital credentials are presented to verifying parties and cryptographically validated.',
};
const toc = [
  { id: 'what', title: 'What is Verification?', level: 2 as const },
  { id: 'presentation', title: 'Credential Presentation', level: 2 as const },
  { id: 'validation', title: 'Cryptographic Validation', level: 2 as const },
  { id: 'channels', title: 'Verification Channels', level: 2 as const },
];
const content = `Verification is where the credential holder presents their credential to a verifying party and the credential's cryptographic signature is validated in real time.`;

export default function Page() {
  return (
    <ArticleWrapper href="/lifecycle/stage-4-verification" title="Stage 4: Verification" contentText={content} toc={toc}>

      <Image src={VwC_Honeycomb} alt="" />
<br></br>

      <h2 id="what">What is Verification?</h2>
      <p><strong>Verification</strong> is the stage where the credential is put to use. A verifier — a retailer, employer, access control system, or online platform — requests that the holder present their credential. The holder initiates the sharing process, the verifier reads the credential, and the cryptographic signature is validated in real time. The entire transaction typically completes in under two seconds.</p>

 <Image src={Tap2iD_Verification} alt="" />
<br></br>

      <h2 id="presentation">Credential Presentation</h2>
      <p>The holder initiates credential presentation from the Credence Wallet. They select the credential to share, review which attributes will be disclosed, and confirm the presentation. At this point, the wallet generates a <strong>verifiable presentation</strong> — a cryptographically signed data package containing the requested credential attributes. This presentation is unique to the specific transaction and cannot be replayed by the verifier.</p>
      <p>Selective disclosure allows the holder to share only the attributes required for the transaction. An age verification check at a point of sale might share only a cryptographic proof that the holder is over 18. An employee access check might share the holder's name and department. The holder sees exactly what will be shared before confirming.</p>

      <h2 id="validation">Cryptographic Validation</h2>
      <p>The verifier's tooling validates two things about the presented credential. First, it checks the <strong>issuer signature</strong> — confirming that the credential was signed by the claimed issuer and has not been altered since signing. Second, it checks the <strong>credential status</strong> — querying the issuer's revocation registry to confirm the credential has not been suspended or revoked. Both checks must pass for the credential to be accepted.</p>
      <p>The issuer's public key, used to verify the signature, is retrieved from a trusted registry rather than from the credential itself. This means even if an attacker attempted to modify a credential and re-sign it, the verifier would detect the discrepancy because the key used for re-signing would not match the registered issuer key.</p>

      <h2 id="channels">Verification Channels</h2>
      <p>Verification can happen through three channels. <strong>QR code</strong> presentation involves the holder generating a QR code in their wallet that the verifier scans with VwC tooling. <strong>NFC tap</strong> involves the holder tapping their phone against an NFC-enabled reader. <strong>Online verification</strong> involves the holder following a link or scanning a QR code to complete a credential presentation through a web browser, enabling remote verification for e-commerce and digital services.</p>

      <Callout type="note">For detailed documentation on verification tools including the Tap2iD Verifier, Tap2iD Mobile App, and Online Verifier, refer to the Verify with Credence (VwC) Knowledge Base, available separately from your Credence ID account representative.</Callout>
    </ArticleWrapper>
  );
}
