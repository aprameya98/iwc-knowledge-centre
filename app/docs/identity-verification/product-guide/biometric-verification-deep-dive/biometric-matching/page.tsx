import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Biometric Matching',
  description: 'How IwC performs 1:1 face comparison between the enrollment selfie and the document portrait.',
};

const toc = [
  { id: 'what-is-biometric-matching', title: 'What is Biometric Matching?', level: 2 as const },
  { id: 'feature-vector-generation', title: 'Feature Vector Generation', level: 2 as const },
  { id: 'similarity-scoring', title: 'Similarity Scoring', level: 2 as const },
  { id: 'threshold-configuration', title: 'Threshold Configuration', level: 2 as const },
  { id: 'fairness-and-accuracy', title: 'Fairness and Accuracy', level: 2 as const },
];

const content = `Biometric matching in IwC is a 1:1 face comparison process that determines whether the person depicted in the enrollment selfie is the same person whose portrait appears on the submitted identity document. It is distinct from the liveness checks, which establish that the selfie is from a live person; biometric matching establishes that the live person is the specific individual named in the document. Together, liveness and matching provide end-to-end assurance that the enrollment represents a legitimate application by the document's rightful holder.

The matching process begins with feature vector generation. Both the enrollment selfie and the document portrait are passed through the same deep convolutional neural network, which processes each image and produces a compact numerical representation — a feature vector — that encodes the distinctive geometric and textural properties of the face in that image. The neural network is trained to produce vectors that are close together for images of the same person and far apart for images of different people, across a wide range of real-world variation in capture conditions, subject age, and appearance.

Similarity scoring computes the mathematical distance between the two feature vectors using cosine similarity, which measures the angle between the vectors in the high-dimensional feature space. The resulting similarity value is mapped to a 0–100 scale for interpretability: 100 indicates the two vectors are identical, and 0 indicates they are maximally dissimilar. Genuine same-person comparisons between document photos and enrollment selfies typically score in the 80–98 range, with variation driven by document photo age, capture quality, and subject appearance changes.

The neural network is trained and evaluated with attention to demographic fairness. Match accuracy rates are regularly audited across age groups, skin tone categories, and gender groups to detect and correct differential performance. NIST Face Recognition Vendor Testing reports are the primary external benchmark used to assess the model's performance across demographic subgroups.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/biometric-verification-deep-dive/biometric-matching"
      title="Biometric Matching"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-biometric-matching">What is Biometric Matching?</h2>
      <p>
        Biometric matching in IwC is a 1:1 face comparison process that determines whether the person depicted in the enrollment selfie is the same person whose portrait appears on the submitted identity document. It is functionally and architecturally distinct from the liveness checks: liveness establishes that the selfie is from a real, live person, while biometric matching establishes that the live person is specifically the individual named in the document. Together, these two checks provide end-to-end identity binding assurance for the enrollment.
      </p>

      <h2 id="feature-vector-generation">Feature Vector Generation</h2>
      <p>
        The matching process begins with feature vector generation. Both the enrollment selfie and the document portrait are independently processed by the same deep convolutional neural network. The network performs face detection and normalization on each image — aligning the face to a canonical orientation, normalizing for scale, and cropping to the face region — before extracting a compact numerical feature vector that encodes the distinctive properties of the face. The vector represents a learned abstract encoding of facial geometry and texture that is robust to variation in lighting, expression, and capture angle.
      </p>

      <h2 id="similarity-scoring">Similarity Scoring</h2>
      <p>
        The cosine similarity between the two feature vectors is computed in the high-dimensional embedding space. Cosine similarity measures the angle between the two vectors: vectors from images of the same person point in similar directions in the feature space (high similarity, small angle), while vectors from images of different people point in different directions (low similarity, large angle). The resulting similarity value is mapped to a 0–100 scale. Genuine same-person pairs typically score 80–98; impostor pairs typically score below 40. The gap between genuine and impostor score distributions defines the system's discriminative power.
      </p>

      <h2 id="threshold-configuration">Threshold Configuration</h2>
      <p>
        Issuers configure a match score threshold that determines the boundary between an automatic pass and a flag for human review. Higher thresholds reduce the false accept rate (the probability that an impostor passes) at the cost of increasing the false reject rate (the probability that a genuine applicant is flagged). IwC provides default thresholds calibrated for common deployment scenarios — for example, a lower threshold for loyalty credential enrollment and a higher threshold for high-assurance government or financial credential issuance — and issuers can adjust within configured bounds based on their risk appetite.
      </p>

      <h2 id="fairness-and-accuracy">Fairness and Accuracy</h2>
      <p>
        The biometric matching model is developed, tested, and continuously monitored with attention to equitable performance across demographic groups. Accuracy metrics including false match rate and false non-match rate are regularly audited across age cohorts, skin tone categories as defined by the Fitzpatrick scale, and gender groups. Performance is benchmarked against NIST Face Recognition Vendor Testing (FRVT) results, which provide independent third-party accuracy measurements across a demographically diverse test corpus. Any significant differential in performance across subgroups triggers model retraining or threshold adjustment to restore equitable accuracy.
      </p>
    </ArticleWrapper>
  );
}
