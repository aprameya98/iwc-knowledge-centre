import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'IwC Overview',
  description: 'What Issuance with Credence (IwC) does and its role in the Credence ID ecosystem.',
};

const toc = [
  { id: 'what-is-iwc', title: 'What is IwC?', level: 2 as const },
  { id: 'role-in-ecosystem', title: 'Role in the Ecosystem', level: 2 as const },
  { id: 'who-uses-iwc', title: 'Who Uses IwC?', level: 2 as const },
  { id: 'key-capabilities', title: 'Key Capabilities', level: 2 as const },
];

const content = `Issuance with Credence (IwC) is the identity verification and credential issuance platform at the heart of the Credence ID ecosystem. It receives enrollment submissions from applicants, runs a fully automated six-step review pipeline, and presents results to human reviewers who make the final approve or reject decision. Once approved, IwC triggers the creation and delivery of a verifiable digital credential to the applicant's Credence Wallet.

IwC sits at the second stage of the Digital ID Lifecycle, between the enrollment stage (where applicants submit their identity documents and biometrics) and the holding stage (where issued credentials live in the wallet). It is the verification engine that transforms raw enrollment data into trusted, cryptographically signed digital identity credentials.

Issuers — organizations such as government agencies, financial institutions, universities, and employers — deploy IwC to automate the bulk of identity verification work. Rather than manually reviewing every document scan and selfie, issuers configure IwC's automated checks and thresholds once, and the platform handles the repetitive verification tasks at scale. Reviewers only need to intervene in edge cases where automated confidence is below the configured threshold.

IwC's core capabilities include optical character recognition across document text zones, biometric face matching between the document portrait and the live selfie, passive and active liveness detection, multi-layer document authentication, system-of-record validation, and fraud pattern screening. These checks run in parallel within seconds of a submission arriving, giving reviewers an immediately actionable summary rather than raw document images.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/overview"
      title="IwC Overview"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-iwc">What is IwC?</h2>
      <p>
        Issuance with Credence (IwC) is the identity verification and credential issuance platform at the heart of the Credence ID ecosystem. It receives enrollment submissions from applicants, runs a fully automated six-step review pipeline, and presents results to human reviewers who make the final approve or reject decision. Once approved, IwC triggers the creation and delivery of a verifiable digital credential to the applicant's Credence Wallet.
      </p>
      <p>
        IwC is purpose-built for organizations that need to issue high-assurance digital identity credentials at scale. Unlike general-purpose document scanning tools, every component of IwC — from its OCR engine to its liveness detector — is designed specifically for the high-stakes context of identity issuance, where both false positives (fraudulent approvals) and false negatives (legitimate rejections) carry real consequences.
      </p>

      <h2 id="role-in-ecosystem">Role in the Ecosystem</h2>
      <p>
        IwC sits at the second stage of the Digital ID Lifecycle, between the enrollment stage (where applicants submit their identity documents and biometrics) and the holding stage (where issued credentials live in the wallet). It is the verification engine that transforms raw enrollment data into trusted, cryptographically signed digital identity credentials. Without IwC, enrollment submissions would have no automated quality gate before issuance.
      </p>
      <p>
        Within the broader Credence ID product suite, IwC works alongside Verification with Credence (VwC) and the Credence Wallet. IwC is responsible for the issuance side: vetting applicants, making issuance decisions, and minting credentials. VwC handles the verification side: reading and validating those credentials when holders present them. The Credence Wallet is the holder's interface — the mobile app where issued credentials are stored and presented.
      </p>

      <h2 id="who-uses-iwc">Who Uses IwC?</h2>
      <p>
        Issuers — organizations such as government agencies, financial institutions, universities, and employers — deploy IwC to automate the bulk of identity verification work. Rather than manually reviewing every document scan and selfie, issuers configure IwC's automated checks and thresholds once, and the platform handles the repetitive verification tasks at scale. Reviewers only need to intervene in edge cases where automated confidence is below the configured threshold, dramatically reducing the cost and time of the issuance workflow.
      </p>

      <h2 id="key-capabilities">Key Capabilities</h2>
      <p>
        IwC's core capabilities include optical character recognition across document text zones, biometric face matching between the document portrait and the live selfie, passive and active liveness detection, multi-layer document authentication, system-of-record validation, and fraud pattern screening. These checks run in parallel within seconds of a submission arriving, giving reviewers an immediately actionable summary rather than raw document images. Each check produces a structured result with a confidence score, flagged anomalies, and supporting evidence that reviewers can examine in the dashboard.
      </p>

      <Callout type="tip">
        If you are new to IwC, start with the <a href="/docs/identity-verification/product-guide/how-it-works">How IwC Works</a> page to understand the end-to-end automated review pipeline before diving into individual check documentation.
      </Callout>
    </ArticleWrapper>
  );
}
