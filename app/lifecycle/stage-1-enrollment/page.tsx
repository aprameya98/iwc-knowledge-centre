import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import IDVFlowDiagram from '@/components/diagrams/IDVFlowDiagram';
import Stage1Enrolment from '@/public/IDV Overview 2.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Stage 1: Enrollment',
  description: 'How applicants submit their identity documents and biometric data to apply for a digital credential.',
};

const toc = [
  { id: 'what', title: 'What is Enrollment?', level: 2 as const },
  { id: 'how-it-works', title: 'How Enrollment Works', level: 2 as const },
  { id: 'channels', title: 'Enrollment Channels', level: 2 as const },
  { id: 'data-collected', title: 'Data Collected', level: 2 as const },
];

const content = `Enrollment is the process by which an applicant submits their identity documents and biometric data to apply for a digital credential. The applicant photographs their government-issued ID and takes a selfie.`;

export default function Page() {
  return (
    <ArticleWrapper href="/lifecycle/stage-1-enrollment" title="Stage 1: Enrollment" contentText={content} toc={toc}>
      <h2 id="what">What is Enrollment?</h2>
      <p><strong>Enrollment</strong> is the process by which an individual submits the information required to apply for a digital credential. It is the applicant's first interaction with the credentialing system and sets the foundation for everything that follows. The quality of the enrollment submission directly affects the accuracy and speed of the issuance decision.</p>

      <h2 id="how-it-works">How Enrollment Works</h2>

      {/* <IDVFlowDiagram /> */}
      <Image src={Stage1Enrolment} alt="" />
<br></br>
      <p>The enrollment process is designed to be completed on a mobile device in under 10 minutes. The applicant follows a guided flow that walks them through each capture step: first the front of their identity document, then the back if applicable, then a live selfie. The guidance system provides real-time feedback on image quality, lighting, and document position, helping applicants capture high-quality submissions on the first attempt.</p>
      <p>Once all captures are complete, the applicant reviews the submission and confirms before sending. The data is encrypted in transit and at rest. The applicant receives a confirmation and a reference number, along with instructions for checking their application status.</p>

      <h2 id="channels">Enrollment Channels</h2>
      <p>IwC supports two enrollment channels. The <strong>Credence Wallet app</strong> provides the native mobile experience, with the smoothest camera integration and the best image capture performance. Applicants who already have the Credence Wallet installed can begin enrollment directly from the app when they receive an invitation or scan an enrollment QR code.</p>
      <p>The <strong>IDV Browser</strong> is a web-based enrollment interface that does not require app installation. It is optimized for mobile browsers and provides a comparable experience to the app channel. The browser channel is useful for organizations whose applicants may not want to install an app, or for one-time enrollment scenarios.</p>

      <h2 id="data-collected">Data Collected</h2>
      <p>During enrollment, the system collects images of the applicant's identity document (front and back where applicable), a live selfie, and metadata about the enrollment session including timestamp, device type, and the enrollment channel used. No additional personal information is requested from the applicant — all identity data is extracted from the submitted documents by the IwC platform during the issuance stage.</p>
    </ArticleWrapper>
  );
}
