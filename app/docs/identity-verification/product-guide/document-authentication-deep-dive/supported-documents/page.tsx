import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Supported Documents',
  description: 'The 1,500+ identity document types supported by IwC across more than 200 countries and territories.',
};

const toc = [
  { id: 'document-coverage', title: 'Document Coverage', level: 2 as const },
  { id: 'document-types-supported', title: 'Document Types Supported', level: 2 as const },
  { id: 'philid', title: 'Philippine National ID (PhilID)', level: 2 as const },
  { id: 'version-management', title: 'Version Management', level: 2 as const },
  { id: 'requesting-new-documents', title: 'Requesting New Document Types', level: 2 as const },
];

const content = `IwC's document authentication engine is backed by a reference database of over 1,500 identity document types from more than 200 countries and territories worldwide. This database covers the full spectrum of identity document categories including passports, national identity cards, driver's licences, residence permits, and refugee travel documents, across all current in-use issuance versions for each document type.

The breadth of document coverage is a deliberate design requirement. For issuers operating in international contexts — such as financial institutions onboarding customers from multiple countries, or government agencies processing applicants with foreign passports — the system must be able to authenticate documents from a wide range of issuing authorities. Coverage is maintained by the Credence ID document intelligence team, which continuously monitors new document versions issued worldwide and updates the template database accordingly.

Document types supported include: passports (including ePassports with NFC chip data), national identity cards (both card-sized ISO/IEC 7810 format and booklet format), driver's licences, permanent resident cards and residence permits, refugee travel documents, student and institutional identity cards for participating institutions, and a growing list of purpose-specific credentials issued through the Credence ID platform itself.

The Philippine National ID (PhilID) receives special treatment in IwC given its role as the primary enrollment document for Philippine government and enterprise deployments. The PhilID combines a standard card form factor with an NFC chip carrying ICAO-format data groups, a QR code on the reverse containing digitally signed identity data, and a laser-engraved portrait and personal data zone. IwC supports all three data sources for PhilID authentication.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/product-guide/document-authentication-deep-dive/supported-documents"
      title="Supported Documents"
      contentText={content}
      toc={toc}
    >
      <h2 id="document-coverage">Document Coverage</h2>
      <p>
        IwC's document authentication engine is backed by a reference database of over 1,500 identity document types from more than 200 countries and territories worldwide. This database covers the full spectrum of identity document categories across all current in-use issuance versions for each document type. Coverage extends to all ICAO member states' passports, the majority of national ID card programs worldwide, and a large proportion of driver's licence formats from jurisdictions where these are used as primary identity documents.
      </p>
      <p>
        The breadth of document coverage is a deliberate design requirement. For issuers operating in international contexts — financial institutions onboarding customers from multiple countries, or government agencies processing applicants with foreign passports — the system must be able to authenticate documents from a wide range of issuing authorities. The Credence ID document intelligence team continuously monitors new document versions issued worldwide and updates the template database accordingly, with new versions typically added within weeks of public availability.
      </p>

      <h2 id="document-types-supported">Document Types Supported</h2>
      <p>
        Document types supported by IwC include: passports (including ePassports with NFC chip data groups per ICAO 9303), national identity cards in both card-sized ISO/IEC 7810 ID-1 format and booklet format, driver's licences from all major licensing jurisdictions, permanent resident cards and residence permits, refugee travel documents and Convention travel documents, and institutional identity cards for participating issuers. For ePassport and chip-enabled national IDs, IwC supports both the optical capture authentication path and the NFC chip authentication path, with chip verification taking precedence when available.
      </p>

      <h2 id="philid">Philippine National ID (PhilID)</h2>
      <p>
        The Philippine National ID (PhilID) receives full native support in IwC, covering all three of its embedded data sources: the optical document data (laser-engraved front face and printed reverse), the NFC chip carrying ICAO-format data groups protected by passive and active authentication, and the QR code on the reverse containing digitally signed identity data issued by the Philippine Statistics Authority. IwC validates all three sources independently and performs cross-data validation between all three to ensure full consistency.
      </p>

      <Callout type="important">
        PhilID NFC chip verification requires that the enrolling device has NFC capability and that the applicant taps their PhilID to the device during enrollment. If NFC is not available or the applicant does not complete the tap, IwC falls back to optical-only authentication, which is still highly accurate but does not provide chip-level assurance. Issuers deploying PhilID workflows should ensure their enrollment interface prompts for NFC where device capability allows.
      </Callout>

      <h2 id="version-management">Version Management</h2>
      <p>
        Many identity documents go through multiple versions over their lifespan as issuing authorities update security features, refresh visual designs, or add new data elements. IwC's template database tracks each version separately, with version detection handled automatically by the document classification step. Version-specific anomaly rules ensure that features present only in newer versions do not cause false positives on genuine older-version documents, and vice versa. When a document version is detected that exists in the database but whose template has been superseded by a newer issuance, reviewers are notified so they can apply appropriate scrutiny to the older version.
      </p>

      <h2 id="requesting-new-documents">Requesting New Document Types</h2>
      <p>
        If your deployment requires authentication support for a document type not currently in the IwC database — for example, a specialized institutional credential, a recently introduced national ID from a smaller jurisdiction, or a purpose-specific credential from a niche issuing authority — contact Credence ID support to request an addition. The document intelligence team evaluates new document type requests based on the availability of a physical sample and official issuing authority documentation. Most new standard government identity documents can be added to the database within four to six weeks of a request being accepted.
      </p>
    </ArticleWrapper>
  );
}
