import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Enrollment Overview',
  description: 'An introduction to the IwC enrollment process — what it is, who needs to enroll, and what to expect from start to finish.',
};

const toc = [
  { id: 'what-is-enrollment', title: 'What is Enrollment', level: 2 as const },
  { id: 'who-needs-to-enroll', title: 'Who Needs to Enroll', level: 2 as const },
  { id: 'what-to-expect', title: 'What to Expect', level: 2 as const },
  { id: 'before-you-start', title: 'Before You Start', level: 2 as const },
];

const content = `Enrollment is the process by which an individual submits their identity information to an issuing organization so that a verifiable digital credential can be issued to them. During enrollment, the IwC platform captures a photograph of your identity document and a live selfie, then performs automated checks to verify authenticity and match your face to the document. This process replaces traditional in-person identity checks and allows credentials to be issued quickly and securely from anywhere.

Enrollment is required for any individual who needs to hold a digital credential issued through the IwC platform. This includes employees receiving workplace identity badges, citizens receiving government-issued digital IDs, students receiving academic credentials, and members of any organization that uses IwC for identity management. If your organization has sent you an enrollment invitation, you are required to complete the process to receive your credential. Organizations can configure enrollment to be mandatory before access to certain systems or services is granted.

The enrollment process consists of three main stages: document capture, biometric capture, and review. During document capture, you will photograph your identity document using your smartphone camera or a web browser. During biometric capture, you will take a live selfie that is matched against your document photograph. Finally, your submission enters a review stage where automated systems — and in some cases human reviewers — assess the quality and authenticity of your submission. You will receive a notification once a decision has been made, typically within minutes for automated reviews.

Before starting enrollment, gather your accepted identity document and ensure your device camera is clean and functional. You will need a stable internet connection throughout the process. Choose a well-lit environment with a neutral background for your selfie. If you are enrolling via the Credence Wallet app, download and install it before opening your invitation link. Read any instructions sent by your issuing organization carefully, as they may specify which document types are accepted and any organization-specific requirements.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/enrollment/overview"
      title="Enrollment Overview"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-enrollment">What is Enrollment</h2>
      <p>
        Enrollment is the process by which an individual submits their identity information to an issuing
        organization so that a verifiable digital credential can be issued to them. During enrollment, the
        IwC platform captures a photograph of your identity document and a live selfie, then performs
        automated checks to verify authenticity and match your face to the document. This process replaces
        traditional in-person identity checks and allows credentials to be issued quickly and securely from
        anywhere.
      </p>

      <h2 id="who-needs-to-enroll">Who Needs to Enroll</h2>
      <p>
        Enrollment is required for any individual who needs to hold a digital credential issued through the
        IwC platform. This includes employees receiving workplace identity badges, citizens receiving
        government-issued digital IDs, students receiving academic credentials, and members of any
        organization that uses IwC for identity management. If your organization has sent you an enrollment
        invitation, you are required to complete the process to receive your credential. Organizations can
        configure enrollment to be mandatory before access to certain systems or services is granted.
      </p>

      <h2 id="what-to-expect">What to Expect</h2>
      <p>
        The enrollment process consists of three main stages: document capture, biometric capture, and
        review. During document capture, you will photograph your identity document using your smartphone
        camera or a web browser. During biometric capture, you will take a live selfie that is matched
        against your document photograph. Finally, your submission enters a review stage where automated
        systems — and in some cases human reviewers — assess the quality and authenticity of your
        submission. You will receive a notification once a decision has been made, typically within minutes
        for automated reviews.
      </p>

      <h2 id="before-you-start">Before You Start</h2>
      <p>
        Before starting enrollment, gather your accepted identity document and ensure your device camera is
        clean and functional. You will need a stable internet connection throughout the process. Choose a
        well-lit environment with a neutral background for your selfie. If you are enrolling via the
        Credence Wallet app, download and install it before opening your invitation link. Read any
        instructions sent by your issuing organization carefully, as they may specify which document types
        are accepted and any organization-specific requirements.
      </p>
    </ArticleWrapper>
  );
}
