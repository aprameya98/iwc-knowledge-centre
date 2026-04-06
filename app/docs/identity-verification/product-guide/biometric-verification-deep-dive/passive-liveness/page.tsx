import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Passive Liveness',
  description: 'How IwC uses passive liveness detection to confirm the enrollment selfie is from a real person without requiring any user action.',
};

const toc = [
  { id: 'what-is-passive-liveness', title: 'What is Passive Liveness?', level: 2 as const },
  { id: 'how-passive-liveness-works', title: 'How Passive Liveness Works', level: 2 as const },
  { id: 'texture-and-depth-analysis', title: 'Texture and Depth Analysis', level: 2 as const },
  { id: 'attack-types-detected', title: 'Attack Types Detected', level: 2 as const },
  { id: 'passive-liveness-confidence-score', title: 'Passive Liveness Confidence Score', level: 2 as const },
];

const content = `Passive liveness detection determines whether the selfie submitted during enrollment was captured from a real, live human face — as opposed to a photograph, a screen displaying a photo or video, or another flat presentation attack artifact — without requiring the applicant to take any deliberate action. Because passive liveness is entirely transparent to the applicant, it introduces no friction to the enrollment experience while still providing a meaningful first line of defense against spoofing attacks.

Passive liveness analysis works by examining the intrinsic properties of the captured image that differ between a live face and a flat reproduction. A live face is a three-dimensional object with natural surface texture, subsurface scattering of light through the skin, micro-movements from breathing and natural sway, and specular reflections from the eyes and skin surface that follow the laws of optics for a curved surface. A flat presentation attack — a printed photo, a screen displaying an image, or a paper mask — lacks these three-dimensional optical properties and instead exhibits the flat, uniform reflectance characteristic of a planar surface.

Texture analysis examines the surface pattern of the face at multiple spatial frequency scales using deep learning classifiers. Real skin has a characteristic multi-scale texture arising from pores, fine wrinkles, and subsurface blood vessel patterns. Printed photos and screen images have different texture statistics — photo paper has a matte or glossy surface texture unrelated to the depicted face, and screens exhibit pixel grid patterns that are detectable at sufficient resolution. The classifier is trained to distinguish these texture profiles reliably across a wide range of capture conditions.

The passive liveness analysis is performed using a deep neural network trained specifically for presentation attack detection and evaluated against the ISO/IEC 30107-3 standard testing protocol. The result is a liveness confidence score from 0 to 100, where higher scores indicate higher confidence that the capture is from a genuine live face.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/biometric-verification-deep-dive/passive-liveness"
      title="Passive Liveness"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-passive-liveness">What is Passive Liveness?</h2>
      <p>
        Passive liveness detection determines whether the selfie submitted during enrollment was captured from a real, live human face rather than from a flat presentation attack artifact such as a printed photograph or a screen displaying a photo or video. The key distinguishing property of passive liveness is that it requires no action from the applicant — the analysis is performed entirely on the captured image without any challenge or instruction. This makes it completely transparent to legitimate applicants while still providing effective protection against the most common categories of spoofing attack.
      </p>

      <h2 id="how-passive-liveness-works">How Passive Liveness Works</h2>
      <p>
        Passive liveness analysis examines the intrinsic optical properties of the submitted selfie that differ between a live face and a flat reproduction. A live face is a three-dimensional, biologically active surface with natural skin texture, subsurface scattering of incident light, micro-motion from breathing and natural postural sway, and specular highlights on the eyes and skin surface consistent with illumination of a convex three-dimensional object. A flat presentation attack — a printed photograph, a screen, or a flat mask — exhibits the characteristic optical properties of a planar surface: uniform reflectance, screen pixel grids, photo paper surface texture, or the reflective sheen of a laminated print.
      </p>

      <h2 id="texture-and-depth-analysis">Texture and Depth Analysis</h2>
      <p>
        Texture analysis examines the face surface pattern at multiple spatial frequency scales. Real skin exhibits a characteristic multi-scale texture arising from pores, fine surface wrinkles, and subsurface hemoglobin absorption patterns. Printed photos have a paper or glossy laminate surface texture that is spatially superimposed over the depicted face texture, producing a combined texture signature that differs from genuine skin. Screens exhibit a regular pixel grid structure. IwC's deep learning classifier, trained on a large and diverse dataset of genuine and attack captures, reliably distinguishes these texture profiles across varied skin tones, camera sensors, and lighting environments.
      </p>

      <h2 id="attack-types-detected">Attack Types Detected</h2>
      <p>
        Passive liveness detection is effective against the most common presentation attack categories: printed photographs (matte or glossy), images displayed on phone, tablet, or computer screens, paper cutout masks with eye holes, laminated prints, and scanned document photos. It is less effective against highly sophisticated three-dimensional silicone masks that replicate facial surface texture, which is why IwC's liveness system combines passive analysis with the option for active liveness challenges in high-security deployments.
      </p>

      <h2 id="passive-liveness-confidence-score">Passive Liveness Confidence Score</h2>
      <p>
        The passive liveness result is expressed as a confidence score from 0 to 100, where scores above the configured threshold (typically 70–85 depending on the issuer's risk tolerance) indicate a live capture. The score reflects the model's probabilistic assessment of liveness across multiple analyzed dimensions; it is not a binary pass/fail at the model level. Borderline scores — those near the configured threshold — are given additional weight in the overall biometric trust calculation and may trigger a recommendation to apply active liveness as a supplementary check even if the passive result alone technically passes.
      </p>
    </ArticleWrapper>
  );
}
