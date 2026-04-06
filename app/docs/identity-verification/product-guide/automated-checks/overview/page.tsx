import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Automated Checks: Overview',
  description: 'A summary of all six automated checks IwC runs on every enrollment submission.',
};

const toc = [
  { id: 'about-automated-checks', title: 'About Automated Checks', level: 2 as const },
  { id: 'ocr-check', title: 'OCR Check', level: 2 as const },
  { id: 'biometric-match', title: 'Biometric Match', level: 2 as const },
  { id: 'liveness-detection', title: 'Liveness Detection', level: 2 as const },
  { id: 'document-authentication', title: 'Document Authentication', level: 2 as const },
  { id: 'sor-check', title: 'System of Record Check', level: 2 as const },
  { id: 'fraud-check', title: 'Fraud Check', level: 2 as const },
];

const content = `Every enrollment submission processed by IwC passes through six automated checks before it reaches a human reviewer. These checks are designed to operate in parallel where possible, completing within seconds and providing reviewers with structured, evidence-backed results for each verification dimension. Together, the six checks cover document integrity, biometric authenticity, identity data consistency, and fraud risk.

The OCR Check uses optical character recognition to extract text fields from both the visual inspection zone and machine-readable zone of the submitted identity document. This forms the data foundation that several other checks build upon.

The Biometric Match Check compares the portrait extracted from the identity document against the live selfie captured during enrollment, producing a facial similarity score using deep learning models. The Liveness Detection Check runs alongside biometric matching to confirm that the selfie was captured from a real, live person and not a spoofed image or video.

The Document Authentication Check verifies that the submitted identity document is genuine by analyzing its security features, checking internal data consistency, and comparing its layout and features against a reference database of over 1,500 document templates. The System of Record Check validates the applicant's extracted identity data against the issuer's configured database, confirming the person is known to the system. The Fraud Check screens the submission against known fraud patterns, duplicate biometric records, and previously flagged documents.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/automated-checks/overview"
      title="Automated Checks: Overview"
      contentText={content}
      toc={toc}
    >
      <h2 id="about-automated-checks">About Automated Checks</h2>
      <p>
        Every enrollment submission processed by IwC passes through six automated checks before it reaches a human reviewer. These checks are designed to operate in parallel where possible, completing within seconds and providing reviewers with structured, evidence-backed results for each verification dimension. Together, the six checks cover document integrity, biometric authenticity, identity data consistency, and fraud risk. No check operates in isolation — the results of all six are assembled into a unified applicant record that tells a complete story about the submission.
      </p>

      <h2 id="ocr-check">OCR Check</h2>
      <p>
        The OCR Check uses optical character recognition to extract text fields from both the visual inspection zone (VIZ) and machine-readable zone (MRZ) of the submitted identity document. Extracted fields include name, date of birth, document number, nationality, expiry date, and any document-specific fields such as address or issuing authority. These extracted values form the data foundation that several other checks — Document Authentication, SOR Check, and Fraud Check — build upon.
      </p>

      <h2 id="biometric-match">Biometric Match</h2>
      <p>
        The Biometric Match Check compares the portrait photo extracted from the identity document against the live selfie captured during enrollment. Using deep learning facial recognition models, the check produces a similarity score on a 0–100 scale. A high score indicates the selfie and document portrait are of the same person; a low score is flagged for reviewer attention. The check is designed to be robust to normal variations in lighting, aging, glasses, and facial hair.
      </p>

      <h2 id="liveness-detection">Liveness Detection</h2>
      <p>
        The Liveness Detection Check confirms that the selfie submitted during enrollment was captured from a real, live human being rather than a photograph, a video replay, or a three-dimensional mask. IwC uses both passive liveness (analyzing the selfie image for presentation attack indicators without requiring any action from the user) and active liveness (prompting the user to perform a challenge action such as blinking or turning their head). The combination of both methods provides robust protection against even sophisticated spoofing attempts.
      </p>

      <h2 id="document-authentication">Document Authentication</h2>
      <p>
        The Document Authentication Check verifies the physical and logical integrity of the submitted identity document. It analyzes visible security features such as holograms, microprinting, and UV-reactive elements; extracts and cross-validates data from multiple zones of the document; checks the document's layout and typography against the expected template for that document type; and validates MRZ check digits for mathematical correctness. Any discrepancy between what the document shows and what the template expects is flagged as a potential anomaly.
      </p>

      <h2 id="sor-check">System of Record Check</h2>
      <p>
        The System of Record (SOR) Check validates the applicant's extracted identity data against the issuer's configured system of record — typically an HR database, a citizen registry, a membership system, or a CRM. The check confirms that the person named in the document exists in the issuer's database, that key fields such as name and ID number match the record on file, and that the person's account is in good standing. Issuers configure the SOR integration once, and all subsequent submissions are checked automatically.
      </p>

      <h2 id="fraud-check">Fraud Check</h2>
      <p>
        The Fraud Check screens the submission against multiple fraud signal databases. It checks the submitted biometrics against previously enrolled records to detect duplicate enrollment attempts, compares the document against a database of known fraudulent or reported documents, and applies machine learning fraud pattern models to flag submissions that share characteristics with historically fraudulent applications. Submissions that trigger fraud signals are flagged for mandatory human review regardless of the results of other checks.
      </p>
    </ArticleWrapper>
  );
}
