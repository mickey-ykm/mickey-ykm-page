export default function Speaking() {
  const items = [
    {
      type: "Research Partnership",
      org: "Amazon Web Services",
      title: "How Apoidea Group enhances visual information extraction from banking documents with multimodal models using LLaMA-Factory on Amazon SageMaker HyperPod",
      link: "https://aws.amazon.com/blogs/machine-learning/how-apoidea-group-enhances-visual-information-extraction-from-banking-documents-with-multimodal-models-using-llama-factory-on-amazon-sagemaker-hyperpod/"
    },
    {
      type: "Other Exposures",
      org: "SME Finance Forum",
      title: "Bank-Fintech Partnerships to Bridge the SME Finance Gap",
      link: "https://www.smefinanceforum.org/post/webinar-bank-fintech-partnerships-to-bridge-the-sme-finance-gap"
    }
  ]

  return (
    <section id="other-exposures" className="px-6 py-24 bg-[#f9f7f4]">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">Thought Leadership</p>
        <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-16">Other Exposures</h2>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-6 md:gap-12 items-start p-8 bg-white border border-stone-200 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">{item.type}</span>
                <p className="text-stone-400 text-sm mt-1">{item.org}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-stone-800 font-medium text-lg leading-snug group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm text-indigo-400 mt-3 inline-block group-hover:text-indigo-500 transition-colors">
                  Read more ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
