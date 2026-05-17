export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div>
            <p className="font-display text-3xl text-white mb-3">Mickey Yip</p>
            <p className="text-stone-400 text-sm max-w-xs">
              AI & Product Leader based in Hong Kong. Open to advisory, consulting, and speaking engagements.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>
                  <a href="mailto:rkmyip@gmail.com" className="hover:text-white transition">
                    rkmyip@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Links</h4>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>
                  <a href="https://linkedin.com/in/mickey-yip-ai-product-lead" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mickey-ykm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Github ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-stone-600 text-xs">
          © 2026 Mickey Yip. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
