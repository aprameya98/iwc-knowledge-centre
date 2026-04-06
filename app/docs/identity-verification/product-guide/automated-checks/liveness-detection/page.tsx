import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Liveness Detection',
  description: 'How IwC confirms that the enrollment selfie was captured from a real, live person and not a spoofed image or video.',
};

const toc = [
  { id: 'why-liveness-matters', title: 'Why Liveness Matters', level: 2 as const },
  { id: 'passive-liveness', title: 'Passive Liveness', level: 2 as const },
  { id: 'active-liveness', title: 'Active Liveness', level: 2 as const },
  { id: 'presentation-attack-types', title: 'Presentation Attack Types', level: 2 as const },
  { id: 'liveness-result-in-the-dashboard', title: 'Liveness Result in the Dashboard', level: 2 as const },
];

const content = `Liveness Detection is the mechanism by which IwC confirms that the person submitting an enrollment is physically present at the time of capture and not attempting to spoof the system using a photograph, a video playback, or a three-dimensional mask. Without liveness detection, an attacker who possesses someone's identity document and a photograph of that person could potentially pass a biometric match check simply by holding the photo up to the camera.

IwC uses two complementary liveness techniques: passive liveness and active liveness. Passive liveness analyzes the selfie image or short video clip for textural and depth cues that distinguish a real face from a flat presentation attack artifact, without requiring the user to take any action. Active liveness presents the applicant with a challenge — such as blinking, turning their head, or smiling — and verifies that the response is consistent with a live person reacting in real time.

Passive liveness is applied first because it imposes no friction on the applicant and catches the most common attack types. If passive liveness flags the submission or if the issuer's security configuration requires it, active liveness is applied as an additional layer. High-security issuers may require active liveness for all submissions regardless of the passive result.

IwC's liveness technology is certified to ISO/IEC 30107-3 iBeta Level 2, the highest commercially available certification for anti-spoofing performance. This means the system has been independently tested and verified to resist a defined set of presentation attack instruments including printed photos, digital displays, silicone masks, and paper masks.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/automated-checks/liveness-detection"
      title="Liveness Detection"
      contentText={content}
      toc={toc}
    >
      <h2 id="why-liveness-matters">Why Liveness Matters</h2>
      <p>
        Liveness Detection is the mechanism by which IwC confirms that the person submitting an enrollment is physically present at the time of capture and not attempting to spoof the system using a photograph, a video playback, or a three-dimensional mask. Without liveness detection, an attacker who possesses someone's identity document and a photograph of that person could potentially pass a biometric match check simply by holding the photo up to the camera. Liveness closes this attack vector by verifying that the biometric was captured from a living subject in the moment of enrollment.
      </p>

      <h2 id="passive-liveness">Passive Liveness</h2>
      <p>
        Passive liveness analyzes a selfie image or short video clip for textural and depth cues that distinguish a real face from a flat presentation attack artifact, without requiring the applicant to take any deliberate action. The analysis looks for characteristics such as natural skin texture, micro-variations in color caused by blood flow and lighting, reflective properties consistent with a three-dimensional face rather than a flat surface, and motion patterns in video frames that indicate natural movement. Because passive liveness requires no user action, it introduces no additional friction to the enrollment experience.
      </p>

      <h2 id="active-liveness">Active Liveness</h2>
      <p>
        Active liveness presents the applicant with a randomized challenge — such as blinking their eyes, turning their head left or right, or briefly smiling — and verifies that the response matches what a live person would produce. The challenges are randomized to prevent pre-recorded replay attacks. The timing and naturalness of the response are also analyzed: a live person blinks at a physiologically plausible speed, while a video replay or deepfake may produce an anomalous response pattern. Active liveness is a stronger signal than passive liveness alone, particularly against sophisticated mask-based attacks.
      </p>

      <h2 id="presentation-attack-types">Presentation Attack Types</h2>
      <p>
        IwC's liveness detection is designed to defend against the full taxonomy of known presentation attack instruments: printed photographs held up to the camera, high-resolution digital displays showing a photo or video, silicone and rubber three-dimensional face masks, and paper or flat masks. The system is also tested against digital injection attacks — attempts to bypass the camera capture stage entirely by injecting a synthetic or pre-recorded video stream — and raises an alert when such an attack is detected.
      </p>

      <h2 id="liveness-result-in-the-dashboard">Liveness Result in the Dashboard</h2>
      <p>
        The liveness check result appears in the Biometric Trust Factors section of the Review Dashboard. Reviewers see a pass or fail status, the type of liveness check applied (passive only, or passive plus active), a liveness confidence score, and any specific presentation attack signals that were detected. When liveness fails, the specific signal type — for example, "flat texture indicative of printed photo" or "response timing inconsistent with live subject" — is displayed to help reviewers understand the nature of the flagged anomaly.
      </p>
    </ArticleWrapper>
  );
}
