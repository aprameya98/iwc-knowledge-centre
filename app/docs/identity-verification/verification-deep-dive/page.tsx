import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Verification Deep Dive | Identity Verification (IDV)',
  description: 'Technical detail on document authentication and biometric verification — how each layer works, supported documents, and certifications.',
};

const toc = [
  { id: 'doc-auth-how', title: 'Document Authentication — How It Works', level: 2 as const },
  { id: 'visual-forensic', title: 'Visual & Forensic Inspection', level: 2 as const },
  { id: 'data-extraction', title: 'Data Extraction', level: 2 as const },
  { id: 'cross-data', title: 'Cross-Data Validation', level: 2 as const },
  { id: 'consistency', title: 'Document Consistency Check', level: 2 as const },
  { id: 'supported-docs', title: 'Supported Documents', level: 2 as const },
  { id: 'biometric-how', title: 'Biometric Verification — How It Works', level: 2 as const },
  { id: 'passive-liveness', title: 'Passive Liveness', level: 2 as const },
  { id: 'active-liveness', title: 'Active Liveness', level: 2 as const },
  { id: 'biometric-matching', title: 'Biometric Matching', level: 2 as const },
  { id: 'certifications', title: 'Certifications', level: 2 as const },
];

const contentText = `Document authentication runs four parallel layers: visual and forensic inspection, data extraction, cross-data validation, and document consistency check. Visual inspection analyses security features and detects physical alterations. Data extraction parses VIZ and MRZ fields using document-specific templates and reads NFC chip data where available. Cross-data validation compares data sources against each other using ICAO 9303 rules. Document consistency checks layout typography colour and dimensions against 1500 or more reference templates. Supported documents include passports national identity cards driver licences residence permits and refugee travel documents from 200 or more countries. Biometric verification runs three interlocked processes: passive liveness active liveness and face matching. The biometric matching model is ranked in the NIST FRVT top 2 for face recognition accuracy. Liveness detection is ISO IEC 30107-3 iBeta Level 2 certified.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/verification-deep-dive"
      title="Verification Deep Dive"
      contentText={contentText}
      toc={toc}
    >
      {/* ── DOCUMENT AUTHENTICATION ── */}
      <h2 id="doc-auth-how">Document Authentication — How It Works</h2>
      <p>
        Document authentication runs four sub-checks in parallel. Their outputs feed into a weighted risk model that produces an overall document trust score (0–100) and a classified list of anomalies. Each sub-check contributes independently — a strong result in one layer does not compensate for a definitive failure in another.
      </p>
      <p>
        NFC chip verification is available for ePassports and chip-enabled national IDs. Where a chip is present, the chip data constitutes the highest-trust data source and is used as the reference point in cross-data validation.
      </p>

      <h2 id="visual-forensic">Visual &amp; Forensic Inspection</h2>
      <p>
        The visual and forensic layer analyses the physical security features present in the document image. For each document type in the reference library, the expected security feature profile is known — the inspection compares the submitted document against it.
      </p>
      <p>Features examined include:</p>
      <ul>
        <li>Holograms and optically variable devices — position, colour shift behaviour, and diffractive pattern</li>
        <li>Microprinting — resolution and character legibility at the expected size</li>
        <li>Optically variable inks — colour transition under expected lighting conditions</li>
        <li>Substrate properties — paper or polycarbonate characteristics appropriate to the document type</li>
        <li>Printing method signatures — inkjet, laser engraving, offset lithography — each leaves a distinct artefact profile</li>
      </ul>
      <p>
        The layer also screens for tampering indicators: chemical erasure (changes in substrate fluorescence), laminate removal artefacts, laser engraving tampering (unnatural depth variation), and face substitution (inconsistencies in the portrait region relative to the surrounding laminate).
      </p>

      <h2 id="data-extraction">Data Extraction</h2>
      <p>
        Data extraction reads structured identity data from three potential sources on the submitted document, in descending order of trust:
      </p>
      <ul>
        <li>
          <strong>NFC chip data:</strong> For ePassports and chip-enabled national IDs, data groups (DG1 through DG15) are read directly from the chip. DG1 contains the MRZ data in machine-readable form. DG2 contains the encoded portrait. The chip's data is cryptographically signed by the issuing authority and is treated as the authoritative source where available.
        </li>
        <li>
          <strong>MRZ parsing:</strong> The Machine-Readable Zone is parsed to ICAO 9303 standards. All check digits are validated using the weighted modulo-10 algorithm — a check digit failure is a definitive data integrity signal. Fields are normalised for downstream comparison.
        </li>
        <li>
          <strong>VIZ parsing:</strong> Document-specific field region templates identify the location of each data field on the face of the document. OCR extracts the text with per-field confidence scoring. Field values are normalised (date format standardisation, name transliteration where applicable) before comparison.
        </li>
      </ul>

      <h2 id="cross-data">Cross-Data Validation</h2>
      <p>
        Cross-data validation compares extracted data across the available sources to detect internal inconsistencies — a hallmark of altered or counterfeit documents.
      </p>
      <ul>
        <li><strong>VIZ vs. MRZ:</strong> Fields present in both zones are compared using ICAO 9303 transliteration rules to account for legitimate encoding differences between the human-readable and machine-readable representations.</li>
        <li><strong>MRZ check digit validation:</strong> All check digits are recomputed from the extracted field values and compared against the printed digits. A mismatch is a strong forgery indicator — genuine documents cannot have an invalid check digit unless the data has been altered.</li>
        <li><strong>Chip vs. optical data:</strong> Where NFC chip data is available, the chip values are compared against both VIZ and MRZ data. Any discrepancy between chip and optical data is highly significant, since the chip data is cryptographically protected and cannot be altered without detection.</li>
      </ul>
      <p>
        Discrepancies are classified by severity: minor (within known formatting variation tolerances), moderate (requires reviewer assessment), and definitive (automatic escalation).
      </p>

      <h2 id="consistency">Document Consistency Check</h2>
      <p>
        The consistency check verifies that the physical layout and visual characteristics of the submitted document match the known specification for its document type. The reference library contains templates for 1,500+ document types, each specifying:
      </p>
      <ul>
        <li><strong>Layout:</strong> Expected field positions, portrait location, security feature placement — verified against the submitted image using spatial alignment</li>
        <li><strong>Typography:</strong> Expected font families, sizes, and weights for each printed field — anomalies suggest template forgery or digital manipulation</li>
        <li><strong>Colour profile:</strong> The expected colour distribution and background pattern for the document type — deviations indicate printing on non-genuine substrate or digital alteration</li>
        <li><strong>Dimensions:</strong> Expected aspect ratio and proportions — significant deviation suggests the image has been cropped, resized, or composited</li>
      </ul>

      <h2 id="supported-docs">Supported Documents</h2>
      <p>
        Document authentication supports over <strong>1,500 document types from 200+ countries and territories</strong>, including:
      </p>
      <table>
        <thead>
          <tr>
            <th>Document Category</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Passports (standard)</td>
            <td>ICAO 9303 compliant, MRZ parsing and visual inspection</td>
          </tr>
          <tr>
            <td>ePassports</td>
            <td>NFC chip reading (DG1–DG15) with passive authentication</td>
          </tr>
          <tr>
            <td>National identity cards</td>
            <td>Both TD1 and TD2 formats; chip-enabled cards where applicable</td>
          </tr>
          <tr>
            <td>Driver's licences</td>
            <td>Including ISO/IEC 18013-5 mDL-compatible documents</td>
          </tr>
          <tr>
            <td>Residence permits</td>
            <td>Standard and biometric formats</td>
          </tr>
          <tr>
            <td>Refugee travel documents</td>
            <td>UNHCR Convention Travel Documents</td>
          </tr>
        </tbody>
      </table>
      <p>
        The reference library is continuously updated. Document types can also be added on request for programme-specific requirements.
      </p>

      {/* ── BIOMETRIC VERIFICATION ── */}
      <h2 id="biometric-how">Biometric Verification — How It Works</h2>
      <p>
        Biometric verification runs three interlocked processes: passive liveness detection, active liveness challenge (where configured), and 1:1 face matching. All three begin as soon as the selfie is captured — they do not run sequentially. The face matching process begins in parallel with liveness analysis, using the document portrait retrieved from the data extraction stage.
      </p>
      <p>
        Results are combined into an overall biometric trust assessment. A high match score does not compensate for a liveness failure — both must pass for the submission to clear the biometric layer.
      </p>

      <h2 id="passive-liveness">Passive Liveness</h2>
      <p>
        Passive liveness analysis runs on the raw selfie image without requiring any action from the applicant. It examines intrinsic image properties that differ between photographs of live faces and spoofing artefacts:
      </p>
      <ul>
        <li><strong>Texture analysis:</strong> Live skin has characteristic micro-texture patterns. Printed photographs and screen displays have regular pixel or halftone structures that are detectable even at high resolution.</li>
        <li><strong>Depth cues:</strong> A three-dimensional face produces depth gradient signals in a 2D capture that flat surfaces (photos, screens) cannot reproduce.</li>
        <li><strong>Reflection patterns:</strong> Live faces have specular and diffuse reflectance characteristics that differ from paper, screens, and silicone masks.</li>
        <li><strong>Micro-movement artefacts:</strong> In video-based capture, a live face exhibits subtle involuntary movements (breathing, micro-expressions) absent in static spoofs.</li>
      </ul>
      <p>
        Passive liveness produces a confidence score (0–100), typically thresholded at 70–85 depending on programme risk settings. It is effective against common attacks — printed photos, phone screens, laminated prints. For higher-assurance use cases, active liveness provides additional protection.
      </p>

      <h2 id="active-liveness">Active Liveness</h2>
      <p>
        Active liveness presents a challenge to the applicant and validates the response. Challenges are drawn from a set including blink, turn head left/right, smile, and open mouth. Each session receives a randomised challenge sequence — replay attacks using pre-recorded videos are therefore ineffective.
      </p>
      <p>
        Response validation checks for physiologically plausible timing (response onset delay, movement speed, and completion duration consistent with a real human reaction) and for spatial consistency (the face moves in the expected direction and extent). An implausibly fast or artificially smooth response is rejected.
      </p>
      <p>
        Active liveness configuration options:
      </p>
      <ul>
        <li><strong>Mandatory:</strong> Required for all submissions regardless of passive score</li>
        <li><strong>Adaptive:</strong> Triggered only when passive liveness confidence falls below a configurable threshold</li>
        <li><strong>Template-specific:</strong> Configured per credential template — higher-assurance credential types can require active liveness while lower-risk types rely on passive only</li>
      </ul>

      <h2 id="biometric-matching">Biometric Matching</h2>
      <p>
        Face matching uses a deep convolutional neural network to generate a fixed-length feature vector for each face image. The cosine similarity between the document portrait vector and the selfie vector is mapped to a 0–100 match score.
      </p>
      <p>
        The scoring distribution for genuine pairs (same person, different images) is characteristically 80–98. Impostor pairs (different people) cluster below 40. The operational threshold is configured per issuer — a lower threshold accepts more submissions automatically but increases the false accept rate; a higher threshold reduces fraud risk but routes more genuine submissions to human review.
      </p>
      <p>
        The model's fairness profile is actively monitored. Match accuracy distributions are tracked across age groups, gender presentations, and skin tone categories. Performance is benchmarked against published NIST FRVT results to maintain consistent identification quality across the full enrolled population.
      </p>

      <h2 id="certifications">Certifications</h2>
      <table>
        <thead>
          <tr>
            <th>Certification</th>
            <th>Scope</th>
            <th>Relevance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>NIST FRVT — Top 2</strong></td>
            <td>Face recognition accuracy across 1:1 verification scenarios</td>
            <td>Demonstrates best-in-class matching accuracy and fairness across demographic groups</td>
          </tr>
          <tr>
            <td><strong>ISO/IEC 30107-3 iBeta Level 2</strong></td>
            <td>Presentation attack detection (anti-spoofing)</td>
            <td>Required by many government and regulated financial programmes for liveness compliance</td>
          </tr>
        </tbody>
      </table>
      <Callout type="note">
        Both certifications are maintained through ongoing re-evaluation cycles. They are not one-time achievements — the models are re-tested as they are updated to ensure certification status is current.
      </Callout>
    </ArticleWrapper>
  );
}
