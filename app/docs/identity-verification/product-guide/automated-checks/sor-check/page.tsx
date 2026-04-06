import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'SOR Check',
  description: 'How IwC validates applicant identity data against the issuer\'s configured system of record.',
};

const toc = [
  { id: 'what-is-the-sor-check', title: 'What is the SOR Check?', level: 2 as const },
  { id: 'how-the-sor-check-works', title: 'How the SOR Check Works', level: 2 as const },
  { id: 'match-logic', title: 'Match Logic', level: 2 as const },
  { id: 'sor-check-outcomes', title: 'SOR Check Outcomes', level: 2 as const },
  { id: 'configuring-the-sor-integration', title: 'Configuring the SOR Integration', level: 2 as const },
];

const content = `The System of Record (SOR) Check validates the applicant's extracted identity data against the issuer's authoritative database. For most issuers, this is the database that contains the list of people who are authorized to receive a digital credential — for example, an employee HR system, a government citizen registry, a university student database, or a financial institution's customer database. The SOR Check confirms that the applicant is a known and authorized individual before the issuance workflow proceeds.

The check works by taking key identity fields extracted by the OCR Check — typically the person's name, ID number, and date of birth — and querying the issuer's configured SOR via a secure API integration. The SOR responds with either a match record or a no-match result. A match indicates that the person is found in the system and their details correspond to the enrollment data; a no-match or a partial match with discrepancies is flagged for reviewer attention.

Match logic accounts for common real-world variations between the document data and the SOR record. Name transliterations, abbreviations, middle name handling, and OCR-introduced character-level differences can all cause a technically different string to represent the same person. IwC applies fuzzy matching algorithms with configurable tolerance levels so that minor differences do not cause false negatives while significant discrepancies are still flagged appropriately.

Issuers configure the SOR integration once through the IwC technical integration settings. The integration supports REST API endpoints with configurable authentication, field mapping, and response parsing. For issuers with multiple systems of record — for example, an HR system for employees and a CRM for external partners — multiple SOR integrations can be configured and applied selectively based on the enrollment context or credential template.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/automated-checks/sor-check"
      title="SOR Check"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-the-sor-check">What is the SOR Check?</h2>
      <p>
        The System of Record (SOR) Check validates the applicant's extracted identity data against the issuer's authoritative database. For most issuers, this is the database that contains the list of people who are authorized to receive a digital credential — for example, an employee HR system, a government citizen registry, a university student database, or a financial institution's customer database. The SOR Check confirms that the applicant is a known and authorized individual before the issuance workflow proceeds, preventing outsiders from obtaining credentials that should only be issued to a defined population.
      </p>

      <h2 id="how-the-sor-check-works">How the SOR Check Works</h2>
      <p>
        The check takes key identity fields extracted by the OCR Check — typically the person's full name, primary ID number, and date of birth — and queries the issuer's configured SOR via a secure server-to-server API call. The query is constructed based on the field mapping defined in the SOR integration configuration. The SOR responds with either a matching record, a no-match result, or a conditional match with specific field discrepancies noted. The entire query and response exchange happens within the automated review pipeline, typically completing in under two seconds.
      </p>

      <h2 id="match-logic">Match Logic</h2>
      <p>
        Match logic accounts for common real-world variations between document data and SOR records. Names may be stored differently between systems: the document might use a full transliterated name while the SOR uses an abbreviated or informally shortened version. OCR extraction may introduce a single character error on a long name. Middle names may or may not be present in either source. IwC applies fuzzy matching algorithms with configurable string similarity thresholds to identify likely matches even under these conditions, while ensuring that genuinely different names produce a no-match result.
      </p>

      <h2 id="sor-check-outcomes">SOR Check Outcomes</h2>
      <p>
        The SOR Check produces one of three outcomes: a full match (all queried fields agree within configured tolerances), a partial match (some fields agree but one or more discrepancies exist), or a no-match (the person cannot be found in the SOR). A full match contributes positively to the submission's overall trust score. A partial match flags the specific discrepant fields for reviewer inspection but does not automatically fail the submission. A no-match result is a hard flag that routes the submission to mandatory human review, as it may indicate the applicant is not authorized to receive a credential.
      </p>

      <h2 id="configuring-the-sor-integration">Configuring the SOR Integration</h2>
      <p>
        Issuers configure the SOR integration once through the IwC technical integration settings. The configuration specifies the SOR endpoint URL, authentication method (API key, OAuth 2.0, or mutual TLS), the field mapping between IwC's extracted fields and the SOR's query parameters, and the response parsing rules that extract the match determination from the SOR's response payload. Issuers with multiple systems of record can configure multiple integrations and route different credential templates to different SOR connections as needed.
      </p>
    </ArticleWrapper>
  );
}
