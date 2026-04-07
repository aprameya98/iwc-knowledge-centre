import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Automated Checks | Identity Verification (IDV)',
  description: 'The six automated checks IDV runs on every submission — OCR, biometric match, liveness, document authentication, SOR, and fraud.',
};

const toc = [
  { id: 'ocr', title: 'OCR Check', level: 2 as const },
  { id: 'biometric-match', title: 'Biometric Match', level: 2 as const },
  { id: 'liveness', title: 'Liveness Detection', level: 2 as const },
  { id: 'document-auth', title: 'Document Authentication', level: 2 as const },
  { id: 'sor', title: 'System of Record Check', level: 2 as const },
  { id: 'fraud', title: 'Fraud Check', level: 2 as const },
];

const contentText = `IDV runs six automated checks on every submission in parallel. OCR extracts text from the Visual Inspection Zone and Machine-Readable Zone producing per-field confidence scores. Biometric match compares the document portrait against the live selfie using a deep learning model producing a 0 to 100 similarity score. Liveness detection determines whether the selfie was captured from a live person using passive liveness analysis and optional active challenge-response. Document authentication verifies the document is genuine across visual forensic data extraction cross-data validation and structural consistency layers. The SOR check validates identity attributes against the issuer's authoritative data source. The fraud check runs biometric deduplication document screening and machine learning fraud pattern models.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/automated-checks"
      title="Automated Checks"
      contentText={contentText}
      toc={toc}
    >
      <p>
        IDV runs six checks on every applicant submission in parallel. No check waits for another to complete — all six run simultaneously and their results are assembled into a single submission record. Each check produces a score, a pass/fail signal, and a set of flags that inform the reviewer's decision.
      </p>

      <h2 id="ocr">OCR Check</h2>
      <p>
        The OCR check extracts text data from two zones on every submitted document:
      </p>
      <ul>
        <li><strong>Visual Inspection Zone (VIZ):</strong> The human-readable printed fields on the face of the document — name, date of birth, document number, expiry date, and so on. Extracted using document-aware template matching that accounts for the 1,500+ supported document layouts.</li>
        <li><strong>Machine-Readable Zone (MRZ):</strong> The standardised two- or three-line code at the bottom of travel documents and many national IDs, formatted to ICAO 9303. Check digits are validated as part of extraction.</li>
      </ul>
      <p>
        Every extracted field carries a confidence score. Low-confidence fields are flagged for reviewer attention. The OCR output is the foundational data layer used by all downstream checks — SOR validation, cross-data comparison, and document consistency checking all depend on it.
      </p>

      <h2 id="biometric-match">Biometric Match</h2>
      <p>
        The biometric match check compares the portrait photograph on the submitted document against the live selfie captured during enrollment. A deep convolutional neural network generates a feature vector for each image; cosine similarity between the two vectors is mapped to a 0–100 match score.
      </p>
      <p>
        Genuine matches typically score in the 80–98 range. The pass threshold is configurable per issuer and per risk tolerance — a higher threshold reduces false accepts at the cost of more genuine submissions requiring human review. The model is robust to expected real-world variation: aging, glasses, facial hair, lighting differences, and moderate pose changes.
      </p>
      <p>
        Fairness is actively monitored: match accuracy is tracked across demographic groups and benchmarked against NIST FRVT results to ensure consistent performance across the population the system serves.
      </p>

      <h2 id="liveness">Liveness Detection</h2>
      <p>
        Liveness detection confirms that the selfie was captured from a live person — not a photograph, screen, mask, or other spoofing attempt. IDV supports two complementary mechanisms:
      </p>
      <ul>
        <li>
          <strong>Passive liveness:</strong> Analyses intrinsic image properties — texture gradients, depth cues, micro-movement artefacts, and reflection patterns — without requiring any action from the applicant. Runs immediately on selfie capture. Effective against printed photos, screens, and laminated prints. Produces a confidence score typically thresholded at 70–85.
        </li>
        <li>
          <strong>Active liveness:</strong> A challenge-response step presented to the applicant — blink, turn head, smile, or open mouth. Challenges are randomised per session to prevent replay attacks. Response validation checks for physiologically plausible timing and movement. Can be configured as mandatory, adaptive (triggered when passive liveness confidence falls below threshold), or credential-template-specific.
        </li>
      </ul>
      <Callout type="note">
        Liveness detection is certified to <strong>ISO/IEC 30107-3 iBeta Level 2</strong> — the industry benchmark for anti-spoofing performance. This certification is maintained through ongoing re-evaluation cycles.
      </Callout>

      <h2 id="document-auth">Document Authentication</h2>
      <p>
        Document authentication determines whether the submitted document is genuine. It runs four parallel sub-checks whose outputs are combined in a weighted risk model:
      </p>
      <table>
        <thead>
          <tr>
            <th>Sub-check</th>
            <th>What It Examines</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Visual &amp; Forensic Inspection</strong></td>
            <td>Security features (holograms, microprinting, optically variable inks), substrate properties, printing methods. Detects alterations including chemical erasure, laminate removal, laser tampering, and face substitution.</td>
          </tr>
          <tr>
            <td><strong>Data Extraction</strong></td>
            <td>VIZ field parsing against document-specific templates, MRZ parsing with ICAO 9303 check digit validation, NFC chip data reading for ePassports and chip-enabled IDs.</td>
          </tr>
          <tr>
            <td><strong>Cross-Data Validation</strong></td>
            <td>VIZ vs. MRZ data comparison using ICAO 9303 transliteration rules, check digit validation using weighted modulo-10 algorithm, chip-to-optical comparison where available (chip data is highest-trust source).</td>
          </tr>
          <tr>
            <td><strong>Document Consistency Check</strong></td>
            <td>Layout and typography against the document's template specification, colour profile analysis, dimensional and aspect ratio verification. Covers 1,500+ document types from 200+ countries.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Discrepancies are classified by severity. Minor inconsistencies are flagged for reviewer attention. Definitive forgery signals are escalated automatically.
      </p>

      <h2 id="sor">System of Record Check</h2>
      <p>
        The SOR check validates the identity attributes extracted from the document against the issuer's authoritative data source — typically the case management system or identity registry that holds the ground-truth applicant record.
      </p>
      <p>
        Matching uses fuzzy logic to tolerate legitimate variation: name transliterations between scripts, hyphenation differences, date format variations, and minor data entry discrepancies. Multiple SOR integrations are supported, and the matching thresholds are configurable per field and per programme.
      </p>
      <p>
        A failed SOR check does not automatically reject a submission — it surfaces as a flag in the Review Dashboard for the reviewer to assess, since the discrepancy may reflect a data quality issue in the SOR rather than a fraudulent submission.
      </p>

      <h2 id="fraud">Fraud Check</h2>
      <p>
        The fraud check runs three independent sub-processes:
      </p>
      <ul>
        <li>
          <strong>Biometric deduplication:</strong> Compares the applicant's biometric against previously enrolled faces in the system. Detects cases where the same person attempts to enrol under multiple identities.
        </li>
        <li>
          <strong>Document screening:</strong> Cross-references the submitted document number and attributes against a database of previously flagged, reported, or revoked documents.
        </li>
        <li>
          <strong>Machine learning fraud models:</strong> Evaluate the full submission — behavioural signals, submission metadata, document image properties, and extracted data — against learned patterns associated with fraudulent applications.
        </li>
      </ul>
      <Callout type="important">
        Hard fraud signals — definitive biometric duplicate matches or flagged document hits — route the submission to mandatory human review and cannot be auto-approved regardless of other check results.
      </Callout>
    </ArticleWrapper>
  );
}
