import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Review Dashboard | Identity Verification (IDV)',
  description: 'The IDV reviewer dashboard — applicant information, trust factors, decision workflow, and audit trail.',
};

const toc = [
  { id: 'dashboard-overview', title: 'Dashboard Overview', level: 2 as const },
  { id: 'applicant-info', title: 'Applicant Information', level: 2 as const },
  { id: 'trust-factors', title: 'Trust Factors', level: 2 as const },
  { id: 'making-a-decision', title: 'Making a Decision', level: 2 as const },
  { id: 'action-log', title: 'Reviewer Action Log', level: 2 as const },
];

const contentText = `The IDV Review Dashboard is the reviewer's primary interface for assessing applicant submissions and making approval decisions. The dashboard is organised into five sections: applicant information, document trust factors, biometric trust factors, decision panel, and reviewer action log. Role-based permissions control which actions each user can perform. Reviewers can approve reject or escalate submissions. Senior reviewers can override system decisions with mandatory justification. Administrators have full access. The reviewer action log is an immutable audit trail of all events captured for every submission with a minimum five-year retention period.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/review-dashboard"
      title="Review Dashboard"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="dashboard-overview">Dashboard Overview</h2>
      <p>
        The Review Dashboard is the reviewer's primary interface. It presents every applicant submission as a structured record — assembling the outputs of all six automated checks alongside the raw submission data into a single, unified view.
      </p>
      <p>
        The dashboard is organised around five panels, visible on a single submission record:
      </p>
      <ul>
        <li><strong>Applicant Information</strong> — extracted identity fields, document images, and enrollment metadata</li>
        <li><strong>Document Trust Factors</strong> — document authentication score, security feature results, data consistency results, and anomaly list</li>
        <li><strong>Biometric Trust Factors</strong> — face match score, liveness results, portrait comparison, and biometric flags</li>
        <li><strong>Decision Panel</strong> — approve, reject, or escalate actions with required context</li>
        <li><strong>Reviewer Action Log</strong> — chronological audit trail of all events on this submission</li>
      </ul>
      <p>
        Access is role-based. Three roles are defined:
      </p>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Can Do</th>
            <th>Cannot Do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Reviewer</strong></td>
            <td>Approve, reject, escalate submissions assigned to their queue</td>
            <td>Override automated decisions; access submissions outside their queue</td>
          </tr>
          <tr>
            <td><strong>Senior Reviewer</strong></td>
            <td>All Reviewer actions; override automated decisions with mandatory justification; handle escalations</td>
            <td>Administrative configuration changes</td>
          </tr>
          <tr>
            <td><strong>Administrator</strong></td>
            <td>Full access — all review actions plus configuration, user management, and audit log export</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>

      <h2 id="applicant-info">Applicant Information</h2>
      <p>
        The Applicant Information panel presents the extracted identity data alongside the original document images, giving the reviewer both the machine-interpreted result and the source material to assess directly.
      </p>
      <ul>
        <li>
          <strong>Extracted fields:</strong> All identity attributes pulled from VIZ, MRZ, and chip (where applicable) — name, date of birth, document number, expiry date, nationality, and programme-specific custom fields. Each field is shown with its per-field OCR confidence score. Fields below the confidence threshold are highlighted.
        </li>
        <li>
          <strong>Document images:</strong> High-resolution front and back captures with pan and zoom. Reviewers can inspect security features, portrait quality, and field legibility directly from the dashboard without requesting the original submission files.
        </li>
        <li>
          <strong>Enrollment metadata:</strong> Submission timestamp, enrollment channel (wallet app or IDV browser), device type, and location data (where collected and permitted). This context can surface patterns consistent with fraudulent submissions — for example, submissions originating from atypical geographies or devices.
        </li>
      </ul>

      <h2 id="trust-factors">Trust Factors</h2>
      <p>
        Trust factors translate the automated check outputs into a reviewer-readable format. Rather than raw model scores, each factor surfaces a clear signal and the supporting evidence.
      </p>
      <p>
        <strong>Document Trust Factors</strong> include:
      </p>
      <ul>
        <li>Overall document trust score (0–100) with the pass/flag threshold clearly marked</li>
        <li>Security feature check results — each feature examined listed with pass, flag, or fail status</li>
        <li>Data consistency results — VIZ vs. MRZ comparison, check digit validation, chip vs. optical discrepancies</li>
        <li>Anomaly list — each anomaly classified by severity (minor, moderate, definitive) with a plain-language description</li>
      </ul>
      <p>
        <strong>Biometric Trust Factors</strong> include:
      </p>
      <ul>
        <li>Face match score with the configured threshold clearly indicated — a score that exceeds the threshold is shown in context so the reviewer understands its significance</li>
        <li>Liveness result — passive and active (if run), each with score and pass/fail status</li>
        <li>Side-by-side portrait comparison — document portrait and enrollment selfie displayed at equivalent scale for direct visual assessment</li>
        <li>Biometric flags — any signals from the fraud check (e.g. deduplication hit) classified by severity</li>
      </ul>
      <Callout type="note">
        Trust factors are designed to support the reviewer's judgement — not replace it. A flagged submission is not automatically a rejection; the reviewer assesses the full picture and the context of each flag before making a decision.
      </Callout>

      <h2 id="making-a-decision">Making a Decision</h2>
      <p>
        The Decision Panel presents three actions for each submission:
      </p>
      <ul>
        <li>
          <strong>Approve:</strong> Marks the submission as verified. Triggers the IwC Issuance Service to assemble and sign the digital credential. The applicant receives an activation notification. This action is available to Reviewers, Senior Reviewers, and Administrators.
        </li>
        <li>
          <strong>Reject:</strong> Marks the submission as failed. Requires selection of a reason code — document not genuine, biometric mismatch, liveness failure, SOR mismatch, fraud signal, or insufficient image quality. The applicant receives a rejection notification with a programme-defined explanation. Re-submission may be offered depending on programme policy.
        </li>
        <li>
          <strong>Escalate:</strong> Routes the submission to a Senior Reviewer's queue. Used when the assigned Reviewer encounters ambiguity they are not authorised to resolve, or when the automated pipeline has flagged the submission for senior review. Requires a brief escalation note describing the reason.
        </li>
      </ul>
      <p>
        <strong>Decision overrides</strong> — reversing an automated pass or fail — are restricted to Senior Reviewers and Administrators. Every override requires a written justification that is captured in the audit log. This creates a clear accountability trail for any decision that diverges from the automated recommendation.
      </p>

      <h2 id="action-log">Reviewer Action Log</h2>
      <p>
        The Reviewer Action Log is an immutable, chronological record of every event on a submission — automated and human. It is visible within the submission record and provides complete accountability from first submission to final outcome.
      </p>
      <p>
        Events captured include:
      </p>
      <ul>
        <li>Submission received — timestamp and channel</li>
        <li>Automated check results — each check with score, pass/flag/fail status, and timestamp</li>
        <li>Queue assignment — which reviewer received the submission and when</li>
        <li>Reviewer actions — every approve, reject, escalate, and override with operator identity, timestamp, reason code, and any written justification</li>
        <li>Credential issuance — confirmation that the credential was assembled and the offer was delivered</li>
        <li>Post-issuance lifecycle events — renewal, suspension, reinstatement, revocation — linked back to the originating submission</li>
      </ul>
      <p>
        Audit logs are retained for a minimum of five years. They are exportable in JSON or CSV format directly from the dashboard or via API — for compliance reporting, legal holds, or integration with external SIEM and audit systems.
      </p>
      <Callout type="important">
        Audit log entries cannot be modified or deleted by any operator, regardless of role. The log is append-only at the platform level.
      </Callout>
    </ArticleWrapper>
  );
}
