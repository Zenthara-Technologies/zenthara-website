export type Case = {
  slug: string;
  title: string;
  excerpt: string;
  client: string;
  problem: string;
  solution: string;
  results: string[];
  year?: number;
  tags?: string[];
  tech?: string[];
};

export const cases: Case[] = [
  {
    slug: 'ecommerce-replatform',
    title: 'E‑commerce Replatform',
    excerpt: 'Migrated monolith to microservices on AWS, improving uptime and agility.',
    client: 'RetailCo',
    problem: 'A monolithic platform hindered releases and scalability.',
    solution: 'Designed microservices with event‑driven architecture, CI/CD, and IaC on AWS.',
    results: ['99.95% uptime', 'Deploys cut from weekly to hourly', 'Infra cost -20%'],
    year: 2024,
    tags: ['Replatform', 'Microservices', 'AWS'],
    tech: ['AWS ECS', 'API Gateway', 'Terraform']
  },
  {
    slug: 'data-lake-analytics',
    title: 'Data Lake & Analytics',
    excerpt: 'Built batch + streaming ETL with governance and cost controls.',
    client: 'FinServe',
    problem: 'Siloed data sources lacked governance and real‑time insights.',
    solution: 'Implemented lakehouse architecture with streaming ETL and quality checks.',
    results: ['Time‑to‑insight -35%', 'Central governance', 'Cost visibility'],
    year: 2023,
    tags: ['Data', 'Analytics', 'Governance'],
    tech: ['Spark', 'Delta Lake', 'Airflow']
  },
  {
    slug: 'saas-observability',
    title: 'SaaS Observability',
    excerpt: 'Unified metrics, logs, traces; cut MTTR by 45%.',
    client: 'HealthTech',
    problem: 'Fragmented tooling hindered incident response and reliability.',
    solution: 'Rolled out OpenTelemetry, SLOs, and on‑call runbooks.',
    results: ['MTTR -45%', 'Error budget policy', 'Improved developer productivity'],
    year: 2022,
    tags: ['SRE', 'Observability', 'Reliability'],
    tech: ['OpenTelemetry', 'Prometheus', 'Grafana']
  }
];
