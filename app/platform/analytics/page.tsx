import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Analytics from '@/public/Analytics.png';
import Image from 'next/image';

export const metadata = {
  title: 'Navigating Platform Analytics',
  description: 'A guide to the Analytics dashboard, covering timeframe filters, top-level metrics, data visualizations, and the raw data table.',
};

const toc = [
  { id: 'setting-timeframe', title: 'Setting Your Timeframe & Exporting', level: 2 as const },
  { id: 'top-level-metrics', title: 'Reviewing Top-Level Metrics', level: 2 as const },
  { id: 'visualizing-data', title: 'Visualizing Your Data', level: 2 as const },
  { id: 'raw-data-table', title: 'Analyzing the Raw Data Table', level: 2 as const },
];

const content = `Welcome to the Analytics screen. This dashboard is your primary reporting tool, providing a bird's-eye view of platform performance. Setting Your Timeframe and Exporting. Time Filters: 7D, 30D, 90D, 1Y, All buttons. Currently 30D selected. Export: Download button for CSV/spreadsheet. Reviewing Top-Level Metrics. The KPI ribbon at the top provides instant insight into your credential landscape. Total Issued: 177. Active: 177 (100%). Revoked: 0. Expired: 0. Visualizing Your Data. Three charts help you understand trends and distributions. Credential Issuance Over Time: Large line chart with Total/By Status toggle. Status Distribution: Horizontal progress bars showing 100% Active. Monthly Comparison: Vertical bar chart comparing Active (blue) vs Revoked (red) month-over-month. Analyzing the Raw Data Table. Monthly Breakdown table with columns for Month, Total, Active, Revoked, Expired, Active %. Example: Mar 26 = 114 total, 100%; Apr 26 = 63 total, 100%.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/analytics" title="Navigating Platform Analytics" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>Analytics</strong> screen. This dashboard is your primary reporting tool, providing a bird&apos;s-eye view of platform performance.
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image src={Analytics} alt="" />
      <br></br>

      <h2 id="setting-timeframe">Setting Your Timeframe &amp; Exporting</h2>
      <ul>
        <li>
          <strong>Time Filters:</strong> Use the <code>7D</code>, <code>30D</code>, <code>90D</code>, <code>1Y</code>, and <code>All</code> buttons to adjust the reporting window. By default, <strong>30D</strong> is selected, giving you the last 30 days of data.
        </li>
        <li>
          <strong>Export:</strong> Click the <strong>Download</strong> button to export the current view as a CSV or spreadsheet file for offline analysis or compliance reporting.
        </li>
      </ul>

      <h2 id="top-level-metrics">Reviewing Top-Level Metrics</h2>
      <p>The KPI ribbon at the top provides instant insight into your credential landscape:</p>
      <ul>
        <li><strong>Total Issued:</strong> <strong>177</strong> &mdash; the total number of credentials generated on the platform.</li>
        <li><strong>Active:</strong> <strong>177</strong> (<strong>100%</strong>) &mdash; credentials that are currently valid and in use.</li>
        <li><strong>Revoked:</strong> <strong>0</strong> &mdash; credentials that have been manually or automatically revoked.</li>
        <li><strong>Expired:</strong> <strong>0</strong> &mdash; credentials that have passed their validity period.</li>
      </ul>

      <h2 id="visualizing-data">Visualizing Your Data</h2>
      <p>Three charts help you understand trends and distributions at a glance:</p>
      <ul>
        <li>
          <strong>Credential Issuance Over Time:</strong> A large line chart plotting credential creation over the selected timeframe. Use the <strong>Total / By Status</strong> toggle to switch between an aggregate view and a status-level breakdown.
        </li>
        <li>
          <strong>Status Distribution:</strong> Horizontal progress bars showing the proportion of credentials by status. Currently displays <strong>100% Active</strong>.
        </li>
        <li>
          <strong>Monthly Comparison:</strong> A vertical bar chart comparing <strong>Active</strong> (blue) versus <strong>Revoked</strong> (red) credentials month-over-month, making it easy to spot anomalies or trends in revocation rates.
        </li>
      </ul>

      <h2 id="raw-data-table">Analyzing the Raw Data Table</h2>
      <p>Below the charts, the <strong>Monthly Breakdown</strong> table provides the underlying numbers in a structured format:</p>
      <ul>
        <li><strong>Columns:</strong> Month, Total, Active, Revoked, Expired, Active %</li>
        <li>
          <strong>Example rows:</strong>
          <ul>
            <li><strong>Mar 26:</strong> 114 total, 114 active, 0 revoked, 0 expired &mdash; <strong>100%</strong> active rate</li>
            <li><strong>Apr 26:</strong> 63 total, 63 active, 0 revoked, 0 expired &mdash; <strong>100%</strong> active rate</li>
          </ul>
        </li>
      </ul>
      <p>
        Use this table alongside the charts to drill into specific months and verify that your issuance numbers and revocation rates align with expectations.
      </p>
    </ArticleWrapper>
  );
}
