import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Supported Identity Documents',
  description: 'A guide to the identity documents accepted by the IwC platform for enrollment, including passports, national IDs, and driver\'s licenses.',
};

const toc = [
  { id: 'document-coverage', title: 'Document Coverage', level: 2 as const },
  { id: 'document-types', title: 'Document Types', level: 2 as const },
  { id: 'document-requirements', title: 'Document Requirements', level: 2 as const },
  { id: 'unsupported-documents', title: 'Unsupported Documents', level: 2 as const },
];

const content = `The IwC platform supports over 1,500 identity document types from countries around the world, including passports, national identity cards, and driver's licenses. Accepted document types include machine-readable passports from all ICAO member states, national identity cards issued by governments worldwide, and driver's licenses from supported jurisdictions. Note that the specific documents accepted for any given enrollment are determined by the issuing organization's configuration. Documents must be valid, undamaged, and readable. Expired, laminated, or heavily worn documents may not be accepted.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/enrollment/supported-documents"
      title="Supported Identity Documents"
      contentText={content}
      toc={toc}
    >
      <h2 id="document-coverage">Document Coverage</h2>
      <p>
        The IwC identity verification platform supports more than 1,500 identity document types from
        countries and territories around the world. This extensive library is maintained and updated
        regularly to include newly issued document versions and additional jurisdictions. The platform's
        document recognition engine can extract data from machine-readable zones (MRZ), barcodes, and
        visual inspection zones, and can validate security features such as holograms, microprinting, and
        UV-reactive elements where camera capabilities allow.
      </p>

      <Callout type="note">
        The specific documents accepted for your enrollment are determined by your issuing organization's
        configuration. Even if the IwC platform technically supports a document type, your organization
        may restrict enrollment to a specific subset of documents. Check your enrollment invitation or
        contact your issuing organization if you are unsure which documents are accepted.
      </Callout>

      <h2 id="document-types">Document Types</h2>
      <p>
        The three primary categories of supported documents are passports, national identity cards, and
        driver's licenses. <strong>Passports</strong> from all ICAO member states are supported, including
        both standard biographical passports and biometric e-passports with NFC chips. <strong>National
        identity cards</strong> from governments worldwide are supported, including cards with and without
        machine-readable zones. <strong>Driver's licenses</strong> from supported jurisdictions are
        accepted, including cards with PDF417 barcodes and those with only visual data. Additional document
        types such as residence permits, refugee travel documents, and military IDs may be supported
        depending on your organization's configuration.
      </p>

      <h2 id="document-requirements">Document Requirements</h2>
      <p>
        Regardless of document type, your document must meet the following requirements to be accepted.
        The document must be currently valid and not expired. The document must be undamaged — torn edges,
        significant scratches over the photo or MRZ, or water damage that obscures text will likely result
        in a failed capture. The document must be presented unobstructed: remove it from any wallet sleeve
        or laminate cover before photographing. The document must be the original physical document;
        photographs of documents displayed on another screen are not accepted.
      </p>

      <h2 id="unsupported-documents">Unsupported Documents</h2>
      <p>
        Certain document types are not accepted by the IwC platform. Birth certificates, social security
        cards, utility bills, and other secondary identity documents do not meet the requirements for
        biometric identity verification and are not supported. Student ID cards issued by educational
        institutions are generally not supported unless specifically configured by your organization.
        If your only available document is not supported, contact your issuing organization to discuss
        alternative enrollment pathways that may be available.
      </p>
    </ArticleWrapper>
  );
}
