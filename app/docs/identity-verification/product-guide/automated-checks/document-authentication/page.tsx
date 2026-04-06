import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Document Authentication',
  description: 'How IwC verifies the legitimacy and integrity of submitted identity documents.',
};

const toc = [
  { id: 'what-is-document-authentication', title: 'What is Document Authentication?', level: 2 as const },
  { id: 'security-feature-analysis', title: 'Security Feature Analysis', level: 2 as const },
  { id: 'template-matching', title: 'Template Matching', level: 2 as const },
  { id: 'data-zone-consistency', title: 'Data Zone Consistency', level: 2 as const },
  { id: 'authentication-result', title: 'Authentication Result', level: 2 as const },
];

const content = `Document Authentication is the check responsible for determining whether the submitted identity document is genuine. It goes beyond simply reading the document's data — it examines the document's physical security features, compares its layout and typography against a reference template, validates internal data consistency, and checks the mathematical integrity of encoded values such as MRZ check digits. A document can contain accurate data and still be fraudulent; Document Authentication is designed to catch forgeries and alterations that a data-only check would miss.

Security feature analysis examines the document image for expected protective elements. Depending on the document type, these may include holographic overlays, microprinting along borders or text fields, UV-reactive inks visible under ultraviolet light, guilloche background patterns, laser perforations, and tactile relief elements. IwC's imaging pipeline captures or estimates these features from the submitted image and compares them against the expected feature set for the document type. Missing or visually inconsistent security features are flagged as anomalies.

Template matching compares the detected document against IwC's reference database of over 1,500 document types from more than 200 countries. The database contains precise layout specifications for every supported document, including field positions, fonts, dimensions, and expected visual characteristics. Any deviation from the template — a field in the wrong position, a font that doesn't match the issuer's specification, or a background pattern with incorrect geometry — raises a consistency flag.

Data zone consistency checking validates that the information encoded in different parts of the document agrees. For example, the date of birth printed in the VIZ should match the date encoded in the MRZ. MRZ check digits are recalculated from the extracted values and compared against the printed digits. Any disagreement between data zones indicates a possible alteration and is flagged for human review.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/automated-checks/document-authentication"
      title="Document Authentication"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-document-authentication">What is Document Authentication?</h2>
      <p>
        Document Authentication is the check responsible for determining whether the submitted identity document is genuine. It goes beyond simply reading the document's data — it examines the document's physical security features, compares its layout and typography against a reference template, validates internal data consistency, and checks the mathematical integrity of encoded values such as MRZ check digits. A document can contain accurate data and still be fraudulent; Document Authentication is designed to catch forgeries and alterations that a data-only check would miss.
      </p>

      <h2 id="security-feature-analysis">Security Feature Analysis</h2>
      <p>
        Security feature analysis examines the document image for the protective elements expected for that document type. Depending on the document, these may include holographic overlays and kinegrams, microprinting along text field borders, guilloche background patterns with complex geometry, laser perforation portraits, and document-specific color-shifting inks. IwC's imaging pipeline analyzes the submitted document image for the presence, position, and visual characteristics of each expected feature. Missing or visually inconsistent security features are recorded as anomalies in the authentication result.
      </p>

      <h2 id="template-matching">Template Matching</h2>
      <p>
        IwC maintains a reference database of over 1,500 document types from more than 200 countries and territories, each with precise specifications covering field layout, typography, color profile, and expected visual characteristics. When a document is submitted, IwC first classifies the document type and then overlays the document image against the matching template. Any structural deviation — a field placed outside its expected bounds, a font that doesn't match the issuer specification, or a background element with incorrect geometry — is recorded as a template consistency anomaly.
      </p>

      <h2 id="data-zone-consistency">Data Zone Consistency</h2>
      <p>
        Identity documents encode the same core data fields in multiple locations — the visual inspection zone, the machine-readable zone, and in chip-enabled documents, the NFC data groups. Data zone consistency checking verifies that these representations agree. For MRZ-bearing documents, IwC recalculates all check digits from the extracted field values and compares them against the printed digits. A check digit mismatch is a strong indicator of document tampering, since modifying a data field without updating the check digit produces an inconsistency that this check will catch.
      </p>

      <h2 id="authentication-result">Authentication Result</h2>
      <p>
        The Document Authentication check produces a structured result that includes an overall pass or fail determination, a list of any flagged anomalies with descriptions, and a confidence score for each analyzed security feature. This result is displayed in the Document Trust Factors panel of the Review Dashboard. Reviewers can drill into each anomaly to see the specific feature or data zone that triggered the flag, along with the original document image annotated with the relevant regions highlighted for visual inspection.
      </p>
    </ArticleWrapper>
  );
}
