import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Post-Approval',
  description: 'What happens after an enrollment is approved in IwC — credential generation, delivery, and lifecycle events.',
};

const toc = [
  { id: 'what-happens-after-approval', title: 'What Happens After Approval', level: 2 as const },
  { id: 'credential-generation', title: 'Credential Generation', level: 2 as const },
  { id: 'delivery-to-the-wallet', title: 'Delivery to the Wallet', level: 2 as const },
  { id: 'post-issuance-lifecycle', title: 'Post-Issuance Lifecycle', level: 2 as const },
  { id: 'applicant-notification', title: 'Applicant Notification', level: 2 as const },
];

const content = `Once an enrollment submission is approved — either automatically by IwC's automation rules or by a human reviewer in the Review Dashboard — IwC immediately initiates the credential generation and delivery process. This process transforms the verified identity data into a cryptographically signed verifiable credential and delivers it to the applicant's Credence Wallet. The post-approval phase is designed to be fast and transparent, completing in seconds and notifying the applicant as soon as their credential is available.

Credential generation creates a verifiable credential from the verified identity data fields. The credential is structured according to the credential template configured by the issuer, which defines which identity fields are included in the credential, their display labels, the credential's visual design, and the credential's validity period. The credential is signed using the issuer's private signing key, producing a cryptographic signature that binds the credential's content to the issuer's identity and makes any subsequent tampering with the credential detectable by any verifying party.

The signed credential is delivered to the applicant's Credence Wallet via a secure push notification and credential transfer mechanism. The wallet receives the credential, verifies the issuer's signature, and stores the credential in the device's secure element or protected storage. The delivery process is confirmed back to IwC, which records the delivery confirmation event in the Reviewer Action Log. If delivery fails — for example, because the applicant's device is offline — IwC retries delivery according to a configurable retry schedule and notifies the issuer if delivery cannot be confirmed within the configured window.

After issuance, the credential enters the post-issuance lifecycle managed jointly by IwC and the Credence Wallet. The credential has a configured validity period, after which it expires and must be renewed. Issuers can suspend or revoke credentials at any time through the IwC administration interface — for example, if a fraudulent enrollment is discovered after the fact, or if an employee's credential should be disabled upon termination. Suspension and revocation events are propagated to verifiers in near real-time through the credential status registry.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/post-approval"
      title="Post-Approval"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-happens-after-approval">What Happens After Approval</h2>
      <p>
        Once an enrollment submission is approved — either automatically by IwC's configured automation rules or by a human reviewer in the Review Dashboard — IwC immediately initiates the credential generation and delivery process. This transformation from a reviewed enrollment record to an active, verifiable digital credential in the applicant's wallet typically completes within seconds of the approval event. The post-approval phase is the final step in the issuance workflow and marks the transition from the issuance stage to the holding stage of the Digital ID Lifecycle.
      </p>

      <h2 id="credential-generation">Credential Generation</h2>
      <p>
        Credential generation creates a structured verifiable credential from the verified identity data fields associated with the approved enrollment. The credential's content is determined by the credential template configured by the issuer: the template defines which identity fields are included, their display names and ordering, the credential's visual appearance (colors, logo, background), the issuer's display name, and the credential's validity period. Once the content is assembled, IwC signs the credential using the issuer's private signing key, producing a cryptographic signature that binds the credential's content to the issuer and makes any post-issuance modification to the credential detectable by any verifying party.
      </p>

      <h2 id="delivery-to-the-wallet">Delivery to the Wallet</h2>
      <p>
        The signed credential is delivered to the applicant's Credence Wallet through a secure transfer mechanism. The wallet receives the credential package, verifies the issuer's signature against the issuer's published public key, and stores the credential in protected storage — using the device's secure element where available. A delivery confirmation event is sent back to IwC and recorded in the Reviewer Action Log. If initial delivery fails because the applicant's device is offline or the wallet app is not running, IwC attempts redelivery on a configurable retry schedule. Issuers are notified if delivery cannot be confirmed within the configured maximum window.
      </p>

      <h2 id="post-issuance-lifecycle">Post-Issuance Lifecycle</h2>
      <p>
        After delivery, the credential is active and the applicant can present it for verification using the Credence Wallet. Credentials have a validity period configured in the credential template — typically aligned with the expiry date of the underlying identity document or with the issuer's operational requirements. Issuers can monitor the status of issued credentials through the IwC administration interface and can take lifecycle actions at any time: suspending a credential temporarily removes it from active use while preserving the record; revoking a credential permanently invalidates it. Both suspension and revocation events are propagated to IwC's credential status registry, which verifiers check in real time when a credential is presented.
      </p>

      <h2 id="applicant-notification">Applicant Notification</h2>
      <p>
        Applicants are notified at key post-approval milestones based on the issuer's notification configuration. Standard notification events include credential issued and available in wallet (sent immediately upon successful delivery), credential expiry approaching (sent at a configurable number of days before expiry to prompt renewal), and credential suspended or revoked (sent if the credential's status changes). Notification channels include push notification to the Credence Wallet app and, if the issuer has captured the applicant's email address or mobile number during enrollment, email or SMS. Notification templates are configurable by the issuer to reflect their brand and communication standards.
      </p>

      <Callout type="tip">
        If an applicant reports not receiving their credential after approval, check the Reviewer Action Log for the delivery confirmation event. If no confirmation is recorded, the delivery retry process is likely still active. Credential redelivery can also be triggered manually from the submission record by an administrator if the automatic retry schedule has been exhausted.
      </Callout>
    </ArticleWrapper>
  );
}
