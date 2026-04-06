import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Document Authentication: How It Works',
  description: 'A deep dive into the multi-layer document authentication process used by IwC to verify identity document legitimacy.',
};

const toc = [
  { id: 'overview', title: 'Overview', level: 2 as const },
  { id: 'authentication-layers', title: 'Authentication Layers', level: 2 as const },
  { id: 'processing-pipeline', title: 'Processing Pipeline', level: 2 as const },
  { id: 'combining-signals', title: 'Combining Signals', level: 2 as const },
  { id: 'nfc-chip-verification', title: 'NFC Chip Verification', level: 2 as const },
];

const content = `Document authentication in IwC is a multi-layer process that analyzes submitted identity documents from four distinct angles: visual and forensic inspection of security features, data extraction and parsing, cross-data validation between document zones, and structural consistency checking against the expected document template. These four layers are not redundant — each catches a different class of fraud — and the combined output gives reviewers a comprehensive picture of document authenticity.

The authentication process begins the moment OCR has completed. The document image is passed through the visual and forensic inspection engine, which examines the document's security features against the expected feature set for that document type. Simultaneously, the data extraction layer parses all text zones to build a structured data record. These two processes run in parallel before feeding into the cross-data validation and consistency check layers that follow.

The processing pipeline is designed to be fast enough to complete within the overall automated review window (typically under 15 seconds) while being thorough enough to detect sophisticated forgeries. The engine uses a combination of classical computer vision techniques for measurable geometric properties and deep learning classifiers for subjective visual quality assessments that are harder to formalize as explicit rules.

When all four authentication layers have completed, IwC combines their outputs using a weighted risk model to produce a single document trust score and an ordered list of anomalies. The weights reflect the relative diagnostic power of each layer for the specific document type — for example, MRZ check digit failures are weighted heavily because they are mathematically unambiguous, while visual texture anomalies are weighted somewhat lower because they can be affected by capture quality.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/document-authentication-deep-dive/how-it-works"
      title="Document Authentication: How It Works"
      contentText={content}
      toc={toc}
    >
      <h2 id="overview">Overview</h2>
      <p>
        Document authentication in IwC is a multi-layer process that analyzes submitted identity documents from four distinct angles: visual and forensic inspection of security features, data extraction and parsing, cross-data validation between document zones, and structural consistency checking against the expected document template. These four layers are not redundant — each catches a different class of fraud — and the combined output gives reviewers a comprehensive picture of document authenticity.
      </p>

      <h2 id="authentication-layers">Authentication Layers</h2>
      <p>
        The four layers address four distinct attack vectors. Visual and forensic inspection catches physically altered or fabricated documents by examining whether the expected security features are present and intact. Data extraction catches OCR-level tampering where printed text has been modified. Cross-data validation catches targeted alterations where an attacker changes one data zone but not all — for example, changing the date of birth in the VIZ but not in the MRZ. Document consistency checking catches wholesale forgeries where the document layout or typography doesn't match any legitimate template for the claimed issuing authority.
      </p>

      <h2 id="processing-pipeline">Processing Pipeline</h2>
      <p>
        The authentication process begins immediately after OCR completes. The document image passes through the visual and forensic inspection engine, which runs the security feature analysis concurrently with the data extraction layer's parsing of structured text zones. These two processes produce their outputs independently and then feed into the cross-data validation layer, which compares the extracted fields across all document zones. Finally, the consistency checker overlays the detected document structure against the stored template. The entire pipeline typically completes within 3 to 8 seconds.
      </p>

      <h2 id="combining-signals">Combining Signals</h2>
      <p>
        When all four layers have completed, IwC combines their outputs using a weighted risk model to produce a single document trust score on a 0–100 scale and an ordered list of anomalies ranked by severity. The weights reflect the diagnostic power of each signal type for the specific document class — MRZ check digit failures receive high weight because they are mathematically unambiguous, while visual texture anomalies receive somewhat lower weight because image capture quality can affect them. The trust score and the full anomaly list are both visible in the Document Trust Factors panel of the Review Dashboard.
      </p>

      <h2 id="nfc-chip-verification">NFC Chip Verification</h2>
      <p>
        For ePassports and NFC-enabled national IDs such as the Philippine National ID, IwC supports an additional authentication layer: NFC chip reading. The chip stores the document data in ICAO-specified data groups and protects it with digital signatures issued by the document's national issuing authority. IwC verifies these signatures against the corresponding country-signing certificate, confirming that the chip data has not been tampered with since the document was issued. Chip verification is the highest-assurance authentication method available and significantly reduces the scope of required visual and data-layer checks when it succeeds.
      </p>
    </ArticleWrapper>
  );
}
