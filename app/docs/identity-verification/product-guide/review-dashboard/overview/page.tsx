import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Review Dashboard Overview',
  description: 'An overview of the IwC reviewer dashboard, its layout, and its role in the issuance workflow.',
};

const toc = [
  { id: 'what-is-the-review-dashboard', title: 'What is the Review Dashboard?', level: 2 as const },
  { id: 'dashboard-layout', title: 'Dashboard Layout', level: 2 as const },
  { id: 'submission-queue', title: 'Submission Queue', level: 2 as const },
  { id: 'reviewer-roles-and-permissions', title: 'Reviewer Roles and Permissions', level: 2 as const },
  { id: 'dashboard-configuration', title: 'Dashboard Configuration', level: 2 as const },
];

const content = `The Review Dashboard is the human reviewer's primary interface within IwC. It is the workspace where reviewers examine enrollment submissions that have completed the automated pipeline, assess the results of the six automated checks, view original document images and selfies, and make the final approve, reject, or escalate decision on each application. The dashboard is designed to surface the most relevant information quickly and to minimize the cognitive load on reviewers by organizing evidence around the decisions they need to make.

The dashboard is organized around individual submission records. When a reviewer opens a submission, they see a structured record containing five main sections: Applicant Information (the identity data extracted by OCR), Document Trust Factors (the results of the document-side automated checks), Biometric Trust Factors (the results of the biometric pipeline), the Decision Panel (where the reviewer records their approve, reject, or escalate action), and the Reviewer Action Log (the audit trail of all actions taken on this submission). Additional sections appear for submissions that triggered specific flags, such as a Fraud Signals section for submissions with fraud check escalations.

The submission queue is the entry point to the review workflow. Reviewers see a list of submissions awaiting review, each annotated with the submission's overall automated trust score, any critical flags raised by the automated checks, the elapsed time since submission, and the credential template being applied. Submissions with hard flags — fraud signals, liveness failures, or no-match SOR results — are visually differentiated in the queue so reviewers can triage appropriately. Issuers can configure queue sorting and filtering rules to match their operational workflows.

Reviewer access to the dashboard is controlled by role-based permissions configured by the issuer's administrator. Standard roles include Reviewer (can view submissions and make approve/reject/escalate decisions), Senior Reviewer (same as Reviewer plus can override automated flags and access escalation resolution), and Administrator (full configuration access). Custom roles with granular permission sets can be configured for issuers with specialized workflow requirements.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/review-dashboard/overview"
      title="Review Dashboard Overview"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-the-review-dashboard">What is the Review Dashboard?</h2>
      <p>
        The Review Dashboard is the human reviewer's primary interface within IwC. It is the workspace where reviewers examine enrollment submissions that have completed the automated pipeline, assess the results of the six automated checks, inspect original document images and selfies, and make the final approve, reject, or escalate decision on each application. The dashboard is designed to surface the most relevant information efficiently and to minimize reviewer cognitive load by organizing evidence around the decisions that need to be made, rather than presenting raw data for reviewers to interpret from scratch.
      </p>

      <h2 id="dashboard-layout">Dashboard Layout</h2>
      <p>
        When a reviewer opens an individual submission, the dashboard is organized into five main sections: Applicant Information presents the structured identity data extracted by the OCR Check; Document Trust Factors displays the results of all document-side automated checks with supporting evidence; Biometric Trust Factors shows the liveness and face matching results with the selfie and portrait side-by-side; the Decision Panel is where the reviewer records their final determination; and the Reviewer Action Log shows the complete audit trail for this submission. For submissions that triggered specific flags, additional sections appear — for example, a Fraud Signals section for submissions with fraud check escalations.
      </p>

      <h2 id="submission-queue">Submission Queue</h2>
      <p>
        The submission queue is the entry point to the review workflow. Reviewers see a list of submissions awaiting review, each displaying the applicant's name, submission timestamp, the credential template being applied, an overall automated trust score, and any critical flags raised by the automated checks. Submissions with hard flags — liveness failures, fraud signals, SOR no-match results, or document authentication failures — are visually distinguished in the queue to enable appropriate triage. Queue sorting and filtering options allow reviewers to prioritize by submission age, trust score, flag type, or credential template.
      </p>

      <h2 id="reviewer-roles-and-permissions">Reviewer Roles and Permissions</h2>
      <p>
        Access to the Review Dashboard is governed by role-based permissions configured by the issuer's administrator. The standard roles are: Reviewer, who can view submissions and record approve, reject, or escalate decisions; Senior Reviewer, who additionally can override automated flags and resolve escalations; and Administrator, who has full access including configuration and audit log export. Custom roles with granular permission sets can be created for issuers with specialized workflow requirements — for example, a role with permission to review only biometric factors without seeing the underlying document data, or a role restricted to reviewing submissions for a specific credential template.
      </p>

      <h2 id="dashboard-configuration">Dashboard Configuration</h2>
      <p>
        Issuers can configure the Review Dashboard to match their operational preferences. Configurable elements include: which automated check results trigger mandatory review versus auto-approval, the default queue sort order, which information panels are shown to which roles, the available reject reason codes that reviewers can select when rejecting a submission, and the escalation routing rules that determine where escalated submissions are sent. Configuration changes take effect immediately and apply to all new submissions entering the queue; submissions already in the queue are reviewed under the configuration that was active when they arrived.
      </p>
    </ArticleWrapper>
  );
}
