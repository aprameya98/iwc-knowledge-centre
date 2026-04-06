import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Biometric Trust Factors',
  description: 'How biometric check results are presented in the IwC Review Dashboard.',
};

const toc = [
  { id: 'what-are-biometric-trust-factors', title: 'What are Biometric Trust Factors?', level: 2 as const },
  { id: 'face-match-display', title: 'Face Match Display', level: 2 as const },
  { id: 'liveness-results', title: 'Liveness Results', level: 2 as const },
  { id: 'portrait-side-by-side', title: 'Portrait Side-by-Side Comparison', level: 2 as const },
  { id: 'biometric-flags', title: 'Biometric Flags', level: 2 as const },
];

const content = `The Biometric Trust Factors panel presents the results of the biometric pipeline — passive liveness, active liveness (if applied), and face matching — in a format designed to help reviewers quickly assess the biometric authenticity of the enrollment. Like the Document Trust Factors panel, it organizes evidence from a high-level summary down through individual check results, with the most critical information visible immediately and detailed evidence accessible on demand.

The face match display shows the biometric similarity score, the configured threshold, and a clear pass or review indicator. The score is displayed numerically (e.g., 87/100) alongside a color-coded bar that positions the score relative to the threshold. Scores significantly above the threshold are displayed in the green confidence zone; scores near the threshold are in the amber review zone; scores below the threshold are in the red zone and always require reviewer action. The display also shows the source of the reference portrait — document VIZ, document chip, or other — so reviewers understand which portrait was used for comparison.

The liveness results section shows the outcome of passive liveness analysis and, if applicable, active liveness challenge verification. For passive liveness, the panel shows the liveness confidence score, a pass or fail indicator, and any specific presentation attack signals detected (for example, "flat texture consistent with printed photo" or "screen glare artifact detected"). For active liveness, the section shows the challenge type presented, the result of the response validation, and any anomalies detected in the challenge response.

The portrait side-by-side comparison is displayed directly below the scores, showing the enrollment selfie and the document portrait at comparable size and resolution. This side-by-side view is provided for reviewer judgment in borderline cases: when the face match score is near the threshold and the reviewer needs to make their own visual assessment of whether the two images are of the same person.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/review-dashboard/biometric-trust-factors"
      title="Biometric Trust Factors"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-are-biometric-trust-factors">What are Biometric Trust Factors?</h2>
      <p>
        The Biometric Trust Factors panel presents the results of the biometric verification pipeline — passive liveness, active liveness where applied, and 1:1 face matching — organized to help reviewers quickly assess whether the biometric submission is authentic. The panel is designed around the two questions that reviewers need to answer: did a real, live person submit this enrollment, and is that person the same individual whose portrait is on the document? Each section directly addresses one of these questions with supporting evidence.
      </p>

      <h2 id="face-match-display">Face Match Display</h2>
      <p>
        The face match display shows the biometric similarity score as a number from 0 to 100, positioned on a bar that marks the configured threshold. Scores clearly above the threshold are displayed in the green confidence zone; scores near the threshold fall into an amber review zone where the automated result is uncertain; scores below the threshold are shown in red and always require a reviewer decision before the submission can proceed. The display also identifies the portrait source used for matching — whether the reference portrait was extracted optically from the document's VIZ, retrieved from the NFC chip, or sourced from a prior enrollment record — providing transparency about the quality and trustworthiness of the reference image.
      </p>

      <h2 id="liveness-results">Liveness Results</h2>
      <p>
        The liveness results section shows the outcome of passive liveness analysis and, where active liveness was applied, the challenge response verification result. For passive liveness, the panel displays the confidence score, a pass or fail determination, and — for failed or borderline results — the specific presentation attack signals that were detected, described in plain language reviewers can act on. For active liveness, the section shows the challenge type that was presented, whether the response was validated as natural and timely, and any anomalies in the response that contributed to a failure result.
      </p>

      <h2 id="portrait-side-by-side">Portrait Side-by-Side Comparison</h2>
      <p>
        The portrait side-by-side comparison displays the enrollment selfie and the document portrait at comparable size directly below the automated scores. This view serves as a visual check for reviewers in borderline cases where the automated face match score is near the threshold, or where the reviewer wishes to independently confirm the automated result. The portraits are displayed after normalization — corrected for scale and orientation — to make the comparison as straightforward as possible. Reviewers can click either portrait to open a full-resolution viewer for detailed examination.
      </p>

      <h2 id="biometric-flags">Biometric Flags</h2>
      <p>
        When any component of the biometric pipeline produces an actionable flag — a liveness failure, a face match score below threshold, an active liveness challenge response anomaly, or a biometric deduplication signal from the Fraud Check — the flag is displayed prominently at the top of the Biometric Trust Factors panel before the detailed scores. Each flag is labeled with its type and severity, and includes a brief description of what the signal means and why it warrants reviewer attention. Flags cannot be dismissed without being explicitly reviewed and marked as assessed, ensuring that reviewers actively engage with every biometric anomaly before recording a decision.
      </p>
    </ArticleWrapper>
  );
}
