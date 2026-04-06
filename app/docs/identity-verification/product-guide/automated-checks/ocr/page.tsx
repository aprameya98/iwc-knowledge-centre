import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'OCR Check',
  description: 'How IwC uses optical character recognition to extract text fields from identity documents.',
};

const toc = [
  { id: 'what-is-the-ocr-check', title: 'What is the OCR Check?', level: 2 as const },
  { id: 'visual-inspection-zone', title: 'Visual Inspection Zone (VIZ)', level: 2 as const },
  { id: 'machine-readable-zone', title: 'Machine-Readable Zone (MRZ)', level: 2 as const },
  { id: 'extracted-fields', title: 'Extracted Fields', level: 2 as const },
  { id: 'ocr-confidence-scoring', title: 'OCR Confidence Scoring', level: 2 as const },
];

const content = `The OCR Check is the first step in IwC's automated review pipeline. It uses optical character recognition combined with document-type-specific parsing models to extract structured data fields from every submitted identity document. Because later checks — including Document Authentication, the System of Record Check, and the Fraud Check — depend on the extracted text data, OCR runs before all other checks.

IwC extracts data from two distinct zones on identity documents. The Visual Inspection Zone (VIZ) is the human-readable area of the document containing printed fields such as the holder's name, date of birth, address, and document number. The Machine-Readable Zone (MRZ) is the standardized two- or three-line code at the bottom of passports and certain national ID cards, formatted according to the ICAO 9303 standard and designed for automated reading.

The OCR engine is tuned for identity documents specifically, trained on a large corpus of real document images across varied conditions including partial glare, low-resolution scans, worn documents, and non-standard fonts. For each document type in IwC's reference database, the engine knows the expected layout and label positions, enabling it to correctly attribute extracted text to the right field even when font rendering varies between issuing authorities.

Extracted fields are assigned individual confidence scores that reflect the engine's certainty about each extracted value. Fields with confidence below the configured threshold are flagged in the reviewer dashboard for manual verification. The full set of extracted fields is made available to all downstream checks and is displayed in the Applicant Information panel of the Review Dashboard.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/automated-checks/ocr"
      title="OCR Check"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-the-ocr-check">What is the OCR Check?</h2>
      <p>
        The OCR Check is the first step in IwC's automated review pipeline. It uses optical character recognition combined with document-type-specific parsing models to extract structured data fields from every submitted identity document. Because later checks — including Document Authentication, the System of Record Check, and the Fraud Check — depend on the extracted text data, OCR runs before all other checks and its results are made available to the entire pipeline.
      </p>

      <h2 id="visual-inspection-zone">Visual Inspection Zone (VIZ)</h2>
      <p>
        The Visual Inspection Zone is the human-readable area of the identity document — the portion that a person can read with their eyes. It contains printed fields such as the holder's surname, given name, date of birth, nationality, document number, issue date, expiry date, and any additional document-specific fields such as residential address, blood type, or issuing authority. IwC's OCR engine identifies each field by its spatial position relative to the document template, extracts the value, and maps it to a standardized field name for downstream processing.
      </p>

      <h2 id="machine-readable-zone">Machine-Readable Zone (MRZ)</h2>
      <p>
        The Machine-Readable Zone is a standardized block of text, typically two or three lines of uppercase alphanumeric characters, printed at the bottom of passports and many national ID cards according to the ICAO 9303 standard. The MRZ encodes key identity fields in a fixed format along with check digit values calculated from the data itself. IwC's OCR engine reads the MRZ and independently validates each check digit to confirm that the encoded data has not been altered. MRZ parsing is typically more reliable than VIZ extraction because the character set, font, and layout are strictly standardized.
      </p>

      <h2 id="extracted-fields">Extracted Fields</h2>
      <p>
        The exact set of fields extracted depends on the document type, but the standard set includes: surname, given name(s), date of birth, nationality, document number, document type, issuing country, issue date, expiry date, and sex. For documents with additional data zones — such as the Philippine National ID's residential address field or driver's licences with vehicle class information — IwC extracts those additional fields as well. All extracted fields are displayed in the Applicant Information panel of the Review Dashboard and are passed to downstream checks.
      </p>

      <h2 id="ocr-confidence-scoring">OCR Confidence Scoring</h2>
      <p>
        Each extracted field is assigned an individual confidence score between 0 and 100, reflecting the OCR engine's certainty about the extracted value. Scores are derived from character-level recognition probabilities and are adjusted upward when VIZ and MRZ values for the same field agree. Fields with a confidence score below the reviewer threshold — configurable per issuer — are highlighted in the Review Dashboard so reviewers can verify them against the original document image. Overall OCR pass/fail is determined by whether all required fields were extracted above threshold.
      </p>
    </ArticleWrapper>
  );
}
