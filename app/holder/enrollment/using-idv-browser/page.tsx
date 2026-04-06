import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';
import Image from 'next/image';
import IDVPrimary from '@/public/IDV Browser Images.png';
import IDVSecondary from '@/public/IDV Browser Images (1).png';
import IDVSelfie from '@/public/IDV Browser Images (2).png';
import IDVReview from '@/public/IDV Browser Images (3).png';

export const metadata: Metadata = {
  title: 'Enrolling via the IDV Browser',
  description: 'How to complete your IwC enrollment using the web-based IDV Browser — no app installation required.',
};

const toc = [
  { id: 'when-to-use-the-browser', title: 'When to Use the Browser', level: 2 as const },
  { id: 'getting-started', title: 'Getting Started', level: 2 as const },
  { id: 'capture-steps', title: 'Capture Steps', level: 2 as const },
  { id: 'after-submission', title: 'After Submission', level: 2 as const },
];

const content = `The IDV Browser allows you to complete enrollment entirely within a web browser without installing any app. This is useful when you are on a desktop or laptop computer, when your device does not support the Credence Wallet app, or when your organization has configured web-only enrollment. You will need a device with a working camera and a modern browser such as Chrome, Safari, Firefox, or Edge. Camera permissions must be granted when the browser requests them. Getting started requires opening your enrollment invitation link in a supported browser. The browser-based flow mirrors the app flow: document capture followed by selfie capture. After submission your application enters review and you will receive a notification when a decision is made.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/enrollment/using-idv-browser"
      title="Enrolling via the IDV Browser"
      contentText={content}
      toc={toc}
    >
      <h2 id="when-to-use-the-browser">When to Use the Browser</h2>
      <p>
        The IDV Browser is the recommended enrollment method when you do not have a compatible smartphone,
        when your organization has configured web-only enrollment, or when you prefer not to install a
        mobile application. The browser-based flow is fully supported on desktop computers, laptops, and
        tablets running a modern browser. It provides the same identity verification capabilities as the
        Credence Wallet app, using your device's built-in camera via the browser's media API. This method
        is particularly useful in supervised enrollment scenarios such as onboarding kiosks or
        administrator-assisted enrollment.
      </p>

      <h2 id="getting-started">Getting Started</h2>
      <p>
        To begin, open your enrollment invitation link in a supported browser — Chrome 90+, Safari 14+,
        Firefox 88+, or Microsoft Edge 90+ are all supported. The link will direct you to the IDV Browser
        enrollment portal. When the browser requests access to your camera, you must tap <strong>Allow</strong> to
        proceed; without camera permission the capture steps cannot be completed. If you accidentally deny
        permission, you can reset it through your browser's site settings and reload the page. Ensure your
        browser is up to date before starting, as older versions may not support the required camera APIs.
      </p>

      <Callout type="note">
        Camera permissions must be granted when prompted by your browser. If you are on iOS using Safari,
        ensure that camera access is enabled for Safari in your device Settings under Privacy &amp; Security.
      </Callout>

      <h2 id="capture-steps">Capture Steps</h2>

      <Image src={IDVPrimary} alt="" />
<br></br>
<Image src={IDVSecondary} alt="" />
<br></br>
<Image src={IDVSelfie} alt="" />
<br></br>
<Image src={IDVReview} alt="" />
<br></br>
      <p>
        The browser flow follows the same sequence as the app. First, you will be prompted to capture the
        front of your identity document. Position the document flat within the guide frame shown on screen,
        ensure all four corners are visible, and hold it steady. The portal will automatically detect and
        capture the image when the quality is sufficient. If your document type requires a back photograph,
        you will be prompted for that next. After document capture, you will be guided through the selfie
        step: position your face within the on-screen oval, maintain even lighting, and look directly at the
        camera. The portal will capture your selfie automatically once positioning is correct.
      </p>

      <h2 id="after-submission">After Submission</h2>
      <p>
        After capturing all required images, review the previews displayed on screen. If any image is
        unclear or incorrectly framed, use the retake option before submitting. Once you submit, a
        confirmation screen will appear with a reference number for your application. Because browser-based
        enrollment does not involve the Credence Wallet app, status updates will be delivered via email to
        the address on file with your issuing organization. Check your inbox, including your spam or junk
        folder, for updates. If approved, follow the instructions in the approval email to install the
        Credence Wallet app and claim your credential, or access it via the web portal if your organization
        supports web-based credential presentation.
      </p>
    </ArticleWrapper>
  );
}
