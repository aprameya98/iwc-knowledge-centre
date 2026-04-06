import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Checking Your Application Status',
  description: 'How to track the progress of your enrollment application and understand what each status state means.',
};

const toc = [
  { id: 'how-to-check-your-status', title: 'How to Check Your Status', level: 2 as const },
  { id: 'status-definitions', title: 'Status Definitions', level: 2 as const },
  { id: 'additional-information-required', title: 'Additional Information Required', level: 2 as const },
  { id: 'final-decisions', title: 'Final Decisions', level: 2 as const },
];

const content = `After submitting your enrollment application, you can track its progress through the Credence Wallet app or via email notifications. The five status states are: Submitted, Under Review, Additional Information Required, Approved, and Rejected. Submitted means your application has been received and is queued for processing. Under Review means a reviewer is actively assessing your submission. Additional Information Required means you must provide supplementary material before a decision can be made. Approved means your credential has been issued and will appear in your wallet. Rejected means your application was not successful and you should contact your issuing organization for guidance.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/enrollment/checking-application-status"
      title="Checking Your Application Status"
      contentText={content}
      toc={toc}
    >
      <h2 id="how-to-check-your-status">How to Check Your Status</h2>
      <p>
        After submitting your enrollment application, you can track its current status at any time through
        the Credence Wallet app. Open the app and navigate to the <strong>Applications</strong> section,
        where pending and recently decided applications are listed. Tapping an application will display its
        current status and any relevant messages from your issuing organization. If you enrolled via the
        IDV Browser without installing the app, status updates will be sent to the email address registered
        with your issuing organization. Check both your inbox and your spam or junk folder. You can also
        contact your issuing organization directly with your application reference number if you need a
        status update.
      </p>

      <h2 id="status-definitions">Status Definitions</h2>
      <p>
        Your application will move through a sequence of statuses as it is processed. <strong>Submitted</strong> indicates
        that your application has been received by the platform and is queued for automated processing.
        No action is required from you at this stage. <strong>Under Review</strong> indicates that your
        submission is actively being assessed, either by the automated verification engine or by a human
        reviewer at your issuing organization. The duration of this stage varies depending on your
        organization's review processes; automated reviews typically complete within minutes, while manual
        reviews may take hours or longer. You will be notified when the status changes.
      </p>

      <h2 id="additional-information-required">Additional Information Required</h2>
      <p>
        If your application moves to <strong>Additional Information Required</strong>, it means the reviewer
        was unable to make a final decision based on the images you submitted and requires supplementary
        material. You will receive a notification — via push notification in the Credence Wallet app, or
        via email — explaining specifically what is needed. Common requests include a clearer photograph of
        a specific part of your document, an additional document to corroborate your identity, or a new
        selfie taken under better conditions. Respond to these requests promptly, as many organizations
        have a deadline after which an unanswered request results in rejection. Follow the instructions in
        the notification carefully.
      </p>

      <Callout type="note">
        Responding to an Additional Information Required request restarts the review process. Allow the
        same amount of time as the original review for a decision to be made after you resubmit.
      </Callout>

      <h2 id="final-decisions">Final Decisions</h2>
      <p>
        An <strong>Approved</strong> status means the review was successful and your digital credential
        has been issued. If you are using the Credence Wallet app, the credential will appear in your
        wallet automatically and you will receive a push notification. You do not need to take any further
        action. A <strong>Rejected</strong> status means your application was not successful. You will
        receive a notification with the reason for rejection where permitted by your organization's policy.
        Common reasons include unreadable document images, a failed biometric match, or a document that
        could not be verified as authentic. If you believe the rejection was in error, contact your issuing
        organization to discuss options for re-enrollment or appeal.
      </p>
    </ArticleWrapper>
  );
}
