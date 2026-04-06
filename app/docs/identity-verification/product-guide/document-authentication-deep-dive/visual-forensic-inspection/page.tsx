import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Visual & Forensic Inspection',
  description: 'How IwC analyzes the physical security features of identity documents to detect forgery and alteration.',
};

const toc = [
  { id: 'what-is-visual-forensic-inspection', title: 'What is Visual & Forensic Inspection?', level: 2 as const },
  { id: 'holographic-and-optical-features', title: 'Holographic and Optical Features', level: 2 as const },
  { id: 'microprinting-and-fine-detail', title: 'Microprinting and Fine Detail', level: 2 as const },
  { id: 'substrate-and-printing-analysis', title: 'Substrate and Printing Analysis', level: 2 as const },
  { id: 'alteration-detection', title: 'Alteration Detection', level: 2 as const },
];

const content = `Visual and forensic inspection is the authentication layer responsible for examining the physical security features embedded in identity documents. Modern identity documents are engineered with multiple layers of anti-forgery features that are difficult or impossible to replicate without access to the specialized equipment and materials used by official issuing facilities. IwC's inspection engine analyzes the document image for the expected presence and integrity of these features for the specific document type.

Holographic and optical variable features — including kinegrams, laser-engraved portraits, and color-shifting inks — produce distinctive visual properties that change depending on the angle of illumination. While a flat photograph of a document cannot fully capture these angle-dependent properties, IwC's capture guidance encourages applicants to capture the document under conditions where the optical features are visible, and the engine analyzes the captured image for the luminance and color patterns consistent with genuine optically variable elements.

Microprinting analysis examines fine-detail printed elements such as repeating text patterns printed at point sizes that are readable under magnification but appear as a solid line to the naked eye. On genuine documents, microprinting appears with sharp character edges because it is produced by high-resolution intaglio or offset printing processes. Digital reproductions of documents, including high-quality color photocopies and inkjet prints, cannot reproduce this level of fine-detail sharpness and typically produce microprinting areas that appear as blurred or smeared lines.

Substrate and printing method analysis examines characteristics of the document material itself. Genuine identity documents are typically produced on security paper or polycarbonate substrates with specific optical properties, and the printing is applied using intaglio, letterpress, or laser engraving processes that produce tactile and measurable ink deposit characteristics. Forgeries produced on standard paper or by standard printing methods often show substrate properties and ink deposition patterns that deviate from the genuine document specification.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/document-authentication-deep-dive/visual-forensic-inspection"
      title="Visual & Forensic Inspection"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-visual-forensic-inspection">What is Visual & Forensic Inspection?</h2>
      <p>
        Visual and forensic inspection is the authentication layer responsible for examining the physical security features embedded in identity documents. Modern identity documents are engineered with multiple layers of anti-forgery features that are difficult or impossible to replicate without access to the specialized equipment and materials used by official issuing facilities. IwC's inspection engine analyzes the document image for the expected presence and integrity of these features, comparing what is detected against the known feature specification for that document type.
      </p>

      <h2 id="holographic-and-optical-features">Holographic and Optical Features</h2>
      <p>
        Holographic and optically variable features — including kinegrams, laser-engraved color portraits, and color-shifting inks — produce distinctive visual properties that change depending on the viewing angle and incident light direction. While a flat camera capture cannot fully replicate multi-angle inspection, IwC's capture guidance encourages applicants to hold the document at an angle that makes holographic features visible, and the inspection engine analyzes the captured image for luminance gradients, spectral patterns, and color distribution consistent with genuine optically variable elements. Absent or incorrectly positioned holographic features are flagged as anomalies.
      </p>

      <h2 id="microprinting-and-fine-detail">Microprinting and Fine Detail</h2>
      <p>
        Microprinting analysis examines fine-detail printed elements — typically repeating text strings printed at 1–4 point size that read as solid lines without magnification. On genuine documents produced by high-resolution intaglio or offset printing, microprinting has sharp, well-defined character edges when examined at the pixel level. Digital reproductions, including color laser copies and high-resolution inkjet prints, cannot match this level of print fidelity and typically render microprinting as smeared or blurred lines. IwC examines known microprinting locations for each document type at the sub-pixel level to assess print quality consistency.
      </p>

      <h2 id="substrate-and-printing-analysis">Substrate and Printing Analysis</h2>
      <p>
        The substrate and printing analysis layer examines characteristics of the document material that are visible in the captured image. Genuine identity documents are produced on security paper with embedded security threads, polycarbonate sheets with internal laser-engraved data, or other specialized substrates. The printing processes — intaglio, letterpress, and laser engraving — each produce distinctive ink deposit profiles and edge characteristics. IwC's engine examines the document surface texture, ink deposit uniformity, and color layer registration against the expected profile for the document type, flagging deviations that are consistent with reproduction rather than genuine manufacture.
      </p>

      <h2 id="alteration-detection">Alteration Detection</h2>
      <p>
        Alteration detection focuses on evidence that a genuine document has been physically modified after issuance. Common alteration techniques include chemical erasure of original text and overprinting with new values, physical removal of the document's laminate layer to access underlying printed data, laser removal of engraved elements, and face substitution where the original portrait is removed and replaced. IwC's alteration detection analyzes the document for tell-tale signs of these interventions: irregular surface texture in specific zones, color inconsistencies between altered and unaltered areas, edge artifacts around portrait regions, and laminate bubbling or misalignment.
      </p>
    </ArticleWrapper>
  );
}
