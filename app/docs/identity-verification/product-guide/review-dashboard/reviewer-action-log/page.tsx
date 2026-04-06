import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Reviewer Action Log',
  description: 'How the IwC Reviewer Action Log records and exposes the complete audit trail for every enrollment submission.',
};

const toc = [
  { id: 'what-is-the-reviewer-action-log', title: 'What is the Reviewer Action Log?', level: 2 as const },
  { id: 'what-is-logged', title: 'What is Logged', level: 2 as const },
  { id: 'viewing-the-log', title: 'Viewing the Log', level: 2 as const },
  { id: 'log-export-and-reporting', title: 'Log Export and Reporting', level: 2 as const },
  { id: 'retention-and-compliance', title: 'Retention and Compliance', level: 2 as const },
];

const content = `The Reviewer Action Log is the immutable audit trail that records every action taken on an enrollment submission from the moment it enters IwC to the moment its lifecycle is complete. It captures automated pipeline events, reviewer interactions, decision records, and post-decision events such as credential issuance or revocation. The log is the primary evidentiary record for compliance audits, dispute resolution, and operational analytics.

Every event in the submission lifecycle is recorded in the log with a precise timestamp, the identity of the actor (the automated system or a specific named reviewer), and a description of the action taken. Automated events include submission receipt, each check's start and completion, and the final automated risk assessment. Reviewer events include opening the submission record (view events), acknowledging specific flags, adding notes, and recording the final decision. Post-decision events include credential generation, credential delivery confirmation, and any subsequent override or revocation events.

The log is displayed as a chronological feed within the individual submission record in the Review Dashboard. Each log entry shows the timestamp, actor, event type, and any associated data (such as the reject reason code selected or the override justification provided). For submissions with a long review history — for example, submissions that were escalated, reviewed by a senior reviewer, and then overridden — the log provides a complete narrative of the submission's lifecycle that any authorized reviewer can read.

For compliance and audit purposes, log data can be exported in structured formats including JSON and CSV. The export function is accessible to users with Administrator permissions and can be scoped by date range, credential template, reviewer identity, decision type, or any combination of these dimensions. Exported logs include all fields needed to satisfy standard identity verification audit requirements.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/review-dashboard/reviewer-action-log"
      title="Reviewer Action Log"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-the-reviewer-action-log">What is the Reviewer Action Log?</h2>
      <p>
        The Reviewer Action Log is the immutable audit trail that records every event in the lifecycle of an enrollment submission. It captures automated pipeline events from the moment the submission arrives, every reviewer interaction during the review process, the final decision and its justification, and post-decision events such as credential issuance and revocation. The log exists to create a complete, tamper-evident record that can be examined for compliance purposes, used in dispute resolution, or analyzed to identify operational patterns and improvement opportunities.
      </p>

      <h2 id="what-is-logged">What is Logged</h2>
      <p>
        The log captures events in three categories. Automated system events include: submission received (with source channel and timestamp), each automated check initiated and completed (with result summary), automated risk assessment completed, and auto-approval or auto-rejection events for submissions meeting configured automation rules. Reviewer interaction events include: submission record opened by a named reviewer (view event), specific flag acknowledged, note added, and decision recorded with reason code and notes. Post-decision events include: credential generation initiated, credential delivered to wallet, credential revoked, decision overridden (with overriding reviewer identity and justification), and submission re-queued for additional review.
      </p>

      <h2 id="viewing-the-log">Viewing the Log</h2>
      <p>
        The log for an individual submission is displayed as a chronological timeline feed within the submission record in the Review Dashboard. Each entry shows the event timestamp (to the second), the actor (displaying "System" for automated events or the reviewer's name and role for human events), the event type, and any associated structured data — such as the specific check result, the decision recorded, or the note text. For submissions with complex review histories involving multiple reviewers, escalations, or overrides, the timeline provides an unambiguous narrative of what happened, in what order, and who was responsible for each action.
      </p>

      <h2 id="log-export-and-reporting">Log Export and Reporting</h2>
      <p>
        Log data can be exported in structured formats including JSON and CSV through the Analytics and Reporting section of the IwC administration interface. Export functions are restricted to users with Administrator or Compliance Officer roles. Exports can be scoped by date range, credential template, reviewer identity, submission decision type (approved, rejected, escalated), or flag type. Exported records include all event fields including timestamps, actor identities, event types, and associated data payloads, providing complete evidentiary records suitable for regulatory compliance submissions and external audits.
      </p>

      <h2 id="retention-and-compliance">Retention and Compliance</h2>
      <p>
        Action log records are retained for the period specified in the issuer's configured data retention policy, subject to applicable regulatory minimum retention requirements. For most identity issuance contexts, audit log records are retained for a minimum of five years after the submission's final decision event. Log records are stored in an append-only data store that prevents modification or deletion of individual events, ensuring that the log's evidentiary integrity is maintained throughout the retention period. The log's structure and retention properties are designed to satisfy the audit trail requirements of common identity verification regulatory frameworks including AML/KYC regulations, government identity issuance standards, and data protection authority guidelines.
      </p>
    </ArticleWrapper>
  );
}
