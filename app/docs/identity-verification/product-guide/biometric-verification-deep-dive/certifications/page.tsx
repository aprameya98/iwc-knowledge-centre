import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'IwC biometric certifications including NIST FRVT Top 2 ranking and ISO/IEC 30107-3 iBeta Level 2.',
};

const toc = [
  { id: 'overview', title: 'Overview', level: 2 as const },
  { id: 'nist-frvt', title: 'NIST FRVT Top 2 Ranking', level: 2 as const },
  { id: 'iso-iec-30107-3', title: 'ISO/IEC 30107-3 iBeta Level 2', level: 2 as const },
  { id: 'what-certifications-mean', title: 'What Certifications Mean for Deployments', level: 2 as const },
  { id: 'ongoing-compliance', title: 'Ongoing Compliance', level: 2 as const },
];

const content = `IwC's biometric verification technology holds independent certifications from the two most authoritative bodies in the face recognition and liveness detection domains: the National Institute of Standards and Technology (NIST) for face recognition accuracy, and iBeta Quality Assurance for anti-spoofing performance under the ISO/IEC 30107-3 standard. These certifications are obtained through rigorous independent testing and provide objective, third-party validation of the system's biometric capabilities beyond what self-reported vendor benchmarks can provide.

The NIST Face Recognition Vendor Testing (FRVT) program is the definitive independent evaluation of face recognition algorithm performance. IwC's face matching algorithm has achieved a Top 2 ranking in the NIST FRVT 1:1 Verification evaluation, which tests algorithms on large-scale datasets of controlled and uncontrolled face image pairs representing a wide range of demographic characteristics, capture conditions, and subject age variation. A Top 2 ranking places IwC's algorithm among the most accurate commercial face recognition systems evaluated by NIST.

ISO/IEC 30107-3 is the international standard for biometric presentation attack detection. It defines a comprehensive testing methodology for evaluating anti-spoofing systems against a specified set of presentation attack instruments at defined confidence levels. iBeta Quality Assurance is an accredited third-party laboratory that conducts ISO/IEC 30107-3 testing under standardized conditions. IwC's passive and active liveness system has achieved iBeta Level 2 certification, meaning it passed testing against a comprehensive attack corpus including printed photos, digital displays, rigid masks, flexible masks, and partial attack instruments.

These certifications are particularly relevant for issuers with regulatory compliance requirements. Many government and financial industry regulations governing identity verification specify minimum biometric accuracy and anti-spoofing standards, often with explicit reference to NIST FRVT ranking tiers and ISO/IEC 30107-3 iBeta certification levels.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/biometric-verification-deep-dive/certifications"
      title="Certifications"
      contentText={content}
      toc={toc}
    >
      <h2 id="overview">Overview</h2>
      <p>
        IwC's biometric verification technology holds independent certifications from two authoritative standards bodies: the National Institute of Standards and Technology (NIST) for face recognition accuracy, and iBeta Quality Assurance under the ISO/IEC 30107-3 standard for presentation attack detection. These certifications are obtained through independent, standardized testing programs and provide objective third-party validation of the system's biometric performance that complements Credence ID's internal quality assurance.
      </p>

      <h2 id="nist-frvt">NIST FRVT Top 2 Ranking</h2>
      <p>
        The NIST Face Recognition Vendor Testing (FRVT) 1:1 Verification program is the definitive independent evaluation of face recognition algorithm accuracy. NIST evaluates submitted algorithms on millions of face image pairs drawn from diverse real-world datasets spanning multiple demographic groups, capture environments, and subject age ranges. Algorithms are ranked by their false non-match rate at a fixed false match rate — a measure that captures the system's ability to correctly verify genuine pairs without incorrectly accepting impostors. IwC's face matching algorithm has achieved a Top 2 ranking in the NIST FRVT 1:1 Verification evaluation, placing it among the most accurate commercially available face recognition systems independently evaluated by NIST.
      </p>

      <h2 id="iso-iec-30107-3">ISO/IEC 30107-3 iBeta Level 2</h2>
      <p>
        ISO/IEC 30107-3 is the international standard governing testing methodology for biometric presentation attack detection systems. It defines two evaluation levels: Level 1, which tests against a basic set of print and replay attacks, and Level 2, which tests against a comprehensive and more challenging attack corpus including rigid masks, flexible silicone masks, and partial attack instruments in addition to all Level 1 attack types. iBeta Quality Assurance is an ISO/IEC 17025-accredited testing laboratory recognized by FIDO Alliance and other standards bodies for conducting ISO/IEC 30107-3 evaluations. IwC has achieved iBeta Level 2 certification, the highest available commercial anti-spoofing certification, having passed testing against the full Level 2 attack corpus with attack presentation classification error rates within the standard's requirements.
      </p>

      <h2 id="what-certifications-mean">What Certifications Mean for Deployments</h2>
      <p>
        For issuers with regulatory compliance requirements, IwC's certifications provide documented evidence that the biometric components of the identity verification system meet recognized international standards. Regulations in the financial sector — such as eKYC frameworks referencing FATF guidance — and government identity frameworks often specify minimum biometric accuracy tiers and anti-spoofing capability requirements, sometimes with explicit reference to NIST FRVT performance tiers and ISO/IEC 30107-3 iBeta certification. Credence ID can provide certification documentation directly to issuers for use in regulatory submissions and compliance audits.
      </p>

      <h2 id="ongoing-compliance">Ongoing Compliance</h2>
      <p>
        Certifications are not static. As testing programs update their datasets and methodologies, and as new attack types emerge, Credence ID re-submits the biometric technology for re-evaluation to maintain current certification status. NIST FRVT rankings are updated on a rolling basis as new algorithm submissions are evaluated, and Credence ID participates in each evaluation cycle. iBeta Level 2 certification is renewed periodically with new testing runs to verify that the production system's performance remains within certified bounds. Issuers are notified of any changes to certification status through the IwC release notes and compliance communications channels.
      </p>
    </ArticleWrapper>
  );
}
