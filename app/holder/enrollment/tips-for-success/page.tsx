import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Tips for a Successful Enrollment',
  description: 'Best practices for document capture, selfie capture, and submission to maximize the chances of a successful enrollment outcome.',
};

const toc = [
  { id: 'document-capture-tips', title: 'Document Capture Tips', level: 2 as const },
  { id: 'selfie-tips', title: 'Selfie Tips', level: 2 as const },
  { id: 'submission-tips', title: 'Submission Tips', level: 2 as const },
];

const content = `Following best practices during enrollment significantly increases the likelihood of first-attempt approval. For document capture, use a plain dark surface, ensure all four corners are visible, and eliminate glare before capturing. For your selfie, use even natural or diffuse indoor lighting, position your face squarely within the guide oval, and maintain a neutral expression. Before submitting, review each image carefully and retake any that appear blurry, poorly lit, or incorrectly framed. Ensure you have a stable internet connection before tapping Submit.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/enrollment/tips-for-success"
      title="Tips for a Successful Enrollment"
      contentText={content}
      toc={toc}
    >
      <h2 id="document-capture-tips">Document Capture Tips</h2>

      <Callout type="important">
        Blurry or out-of-focus document images are the most common cause of enrollment rejection. Ensure
        your camera lens is clean and hold the document completely still during capture.
      </Callout>

      <p>
        Place your identity document on a plain, dark, non-reflective surface such as a dark table, a
        folder, or a piece of black paper. This provides contrast that helps the capture system locate
        and correctly frame the document. Ensure all four corners of the document are fully visible within
        the camera frame — do not crop or obscure any edges. Hold your phone parallel to the document
        surface to minimize perspective distortion. If your document has a reflective hologram or laminate
        surface, angle the light source from the side rather than above to prevent glare. Remove the
        document from any protective sleeve or wallet pocket before photographing.
      </p>

      <Callout type="tip">
        Natural daylight or diffuse indoor lighting produces the best results. Avoid photographing in
        direct sunlight, which creates harsh shadows, or in dim conditions, which increase image noise.
      </Callout>

      <h2 id="selfie-tips">Selfie Tips</h2>
      <p>
        For your selfie, find a neutral background — a plain wall works best. Ensure the lighting falls
        evenly on your face from the front; standing facing a window provides ideal natural light. Avoid
        strong overhead lighting that creates shadows under your eyes and nose. Remove glasses if possible,
        as lenses can create glare that obscures your eyes. Do not wear a hat or head covering unless it
        is required for religious reasons, in which case your face from chin to forehead and ear to ear
        must still be fully visible. Look directly at the camera with a neutral expression — do not smile,
        frown, or raise your eyebrows. The capture system will automatically take the photo when your
        position is correct; do not tap the screen or move during capture.
      </p>

      <h2 id="submission-tips">Submission Tips</h2>
      <p>
        Before tapping the Submit button, carefully review every captured image. Pinch to zoom in on your
        document image and verify that all text, particularly the MRZ lines and any printed numbers, is
        sharp and legible. Check that the document photo on your ID is clearly visible and that your selfie
        shows your face without shadows or obstructions. If you are unsatisfied with any image, use the
        retake option — there is no penalty for retaking images before submission. Ensure you have a stable
        Wi-Fi or mobile data connection before submitting to prevent the upload from failing mid-way. Once
        submitted, do not close the app or browser until you see the confirmation screen confirming your
        application has been received.
      </p>
    </ArticleWrapper>
  );
}
