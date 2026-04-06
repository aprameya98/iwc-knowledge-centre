import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Analytics Dashboard | Issuance with Credence Solution Overview',
  description: 'Real-time KPIs, issuance trends, status distribution, and data export in the IwC Analytics Dashboard.',
};

const toc = [
  { id: 'summary-kpis', title: 'Summary KPIs', level: 2 as const },
  { id: 'issuance-trends', title: 'Issuance Over Time', level: 2 as const },
  { id: 'status-distribution', title: 'Status Distribution', level: 2 as const },
  { id: 'monthly-comparison', title: 'Monthly Comparison', level: 2 as const },
  { id: 'data-export', title: 'Data Export', level: 2 as const },
];

const contentText = `The IwC Analytics Dashboard provides real-time visibility into program health and credential activity across every tenant and issuer. Summary KPIs show total credentials issued active credentials suspended credentials and revoked credentials. Issuance over time charts show daily weekly and monthly issuance volume with drill-down by credential type and issuer. Status distribution shows the current breakdown of credential states across the full program. Monthly comparison surfaces period-over-period trends for issuance volume and lifecycle events. All data is exportable in CSV or JSON format via the Admin Portal or API.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/analytics"
      title="Analytics Dashboard"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="summary-kpis">Summary KPIs</h2>
      <p>
        The Analytics Dashboard surfaces the metrics that matter most for day-to-day program management and executive visibility. Summary KPIs are shown at the top of the dashboard, updated in real time:
      </p>
      <table>
        <thead>
          <tr>
            <th>KPI</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Total Credentials Issued</strong></td>
            <td>Cumulative count of all credentials issued since program launch — across all tenants, issuers, and credential types</td>
          </tr>
          <tr>
            <td><strong>Active Credentials</strong></td>
            <td>Count of credentials currently in an active, valid state — provisioned and accepted by verifiers</td>
          </tr>
          <tr>
            <td><strong>Suspended Credentials</strong></td>
            <td>Count of credentials currently suspended — temporarily invalid, eligible for reinstatement</td>
          </tr>
          <tr>
            <td><strong>Revoked Credentials</strong></td>
            <td>Count of credentials permanently revoked — not eligible for reinstatement</td>
          </tr>
          <tr>
            <td><strong>Pending Activation</strong></td>
            <td>Credentials issued but not yet provisioned to a holder wallet — offer delivered, activation not complete</td>
          </tr>
          <tr>
            <td><strong>Expiring Soon</strong></td>
            <td>Credentials within the configured renewal notification window — renewal offers generated or pending</td>
          </tr>
        </tbody>
      </table>

      <h2 id="issuance-trends">Issuance Over Time</h2>
      <p>
        The issuance trend chart shows daily, weekly, and monthly credential issuance volume over a configurable time range. Charts can be filtered by:
      </p>
      <ul>
        <li>Credential type (e.g., Driver&apos;s Licence, Digital ID, Person ID, or any custom type)</li>
        <li>Issuer (for multi-tenant deployments — compare issuance rates across offices or regions)</li>
        <li>Tenant (for programs where multiple agencies share the platform)</li>
        <li>Date range (7-day, 30-day, 90-day, or custom)</li>
      </ul>
      <p>
        Trend data helps program administrators identify seasonal patterns, processing bottlenecks, and onboarding spikes — and plan infrastructure capacity accordingly.
      </p>

      <h2 id="status-distribution">Status Distribution</h2>
      <p>
        The status distribution view shows the current breakdown of credential states across the entire program — or filtered to a specific issuer or credential type. This gives administrators an immediate picture of program health:
      </p>
      <ul>
        <li>What percentage of issued credentials are currently active?</li>
        <li>Is the suspension rate elevated — indicating a policy or eligibility issue?</li>
        <li>Are revocation events concentrated in a specific issuer or time period?</li>
      </ul>
      <p>
        Anomalies in the distribution are immediately visible and can be investigated directly from the dashboard by drilling into the affected population.
      </p>

      <h2 id="monthly-comparison">Monthly Comparison</h2>
      <p>
        The monthly comparison panel surfaces period-over-period trends for key program metrics — issuance volume, activation rate, lifecycle events (renewals, revocations, suspensions), and pending activations. This view is particularly useful for:
      </p>
      <ul>
        <li>Reporting to program leadership and stakeholders</li>
        <li>Identifying trends that require operational intervention</li>
        <li>Validating the impact of process changes on issuance throughput or activation completion rates</li>
      </ul>

      <h2 id="data-export">Data Export</h2>
      <p>
        All analytics data is exportable — from the Admin Portal or programmatically via the Analytics API:
      </p>
      <ul>
        <li><strong>CSV export:</strong> Available directly from the dashboard for any chart or table view — filtered by date range, credential type, and issuer</li>
        <li><strong>JSON via API:</strong> The same data available via the portal is accessible via authenticated REST API, enabling integration with external BI tools, SIEM systems, or reporting pipelines</li>
        <li><strong>Scheduled exports:</strong> Configurable recurring exports can be delivered to a designated endpoint on a daily, weekly, or monthly basis</li>
      </ul>
    </ArticleWrapper>
  );
}
