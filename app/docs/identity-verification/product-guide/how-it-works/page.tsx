import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import StepFlow from '@/components/content/StepFlow';

export const metadata: Metadata = {
  title: 'How IwC Works',
  description: 'A walkthrough of the 6-step automated review process that every IwC enrollment submission passes through.',
};

const toc = [
  { id: 'submission-arrival', title: 'Submission Arrival', level: 2 as const },
  { id: 'the-6-step-pipeline', title: 'The 6-Step Pipeline', level: 2 as const },
  { id: 'parallel-execution', title: 'Parallel Execution', level: 2 as const },
  { id: 'reviewer-handoff', title: 'Reviewer Handoff', level: 2 as const },
  { id: 'post-decision', title: 'Post-Decision', level: 2 as const },
];

const content = `When an applicant completes enrollment, their submission — containing identity document images, a live selfie, and optionally NFC chip data — is transmitted to IwC in real time. IwC immediately queues the submission and begins the automated review pipeline. The entire automated stage typically completes within 5 to 15 seconds depending on document complexity and network latency.

IwC's automated pipeline consists of six checks that run sequentially and in parallel where dependencies allow. Each check is independent in its output but the full set of results is assembled into a unified applicant record before the submission is surfaced to a human reviewer. The six steps are OCR, Biometric Match, Liveness Detection, Document Authentication, System of Record Check, and Fraud Check.

The checks do not all run in strict sequence. OCR runs first because several downstream checks depend on the extracted text data. Document Authentication and the Biometric checks can run concurrently once OCR has completed. The SOR Check and Fraud Check can also run in parallel with the biometric pipeline as they operate on extracted identity fields rather than raw images.

Once all six checks have completed, IwC assembles the results into the Review Dashboard. Submissions where all checks pass with high confidence may be configured for auto-approval without human review, depending on the issuer's configuration. Submissions that fall below the configured threshold are queued for a human reviewer, who sees a structured summary of every check result, the original document images, and the applicant's selfie.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/how-it-works"
      title="How IwC Works"
      contentText={content}
      toc={toc}
    >
      <h2 id="submission-arrival">Submission Arrival</h2>
      <p>
        When an applicant completes enrollment — whether through the Credence Wallet app or the IDV Browser — their submission is transmitted to IwC in real time. The submission package contains front and back images of the identity document, a live selfie video or image sequence, and optionally NFC chip data if the document is an ePassport or NFC-enabled national ID. IwC immediately queues the submission and begins the automated review pipeline. The entire automated stage typically completes within 5 to 15 seconds depending on document complexity and network latency.
      </p>

      <h2 id="the-6-step-pipeline">The 6-Step Pipeline</h2>
      <p>
        IwC's automated pipeline consists of six checks that collectively verify the applicant's identity from multiple angles. Each check produces a structured result including a pass/fail determination, a confidence score, and any flagged anomalies. Together, they give reviewers a comprehensive, evidence-backed picture of the submission.
      </p>

      <StepFlow steps={[
        { number: 1, title: 'OCR Check', description: 'Optical character recognition extracts all text fields from the submitted identity document, including visible inspection zone fields and machine-readable zone data.' },
        { number: 2, title: 'Biometric Match', description: 'The live selfie is compared against the portrait photo extracted from the identity document using deep learning facial recognition, producing a similarity score.' },
        { number: 3, title: 'Liveness Detection', description: 'Both passive and active liveness analysis confirm the selfie was captured from a real, live person rather than a photo, screen, or 3D mask.' },
        { number: 4, title: 'Document Authentication', description: 'The identity document is analyzed for genuine security features, data zone consistency, and structural integrity against the expected template for that document type.' },
        { number: 5, title: 'System of Record Check', description: "The applicant's identity data is validated against the configured system of record, confirming they are a known and authorized individual in the issuer's database." },
        { number: 6, title: 'Fraud Check', description: 'The submission is screened against known fraud patterns, duplicate biometrics, and flagged documents to detect fraudulent enrollment attempts before they reach the reviewer.' },
      ]} />

      <h2 id="parallel-execution">Parallel Execution</h2>
      <p>
        The checks do not all run in strict sequence. OCR runs first because several downstream checks depend on the extracted text data — Document Authentication uses the extracted MRZ fields to validate against the visual inspection zone, and the SOR Check uses the extracted name and ID number to query the issuer's database. Once OCR completes, Document Authentication and the Biometric checks run concurrently. The SOR Check and Fraud Check also run in parallel with the biometric pipeline as they operate on extracted identity fields rather than raw images.
      </p>

      <h2 id="reviewer-handoff">Reviewer Handoff</h2>
      <p>
        Once all six checks have completed, IwC assembles the results into the Review Dashboard and either routes the submission for human review or, if the issuer has configured auto-approval rules and all checks pass above the threshold, automatically approves the submission. For submissions routed to a reviewer, the dashboard presents a structured summary of every check result alongside the original document images and selfie. Reviewers do not need to perform their own document inspection from scratch — the automated checks surface the specific fields and features that warrant attention.
      </p>

      <h2 id="post-decision">Post-Decision</h2>
      <p>
        Once a reviewer approves (or the system auto-approves) a submission, IwC triggers credential generation. A cryptographically signed verifiable credential is created from the verified identity data and pushed to the applicant's Credence Wallet. If a submission is rejected, IwC records the rejection reason and the applicant may be notified based on the issuer's configured workflow. All decisions — automated and human — are logged in the Reviewer Action Log for audit purposes.
      </p>
    </ArticleWrapper>
  );
}
