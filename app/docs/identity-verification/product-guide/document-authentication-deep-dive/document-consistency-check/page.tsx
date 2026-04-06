import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Document Consistency Check',
  description: 'How IwC verifies the structural and visual integrity of identity documents against known templates.',
};

const toc = [
  { id: 'what-is-document-consistency', title: 'What is Document Consistency?', level: 2 as const },
  { id: 'template-database', title: 'Template Database', level: 2 as const },
  { id: 'layout-and-typography-checks', title: 'Layout and Typography Checks', level: 2 as const },
  { id: 'color-and-background-checks', title: 'Color and Background Checks', level: 2 as const },
  { id: 'dimensional-checks', title: 'Dimensional Checks', level: 2 as const },
];

const content = `Document consistency checking verifies that the submitted document's structural properties — its field layout, typography, color scheme, background patterns, and overall visual design — match what is expected for the declared document type and issuing version. A document that is genuine in all its data but structurally inconsistent with its claimed type is either a forgery using incorrect template specifications, a document from an unrecognized version, or a heavily altered genuine document.

IwC maintains a reference template database covering over 1,500 document types from more than 200 countries, with each template capturing the precise specifications for a specific document type and issuance version. Templates include field bounding boxes relative to the document edges, font face and size specifications for each text zone, expected background guilloche pattern parameters, color profile ranges for each document region, and version-specific design elements that distinguish different issuance runs of the same document type.

Layout and typography checks verify that each detected text field falls within the expected bounding region for its label and that the font used matches the expected typeface. Official identity documents use controlled fonts — often proprietary or restricted typefaces — that are consistent across all documents of that type. A text field rendered in a font that does not match the expected specification, or positioned outside its expected region, indicates that the document was produced outside the official issuance process.

Color and background checks analyze the document's color profile in each zone and compare it against the expected range for that document type. Genuine documents have consistent color reproduction because they are printed by a single issuing authority using controlled inks on controlled substrates. Forgeries produced by scanning and reprinting original documents, or by compositing elements from multiple source images, often introduce color profile inconsistencies in specific zones that deviate from the expected range.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/document-authentication-deep-dive/document-consistency-check"
      title="Document Consistency Check"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-document-consistency">What is Document Consistency?</h2>
      <p>
        Document consistency checking verifies that the submitted document's structural properties — its field layout, typography, color scheme, background patterns, and overall visual design — match what is expected for the claimed document type and issuing version. A document that passes data extraction and cross-data validation but fails consistency checking may be a sophisticated forgery that correctly replicates the encoded data but uses an incorrect or approximated visual template, or it may be a genuine document that has been physically altered in ways that disturb its structural properties.
      </p>

      <h2 id="template-database">Template Database</h2>
      <p>
        IwC maintains a reference template database covering over 1,500 document types from more than 200 countries and territories. Each template captures the precise specifications for a specific document type and issuance version, including: field bounding boxes relative to document edges, expected font faces and sizes for each text zone, background guilloche pattern geometry and color parameters, expected color profiles for each document region, portrait zone dimensions and placement, and version-specific design elements that distinguish different issuance runs of the same document type (for example, different passport booklet versions issued in different years). The database is continuously updated as new document versions are issued worldwide.
      </p>

      <h2 id="layout-and-typography-checks">Layout and Typography Checks</h2>
      <p>
        Layout checks verify that each detected text field falls within the expected bounding region defined in the template. A field that is positioned outside its expected region — even by a small margin — is flagged as a layout anomaly. Typography checks verify that the font used for each field matches the expected typeface specification. Official identity documents use controlled fonts, often proprietary typefaces used exclusively by specific national issuing authorities. A text zone rendered in a generic or incorrect typeface indicates that the document was produced outside the official printing process, or that an original field was removed and replaced with a reprinted version using a different font.
      </p>

      <h2 id="color-and-background-checks">Color and Background Checks</h2>
      <p>
        Color and background checks analyze the document's color profile across multiple zones and compare the measured values against the expected ranges for that document type. Genuine documents have consistent color reproduction because they are produced by a single issuing authority using controlled inks and printing processes. Scanned-and-reprinted forgeries typically show color shifts — particularly in background guilloche pattern areas — because home and office printers cannot accurately reproduce the ink colors of the original. Composited forgeries may show color profile discontinuities at the boundaries between original document regions and substituted elements.
      </p>

      <h2 id="dimensional-checks">Dimensional Checks</h2>
      <p>
        Dimensional checks verify the proportions of the submitted document image against the expected aspect ratio and internal dimensional relationships for the document type. Most identity documents conform to ISO/IEC 7810 card dimensions (ID-1 credit card size) or ICAO 9303 travel document dimensions, with strict internal proportions for zones such as the portrait, the MRZ, and the VIZ. When the submitted image shows proportions that don't match the expected template — after accounting for perspective distortion — it may indicate that the image is of a reproduction rather than the original document, or that the document's physical dimensions have been altered.
      </p>
    </ArticleWrapper>
  );
}
