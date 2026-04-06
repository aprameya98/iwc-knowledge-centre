import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import IssuanceFlowDiagram from '@/components/diagrams/IssuanceFlowDiagram';
import IssuanceOverview from '@/public/IwC Overview.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Stage 2: Issuance',
  description: 'How IwC verifies identity submissions and creates cryptographically signed digital credentials.',
};

const toc = [
  { id: 'what', title: 'What is Issuance?', level: 2 as const },
  { id: 'automated-checks', title: 'Automated Checks', level: 2 as const },
  { id: 'human-review', title: 'Human Review', level: 2 as const },
  { id: 'credential-creation', title: 'Credential Creation', level: 2 as const },
  { id: 'delivery', title: 'Delivery to Wallet', level: 2 as const },
];

const content = `Issuance is where IwC processes the enrollment submission through six automated checks and human review before creating and delivering a cryptographically signed credential.`;

export default function Page() {
  return (
    <ArticleWrapper href="/lifecycle/stage-2-issuance" title="Stage 2: Issuance" contentText={content} toc={toc}>
      <p>Issuance is the core function of the IwC platform. It is where the raw enrollment submission is transformed into a verified, cryptographically signed digital credential. The issuance process combines automated machine analysis with human expert review to achieve both speed and accuracy.</p>

      {/* <IssuanceFlowDiagram /> */}

      <Image src={IssuanceOverview} alt="" />
<br></br>

      <h2 id="what">What is Issuance?</h2>
      <p><strong>Issuance</strong> encompasses everything that happens between receiving an enrollment submission and delivering a credential to the applicant's wallet. It includes identity verification (confirming the person is who they claim to be), document authentication (confirming the submitted document is genuine), and credential construction (creating and signing the digital credential with the issuer's cryptographic key).</p>

      <h2 id="automated-checks">Automated Checks</h2>
      <p>Every enrollment submission passes through six automated checks in sequence. <strong>OCR</strong> extracts all text from the identity document, including visible fields and machine-readable zones. <strong>Biometric matching</strong> compares the selfie to the portrait on the document. <strong>Liveness detection</strong> confirms the selfie was captured from a real, live person. <strong>Document authentication</strong> validates the document's security features and structural integrity. The <strong>SOR check</strong> validates the applicant's data against the configured system of record. The <strong>fraud check</strong> screens the submission against known fraud patterns and duplicate detection rules.</p>
      <p>Each check produces a result: pass, fail, or review. Results are aggregated and presented to the human reviewer along with supporting evidence for each check.</p>

      <h2 id="human-review">Human Review</h2>
      <p>Human reviewers work in the IwC Review Dashboard, where they see all automated check results alongside the submitted documents and biometric data. For submissions where all checks pass cleanly, the reviewer confirms the approval decision. For submissions with one or more review flags, the reviewer examines the flagged items and makes a determination. The reviewer can approve, reject, or escalate each application.</p>

      <h2 id="credential-creation">Credential Creation</h2>
      <p>Upon approval, the issuance service constructs the credential according to the configured credential template. The template defines which data fields from the identity document and system of record are included in the credential, and how they are structured. The constructed credential is then cryptographically signed using the issuer's private key, making any future tampering detectable.</p>

      <h2 id="delivery">Delivery to Wallet</h2>
      <p>The signed credential is delivered to the applicant's Credence Wallet via a secure push mechanism. The applicant receives a push notification informing them that their credential is ready. The credential appears in the wallet and is immediately available for use. No further action is required from the applicant.</p>
    </ArticleWrapper>
  );
}
