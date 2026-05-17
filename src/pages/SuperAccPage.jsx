import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const modules = [
  {
    number: "01",
    title: "Financial Statement Analysis",
    client: "Asia Pacific leading commercial banking group",
    icon: "/mickey-ykm-page/images/financial-statement-analysis-icon.png",
    problem: "",
    solution: "SuperAcc deploys a composition of 20+ AI models to dissect, identify, and extract key information from complex financial statements — covering balance sheets, income statements, cash flow statements, and disclosure notes. The system calculates 400+ financial spreading items based on IFRS standards, handles dynamic table structures, extracts off-balance sheet items for risk identification, and supports financial ratio analysis, vertical/horizontal analysis, and cash flow forecasting — reducing a 2-day manual process to under 30 minutes.",
    tags: ["Financial Spreading", "IFRS", "20+ AI Models", "400+ Data Points"]
  },
  {
    number: "02",
    title: "Credit Analysis (Bank Statements)",
    client: "Leading MNC banking group",
    icon: "/mickey-ykm-page/images/bank-statement-analysis-icon.png",
    problem: "",
    solution: "SuperAcc applies a Layout Language Model (LayoutLM) to capture bank account information and detect suspicious anomalies — including font token sizing irregularities and transaction balance discrepancies. Over 100 business logic rules categorise all transactions, identifying internal transfers, sales turnover, and unauthorised overdrafts, and consolidate fraud alerts automatically — cutting a full day of manual review to 1–2 hours.",
    tags: ["LayoutLM", "Fraud Detection", "100+ Business Logic Rules", "Transaction Categorisation"]
  },
  {
    number: "03",
    title: "Know Your Business (KYB)",
    client: "Singaporean bank",
    icon: "/mickey-ykm-page/images/ekyc-solution-icon.png",
    problem: "",
    solution: "SuperAcc automates the purchase and parsing of the latest company registry documents — covering Limited Companies, Sole Proprietorships, Open-ended Fund Companies, and Limited Partnership Funds. The system extracts shareholder and director information, constructs organisational charts, calculates multi-layer UBO, and generates a consolidated KYB compliance report configurable to different regulatory requirements — compressing a 2-day manual review to under 2 hours.",
    tags: ["UBO Tracing", "Company Registry", "RPA + AI", "Compliance Reporting"]
  },
]

const painPoints = [
  {
    title: "Slow time-to-market",
    body: "Manual financial spreading, credit analysis, and KYB reviews each took 1–2 days per case. As business volume grew, the backlog became unmanageable and time-sensitive decisions were delayed."
  },
  {
    title: "High staffing cost & turnover",
    body: "Maintaining a 50+ headcount spreading team was expensive. Repetitive document review work led to high staff turnover, compounding training costs and knowledge loss."
  },
  {
    title: "Limited scalability",
    body: "Human-driven workflows could not scale proportionally with demand. Peaks in client onboarding or credit application volumes created bottlenecks with no quick resolution."
  },
  {
    title: "Error-prone manual processes",
    body: "Analysts manually reviewing hundreds of pages of financial statements or tracing multi-layer corporate ownership structures introduced inconsistency and compliance risk."
  },
]

const timeImpact = [
  { workflow: "Financial Spreading", before: "±16 hours", after: "30 minutes", reduction: "−84%" },
  { workflow: "Bank Statement Analysis", before: "±6 hours", after: "1–2 hours", reduction: "−91%" },
  { workflow: "KYB Processing", before: "±24 hours", after: "1–2 hours", reduction: "−93%" },
]

const techPillars = [
  {
    title: "Document-Agnostic Models",
    image: "/mickey-ykm-page/images/doc-agnostic.png",
    body: "Core AI models are trained to understand any document type, forming the foundation for all three solution modules."
  },
  {
    title: "Domain Knowledge Models",
    image: "/mickey-ykm-page/images/domain-model.png",
    body: "Specialised models for financial analysis and credit analysis encode deep domain expertise, improving accuracy on sector-specific documents."
  },
  {
    title: "Quantract Engine",
    body: "Understands document context and constructs structured digital schemas from unstructured financial data."
  },
  {
    title: "Cloud Infrastructure",
    body: "Deployed on Kubernetes for container orchestration and Terraform for infrastructure-as-code, enabling scalable, secure private cloud deployment with no data transfer to third-party services."
  },
]

export default function SuperAccPage() {
  return (
    <>
      <div className="pt-16">
        {/* Hero — graphic shifted left by constraining to left 60% of container */}
        <section className="relative bg-stone-900 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/mickey-ykm-page/images/superacc_graphic.png"
              alt=""
              className="absolute right-0 w-auto object-cover object-left opacity-80"
              style={{ right: '5%', top: '5%', bottom: '5%', height: '90%' }}
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 py-24">
            <Link to="/work" className="text-stone-500 text-sm hover:text-stone-300 transition mb-8 inline-block">
              ← Back to Work
            </Link>
            <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-4">Case Study · Fintech AI SaaS</p>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6 max-w-xl">
              SuperAcc Automation Intelligence
            </h1>
            <p className="text-stone-300 text-base leading-relaxed max-w-xl">
              SuperAcc is an AI-powered financial document intelligence platform built for the banking sector. It automates three core workflows — financial statement analysis, bank statement credit analysis, and corporate KYB — replacing manual processes that previously required days of analyst time with results delivered in under an hour.
            </p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="px-6 py-24 bg-[#f9f7f4]">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">The Challenge</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">User Pain Points</h2>
            <p className="text-stone-400 text-base mb-12 max-w-2xl">
              Financial institutions were struggling with a manual-first approach to document processing — one that couldn't keep pace with growing regulatory demands and client volumes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((p, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-indigo-300 text-xl mt-0.5 shrink-0">✕</span>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">{p.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Vision — 2 cards only, images as small header thumbnails */}
        <section className="px-6 py-24 bg-stone-900">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3">Product Vision</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Built for Trust, Designed for Scale</h2>
            <p className="text-stone-400 text-base leading-relaxed mb-16 max-w-2xl">
              SuperAcc was built on a conviction that AI in banking must be both powerful and accountable — automating the heavy lifting without removing human judgment from decisions that matter.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="border border-stone-700 rounded-2xl p-8">
                <img
                  src="/mickey-ykm-page/images/human-in-the-loop.png"
                  alt="Human-in-the-loop workflow"
                  className="w-full h-48 object-contain mb-5"
                />
                <h3 className="text-xl font-semibold text-white mb-4">Human-in-the-Loop Hybrid Workflow</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  SuperAcc is not a black-box automation. Its architecture is designed around a human-in-the-loop model — AI handles extraction, classification, and preliminary analysis at scale, while human analysts retain oversight for review, exception handling, and final sign-off. This hybrid approach ensures the speed and consistency of machine intelligence without sacrificing the accountability that regulated banking environments demand. Every output is auditable, every exception is flagged, and every decision remains traceable.
                </p>
              </div>
              {/* Card 2 */}
              <div className="border border-stone-700 rounded-2xl p-8">
                <img
                  src="/mickey-ykm-page/images/parsing-visual.png"
                  alt="Deep learning document parsing"
                  className="w-full h-48 object-contain mb-5"
                />
                <h3 className="text-xl font-semibold text-white mb-4">Deep Learning Meets Finance Domain Logic</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Accurate document parsing alone is not enough. SuperAcc combines state-of-the-art deep learning models — trained to interpret complex, variable document layouts — with a robust layer of finance domain business logic encoding IFRS standards, credit assessment rules, and compliance requirements. The result is a system that does not just extract data, but understands it: cross-referencing disclosure notes, applying 400+ spreading items, executing 100+ transaction categorisation rules, and surfacing the insights that analysts actually need to make confident decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Modules — icon as small badge beside number */}
        <section className="px-6 py-24 bg-[#f9f7f4]">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">Solutions</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-16">Three Core Modules</h2>
            <div className="space-y-16">
              {modules.map((mod) => (
                <div key={mod.number} className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div className="flex flex-col items-center gap-3">
                    <img src={mod.icon} alt={mod.title} className="w-full h-40 object-contain" />
                    <div className="font-display text-4xl text-stone-200 leading-none">{mod.number}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-1">{mod.title}</h3>
                    <p className="text-xs text-indigo-500 font-medium mb-4">Client: {mod.client}</p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-5">{mod.solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {mod.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology — images as small thumbnails, not full-width */}
        <section className="px-6 py-24 bg-stone-900">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3">Under the Hood</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-16">Technology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {techPillars.map((t, i) => (
                <div key={i} className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6">
                  {t.image && (
                    <img src={t.image} alt={t.title} className="w-full h-48 object-contain mb-4" />
                  )}
                  <h3 className="font-semibold text-white mb-3">{t.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits — table view restored, no graphic */}
        <section className="px-6 py-24 bg-[#f9f7f4]">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">Outcomes</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-12">Key Benefits</h2>

            {/* Time impact table */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden mb-10">
              <div className="grid grid-cols-4 bg-stone-50 border-b border-stone-200 px-6 py-3">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide col-span-1">Workflow</p>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide text-center">Before</p>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide text-center">After</p>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide text-center">Reduction</p>
              </div>
              {timeImpact.map((row, i) => (
                <div key={i} className={`grid grid-cols-4 px-6 py-4 items-center ${i < timeImpact.length - 1 ? 'border-b border-stone-100' : ''}`}>
                  <p className="text-sm font-medium text-stone-700">{row.workflow}</p>
                  <p className="text-sm text-stone-400 text-center">{row.before}</p>
                  <p className="text-sm text-stone-700 text-center">{row.after}</p>
                  <p className="text-sm font-semibold text-indigo-600 text-center">{row.reduction}</p>
                </div>
              ))}
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Optimised time-to-value", "Deployable to private cloud", "No data transfer to third parties", "Customisable workflow", "Integratable with banking systems", "Responsible AI"].map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-stone-200 rounded-xl p-4">
                  <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>
                  <p className="text-stone-600 text-sm">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
