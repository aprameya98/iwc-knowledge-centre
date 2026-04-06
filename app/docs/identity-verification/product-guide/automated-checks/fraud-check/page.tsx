import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Fraud Check',
  description: 'How IwC detects fraudulent enrollment attempts through biometric deduplication, document screening, and fraud pattern analysis.',
};

const toc = [
  { id: 'what-is-the-fraud-check', title: 'What is the Fraud Check?', level: 2 as const },
  { id: 'biometric-deduplication', title: 'Biometric Deduplication', level: 2 as const },
  { id: 'document-screening', title: 'Document Screening', level: 2 as const },
  { id: 'fraud-pattern-models', title: 'Fraud Pattern Models', level: 2 as const },
  { id: 'fraud-check-escalation', title: 'Fraud Check Escalation', level: 2 as const },
];

const content = `The Fraud Check is the final layer of IwC's automated pipeline and operates as a cross-submission signal aggregator. While the other five checks evaluate the quality and authenticity of the current submission in isolation, the Fraud Check examines the submission in context — comparing it against previously processed submissions, known fraud databases, and learned fraud patterns to detect attempts that might pass individual checks but reveal themselves when viewed across submissions.

Biometric deduplication checks whether the selfie biometrics from the current enrollment match any biometrics already enrolled in the system. This detects scenarios where a single individual attempts to enroll multiple times — for example, under different identities using different identity documents. A biometric match against an existing enrollment record is a strong fraud signal, since legitimate applicants do not typically re-enroll with different document data.

Document screening compares the submitted document against a database of flagged or reported documents. This includes documents reported stolen or lost to issuing authorities, documents from prior fraudulent submissions that were rejected by reviewers, and document serial numbers associated with known fraud rings. A document that appears in any of these databases triggers an automatic fraud flag regardless of how the other checks score.

Fraud pattern models apply machine learning classifiers trained on historical fraud cases to identify submissions that share statistical characteristics with previous fraud attempts. These patterns may include unusual combinations of document country and selfie capture location, atypical submission timing, image manipulation artifacts not caught by the Document Authentication check, or metadata inconsistencies in the submitted files. Pattern-based signals are weighted lower than hard database matches but contribute to the overall fraud risk score.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/automated-checks/fraud-check"
      title="Fraud Check"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-the-fraud-check">What is the Fraud Check?</h2>
      <p>
        The Fraud Check is the final layer of IwC's automated pipeline and operates as a cross-submission signal aggregator. While the other five checks evaluate the quality and authenticity of the current submission in isolation, the Fraud Check examines the submission in context — comparing it against previously processed submissions, known fraud databases, and learned fraud patterns to detect attempts that might pass individual checks but reveal themselves when viewed across submissions.
      </p>

      <h2 id="biometric-deduplication">Biometric Deduplication</h2>
      <p>
        Biometric deduplication checks whether the selfie biometrics from the current enrollment match any biometrics already enrolled in the issuer's system. This detects scenarios where a single individual attempts to enroll multiple times under different identities, potentially using different but genuine identity documents belonging to different people. A biometric match against an existing enrollment record is a strong fraud signal because legitimate applicants do not typically re-enroll under a different identity. The deduplication check is scoped to the issuer's enrollment records and does not involve cross-issuer data sharing.
      </p>

      <h2 id="document-screening">Document Screening</h2>
      <p>
        Document screening compares the submitted document's identifying details — document number, serial number, and issuing authority — against a database of flagged documents. This database includes documents that have been reported stolen or lost to their issuing authority, documents used in previously detected fraudulent submissions, and document identifiers associated with known fraud networks. A document appearing in any of these lists triggers an automatic fraud flag that routes the submission to mandatory human review, regardless of how the other checks score.
      </p>

      <h2 id="fraud-pattern-models">Fraud Pattern Models</h2>
      <p>
        Fraud pattern models apply machine learning classifiers trained on verified historical fraud cases to identify submissions with statistically anomalous characteristics. These patterns may include unexpected geographic combinations between the document's issuing country and the enrollment capture location, anomalous submission timing relative to the issuer's typical enrollment patterns, digital image manipulation artifacts not fully caught by the Document Authentication check, or file metadata inconsistencies suggesting the images were processed outside a normal enrollment flow. Pattern-based signals contribute to an overall fraud risk score, with higher scores routing submissions to mandatory human review.
      </p>

      <h2 id="fraud-check-escalation">Fraud Check Escalation</h2>
      <p>
        When the Fraud Check triggers any hard fraud signal — a biometric duplicate, a flagged document, or a high fraud risk score above the configured threshold — the submission is automatically escalated to mandatory human review. Unlike other checks where issuers can configure auto-approval paths for high-confidence passes, fraud escalations cannot be auto-approved. Reviewers see a dedicated Fraud Signals section in the Review Dashboard that lists every triggered signal with its source and severity, enabling them to make an informed decision about whether the submission represents a genuine fraudulent attempt.
      </p>
    </ArticleWrapper>
  );
}
