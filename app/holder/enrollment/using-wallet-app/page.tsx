import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import StepFlow from '@/components/content/StepFlow';
import wallet_onboarding from '@/public/Wallet_Onboarding_Overview.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Enrolling via the Credence Wallet App',
  description: 'Step-by-step instructions for completing your IwC enrollment using the Credence Wallet mobile app on iOS or Android.',
};

const toc = [
  { id: 'before-you-begin', title: 'Before You Begin', level: 2 as const },
  { id: 'enrollment-steps', title: 'Enrollment Steps', level: 2 as const },
  { id: 'after-submission', title: 'After Submission', level: 2 as const },
];


const steps = [
  {
    number: 1,
    title: 'Download the Credence Wallet',
    description:
      'Download the Credence Wallet from the App Store (iOS) or Google Play (Android). Search for "Credence Wallet" and install the official app by Credence ID. The app is free to download.',
  },
  {
    number: 2,
    title: 'Select the Document Type',
    description:
      'Based on the requirement of the Issuing Organization, the wallet app will display certain document types from which the user can select one of them to proceed towards document image capture process.',
  },
  {
    number: 3,
    title: 'Capture images of your Identity Document',
    description:
      'When prompted, photograph the front of your identity document. Hold the document flat on a dark surface, ensure all four corners are visible, and avoid glare. Photograph the back of your document when prompted if applicable to your document type.',
  },
  {
    number: 4,
    title: 'Capture a live Selfie',
    description:
      'Follow the on-screen prompts to take a live selfie. Position your face within the guide oval, ensure even lighting with no strong shadows, and look directly at the camera with a neutral expression. The app will capture the image automatically when it detects the correct position.',
  },
  {
    number: 5,
    title: 'Review and Submit',
    description:
      'Review the captured images before submission. Ensure the document text is legible and the selfie is clear. If any image is unsatisfactory, you can retake it before submitting. Once satisfied, tap Submit to send your application.',
  },
  {
    number: 6,
    title: 'Await Decision for Digital ID Issuance',
    description:
      'After submission, you will receive a confirmation notification. Your application will be reviewed by your issuing organization. You will receive a push notification when a decision has been made. If approved, your digital credential will appear in your wallet automatically and stored in a secure element.',
  },
];

const content = `To enroll via the Credence Wallet app, first download the app from the App Store or Google Play, then open your enrollment invitation, photograph your identity document, take a live selfie, review and submit your images, and await the decision from your issuing organization. If approved, your digital credential will appear in your wallet automatically.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/enrollment/using-wallet-app"
      title="Enrolling via the Credence Wallet App"
      contentText={content}
      toc={toc}
    >
      <h2 id="before-you-begin">Before You Begin</h2>
      <p>
        Before starting the app-based enrollment flow, ensure you have a compatible smartphone (iOS 14 or
        later, or Android 8 or later), a stable internet connection, and your accepted identity document
        on hand. Make sure your device camera lens is clean and that you are in a well-lit environment.
        Your issuing organization will have sent you an enrollment invitation — keep that message accessible
        as you will need to open it during the process.
      </p>

<Image src={wallet_onboarding} alt="" />
<br></br>

      <h2 id="enrollment-steps">Enrollment Steps</h2>
      <StepFlow steps={steps} />

      <h2 id="after-submission">After Submission</h2>
      <p>
        Once you have submitted your enrollment, you do not need to take any further action unless prompted.
        If your issuing organization requires additional information, you will receive a notification
        explaining what is needed. Automated reviews are typically completed within minutes; manual reviews
        may take longer depending on your organization's processes. Keep push notifications enabled for the
        Credence Wallet app so you receive timely updates about your application status.
      </p>
    </ArticleWrapper>
  );
}
