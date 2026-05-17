import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-stone-900 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px'}} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 py-32 w-full">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-6">
          AI & Product Leader · Hong Kong
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-8">
          Mickey Yip
        </h1>
        <p className="text-stone-300 text-base leading-relaxed mb-3">
          Mickey Yip is an AI Product Management leader with over a decade of experience spanning digital transformation, fintech SaaS, and enterprise AI solutions. He has built a career at the intersection of technology strategy and business execution — growing AI startups from zero to market, leading cross-functional teams of up to 50 members, and delivering over $10M in annual revenue growth.
        </p>
        <p className="text-stone-400 text-base leading-relaxed mb-10">
          His expertise covers the full product lifecycle: from ideation and proof-of-concept through to bank-grade deployment and cloud migration. He has collaborated with leading financial institutions including Standard Chartered, DBS, and Bank of China.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link to="/work" className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-400 transition font-medium text-sm">
            View Key Projects
          </Link>
          <a href="https://linkedin.com/in/mickey-yip-ai-product-lead" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 text-white/80 rounded-full hover:border-white/50 hover:text-white transition text-sm">
            LinkedIn ↗
          </a>
          <a href="https://github.com/mickey-ykm" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 text-white/80 rounded-full hover:border-white/50 hover:text-white transition text-sm">
            Github ↗
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-sm">
          <div>
            <p className="text-2xl font-semibold text-white">10+</p>
            <p className="text-stone-500 text-xs mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">$10M+</p>
            <p className="text-stone-500 text-xs mt-1">Revenue Growth</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">50+</p>
            <p className="text-stone-500 text-xs mt-1">Team Members Led</p>
          </div>
        </div>
      </div>
    </section>
  )
}
