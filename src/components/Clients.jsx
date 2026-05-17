export default function Clients() {
  const clients = [
    { name: "Standard Chartered", logo: "/mickey-ykm-page/images/standard-chartered.png" },
    { name: "DBS Bank", logo: "/mickey-ykm-page/images/dbs.png" },
    { name: "Bank of China", logo: "/mickey-ykm-page/images/bank-of-china.png" },
    { name: "Deloitte", logo: "/mickey-ykm-page/images/deloitte.png" },
    { name: "UBS", logo: "/mickey-ykm-page/images/ubs.png" },
    { name: "Credit Suisse", logo: "/mickey-ykm-page/images/credit-suisse.png" },
    { name: "Société Générale", logo: "/mickey-ykm-page/images/societe-generale.png" },
    { name: "Allianz", logo: "/mickey-ykm-page/images/allianz.png" },
    { name: "Value Partners", logo: "/mickey-ykm-page/images/value-partners.png" },
    { name: "Swire Group", logo: "/mickey-ykm-page/images/swire.png" },
    { name: "Taikoo Place", logo: "/mickey-ykm-page/images/taikoo-place.png" },
    { name: "Shell", logo: "/mickey-ykm-page/images/shell.png" },
    { name: "Nikon", logo: "/mickey-ykm-page/images/nikon.png" },
    { name: "Friso", logo: "/mickey-ykm-page/images/friso.png" },
  ]

  return (
    <section id="clients" className="px-6 py-24 bg-[#f9f7f4]">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-3">Trusted By</p>
        <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">Clients</h2>
        <p className="text-stone-400 text-base mb-16 max-w-xl">
          A selection of organizations Mickey has partnered with across fintech, banking, enterprise technology, and advertising.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {clients.map((client, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-center h-20 hover:border-stone-300 transition-colors">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
