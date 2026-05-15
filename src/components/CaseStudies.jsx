import { Link } from 'react-router-dom'

const tagColors = {
  "Fintech": "bg-emerald-50 text-emerald-700",
  "Automation": "bg-blue-50 text-blue-700",
  "AI": "bg-indigo-50 text-indigo-700",
  "AI/ML": "bg-indigo-50 text-indigo-700",
  "SaaS": "bg-violet-50 text-violet-700",
  "Compliance": "bg-amber-50 text-amber-700",
  "GenAI": "bg-indigo-50 text-indigo-700",
  "LLM": "bg-violet-50 text-violet-700",
  "Product": "bg-rose-50 text-rose-700",
  "Mobile": "bg-sky-50 text-sky-700",
  "Platform": "bg-teal-50 text-teal-700",
  "EdTech": "bg-orange-50 text-orange-700",
}

export default function CaseStudies() {
  const studies = [
    {
      title: "SuperAcc — Financial Document Intelligence",
      company: "DBS Bank · Standard Chartered · Major Banks",
      year: "2021–2023",
      description: "AI SaaS platform automating financial statement analysis, bank statement credit analysis, and corporate KYB for tier-1 banks. Reduced processing time by up to 93%, handling 30,000+ cases annually.",
      tags: ["Fintech", "AI/ML", "SaaS", "Compliance"],
      internalLink: "/work/superacc"
    },
    {
      title: "Newspress AI Daily Newsletter",
      company: "Internal Project",
      year: "2024",
      description: "Launched LLM personalized newsletter service with 2-week MVP go-to-market. Utilized agentic solutions with Langchain and multilingual models.",
      tags: ["GenAI", "LLM", "Product"]
    },
    {
      title: "Arbor News App",
      company: "Internal Project",
      year: "2023",
      description: "Developed LLM news summary app reaching 10,000+ MAU. Managed partnerships with major news outlets and implemented AI-driven delivery models.",
      tags: ["GenAI", "Mobile", "Product"]
    },
    {
      title: "Altive Asset Management Platform",
      company: "Investment Platform",
      year: "2021",
      description: "Developed investment platform managing over $1 billion in assets. Designed KYC system and fund management features.",
      tags: ["Fintech", "Platform", "Product"]
    },
    {
      title: "Classical Chinese Learner App",
      company: "Personal Project",
      year: "2024",
      description: "Developed LLM batch assessment tool using OpenRouter. Built React Native mobile app with Railway and Supabase infrastructure.",
      tags: ["EdTech", "Mobile", "AI"],
      externalLink: "https://github.com/mickey-ykm/classical-chinese-learner-app"
    }
  ]

  return (
    <section id="case-studies" className="px-6 py-24 bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3">Work</p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-16">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {studies.map((study, idx) => {
            const inner = (
              <>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="text-xs text-stone-400 bg-stone-700/50 px-2 py-1 rounded-full">{study.year}</span>
                  <span className="text-xs text-stone-500 text-right">{study.company}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-5">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded-full font-medium ${tagColors[tag] || 'bg-stone-700 text-stone-300'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {study.internalLink && (
                  <span className="text-xs text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                    View Case Study →
                  </span>
                )}
                {study.externalLink && (
                  <span className="text-xs text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                    View on Github ↗
                  </span>
                )}
              </>
            )

            const cardClass = "group bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-stone-800 transition-all duration-300"

            if (study.internalLink) {
              return <Link key={idx} to={study.internalLink} className={cardClass}>{inner}</Link>
            }
            if (study.externalLink) {
              return <a key={idx} href={study.externalLink} target="_blank" rel="noopener noreferrer" className={cardClass}>{inner}</a>
            }
            return <div key={idx} className={cardClass}>{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}
