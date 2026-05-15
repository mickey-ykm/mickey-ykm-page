const RoleIcon = ({ type }) => {
  const icons = {
    advisor: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    vp: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    director: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    pm: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
    cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    creative: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    exec: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-50 text-indigo-400 shrink-0 mt-0.5">
      {icons[type] || icons.pm}
    </span>
  )
}

export default function Experience() {
  const companies = [
    {
      company: "BD Goal",
      period: "01/2026 – Present",
      location: "Hong Kong SAR",
      intro: "BD Goal is a young digital agency offering creative and technology services to growing businesses. Mickey was invited as AI and Tech Advisor to provide specialist consulting on AI strategy, tooling, and implementation — bringing enterprise-grade expertise to the agency's client engagements.",
      roles: [
        {
          title: "AI & Tech Advisor",
          period: "01/2026 – Present",
          icon: "advisor",
          body: "Mickey delivers corporate AI training lectures and workshops designed to upskill teams in the latest AI tools and methodologies. He provides strategic consultation across the full project lifecycle — from defining strategy and selecting the right technologies, through to managing execution and ensuring successful adoption. He also takes on full-cycle Claude code development engagements, covering everything from initial concept and design through to deployment, integration, and ongoing maintenance."
        }
      ]
    },
    {
      company: "Apoidea Group",
      period: "05/2019 – 05/2025",
      location: "Hong Kong SAR",
      intro: "Apoidea Group is a Hong Kong-based AI and fintech company specializing in document intelligence, KYC automation, and SaaS solutions for the banking and financial services sector. Over 6 years, Mickey progressed from Senior Product Manager to VP of Project Management and BU Head of AISaaS, playing a central role in the company's growth and market expansion.",
      roles: [
        {
          title: "VP of Project Management, BU Head of AISaaS",
          period: "06/2023 – 05/2025",
          icon: "vp",
          body: "In his most senior role at Apoidea, Mickey led the strategic transformation that turned business losses into over $10M in annual revenue. He owned the full commercial cycle — from product ideation and strategy through sales channel development, deal procurement, and financial management. Working closely with tier-1 financial institutions including Standard Chartered, DBS, Bank of China, and Deloitte, he established and scaled AI SaaS product lines from conception through to market launch, driving sustained client satisfaction and revenue growth."
        },
        {
          title: "Project Director",
          period: "06/2021 – 06/2023",
          icon: "director",
          body: "As Project Director, Mickey managed a 15-member cross-functional team spanning product management, UI/UX design, QA, and KYC operations. He designed and implemented comprehensive product management processes, aligning backlogs and roadmaps with company strategy. He introduced and optimized agile SDLC models including KANBAN and Scrum, supervised QA automation using Selenium and Appium, and ensured full compliance with ISO 9001 and 27001 standards across governance, data privacy, and cybersecurity."
        },
        {
          title: "Senior Product Manager",
          period: "05/2019 – 05/2021",
          icon: "pm",
          body: "Mickey joined Apoidea as Senior Product Manager and quickly established himself as the product owner for AI development, managing over 20 proof-of-concepts across diverse business use cases. He integrated advanced AI and DevOps technologies including LlamaIndex, Langchain, and AWS SageMaker, and contributed to data-driven decision-making by evaluating machine learning experiments. He also assessed and optimized MLOps processes using Confluence and Cnvrg.io to improve operational transparency and team coordination."
        }
      ]
    },
    {
      company: "Tekcent Limited",
      period: "03/2018 – 04/2019",
      location: "Hong Kong",
      intro: "Tekcent is a digital transformation consultancy serving enterprise clients across Asia. Mickey led the digital transformation programme for Swire Group, overseeing cloud migration and agile adoption for a large cross-border engineering team.",
      roles: [
        {
          title: "Digital Project Manager",
          period: "03/2018 – 04/2019",
          icon: "cloud",
          body: "Mickey directed the digital transformation programme for Swire Group, enhancing digital capabilities and operational efficiency across the organization. He led the Azure CloudFormation project, transitioning the group's infrastructure to Azure cloud and improving scalability and system integration. Simultaneously, he established an agile transformation for the tech unit, managing a 30-member engineering team based in Vietnam and delivering all project milestones on schedule."
        }
      ]
    },
    {
      company: "Wunderman Thompson",
      period: "04/2016 – 03/2018",
      location: "Hong Kong",
      intro: "Wunderman Thompson is a global marketing and communications agency. Mickey managed end-to-end digital production for major international brands, coordinating across creative, technology, and vendor teams.",
      roles: [
        {
          title: "Digital Producer",
          period: "04/2016 – 03/2018",
          icon: "creative",
          body: "Mickey spearheaded digital campaigns for global clients including Nikon and Shell, managing end-to-end production processes from brief through delivery. He coordinated with over 10 vendors and suppliers to optimize resource allocation and project efficiency, and collaborated closely with creative teams to enhance campaign performance and ROI. His work combined strong project discipline with a sharp eye for digital craft and brand experience."
        }
      ]
    },
    {
      company: "Lokomotive Communications (Asia) Limited",
      period: "12/2014 – 04/2016",
      location: "Hong Kong",
      intro: "Lokomotive is a Hong Kong-based communications and technology agency. Mickey managed a portfolio of tech projects, building his foundation in project delivery and client management.",
      roles: [
        {
          title: "Senior Project Executive",
          period: "12/2014 – 04/2016",
          icon: "exec",
          body: "Mickey managed a portfolio of over 15 technology projects, ensuring successful delivery and consistent client satisfaction. He coordinated project timelines and resources across multiple concurrent engagements, aligning deliverables with business objectives and stakeholder expectations — laying the groundwork for his subsequent career in product and programme leadership."
        }
      ]
    }
  ]

  return (
    <section id="experience" className="px-6 py-24 bg-[#f9f7f4]">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">Career</p>
        <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-16">Experience</h2>
        <div className="space-y-16">
          {companies.map((co, idx) => (
            <div key={idx} className="grid md:grid-cols-[1fr_2fr] gap-8">
              <div className="md:pt-1">
                <h3 className="text-lg font-semibold text-stone-900 mb-1">{co.company}</h3>
                <p className="text-sm text-stone-400 mb-3">{co.period} · {co.location}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{co.intro}</p>
              </div>
              <div className="space-y-8">
                {co.roles.map((role, rIdx) => (
                  <div key={rIdx} className="border-l-2 border-indigo-200 pl-5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <RoleIcon type={role.icon} />
                        <h4 className="font-medium text-stone-800">{role.title}</h4>
                      </div>
                      <span className="text-xs text-stone-400 whitespace-nowrap bg-stone-100 px-2 py-1 rounded-full self-start">{role.period}</span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed">{role.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
