import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import LifecycleDiagram from '@/components/diagrams/LifecycleDiagram';
import StagesofIwC from '@/public/Stages_of_IwC.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Digital ID Lifecycle Overview',
  description: 'The four stages every digital credential passes through: Enrollment, Issuance, Holding, and Verification.',
};

const toc = [
  { id: 'four-stages', title: 'Four Stages', level: 2 as const },
  { id: 'enrollment', title: 'Stage 1: Enrollment', level: 3 as const },
  { id: 'issuance', title: 'Stage 2: Issuance', level: 3 as const },
  { id: 'holding', title: 'Stage 3: Holding', level: 3 as const },
  { id: 'verification', title: 'Stage 4: Verification', level: 3 as const },
  { id: 'why-lifecycle', title: 'Why the Lifecycle Matters', level: 2 as const },
];

const content = `Every digital credential passes through four distinct stages from creation to use. Understanding this lifecycle is essential for anyone deploying, administering, or using a digital identity system. Enrollment captures identity data. Issuance verifies and creates the credential. Holding stores it in the wallet. Verification presents it to verifying parties.`;

export default function Page() {
  return (
    <ArticleWrapper href="/lifecycle/overview" title="Digital ID Lifecycle Overview" contentText={content} toc={toc}>
      <p>Every digital credential passes through four distinct stages from creation to use. Understanding this lifecycle is essential for anyone deploying, administering, or using a digital identity system. It explains where each Credence ID product fits, what happens at each stage, and what the responsibilities of each party are.</p>

      {/* <LifecycleDiagram /> */}

      ,<Image src={StagesofIwC} alt="" />

      <h2 id="four-stages">Four Stages</h2>

      <h3 id="enrollment">Stage 1: Enrollment</h3>
      <p>Enrollment is the beginning of the lifecycle. An applicant — a person who wishes to receive a digital credential — submits their identity information. This typically involves photographing a government-issued identity document and taking a live selfie. The enrollment can happen through the Credence Wallet mobile app or through a web-based IDV Browser interface. Once submitted, the enrollment data is securely transmitted to the IwC platform for processing.</p>

      <h3 id="issuance">Stage 2: Issuance</h3>
      <p>Issuance is where the identity verification and credential creation happens. IwC receives the enrollment submission and runs a set of automated checks: OCR to extract document data, biometric matching to compare the selfie to the document photo, liveness detection to confirm the selfie is from a real person, document authentication to verify the document's legitimacy, a System of Record check against an authoritative database, and a fraud check against known fraud patterns. A human reviewer adjudicates edge cases. Upon approval, the issuance service creates a cryptographically signed credential and delivers it to the applicant's wallet.</p>

      <h3 id="holding">Stage 3: Holding</h3>
      <p>Holding is the stage where the credential lives on the holder's device in the Credence Wallet. The holder can view their credential at any time, check its current status, and manage multiple credentials from different issuers. The wallet stores credential keys in the device's secure element, ensuring they cannot be accessed by software attacks. During the holding stage, the holder may receive renewal notifications, status change alerts, or requests from verifiers to present their credential.</p>

      <h3 id="verification">Stage 4: Verification</h3>
      <p>Verification is the stage where the credential is put to use. A verifier — a retailer checking age, an employer confirming identity, a building access system granting entry — requests the holder's credential. The holder initiates the sharing process in their wallet, generating a QR code or activating NFC sharing. The verifier reads the credential and validates the issuer's cryptographic signature in real time, confirming the credential is authentic and unaltered. The entire verification transaction typically completes in under two seconds.</p>

      <h2 id="why-lifecycle">Why the Lifecycle Matters</h2>
      <p>Understanding the lifecycle helps clarify the roles and responsibilities of everyone involved. Issuers are responsible for the quality of the enrollment and issuance process. Holders are responsible for keeping their device secure and their wallet credentials up to date. Verifiers are responsible for maintaining their verification tooling and acting on credential data appropriately. Each stage creates dependencies and handoffs that, when implemented correctly, produce a system of high trust and low friction.</p>
    </ArticleWrapper>
  );
}
