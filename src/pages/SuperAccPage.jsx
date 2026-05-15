import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const stats = [
  { label: "Financial Spreading Time Saved", before: "±16 hrs", after: "30 min", reduction: "−84%" },
  { label: "Bank Statement Analysis Time Saved", before: "±6 hrs", after: "1–2 hrs", reduction: "−91%" },
  { label: "KYB Processing Time Saved", before: "±24 hrs", after: "1–2 hrs", reduction: "−93%" },
]

const modules = [
  {
    number: "01",
    title: "Financial Statement Analysis",
    client: "Asia Pacific leading commercial banking group",
    problem: "A bank's financial spreading team of 50+ headcounts took up to 2 days to analyse a single 200+ page listed-company financial statement. The manual process was slow to scale and costly to maintain.",
    solution: "SuperAcc deploys a composition of 20+ AI models to dissect, identify, and extract key information from complex financial statements — including balance sheets, income statements, cash flow statements, and disclosure notes. The system calculates 400+ financial spreading items based on IFRS standards, handles dynamic table structures, extracts off-balance sheet items for risk identification, and supports financial ratio analysis, vertical/horizontal analysis, and cash flow forecasting.",
    tags: ["Financial Spreading", "IFRS", "20+ AI Models", "400+ Data Points"]
  },
  {
    number: "02",
    title: "Credit Analysis (Bank Statements)",
    client: "Leading MNC banking group",
    problem: "Processing 6 months of bank statements for a single corporate client took around 1 day. Growing demand outpaced available human resources, creating a bottleneck in credit decisioning.",
    solution: "SuperAcc uses a Layout Language Model (LayoutLM) to capture bank account information and detect suspicious anomalies including font token sizing irregularities and transaction balance discrepancies. 100+ business logic rules categorise all transactions — identifying internal transfers, sales turnover, and unauthorised overdrafts — and consolidate fraud alerts automatically.",
    tags: ["LayoutLM", "Fraud Detection", "100+ Business Logic Rules", "Transaction Categorisation"]
  },
  {
    number: "03",
    title: "Know Your Business (KYB)",
    client: "Singaporean bank",
    problem: "Corporate KYB required reviewing 12+ company documents and took around 2 days per case. Tracing Ultimate Beneficial Ownership (UBO) across multi-layer corporate structures was particularly complex and error-prone.",
    solution: "SuperAcc automates the purchase and parsing of the latest company registry documents, covering Limited Companies, Sole Proprietorships, Open-ended Fund Companies, and Limited Partnership Funds. The system extracts shareholder and director information, constructs organisational charts, calculates multi-layer UBO, and generates a consolidated KYB compliance report — all configurable to different regulatory requirements.",
    tags: ["UBO Tracing", "Company Registry", "RPA + AI", "Compliance Reporting"]
  },
]

const techPillars = [
  {
    title: "Document-Agnostic Models",
    body: "Core AI models are trained to understand any document type, forming the foundation for all three solution modules."
  },
  {
    title: "Domain Knowledge Models",
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
        {/* Hero */}
        <section className="bg-stone-900 px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <Link to="/work" className="text-stone-500 text-sm hover:text-stone-300 transition mb-8 inline-block">
              ← Back to Work
            </Link>
            <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-4">Case Study · Fintech AI SaaS</p>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              SuperAcc Automation Intelligence
            </h1>
            <p className="text-stone-300 text-base leading-relaxed max-w-2xl">
              SuperAcc is an AI-powered financial document intelligence platform built for the banking sector. It automates three core workflows — financial statement analysis, bank statement credit analysis, and corporate KYB — replacing manual processes that previously required days of analyst time with results delivered in under an hour.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-indigo-600 px-6 py-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-white mb-1">{s.reduction}</p>
                <p className="text-indigo-200 text-sm mb-3">{s.label}</p>
                <p className="text-indigo-300 text-xs">{s.before} → {s.after}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution Modules */}
        <section className="px-6 py-24 bg-[#f9f7f4]">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">Solutions</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-16">Three Core Modules</h2>
            <div className="space-y-16">
              {modules.map((mod) => (
                <div key={mod.number} className="grid md:grid-cols-[80px_1fr] gap-6">
                  <div className="font-display text-5xl text-stone-200 leading-none">{mod.number}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-1">{mod.title}</h3>
                    <p className="text-xs text-indigo-500 font-medium mb-4">Client: {mod.client}</p>
                    <div className="space-y-4 mb-5">
                      <div>
                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">The Problem</p>
                        <p className="text-stone-600 text-sm leading-relaxed">{mod.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">The Solution</p>
                        <p className="text-stone-600 text-sm leading-relaxed">{mod.solution}</p>
                      </div>
                    </div>
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

        {/* Technology */}
        <section className="px-6 py-24 bg-stone-900">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3">Under the Hood</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-16">Technology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {techPillars.map((t, i) => (
                <div key={i} className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-3">{t.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-24 bg-[#f9f7f4]">
          <div className="max-w-4xl mx-auto">
            <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">Outcomes</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-12">Key Benefits</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Optimised time-to-value", "Minimised operational overhead", "Deployable to private cloud", "No data transfer to third parties", "Customisable workflow", "Scalable cloud infrastructure", "Integratable with banking systems", "In-house pre-trained models", "Preferable model adjustments"].map((b, i) => (
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
