import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Making a Decision',
  description: 'How reviewers approve, reject, or escalate applications in the IwC Review Dashboard.',
};

const toc = [
  { id: 'the-decision-panel', title: 'The Decision Panel', level: 2 as const },
  { id: 'approving-a-submission', title: 'Approving a Submission', level: 2 as const },
  { id: 'rejecting-a-submission', title: 'Rejecting a Submission', level: 2 as const },
  { id: 'escalating-a-submission', title: 'Escalating a Submission', level: 2 as const },
  { id: 'decision-overrides', title: 'Decision Overrides', level: 2 as const },
];

const content = `The Decision Panel is the section of the Review Dashboard where reviewers record their final determination on an enrollment submission. After reviewing the Applicant Information, Document Trust Factors, and Biometric Trust Factors, the reviewer selects one of three outcomes — approve, reject, or escalate — and submits their decision. The decision triggers the next stage of the workflow: approval initiates credential generation, rejection records the outcome with a required reason code, and escalation routes the submission to a senior reviewer or specialized team.

Approving a submission confirms that the reviewer is satisfied that the enrollment is legitimate and that the applicant meets the criteria for credential issuance. Before an approval can be submitted, IwC verifies that all required review steps have been completed — specifically, that any flagged anomalies have been acknowledged and that no mandatory review items remain outstanding. This prevents reviewers from inadvertently approving submissions with unreviewed flags. Once the approval is submitted, IwC triggers credential generation and the applicant receives their verifiable digital credential in the Credence Wallet.

Rejecting a submission records a negative decision on the enrollment. Rejection requires the reviewer to select a reject reason code from the issuer-configured list of available reasons — examples include document not authentic, biometric match failed, liveness check failed, SOR record mismatch, and document expired. An optional free-text note can be added for internal reference. The rejection reason code is stored in the audit log and may be used in reporting and analytics to identify trends in rejection causes. Depending on the issuer's workflow configuration, a rejection notification may be sent to the applicant.

Escalating a submission routes it to a senior reviewer or a specialized review team for additional scrutiny. Escalation is appropriate when the reviewer has concerns but is not confident enough to make a final reject decision, or when a submission has characteristics that warrant specialist input. The escalating reviewer can add a note explaining the reason for escalation to guide the senior reviewer's attention.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/review-dashboard/making-a-decision"
      title="Making a Decision"
      contentText={content}
      toc={toc}
    >
      <h2 id="the-decision-panel">The Decision Panel</h2>
      <p>
        The Decision Panel is the section of the Review Dashboard where reviewers record their final determination on an enrollment submission. It is displayed below the trust factor panels and becomes the reviewer's final point of interaction after they have examined the evidence. The panel presents three action buttons — Approve, Reject, and Escalate — along with a notes field for recording any observations that should be captured in the audit record. The panel also shows a checklist of required review items that must be completed before a decision can be submitted.
      </p>

      <h2 id="approving-a-submission">Approving a Submission</h2>
      <p>
        Approving a submission confirms that the reviewer is satisfied the enrollment is legitimate and the applicant meets the criteria for credential issuance. Before approval can be submitted, IwC validates that all required review steps have been completed: flagged anomalies must be acknowledged, any mandatory review items triggered by automated flags must be addressed, and — for issuers with multi-reviewer workflows — any required second-reviewer sign-off must be recorded. Once all conditions are met and the reviewer confirms the approval, IwC immediately triggers credential generation and the applicant's verifiable digital credential is issued to their Credence Wallet.
      </p>

      <h2 id="rejecting-a-submission">Rejecting a Submission</h2>
      <p>
        Rejecting a submission records a negative determination on the enrollment. Rejection requires the reviewer to select one or more reject reason codes from the issuer's configured reason list. Standard reason codes include: document not authentic, document expired, document not supported, biometric match failed, liveness check failed, system of record mismatch, duplicate enrollment detected, and submission quality insufficient. An optional free-text note can supplement the structured reason code for cases that require additional context. The reason code and note are stored in the Reviewer Action Log and the submission is marked as rejected. Depending on the issuer's notification configuration, the applicant may receive a rejection notification with or without the reason disclosed.
      </p>

      <h2 id="escalating-a-submission">Escalating a Submission</h2>
      <p>
        Escalating a submission routes it to a senior reviewer or a specialized review team for additional scrutiny. Escalation is the appropriate action when a reviewer has concerns that they are not confident enough to translate into a final reject decision, when a submission exhibits unusual characteristics that warrant specialist input, or when the reviewer's role does not have authority to make a final decision on a particular flag type. The escalating reviewer selects an escalation destination from the configured escalation routing options and adds a note explaining the reason for escalation to guide the senior reviewer. Escalated submissions appear in the senior reviewer's queue with the escalation note and the original reviewer's observations.
      </p>

      <h2 id="decision-overrides">Decision Overrides</h2>
      <p>
        Senior reviewers and administrators with the override permission can reverse a decision on a submission that has already been decided. Override capability is intentionally restricted to prevent routine reversal and ensure that the audit trail accurately reflects the decision history. An override records the original decision, the override decision, the identity of the reviewer who performed the override, and a mandatory override justification note. Overrides are highlighted in the Reviewer Action Log and are included in compliance reporting as distinct events from original decisions. For approved credentials that have already been issued to the Credence Wallet, an override approval-to-reject triggers a credential revocation event in the wallet.
      </p>
    </ArticleWrapper>
  );
}
