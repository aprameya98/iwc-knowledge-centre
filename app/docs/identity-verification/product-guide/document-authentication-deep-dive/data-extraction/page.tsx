import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Data Extraction',
  description: 'How IwC extracts and parses identity data from all zones of a submitted document.',
};

const toc = [
  { id: 'role-of-data-extraction', title: 'Role of Data Extraction', level: 2 as const },
  { id: 'viz-parsing', title: 'VIZ Parsing', level: 2 as const },
  { id: 'mrz-parsing', title: 'MRZ Parsing', level: 2 as const },
  { id: 'nfc-data-groups', title: 'NFC Data Groups', level: 2 as const },
  { id: 'field-normalization', title: 'Field Normalization', level: 2 as const },
];

const content = `Data extraction is the layer of document authentication that converts raw document images into structured, queryable identity records. It operates at the intersection of document authentication and the broader automated pipeline — extracted data is used not only for internal consistency validation within document authentication, but also flows into the OCR Check output, the SOR Check query, and the Fraud Check screening. Accurate data extraction is therefore foundational to the correctness of multiple downstream checks.

The Visual Inspection Zone parser works from the document template to identify each labeled field region on the document face. The OCR engine extracts the text from each region, and the parser maps the extracted text to a standard field name using the template's field mapping configuration. Fields with non-standard layouts — such as two-line name fields or combined date formats — are handled by document-specific parsing rules stored in the template database.

MRZ parsing reads the standardized two- or three-line alphanumeric code printed at the bottom of passports and many national IDs. The MRZ encodes personal data in fixed-position character fields according to the ICAO 9303 standard, with check digit values appended to each variable-length field. IwC's MRZ parser reads the full string, splits it at the standardized field boundaries, decodes each field value, and independently computes all check digits to verify mathematical correctness before the values are accepted as valid.

For chip-enabled documents, IwC reads the NFC chip data groups specified in ICAO 9303: Data Group 1 (MRZ data), Data Group 2 (encoded portrait), Data Group 11 (additional personal details), and others depending on the document's specification. The chip data is digitally signed by the document's issuing authority and IwC verifies this signature before accepting the chip data as authoritative. Chip data takes precedence over optically extracted data when both are available.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/document-authentication-deep-dive/data-extraction"
      title="Data Extraction"
      contentText={content}
      toc={toc}
    >
      <h2 id="role-of-data-extraction">Role of Data Extraction</h2>
      <p>
        Data extraction is the layer of document authentication that converts raw document images into structured, queryable identity records. It operates at the intersection of document authentication and the broader automated pipeline — extracted data is used not only for internal consistency validation within document authentication, but also flows into the OCR Check output, the SOR Check query, and the Fraud Check screening. Accurate data extraction is foundational to the correctness of multiple downstream checks, which is why it is among the first processes to complete after a submission arrives.
      </p>

      <h2 id="viz-parsing">VIZ Parsing</h2>
      <p>
        The Visual Inspection Zone parser works from the document template database to identify each labeled field region on the document face. IwC uses the template to locate each field's bounding region, applies perspective correction to account for capture angle, and runs the OCR engine on each region individually. The extracted text is then mapped to a standardized field name using the template's field mapping configuration. Document-specific parsing rules handle non-standard field formats — for example, name fields that span two lines, combined city and country fields, or dates formatted with month abbreviations rather than numbers — to ensure reliable structured output regardless of national formatting conventions.
      </p>

      <h2 id="mrz-parsing">MRZ Parsing</h2>
      <p>
        MRZ parsing reads the standardized two- or three-line alphanumeric code at the bottom of passports and many national ID cards. The MRZ is formatted according to the ICAO 9303 standard with fixed field positions and mandatory check digit values calculated using a weighted sum algorithm applied to the preceding field characters. IwC's MRZ parser reads the full raw string, segments it at the standardized field boundaries, decodes each field value including the document type, issuing country, document number, date of birth, sex, expiry date, and optional fields, and then independently computes all check digits and compares them against the printed values to verify mathematical correctness.
      </p>

      <h2 id="nfc-data-groups">NFC Data Groups</h2>
      <p>
        For ePassports and NFC-capable national IDs, IwC reads the chip's data groups via NFC during enrollment. Data Group 1 contains the MRZ data in encoded form; Data Group 2 contains the holder's portrait as a JPEG or JPEG2000 image; Data Group 11 contains additional personal details such as full name and nationality in extended character sets; and other data groups carry document-specific information. All data groups are protected by the chip's active authentication and passive authentication mechanisms. IwC verifies the chip's Document Security Object digital signature against the issuing country's certificate before accepting chip data as authoritative, providing the highest level of document data integrity assurance.
      </p>

      <h2 id="field-normalization">Field Normalization</h2>
      <p>
        After extraction, all field values are normalized to a canonical form before being stored and passed to downstream checks. Name fields are unicode-normalized and stored in both their original form and a transliteration-normalized form to support cross-language matching in the SOR Check. Date fields are parsed and stored as ISO 8601 date strings regardless of the format on the document. Country codes are mapped to their ISO 3166-1 alpha-3 equivalents. This normalization step ensures that downstream checks operate on semantically consistent data rather than having to handle format variations independently.
      </p>
    </ArticleWrapper>
  );
}
