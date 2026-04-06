import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Applicant Information',
  description: 'What applicant data is shown in the IwC Review Dashboard and how it is organized.',
};

const toc = [
  { id: 'what-is-shown', title: 'What is Shown', level: 2 as const },
  { id: 'extracted-identity-fields', title: 'Extracted Identity Fields', level: 2 as const },
  { id: 'document-images', title: 'Document Images', level: 2 as const },
  { id: 'enrollment-metadata', title: 'Enrollment Metadata', level: 2 as const },
  { id: 'field-confidence-indicators', title: 'Field Confidence Indicators', level: 2 as const },
];

const content = `The Applicant Information panel is the section of the Review Dashboard that presents the structured identity data extracted from the enrollment submission. It is the reviewer's primary reference for understanding who the applicant is and what document they submitted. The panel organizes extracted data fields alongside the original document images so reviewers can verify extracted values against their source without switching between screens.

Extracted identity fields are the structured data values produced by the OCR Check and data extraction pipeline. For most identity documents, these include surname, given names, date of birth, document number, document type, issuing country and authority, issue date, expiry date, nationality, and sex. For documents with additional fields — such as the Philippine National ID's address or driver's licences with vehicle class data — those additional fields are displayed as well. Each field is labeled with its standard field name and its source zone (VIZ, MRZ, or chip) so reviewers understand where each value was extracted from.

Document images are displayed in high resolution alongside the extracted fields. For submissions with front and back document images, both are accessible. Reviewers can zoom into specific regions of the document image to verify extracted field values against the printed source. For ePassports and NFC-enabled documents, a separate chip data summary panel shows the data read from the chip and its verification status.

Enrollment metadata accompanies the identity fields and document images. This metadata includes the submission timestamp, the enrollment channel (Wallet app or IDV Browser), the device type, and the geographic location of the enrollment (at the country or city level, depending on the issuer's data retention configuration). The metadata is relevant to reviewers in fraud assessment contexts, where the enrollment location or device type may be inconsistent with the applicant's claimed identity.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/review-dashboard/applicant-information"
      title="Applicant Information"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-shown">What is Shown</h2>
      <p>
        The Applicant Information panel is the section of the Review Dashboard that presents the structured identity data extracted from the enrollment submission. It gives reviewers a complete view of who the applicant claims to be, based on the document they submitted and the data extracted from it. The panel organizes extracted data fields alongside the original document images so reviewers can verify extracted values against their source without navigating away from the main review screen.
      </p>

      <h2 id="extracted-identity-fields">Extracted Identity Fields</h2>
      <p>
        Extracted identity fields are the structured data values produced by the OCR Check and data extraction pipeline. For most identity documents, the standard set of displayed fields includes: surname and given names (displayed separately and in combined form), date of birth, document number, document type and subtype, issuing country and issuing authority, issue date and expiry date, nationality, and sex. For documents with additional data zones — such as the Philippine National ID with its residential address field, or driver's licences with vehicle class categories — those additional fields are displayed below the standard set. Each field is labeled with both its standard field name and the zone it was extracted from (VIZ, MRZ, or chip).
      </p>

      <h2 id="document-images">Document Images</h2>
      <p>
        Original document images are displayed in high resolution alongside the extracted fields. For documents with both front and back surfaces, image thumbnails for both faces are displayed, with click-to-expand for full-resolution viewing. Reviewers can zoom in to specific regions to verify the accuracy of extracted values against the printed source text. Document image viewers include annotation overlays that highlight the specific regions from which flagged or low-confidence fields were extracted, making it easy for reviewers to locate and examine problem areas without scanning the full document image.
      </p>

      <h2 id="enrollment-metadata">Enrollment Metadata</h2>
      <p>
        Enrollment metadata is displayed alongside the applicant's identity data. Standard metadata includes the submission timestamp, the enrollment channel (Credence Wallet mobile app or IDV Browser), the device operating system and approximate model category, and the geographic location of the enrollment at country or city level (subject to the issuer's data retention and privacy configuration). This metadata is particularly relevant for fraud assessment: an enrollment that is geographically implausible given the applicant's claimed identity or address, or that was submitted from a device type inconsistent with the issuer's expected applicant population, may warrant additional scrutiny.
      </p>

      <h2 id="field-confidence-indicators">Field Confidence Indicators</h2>
      <p>
        Each extracted field in the Applicant Information panel is accompanied by a confidence indicator showing the OCR engine's certainty about the extracted value. Fields with high confidence (typically above 90%) display a subtle positive indicator. Fields with moderate confidence (70–90%) display a neutral indicator. Fields with low confidence (below the reviewer notification threshold) are highlighted with a warning indicator and are automatically included in the list of items reviewers should verify against the document image. Confidence indicators help reviewers prioritize their manual verification effort when a submission has many fields to review.
      </p>
    </ArticleWrapper>
  );
}
