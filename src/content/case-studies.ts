export type CaseHighlight = { title: string; body: string };
export type CaseStat = { value: string; label: string };
export type CaseFact = { label: string; value: string };
export type CaseCompareRow = { before: string; after: string };

export type CaseSection = {
  heading: string;
  body?: string;
  items?: CaseHighlight[];
  compare?: CaseCompareRow[];
};

export type CaseQuote = { text: string; attribution: string };

export type Case = {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  category: string;
  client: string;
  status: string;
  tags: string[];
  facts?: CaseFact[];
  highlights?: CaseHighlight[];
  stats?: CaseStat[];
  sections: CaseSection[];
  quote?: CaseQuote;
  footnote?: string;
};

export const cases: Case[] = [
  {
    slug: 'account-portal-rebuild',
    title: 'Rebuilding the Account Portal a Whole Customer Base Logs Into',
    tagline: 'A continuous engineering partnership for a higher-ed data & transcript-services platform',
    excerpt:
      'A year-long, continuous engagement rebuilding identity, CRM sync, search, and disaster recovery for an account portal used across thousands of institutions.',
    category: 'Cloud & Identity',
    client: 'Higher-ed data & transcript-services provider',
    status: 'Recurring engagement · 2025–present',
    tags: ['Cloud Architecture', 'Identity & Access', 'CRM Integration', 'Search', 'Disaster Recovery'],
    facts: [
      { label: 'Client', value: 'Higher-ed data & transcript-services provider' },
      { label: 'Engagement', value: 'Continuous, since 2025' }
    ],
    highlights: [
      { title: 'Separate environments, kept honest', body: 'Dev, QA, and prod are isolated AWS accounts, not folders — nothing reaches production without passing through QA first.' },
      { title: 'Infrastructure as code', body: 'The entire stack — API, functions, databases, auth — is defined in code, so every environment is reproducible and every change is reviewable.' },
      { title: 'Continuous, not one-off', body: 'Still the same engineering team, still shipping on the same pipeline, more than a year into the relationship.' },
      { title: 'Built to fail over', body: 'A standing disaster-recovery region with automated backups and a rehearsed, scripted failover — not a plan on a wiki page.' }
    ],
    sections: [
      {
        heading: 'Starting point: a portal outgrowing its architecture',
        body:
          "The portal handles account identity for our client's institutional customers, but the source of truth for those accounts lives in a separate CRM. Reconciling the two, while a support desk, a community forum, and a directory search all had to agree with each other, is where the engineering effort concentrated."
      },
      {
        heading: 'What changed',
        items: [
          { title: 'A modern, serverless foundation', body: 'The whole stack now scales on demand and provisions itself from code instead of manual setup.' },
          { title: 'A frontend that matches production', body: 'The customer-facing app runs on a current framework with an environment pipeline where what QA tests is exactly what ships.' },
          { title: 'Security reviewed and hardened', body: "Ongoing audits of authentication, session handling, and access control, with issues closed as they're found rather than left for later." },
          { title: 'One source of truth for auth', body: 'Login and session logic, once scattered across the app, now lives in a single place — fewer edge cases, easier to reason about, easier to extend.' }
        ]
      },
      {
        heading: 'Redesigning signup so staff, not the form, decide who gets an account',
        body:
          'The original flow wrote to the CRM the moment someone signed up, before anyone had confirmed they belonged where they claimed. We redesigned the process end to end — a lightweight signup, a staff review step with the tools to verify and correct details, and a single, deliberate point where an account is approved and the CRM is updated. The result is fewer duplicate records, a real checkpoint before access is granted, and a workflow staff actually trust.'
      },
      {
        heading: 'What shipped',
        body: 'A sample of the ground covered over the engagement.',
        items: [
          { title: 'SYNC — Reliable, two-way CRM sync', body: 'Account and contact data stays consistent between the portal and the CRM automatically, with the edge cases — duplicates, partial matches, legacy records — handled instead of ignored.' },
          { title: 'DIRECTORY — A search experience worth using', body: 'Institution and people search was redesigned around how staff actually look things up, with faster results and a cleaner, more informative result view.' },
          { title: 'COMMUNITY — Single sign-on across products', body: 'One login now carries a customer into the community forum as well, with access there reflecting what that institution has actually licensed.' },
          { title: "RESILIENCE — A disaster-recovery plan that's rehearsed", body: 'A standing DR region, automated backups, and a documented failover procedure a new engineer could run — not something discovered for the first time during an outage.' },
          { title: 'SUPPORT — A support experience that stays connected', body: 'Help-desk content and the app now link cleanly for logged-in and logged-out visitors alike — small friction removed from a high-traffic path.' }
        ]
      },
      {
        heading: 'Still their team',
        body:
          "This isn't a project we delivered and left. Our client has kept us on the portal continuously for over a year — through the platform rebuild, the SSO integration, the search redesign, and now the signup overhaul — shipping through the same dev, QA, and prod pipeline every week."
      }
    ],
    quote: {
      text: 'The signup flow, CRM sync, and disaster-recovery posture were three separate problems when we started. A year in, they behave like one system — and the client keeps handing us the next one.',
      attribution: 'Saraslabs engineering, on this retainer'
    },
    footnote: 'Capabilities: cloud architecture · identity & access · CRM integration · search · disaster recovery. Recurring engagement · 2025–present.'
  },
  {
    slug: 'real-time-patient-monitoring',
    title: 'The Quietest Nursing Station Is the One Built to Notice First',
    tagline: 'Moving multi-facility patient monitoring onto a single real-time platform',
    excerpt:
      'A composite deployment consolidating vitals, escalation, and reporting for a multi-facility care provider onto one real-time platform — 6-week rollout, zero disruption to care.',
    category: 'Healthcare',
    client: 'Composite account — multi-facility care provider',
    status: 'Composite case study',
    tags: ['Real-time Systems', 'Healthcare', 'Device Data', 'Compliance'],
    facts: [
      { label: 'Sector', value: 'Healthcare & patient monitoring' },
      { label: 'Team size', value: '40+ clinical & care staff' },
      { label: 'Rollout', value: '6 weeks, zero disruption to care' }
    ],
    stats: [
      { value: '92%', label: 'Faster time-to-alert on abnormal vitals' },
      { value: '3.4×', label: 'More patients monitored, same staffing' },
      { value: '<500ms', label: 'Median reading-to-dashboard latency' },
      { value: '0', label: 'Missed critical alerts since go-live' }
    ],
    sections: [
      {
        heading: 'The problem: visibility that arrived too late to matter',
        body:
          "Before the switch, the care team's picture of what was actually happening with their patients came from disconnected monitors, paper charting, and handoffs passed between shifts by memory more than by record. Vitals landed on a bedside screen and stayed there. Escalation thresholds lived in a binder someone updated by hand. Ward reports took a full shift to compile and were out of date before anyone read them. By the time a change in condition surfaced on a chart, the clinical cost had usually already been paid.",
        items: [
          { title: 'Hours, not minutes', body: "Deterioration in a patient's condition lagged real-world change by hours, not minutes." },
          { title: 'No single source of truth', body: 'For patient and ward assignment — coverage gaps went unnoticed.' },
          { title: 'Growth meant more manual work', body: 'Adding a ward or facility meant adding the manual work required to watch it.' }
        ]
      },
      {
        heading: 'The shift: one platform, one live picture',
        body:
          'The team consolidated everything — vitals ingestion, ward and patient hierarchy, escalation rules, alerting, and reporting — onto one platform. Not as a bolt-on dashboard, but as the clinical backbone underneath how the care team actually works. What used to be an end-of-shift handoff became a live stream. What used to require a nurse cross-referencing a binder became a rule that fires the moment a vital sign crosses a threshold — routed automatically to the right clinician, on the right ward, for the right patient.',
        compare: [
          { before: 'Manual shift reporting, hours stale', after: 'Live reporting, generated on demand' },
          { before: 'Escalation thresholds maintained by hand, prone to drift', after: 'Thresholds evaluated continuously, in real time' },
          { before: 'Patient-to-ward assignment tracked on paper', after: 'Hierarchy-aware routing, always current' },
          { before: 'Adding a ward meant adding headcount', after: 'Adding a ward is a configuration, not a project' }
        ]
      },
      {
        heading: 'Underneath: built from scratch for clinical, real-time, and compliant by design',
        body:
          "This wasn't a generic monitoring tool with a healthcare skin applied. It was engineered from the ground up for the way care teams actually need data to move — instantly, accurately, and under the regulatory weight that patient data carries.",
        items: [
          { title: 'Real-time by architecture, not by polling', body: 'Vitals and device readings stream in continuously and reach a dashboard or an alert in under half a second — not on a refresh cycle, not on a batch job.' },
          { title: 'Built in-house, end to end', body: 'Ingestion, hierarchy, rules engine, alerting, and reporting were all built as one system from the start, so nothing is stitched together from third-party dashboards.' },
          { title: 'Compliant by design', body: 'Encryption in transit and at rest, full audit trails on every reading and every access, and access controls aligned with healthcare data protection standards from day one.' },
          { title: 'Hierarchy-aware routing', body: 'Every patient, ward, and facility lives in a single structure, so an alert always reaches the right clinician without manual reassignment.' },
          { title: 'Configurable clinical rules', body: 'Thresholds and escalation logic are set per patient or ward and evaluated continuously — no spreadsheet or binder to keep in sync.' },
          { title: 'Scales without adding headcount', body: 'Onboarding a new ward or facility is configuration, not integration work — the platform was built to grow with the care network, not slow it down.' }
        ]
      },
      {
        heading: 'Rollout: six weeks, no disruption to live operations',
        body:
          "Migration ran alongside the legacy setup rather than replacing it outright — every reading, every patient record, every ward assignment was carried across and validated before a single clinician's workflow changed.",
        items: [
          { title: 'Wk 1–2 · Ward & patient hierarchy migration', body: 'Facilities, wards, and patient assignments moved and reconciled against existing records.' },
          { title: 'Wk 3–4 · Parallel-run monitoring', body: 'Live vitals flowed into both systems simultaneously; discrepancies were caught, not guessed at.' },
          { title: 'Wk 5 · Escalation & routing cutover', body: 'Clinical alert logic rebuilt natively on the platform and validated against a full incident history.' },
          { title: 'Wk 6 · Legacy retirement', body: 'Old monitors and paper rounds retired. One system of record remained.' }
        ]
      }
    ],
    quote: {
      text: "We stopped finding out about a change in a patient's condition from a call to the nursing station. Now we find out from the system, before it becomes a call. That's the whole difference — it's not that we have more data, it's that we finally trust the data we have.",
      attribution: 'Director of Nursing — composite account, patient monitoring deployment'
    },
    footnote:
      'This case study reflects a composite of outcomes typical across deployments of the platform. Figures presented are illustrative, based on aggregated patterns observed across deployments of comparable scale, and are provided to represent typical impact rather than a single verified client result.'
  },
  {
    slug: 'ivr-connect',
    title: 'Turning an Unpaid Invoice into a Phone Call, Automatically',
    tagline: 'Automated collections outreach from Salesforce to Amazon Connect and back',
    excerpt:
      'How overdue-invoice outreach flows from Salesforce into an automated Amazon Connect call, and how the outcome of that call makes its way back onto the record.',
    category: 'Integration & Automation',
    client: 'Homewater',
    status: 'Internal case study',
    tags: ['Salesforce', 'Amazon Connect', 'IVR', 'Workflow Automation'],
    sections: [
      {
        heading: 'The problem',
        body:
          "Collections calls used to mean someone manually pulling a list of overdue accounts and dialing through it. That doesn't scale, and it leaves no consistent record of what was tried or what happened. The fix was to make the call itself part of the pipeline: Salesforce identifies who needs to be called, an automated voice flow makes the call and collects an outcome, and that outcome is written back onto the same record — without anyone dialing a number by hand."
      },
      {
        heading: 'The shape of the flow',
        body:
          "The pipeline moves in one direction and closes the loop in a second pass. First, outstanding invoices are pulled out of Salesforce and queued up as call jobs. Each job becomes an outbound call placed through Amazon Connect, which plays the invoice details and gathers a response — payment confirmation, a request to speak to an agent, or no answer. Whatever the outcome, it's tracked through to completion and then reconciled back onto the Salesforce invoice as a status field, so the next person who looks at that account sees exactly what was attempted and how it went.",
        items: [
          { title: 'Call setup', body: 'Overdue invoices pulled from Salesforce, queued as outbound call jobs.' },
          { title: 'In-call', body: 'Amazon Connect flow runs, collecting payment status, agent transfer, or no answer.' },
          { title: 'Reconciliation', body: 'A periodic sweep of finished calls writes the final outcome back to the invoice.' }
        ]
      },
      {
        heading: 'Create vs. update, decided once',
        body:
          "As with any system feeding an external channel from Salesforce, the direction of truth had to be unambiguous. Salesforce is the only place a call job originates — nothing on the calling side ever invents a new invoice or account. Every status the call flow produces is matched back to the invoice it came from and applied as an update. A call that can't be matched, or that ends in an ambiguous state, is left for the next reconciliation pass rather than guessed at."
      },
      {
        heading: 'What a flow like this actually needs',
        items: [
          { title: 'A queue between "ready to call" and "in progress"', body: "Call jobs move through several states before they're done. A queue keeps each one moving independently instead of one slow call blocking the batch behind it." },
          { title: 'A place to hold in-flight state', body: "A call isn't a single request/response — it has a lifecycle. Something needs to track where each call is until it reaches a final outcome, separate from the system of record." },
          { title: 'One deterministic matching key', body: 'Every call has to trace back to the exact record that triggered it, so the outcome lands on the right invoice and never on the wrong one.' },
          { title: 'Batching on every write back to the system of record', body: "Writing outcomes one at a time doesn't hold up at volume. Batched writes, with partial-failure handling, keep a few bad records from blocking everything else." },
          { title: 'A reconciliation pass, not just live events', body: 'Calls fail silently, get dropped, or end in a state nothing anticipated. A periodic sweep that re-checks and closes out anything unresolved is what makes the loop trustworthy.' }
        ]
      }
    ],
    footnote: 'Internal write-up — kept intentionally high-level. For implementation specifics, see the pipeline source directly.'
  },
  {
    slug: 'licensing-platform',
    title: 'Turning License Management into Infrastructure, Not Overhead',
    tagline: 'A multi-tenant platform that issues, tracks, and retires software licenses on its own',
    excerpt:
      'Replacing a manual, spreadsheet-driven licensing process with a multi-tenant, serverless platform covering the full license lifecycle — self-service purchasing included.',
    category: 'SaaS Platform',
    client: 'Client identity withheld at their request',
    status: 'Delivered engagement',
    tags: ['Multi-tenant SaaS', 'Serverless / AWS', 'Payments Integration', 'Device Entitlement'],
    stats: [
      { value: '6+', label: 'Core modules covering the license lifecycle end to end' },
      { value: '1', label: 'Codebase serving every distributor tenant on the platform' },
      { value: '0', label: 'Manual spreadsheets left in the licensing workflow' }
    ],
    sections: [
      {
        heading: 'The situation',
        body:
          "The client sells software licenses to a network of distributors, who in turn provision them down to individual devices and end users. That chain — vendor to distributor to device — had outgrown what manual tracking could safely handle. Licenses were being issued, renewed, and revoked by hand, with pricing rules and expiry dates living in scattered records rather than a system of record. As the distributor network grew, so did the risk: a license that should have expired but didn't, a device entitled to software it never paid for, a purchase that couldn't be reconciled after the fact. The brief was to replace that process with a real platform — one that could stand behind every license it issued, self-service purchasing included, without adding headcount to keep it running."
      },
      {
        heading: 'What we built',
        body:
          "A cloud-native license manager that treats a license as a first-class object with a full lifecycle — created, purchased, activated, reviewed, expired — rather than a row in a spreadsheet. It models the client's actual org structure, so permissions and pricing follow the same hierarchy the business already runs on.",
        items: [
          { title: 'Hierarchy-aware licensing', body: "Distributors, sub-tenants, devices, and users are modeled as a real hierarchy, so a license request is evaluated in the context of who's actually asking." },
          { title: 'Self-service purchasing', body: 'Distributors can request, price, and buy licenses directly, with PayPal handling payment capture and the platform handling everything downstream of it.' },
          { title: 'Lifecycle automation', body: 'Expiry, renewal, and status changes run as background workflows instead of a person remembering to check a date.' },
          { title: 'Built-in visibility', body: "An analytics layer gives the client a live view of what's licensed, to whom, and for how long — the audit trail the old process never had." }
        ]
      },
      {
        heading: "How it's put together",
        body:
          "We kept the architecture serverless end to end, so the platform scales with usage rather than with provisioned capacity — a good fit for a licensing system where load tracks business activity, not a fixed baseline.",
        items: [
          { title: 'Frontend', body: 'A modern React/Next.js console for distributors and internal teams, deployed through AWS Amplify.' },
          { title: 'Backend', body: 'Domain logic split into focused AWS Lambda functions — licensing, users, devices, distributors, pricing — behind an API Gateway.' },
          { title: 'Data', body: 'DynamoDB as the system of record, chosen for predictable performance as tenants and license volume grow.' },
          { title: 'Identity', body: 'Cognito-backed authentication with a custom authorizer layer, so access follows the org hierarchy rather than a flat role list.' },
          { title: 'Infrastructure', body: 'The entire stack is defined as AWS CDK, so a new tenant environment is a deployment, not a project.' }
        ]
      },
      {
        heading: 'Outcome',
        body:
          "The platform now runs the client's licensing operation directly — distributors purchase and manage licenses themselves, entitlements stay in sync with what was actually paid for, and the manual reconciliation work that used to eat internal hours has largely gone away."
      }
    ],
    quote: {
      text: 'A licensing process that used to depend on someone remembering to check a date now runs itself — and the client can see, at any moment, exactly what’s licensed and to whom.',
      attribution: 'Delivery Summary'
    },
    footnote: "Client identity withheld at their request. Details reflect the platform's architecture and scope as delivered."
  },
  {
    slug: 'order-sync',
    title: 'Keeping Orders in Sync Without Anyone Typing Them Twice',
    tagline: 'Marketplace orders flow into Salesforce automatically, and fulfillment updates flow back',
    excerpt:
      'How marketplace orders flow into Salesforce automatically, and how fulfillment updates flow back, without a nightly batch job or a person in the loop.',
    category: 'Integration & Automation',
    client: 'Homewater',
    status: 'Internal case study',
    tags: ['Salesforce', 'Marketplace Integration', 'Event-driven Pipelines'],
    sections: [
      {
        heading: 'The problem',
        body:
          "Before this, order fulfillment status lived in two places that didn't talk to each other. Someone had to check the marketplace, then update Salesforce by hand — slow, and wrong the moment volume picked up. The fix was to treat order sync as a standing pipeline rather than a task: every change on either side becomes an event, and the pipeline reacts to it within seconds instead of at the end of the day."
      },
      {
        heading: 'The shape of the flow',
        body:
          'The pipeline runs in two directions, and each has a different job. Outbound, Salesforce is the source of truth — orders ready to ship get pulled and pushed out as fulfillment requests. Inbound, the marketplace is the source of truth for what actually happened — status and inventory changes get matched to an existing Salesforce record and written back onto it.',
        items: [
          { title: 'Outbound', body: 'Scheduled pull of ready-to-ship orders — always creates a new fulfillment request.' },
          { title: 'Inbound', body: 'Status & inventory events are matched by external ID and applied as updates only.' },
          { title: 'Reconciliation', body: 'A periodic sweep catches anything a missed event left behind.' }
        ]
      },
      {
        heading: 'Create vs. update, decided once',
        body:
          "The rule that keeps the two lanes from colliding: Salesforce is the only place an order gets created. Every event coming back from the marketplace is treated strictly as an update — it's matched against an existing record by external order ID, and if no match is found, it's logged and set aside rather than silently creating a duplicate. That single rule removes an entire category of duplicate-record and out-of-order-write bugs."
      },
      {
        heading: 'What a flow like this actually needs',
        items: [
          { title: 'A queue between "received" and "processed"', body: "Decouples the moment an event arrives from the moment it's handled, so a slow or failing step doesn't block the next event in line." },
          { title: 'A scheduled reconciliation sweep', body: 'Webhooks and push events get missed. A periodic re-check is what turns "usually in sync" into "eventually always in sync."' },
          { title: 'One deterministic matching key', body: 'Create-vs-update stops being a judgment call once every record carries a stable external ID to match against.' },
          { title: 'Batching and pacing on every write', body: 'Any external API has a ceiling. Writing in controlled batches with small delays keeps the pipeline under it by design, not by luck.' },
          { title: 'A place for failures to land', body: "Per-call error handling plus a dead-letter path and centralized logs mean a failure gets noticed and retried, not lost." }
        ]
      }
    ],
    footnote: 'Internal write-up — kept intentionally high-level. For implementation specifics, see the pipeline source directly.'
  }
];
