import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Biometric Match Check',
  description: 'How IwC compares the document portrait against the live selfie to verify the applicant is the document holder.',
};

const toc = [
  { id: 'what-is-the-biometric-match-check', title: 'What is the Biometric Match Check?', level: 2 as const },
  { id: 'portrait-extraction', title: 'Portrait Extraction', level: 2 as const },
  { id: 'face-comparison', title: 'Face Comparison', level: 2 as const },
  { id: 'similarity-score', title: 'Similarity Score', level: 2 as const },
  { id: 'robustness-and-edge-cases', title: 'Robustness and Edge Cases', level: 2 as const },
];

const content = `The Biometric Match Check answers a single critical question: is the person presenting for enrollment the same person whose photo appears on the submitted identity document? It does this by extracting the portrait from the document image and comparing it against the live selfie captured during enrollment using a deep learning facial recognition model.

Portrait extraction is the first step. IwC locates the portrait photo on the identity document image, corrects for perspective and rotation, and produces a normalized face image. For ePassports and NFC-enabled documents, IwC can also retrieve the portrait directly from the chip's Data Group 2, which is a higher-quality and tamper-evident source compared to a printed and photographed portrait.

The facial recognition model then performs a 1:1 comparison between the document portrait and the enrollment selfie. Both images are processed through the same deep neural network to produce a facial feature vector. The cosine similarity between the two vectors yields a match score from 0 to 100. A score above the configured threshold — typically in the 80–90 range depending on the issuer's risk tolerance — indicates a match. Scores below the threshold are flagged for human review.

The model is trained to remain robust to typical real-world variation: differences in lighting conditions between the document photo and the selfie, aging (the document photo may be several years old), the presence or absence of glasses or facial hair, and minor pose differences. The model is specifically not designed to work as a de-identification tool — it is calibrated for 1:1 matching rather than 1:N identification.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/automated-checks/biometric-match"
      title="Biometric Match Check"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-the-biometric-match-check">What is the Biometric Match Check?</h2>
      <p>
        The Biometric Match Check answers a single critical question: is the person presenting for enrollment the same person whose photo appears on the submitted identity document? It does this by extracting the portrait from the document image and comparing it against the live selfie captured during enrollment using a deep learning facial recognition model. A successful match confirms that the applicant is the legitimate holder of the document they have submitted.
      </p>

      <h2 id="portrait-extraction">Portrait Extraction</h2>
      <p>
        Before comparison can occur, IwC must locate and extract the portrait from the identity document. The extraction engine uses the document template reference to identify the expected portrait region, applies perspective correction and cropping, and normalizes the extracted face image for input into the recognition model. For ePassports and NFC-capable national IDs, IwC can retrieve the portrait directly from the chip's ICAO-specified Data Group 2, which yields a higher-quality and digitally signed source image compared to re-photographing a printed portrait.
      </p>

      <h2 id="face-comparison">Face Comparison</h2>
      <p>
        The facial recognition model performs a 1:1 comparison between the extracted document portrait and the enrollment selfie. Both images pass through the same deep neural network architecture to generate a compact facial feature vector that encodes the unique geometry and texture of the face. The model has been trained on a large and demographically diverse dataset to minimize differential performance across age, skin tone, and ethnicity. The cosine similarity between the two vectors is computed and mapped to a 0–100 match score.
      </p>

      <h2 id="similarity-score">Similarity Score</h2>
      <p>
        A match score of 100 indicates a perfect algorithmic match; a score of 0 indicates no resemblance. In practice, genuine matches between a live selfie and a printed document portrait typically score in the 85–98 range depending on document age, photo quality, and subject variation. Issuers configure a match threshold that determines when a submission is auto-passed, flagged for review, or auto-rejected. The score and the threshold comparison are both visible to reviewers in the Biometric Trust Factors panel of the Review Dashboard.
      </p>

      <h2 id="robustness-and-edge-cases">Robustness and Edge Cases</h2>
      <p>
        The model is designed to handle common real-world variation: a document photo taken five or ten years ago, lighting differences between the document studio setting and the enrollment environment, the addition or removal of glasses and facial hair, and slight head pose differences. When the model detects conditions that may reduce its reliability — such as significant image blur, extreme lighting, or a partially obscured face — it reports a reduced confidence level alongside the match score, alerting reviewers that additional scrutiny is warranted.
      </p>
    </ArticleWrapper>
  );
}
