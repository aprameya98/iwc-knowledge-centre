import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Document Trust Factors',
  description: 'How document authentication check results are presented in the IwC Review Dashboard.',
};

const toc = [
  { id: 'what-are-document-trust-factors', title: 'What are Document Trust Factors?', level: 2 as const },
  { id: 'overall-document-trust-score', title: 'Overall Document Trust Score', level: 2 as const },
  { id: 'security-feature-results', title: 'Security Feature Results', level: 2 as const },
  { id: 'data-consistency-results', title: 'Data Consistency Results', level: 2 as const },
  { id: 'anomaly-list', title: 'Anomaly List', level: 2 as const },
];

const content = `The Document Trust Factors panel presents the results of all document-side automated checks in a structured format that helps reviewers quickly understand the authenticity assessment of the submitted identity document. Rather than presenting raw check results as pass/fail flags, the panel organizes the evidence hierarchically: from an overall document trust score down through individual check results and, for flagged submissions, a detailed anomaly list with supporting evidence.

The overall document trust score aggregates the results of all document authentication layers — visual and forensic inspection, data extraction quality, cross-data validation, and document consistency — into a single 0–100 score. The score is displayed prominently at the top of the panel alongside a visual indicator: green for scores above the pass threshold, amber for borderline scores that fall in the review zone, and red for scores that fall below the fail threshold. The specific thresholds for each zone are configurable by the issuer.

Security feature results display the outcome of the visual and forensic inspection layer for each analyzed security feature category. For each feature type expected on the document — such as holographic overlay, microprinting, guilloche background, or laser engraving — the panel shows whether the feature was detected, whether it met the expected specification, and the confidence level of the assessment. Features that were absent, mismatched, or assessed at low confidence are highlighted for reviewer attention.

The data consistency results section shows the cross-data validation outcomes: whether VIZ and MRZ fields agreed, whether check digits were mathematically valid, and for chip-enabled documents, whether chip data matched the optically extracted values. Each comparison is shown as an individual row with the source values from each zone displayed side-by-side so reviewers can see the exact nature of any discrepancy.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/review-dashboard/document-trust-factors"
      title="Document Trust Factors"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-are-document-trust-factors">What are Document Trust Factors?</h2>
      <p>
        The Document Trust Factors panel presents the results of all document-side automated checks organized to help reviewers quickly understand the authenticity assessment of the submitted identity document. Rather than presenting raw check outputs as binary pass/fail flags, the panel structures the evidence from a high-level summary score down through individual layer results and, for flagged submissions, a granular anomaly list with specific evidence and document image annotations. This hierarchy allows reviewers to begin with a quick overall assessment and drill down only into the areas that warrant closer attention.
      </p>

      <h2 id="overall-document-trust-score">Overall Document Trust Score</h2>
      <p>
        The overall document trust score aggregates the results of all four document authentication layers — visual and forensic inspection, data extraction, cross-data validation, and document consistency checking — into a single 0–100 composite score. The score is displayed at the top of the Document Trust Factors panel with a color-coded indicator: scores in the high-confidence range appear in green, borderline scores that fall in the manual review zone appear in amber, and scores below the fail threshold appear in red. The exact boundaries of each zone are configured per issuer and can be set independently for different credential templates.
      </p>

      <h2 id="security-feature-results">Security Feature Results</h2>
      <p>
        The security feature results section shows the outcome of visual and forensic inspection for each security feature category expected on the submitted document. Displayed items include holographic and optically variable feature detection, microprinting quality assessment, guilloche background pattern verification, and any document-specific features defined in the template. For each feature, the panel shows the detection result (found or not found), the quality assessment (meets specification or degraded), and the confidence level of the assessment. Features that are missing, degraded, or assessed with low confidence are highlighted with an amber or red indicator.
      </p>

      <h2 id="data-consistency-results">Data Consistency Results</h2>
      <p>
        The data consistency results section presents the cross-data validation outcomes as a field-by-field comparison table. Each row shows a data field, the value extracted from the VIZ, the value extracted from the MRZ (if applicable), the value from the chip (if applicable), and a match indicator. For MRZ check digit validation, the section shows the field value, the printed check digit, and the independently computed check digit, with a red indicator if they disagree. This side-by-side display allows reviewers to see the exact character-level difference for any discrepancy and assess whether it is likely an OCR error, a formatting difference, or a genuine data inconsistency.
      </p>

      <h2 id="anomaly-list">Anomaly List</h2>
      <p>
        For submissions where the document authentication checks detected anomalies, the anomaly list at the bottom of the Document Trust Factors panel provides a structured enumeration of every flagged issue. Each anomaly entry includes a description of the specific issue, its severity classification (informational, moderate, or high), the authentication layer that detected it, and a link to the relevant region of the document image with the anomalous area highlighted. The anomaly list is ordered by severity so reviewers can address the most significant flags first. Reviewers can mark each anomaly as reviewed and add a note if they determine that a flagged anomaly is the result of document wear or capture conditions rather than fraud.
      </p>
    </ArticleWrapper>
  );
}
