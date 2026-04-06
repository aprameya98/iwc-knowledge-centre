import ArticleWrapper from '@/components/layout/ArticleWrapper';
import IDApp1 from '@/public/IDApp1.png';
import IDApp2 from '@/public/IDApp2.png';
import Image from 'next/image';

export const metadata = {
  title: 'Managing ID Applications',
  description: 'A guide to reviewing and processing identity verification requests, including searching, filtering, and taking action on applications.',
};

const toc = [
  { id: 'searching-filtering-queue', title: 'Searching & Filtering Your Queue', level: 2 as const },
  { id: 'understanding-application-list', title: 'Understanding the Application List', level: 2 as const },
  { id: 'taking-action', title: 'Taking Action on Applications', level: 2 as const },
  { id: 'reviewing-application-detail', title: 'Reviewing an Application Detail', level: 2 as const },
  { id: 'application-overview', title: 'Application Overview', level: 2 as const },
  { id: 'verifying-data-images', title: 'Verifying Extracted Data & Images', level: 2 as const },
  { id: 'analyzing-security-trust', title: 'Analyzing Security & Trust Signals', level: 2 as const },
  { id: 'making-your-decision', title: 'Making Your Decision', level: 2 as const },
];

const content = `Welcome to the ID Applications screen. This is a critical operational area where you review and process identity verification requests submitted by end users. Searching and Filtering Your Queue. The top of the screen provides tools to quickly locate applications. Search Bar allows you to search by ID or applicant name. Status Tabs let you filter by All, Pending, Under Review, Offer Pending, Approved, or Denied. Understanding the Application List. The table displays key columns: APPLICATION ID as a numeric identifier, APPLICANT with partially masked names for PII protection, SUBMITTED with date and timestamp, and STATUS with color-coded badges. Taking Action on Applications. The ACTIONS column provides quick-action buttons: View with an eye icon to open the full application file, Approve with a green checkmark to instantly approve, and Reject with a red X to deny. Approved rows only show the View icon to prevent accidental changes. Reviewing an Application Detail. When you click View, you see the full application file. Application Overview shows the Application ID at top and a Status Badge on the right. Verifying Extracted Data and Images. The Applicant Information card shows Name, Date of Birth, and Nationality extracted via OCR. Document Images display photographs of the submitted ID front and back. Analyzing Security and Trust Signals. Document Trust shows checks on document integrity with green checkmarks for passing checks and red crosses for failures. Biometric Verification shows selfie versus document portrait comparison with anti-spoofing checks and face match score. Reviewer Action Log provides an audit trail. Making Your Decision. The bottom action bar provides three options: Request Information to ask the user to re-upload, Deny to reject for fraud or invalid documents, and Approve to issue the credential.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/iwc-portal/id-applications" title="Managing ID Applications" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>ID Applications</strong> screen. This is a critical operational area where you review and process identity verification requests submitted by end users.
      </p>

      <Image src={IDApp1} alt="" />
      <br></br>

      <h2 id="searching-filtering-queue">Searching &amp; Filtering Your Queue</h2>
      <p>The top of the screen provides tools to quickly locate the applications you need.</p>
      <ul>
        <li>
          <strong>Search Bar:</strong> Use the <code>Search by ID or applicant name...</code> field to find a specific application instantly.
        </li>
        <li>
          <strong>Status Tabs:</strong> Filter the queue by clicking one of the status tabs: <strong>All</strong>, <strong>Pending</strong>, <strong>Under Review</strong>, <strong>Offer Pending</strong>, <strong>Approved</strong>, or <strong>Denied</strong>.
        </li>
      </ul>

      <h2 id="understanding-application-list">Understanding the Application List</h2>
      <p>The table displays the following columns:</p>
      <ul>
        <li>
          <strong>APPLICATION ID:</strong> A numeric identifier for each application (e.g., <code>359</code>).
        </li>
        <li>
          <strong>APPLICANT:</strong> Partially masked names (e.g., <code>co***</code>) to protect personally identifiable information (PII).
        </li>
        <li>
          <strong>SUBMITTED:</strong> The date and timestamp when the application was received.
        </li>
        <li>
          <strong>STATUS:</strong> Color-coded badges indicating the current state &mdash; orange for <strong>Pending</strong>, green for <strong>Approved</strong>, and so on.
        </li>
      </ul>

      <h2 id="taking-action">Taking Action on Applications</h2>
      <p>The <strong>ACTIONS</strong> column provides quick-action buttons for each row:</p>
      <ul>
        <li>
          <strong>View (eye icon):</strong> Opens the full application file for detailed review.
        </li>
        <li>
          <strong>Approve (green checkmark):</strong> Instantly approves a pending application.
        </li>
        <li>
          <strong>Reject (red X):</strong> Instantly denies the application.
        </li>
      </ul>
      <p>
        <strong>Tip:</strong> Approved rows only display the <strong>View</strong> icon &mdash; the quick-action buttons are removed to prevent accidental changes to already-processed applications.
      </p>

      <h2 id="reviewing-application-detail">Reviewing an Application Detail</h2>
      <p>When you click <strong>View</strong> on any application, you are taken to its full detail page.</p>

      <Image src={IDApp2} alt="" />
      <br></br>

      <h2 id="application-overview">Application Overview</h2>
      <p>
        At the top of the detail page, you will see the <strong>Application ID</strong> prominently displayed, along with a <strong>Status Badge</strong> (e.g., <strong>Pending</strong>) on the right side.
      </p>

      <h2 id="verifying-data-images">Verifying Extracted Data &amp; Images</h2>
      <ul>
        <li>
          <strong>Applicant Information Card:</strong> Displays the extracted data &mdash; <strong>Name</strong>, <strong>Date of Birth</strong>, and <strong>Nationality</strong> &mdash; pulled automatically from the submitted document via OCR.
        </li>
        <li>
          <strong>Document Images:</strong> Photographs of the submitted ID document. Both the <strong>Front</strong> and <strong>Back</strong> of the document are displayed for visual inspection.
        </li>
      </ul>

      <h2 id="analyzing-security-trust">Analyzing Security &amp; Trust Signals</h2>
      <ul>
        <li>
          <strong>Document Trust:</strong> A set of integrity checks performed on the document itself. Green checkmarks indicate passing checks (e.g., <strong>Authentic Document</strong>, <strong>Not a Screenshot</strong>). Red crosses indicate failures (e.g., <strong>Barcode Detected and Scanned</strong> failed). As a reviewer, you must judge whether a failed check is critical or expected for the document type.
        </li>
        <li>
          <strong>Biometric Verification:</strong> A side-by-side comparison of the applicant&apos;s <strong>Selfie</strong> versus their <strong>Document Portrait</strong>. This section includes anti-spoofing checks such as <strong>Passive Liveness</strong>, <strong>Active Liveness</strong>, and <strong>Not a Deepfake</strong>, along with a <strong>1:1 Face Match</strong> score.
        </li>
        <li>
          <strong>Reviewer Action Log:</strong> An audit trail displayed at the bottom of the page, showing all previous actions taken on this application.
        </li>
      </ul>

      <h2 id="making-your-decision">Making Your Decision</h2>
      <p>At the bottom of the detail page, the action bar provides three options:</p>
      <ul>
        <li>
          <strong>Request Information (White):</strong> Ask the user to re-upload documents or provide additional information.
        </li>
        <li>
          <strong>Deny (Red):</strong> Reject the application for fraud, invalid documents, or other disqualifying reasons.
        </li>
        <li>
          <strong>Approve (Green):</strong> Approve the application and issue the digital credential.
        </li>
      </ul>
    </ArticleWrapper>
  );
}
