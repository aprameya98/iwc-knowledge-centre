import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Deployment & Operations | Issuance with Credence Solution Overview',
  description: 'Hosting options, environment strategy, zero-downtime updates, 24/7 operations, and disaster recovery in IwC.',
};

const toc = [
  { id: 'hosting', title: 'Hosting Options', level: 2 as const },
  { id: 'environments', title: 'Environment Strategy', level: 2 as const },
  { id: 'zero-downtime', title: 'Zero-Downtime Updates', level: 2 as const },
  { id: 'operations', title: '24/7 Operations', level: 2 as const },
  { id: 'disaster-recovery', title: 'Disaster Recovery', level: 2 as const },
];

const contentText = `IwC supports three deployment models: Credence ID managed cloud fully hosted and operated by Credence ID in AWS, customer private cloud deployed in the customer's own AWS Azure or GCP environment managed by Credence ID, and on-premises deployment for air-gapped or sovereign data environments. All deployments use the same containerized architecture and the same operational runbooks. The standard environment strategy uses three environments: development sandbox for integration work, staging for pre-production validation, and production. Zero-downtime updates use blue-green deployment. Operations are covered 24 hours a day 7 days a week with defined SLAs for incident response. Disaster recovery uses multi-region active-passive configuration with recovery time objective of 4 hours and recovery point objective of 1 hour.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/deployment-operations"
      title="Deployment & Operations"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="hosting">Hosting Options</h2>
      <p>
        IwC is available in three deployment configurations to meet the data sovereignty, compliance, and operational requirements of any program:
      </p>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Infrastructure</th>
            <th>Managed By</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Credence ID Managed Cloud</strong></td>
            <td>AWS (Credence ID account)</td>
            <td>Credence ID</td>
            <td>Programs that want fastest time to production with no infrastructure overhead</td>
          </tr>
          <tr>
            <td><strong>Customer Private Cloud</strong></td>
            <td>AWS, Azure, or GCP (customer account)</td>
            <td>Credence ID</td>
            <td>Programs with data residency requirements or existing cloud commitments</td>
          </tr>
          <tr>
            <td><strong>On-Premises</strong></td>
            <td>Customer-owned hardware</td>
            <td>Credence ID (remote) or customer</td>
            <td>Air-gapped environments, sovereign data requirements, or classified programs</td>
          </tr>
        </tbody>
      </table>
      <p>
        All three models use the same containerized IwC architecture, the same AWS CloudHSM integration for signing, and the same operational runbooks. The deployment model affects where infrastructure lives — not what the platform does or how it performs.
      </p>

      <h2 id="environments">Environment Strategy</h2>
      <p>
        Every IwC deployment follows a three-environment strategy to support safe integration, testing, and production operations:
      </p>
      <table>
        <thead>
          <tr>
            <th>Environment</th>
            <th>Purpose</th>
            <th>HSM</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Development / Sandbox</strong></td>
            <td>Integration development, API testing, template prototyping</td>
            <td>Software key store (not HSM)</td>
            <td>Synthetic test data only</td>
          </tr>
          <tr>
            <td><strong>Staging / UAT</strong></td>
            <td>Pre-production validation, UAT, load testing, release verification</td>
            <td>Dedicated HSM (not shared with production)</td>
            <td>Anonymized or synthetic data</td>
          </tr>
          <tr>
            <td><strong>Production</strong></td>
            <td>Live program operations</td>
            <td>Production AWS CloudHSM (FIPS 140-3 L3)</td>
            <td>Live — governed by data handling policies</td>
          </tr>
        </tbody>
      </table>

      <h2 id="zero-downtime">Zero-Downtime Updates</h2>
      <p>
        IwC updates — including platform version upgrades, credential template changes, and PKI updates — are deployed using a blue-green deployment strategy. The new version is deployed in parallel, traffic is switched over atomically, and the previous version remains on standby for immediate rollback if needed. Holders experience no interruption. In-flight issuance operations are not affected.
      </p>
      <p>
        Template updates are versioned. Credentials issued under a previous template version remain valid and are served by the correct schema — there is no forced migration of existing credentials when a template is updated.
      </p>

      <h2 id="operations">24/7 Operations</h2>
      <p>
        Credence ID provides round-the-clock operational coverage for all managed deployments:
      </p>
      <ul>
        <li><strong>24/7 monitoring:</strong> All platform components — issuance service, HSM, OpenID4VCI endpoints, status list service — are continuously monitored with automated alerting</li>
        <li><strong>Incident response SLAs:</strong> P1 incidents (platform down or credential issuance blocked) receive a response within 15 minutes and a resolution target of 2 hours</li>
        <li><strong>Change management:</strong> All planned maintenance is pre-communicated with defined maintenance windows, and emergency changes follow a documented escalation path</li>
        <li><strong>Capacity management:</strong> Proactive capacity monitoring with auto-scaling ensures throughput targets are met during volume spikes</li>
      </ul>

      <h2 id="disaster-recovery">Disaster Recovery</h2>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Target</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Recovery Time Objective (RTO)</td>
            <td>4 hours</td>
          </tr>
          <tr>
            <td>Recovery Point Objective (RPO)</td>
            <td>1 hour</td>
          </tr>
          <tr>
            <td>Architecture</td>
            <td>Multi-region active-passive</td>
          </tr>
          <tr>
            <td>Database</td>
            <td>Continuous replication to standby region</td>
          </tr>
          <tr>
            <td>HSM</td>
            <td>Dedicated HSM in both primary and DR region</td>
          </tr>
          <tr>
            <td>Failover</td>
            <td>Automated with manual override capability</td>
          </tr>
          <tr>
            <td>DR Testing</td>
            <td>Documented annual failover test with results reviewed by Credence ID and customer</td>
          </tr>
        </tbody>
      </table>
    </ArticleWrapper>
  );
}
