import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Biometric Verification: How It Works',
  description: 'A deep dive into how IwC performs biometric verification including passive liveness, active liveness, and face matching.',
};

const toc = [
  { id: 'overview', title: 'Overview', level: 2 as const },
  { id: 'capture-stage', title: 'Capture Stage', level: 2 as const },
  { id: 'biometric-pipeline', title: 'Biometric Pipeline', level: 2 as const },
  { id: 'signal-combination', title: 'Signal Combination', level: 2 as const },
  { id: 'result-in-the-dashboard', title: 'Result in the Dashboard', level: 2 as const },
];

const content = `Biometric verification in IwC consists of three interlocked processes: passive liveness detection, active liveness detection, and 1:1 face matching between the enrollment selfie and the document portrait. These three processes are designed to collectively answer two questions: is the enrollment selfie of a real, live person (liveness), and is that person the same individual whose portrait appears on the submitted identity document (matching)?

The biometric pipeline begins at the capture stage, during which the enrollment interface — either the Credence Wallet app or the IDV Browser — guides the applicant through the selfie capture process. The interface prompts the applicant to position their face within a guide frame and, if active liveness is required by the issuer's configuration, presents the challenge instruction. The captured selfie (a still image, a short video clip, or both depending on the mode) is transmitted to IwC along with the identity document images.

Once received, IwC runs passive liveness analysis on the selfie, checks whether active liveness challenge responses are present and valid (if required), and simultaneously extracts the portrait from the identity document for face matching. The passive liveness check and portrait extraction can run in parallel; the face match cannot begin until both the selfie and the extracted portrait are available.

The final biometric result is a composite assessment of all three signals: passive liveness confidence, active liveness result (if applicable), and face match score. The individual results are presented separately in the Biometric Trust Factors panel of the Review Dashboard, alongside the overall biometric trust determination.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/biometric-verification-deep-dive/how-it-works"
      title="Biometric Verification: How It Works"
      contentText={content}
      toc={toc}
    >
      <h2 id="overview">Overview</h2>
      <p>
        Biometric verification in IwC consists of three interlocked processes: passive liveness detection, active liveness detection, and 1:1 face matching between the enrollment selfie and the document portrait. These three processes collectively answer two questions: is the enrollment selfie of a real, live person (liveness), and is that person the same individual whose portrait appears on the submitted identity document (face matching)? Together, they prevent both impersonation attacks — where an attacker presents their own face to claim someone else's identity document — and spoofing attacks — where an attacker presents a photo or video of the legitimate document holder.
      </p>

      <h2 id="capture-stage">Capture Stage</h2>
      <p>
        The biometric pipeline begins at the capture stage, during which the enrollment interface guides the applicant through the selfie capture process. The interface uses real-time face detection to confirm that the applicant is centered within the guide frame, at an appropriate distance, with adequate lighting and without obstructions. When the capture conditions are met, the selfie is captured automatically. If the issuer's configuration requires active liveness, the interface presents the challenge instruction before or during capture. The captured material — a still image, a short video clip, or both depending on configuration — is transmitted to IwC as part of the enrollment submission.
      </p>

      <h2 id="biometric-pipeline">Biometric Pipeline</h2>
      <p>
        Upon receipt, IwC initiates three parallel processes: passive liveness analysis on the submitted selfie, active liveness result validation if challenge-response data is present, and portrait extraction from the identity document. Passive liveness analysis is computationally fast and typically completes first. Portrait extraction completes once the document authentication pipeline has processed the document image. Face matching begins as soon as both the enrollment selfie and the extracted document portrait are available, which is typically within 2 to 5 seconds of the submission arriving.
      </p>

      <h2 id="signal-combination">Signal Combination</h2>
      <p>
        The three biometric signals are combined into an overall biometric trust assessment using a risk model that weights each signal according to the issuer's security configuration. A passive liveness failure is a strong negative signal regardless of the face match score, since it suggests the selfie was not captured from a live person. An active liveness failure is treated as a hard block in configurations where active liveness is mandatory. A face match score below the configured threshold flags the submission for human review. When all three signals pass above their respective thresholds, the biometric check is marked as passed with an overall confidence score.
      </p>

      <h2 id="result-in-the-dashboard">Result in the Dashboard</h2>
      <p>
        The biometric verification result is presented in the Biometric Trust Factors panel of the Review Dashboard. Reviewers see the passive liveness status and confidence score, the active liveness result and challenge type (if applicable), the face match score against the configured threshold, and the extracted document portrait side-by-side with the enrollment selfie for visual comparison. The side-by-side portrait display allows reviewers to make their own qualitative assessment in cases where the automated score is borderline or where the reviewer wishes to verify the automated result independently.
      </p>
    </ArticleWrapper>
  );
}
