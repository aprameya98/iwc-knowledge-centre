import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Active Liveness',
  description: 'How IwC uses challenge-response active liveness detection to confirm enrollment presence against sophisticated spoofing attacks.',
};

const toc = [
  { id: 'what-is-active-liveness', title: 'What is Active Liveness?', level: 2 as const },
  { id: 'challenge-types', title: 'Challenge Types', level: 2 as const },
  { id: 'randomization-and-replay-prevention', title: 'Randomization and Replay Prevention', level: 2 as const },
  { id: 'response-validation', title: 'Response Validation', level: 2 as const },
  { id: 'when-active-liveness-is-required', title: 'When Active Liveness is Required', level: 2 as const },
];

const content = `Active liveness detection uses a challenge-response mechanism to confirm that the person capturing the enrollment selfie is physically present and responsive at the moment of capture. Unlike passive liveness, which analyzes the static properties of a single image, active liveness tests whether the subject can produce a specific, natural biological response to an instruction delivered at capture time. This makes it effective against attack categories that passive liveness alone may not catch, including high-quality video replay attacks and realistic three-dimensional masks.

During active liveness capture, the enrollment interface presents the applicant with a randomized challenge instruction — typically one of: blink your eyes, turn your head to the left, turn your head to the right, smile, or open your mouth. The applicant performs the action and the interface captures a short video clip of the response. The challenge instruction is randomized per session to prevent pre-recorded responses from being used across multiple enrollment attempts.

The response validation engine analyzes the captured video clip for evidence that the requested action was performed naturally and within physiologically plausible timing. For a blink challenge, the engine detects the eyelid movement sequence and verifies that it occurred within the expected temporal range. For a head turn challenge, the engine tracks the 3D head pose across frames and verifies the rotation range and speed. Actions performed too quickly, too slowly, or with motion characteristics inconsistent with natural human movement are rejected as potential replay or manipulation attacks.

Active liveness is not required for all enrollments by default. Issuers configure whether active liveness is mandatory for all submissions, triggered only when passive liveness falls below a confidence threshold, or applied selectively to certain credential types. High-security issuers — particularly those issuing government or financial credentials — typically enable mandatory active liveness for all enrollments.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/biometric-verification-deep-dive/active-liveness"
      title="Active Liveness"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-active-liveness">What is Active Liveness?</h2>
      <p>
        Active liveness detection uses a challenge-response mechanism to confirm that the person capturing the enrollment selfie is physically present and responsive at the moment of capture. Unlike passive liveness, which analyzes the static properties of a single captured image, active liveness tests whether the subject can produce a specific, natural biological response to an instruction delivered in real time. This makes active liveness effective against attack categories that passive liveness alone may struggle with, including high-quality video replay attacks and realistic three-dimensional silicone masks that can replicate static facial appearance.
      </p>

      <h2 id="challenge-types">Challenge Types</h2>
      <p>
        IwC supports a range of challenge types that can be combined and randomly selected per session. Standard challenges include: eye blink (the subject closes and reopens their eyes), head turn left or right (the subject rotates their head to a specified angle), smile or neutral expression change, and open mouth. The selection of available challenge types can be configured by the issuer based on their applicant population and accessibility requirements. Challenge instructions are displayed as animated on-screen prompts in the enrollment interface, ensuring that applicants with varying levels of language proficiency can understand what is required.
      </p>

      <h2 id="randomization-and-replay-prevention">Randomization and Replay Prevention</h2>
      <p>
        The challenge presented to each applicant is randomized per enrollment session, meaning that an attacker cannot pre-record a response to a specific challenge and replay it across multiple attempts. The randomization seed is generated server-side and tied to the session token, preventing manipulation of the challenge type by the enrolling device. Additionally, the timing between challenge delivery and expected response is analyzed to detect pre-staged responses: a response that begins suspiciously quickly after challenge delivery, before a human would have time to read and process the instruction, is flagged as a potential injection attack.
      </p>

      <h2 id="response-validation">Response Validation</h2>
      <p>
        The response validation engine analyzes the short video clip captured during the active liveness challenge. For each challenge type, the engine has a specific validation model: blink challenges use eyelid tracking to verify the temporal blink sequence; head turn challenges use 3D head pose estimation across frames to verify rotation range and speed; expression challenges use facial action unit detection to confirm the requested muscle movement occurred. Responses that are technically correct but outside physiologically plausible timing or motion ranges — for example, a blink lasting 30 milliseconds, which is shorter than any human blink — are rejected as non-genuine.
      </p>

      <h2 id="when-active-liveness-is-required">When Active Liveness is Required</h2>
      <p>
        Active liveness is a configurable feature that issuers enable based on their security requirements and their applicant population's tolerance for enrollment friction. It can be configured as mandatory for all submissions, triggered adaptively when passive liveness confidence falls below a configured threshold, or required only for specific credential templates. Issuers issuing high-assurance credentials — government identity documents, financial account credentials, or access credentials for sensitive facilities — typically enable mandatory active liveness. Lower-risk credential types such as loyalty program memberships may rely on passive liveness alone to minimize enrollment friction.
      </p>
    </ArticleWrapper>
  );
}
