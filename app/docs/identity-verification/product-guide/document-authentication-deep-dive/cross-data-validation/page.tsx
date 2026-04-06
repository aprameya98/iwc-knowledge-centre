import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Cross-Data Validation',
  description: 'How IwC checks that identity data is consistent across all zones of a submitted document.',
};

const toc = [
  { id: 'what-is-cross-data-validation', title: 'What is Cross-Data Validation?', level: 2 as const },
  { id: 'viz-vs-mrz-comparison', title: 'VIZ vs. MRZ Comparison', level: 2 as const },
  { id: 'check-digit-validation', title: 'Check Digit Validation', level: 2 as const },
  { id: 'chip-data-comparison', title: 'Chip Data Comparison', level: 2 as const },
  { id: 'interpreting-discrepancies', title: 'Interpreting Discrepancies', level: 2 as const },
];

const content = `Cross-data validation compares the identity fields extracted from different zones of the same document to verify that they agree. Identity documents encode core personal data in multiple locations precisely because consistency between zones is a security feature — an attacker who modifies the data in one zone must also modify all other zones to avoid detection. Any disagreement between zones is a meaningful signal that warrants reviewer attention.

The most fundamental cross-data comparison is between the Visual Inspection Zone and the Machine-Readable Zone. For every field that appears in both zones — typically name, date of birth, document number, nationality, and expiry date — IwC compares the VIZ-extracted value against the MRZ-extracted value. Because the MRZ uses a strict character encoding scheme, values that differ even by a single character are flagged. Where the MRZ encoding may legitimately differ from the VIZ representation (for example, names with special characters that the MRZ encodes as letter substitutions), IwC applies the ICAO 9303 transliteration rules before comparing.

Check digit validation is a specific form of cross-data validation unique to MRZ-bearing documents. The MRZ includes check digits after the document number, date of birth, expiry date, and other variable fields. Each check digit is a single digit calculated from the preceding field using a weighted modulo-10 algorithm specified in ICAO 9303. IwC independently recalculates every check digit from the extracted field values and compares each recalculated digit against the printed digit. A check digit mismatch is an unambiguous error — it either means the extracted field value is incorrect (possibly due to an OCR error or physical damage), or the MRZ data has been altered.

For chip-enabled documents, a third comparison is performed: the chip data groups are compared against both the VIZ and MRZ values. Because the chip data is digitally signed by the issuing authority, it is the highest-trust source. Disagreement between chip data and optically extracted data is a very strong fraud signal.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/document-authentication-deep-dive/cross-data-validation"
      title="Cross-Data Validation"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-cross-data-validation">What is Cross-Data Validation?</h2>
      <p>
        Cross-data validation compares the identity fields extracted from different zones of the same document to verify that they agree with one another. Identity documents encode core personal data in multiple locations precisely because consistency between zones is itself a security feature — an attacker who modifies data in one zone must also correctly modify all other zones and their associated check digits to avoid detection. Any disagreement between data zones is therefore a meaningful anomaly signal that warrants reviewer attention, even if each zone individually appears internally coherent.
      </p>

      <h2 id="viz-vs-mrz-comparison">VIZ vs. MRZ Comparison</h2>
      <p>
        The most fundamental cross-data comparison is between the Visual Inspection Zone and the Machine-Readable Zone. For every field that appears in both zones — typically surname, given name, date of birth, document number, nationality, sex, and expiry date — IwC compares the VIZ-extracted value against the MRZ-extracted value field by field. Where the MRZ encoding may legitimately differ from the VIZ representation — for example, names containing diacritics, hyphens, or special characters that the MRZ character set cannot represent — IwC applies the ICAO 9303 transliteration and substitution rules before comparing, preventing false positives from legitimate encoding differences.
      </p>

      <h2 id="check-digit-validation">Check Digit Validation</h2>
      <p>
        Check digit validation is a specific and mathematically rigorous form of cross-data validation. The MRZ includes check digit characters appended to the document number, date of birth, expiry date, and optional data field. Each check digit is computed from the preceding field characters using a weighted modulo-10 algorithm specified in ICAO 9303. IwC independently recalculates every check digit from the extracted field values using the same algorithm and compares the computed value against the printed check digit character. A mismatch is either evidence of an OCR extraction error, physical damage to the MRZ, or deliberate alteration of the MRZ data — all of which are conditions requiring reviewer attention.
      </p>

      <h2 id="chip-data-comparison">Chip Data Comparison</h2>
      <p>
        For ePassports and NFC-enabled documents, a third cross-data comparison is performed between the chip's data groups and the optically extracted VIZ and MRZ values. Because chip data is digitally signed by the document's national issuing authority at the time of issuance, it represents the highest-trust data source available. Disagreement between the signed chip data and the optically extracted values is a very strong fraud or tampering signal — it suggests that the physical document has been altered after issuance while the chip retains the original unaltered data. IwC highlights chip-vs-optical discrepancies prominently in the Document Trust Factors panel.
      </p>

      <h2 id="interpreting-discrepancies">Interpreting Discrepancies</h2>
      <p>
        Not every cross-data discrepancy indicates fraud. OCR errors on damaged or low-quality document images can produce false disagreements between zones. Legitimate data encoding differences — such as a name that is abbreviated in one zone but spelled fully in another — can produce apparent discrepancies that are actually consistent. IwC classifies each discrepancy by type and severity: mathematically unambiguous errors such as check digit failures are high-severity, while single-character name differences are lower-severity and may reflect OCR uncertainty rather than tampering. Reviewers can view the raw extracted values for each zone side-by-side in the Document Trust Factors panel to make their own assessment.
      </p>
    </ArticleWrapper>
  );
}
