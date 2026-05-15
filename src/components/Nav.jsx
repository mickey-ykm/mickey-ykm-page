import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const transparent = isHome && !scrolled && !menuOpen

  const links = [
    { label: "Experience", to: "/experience" },
    { label: "Work", to: "/work" },
    { label: "Speaking", to: "/speaking" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${transparent ? 'bg-transparent' : 'bg-[#f9f7f4] border-b border-stone-200 shadow-sm'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className={`font-semibold text-base tracking-tight transition-colors duration-300 ${transparent ? 'text-white' : 'text-stone-900'}`}>
          Mickey Yip
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors duration-300 ${
                location.pathname === link.to
                  ? transparent ? 'text-white' : 'text-stone-900 font-medium'
                  : transparent ? 'text-white/70 hover:text-white' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:rkmyip@gmail.com"
            className={`hidden md:block text-sm px-4 py-2 rounded-full border transition-all duration-300 ${transparent ? 'border-white/60 text-white hover:bg-white hover:text-stone-900' : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'}`}
          >
            Contact
          </a>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 transition-colors duration-300 ${transparent ? 'text-white' : 'text-stone-900'}`}
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <nav className="bg-[#f9f7f4] border-t border-stone-200 px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-3 text-sm border-b border-stone-100 last:border-0 transition-colors ${
                location.pathname === link.to ? 'text-stone-900 font-medium' : 'text-stone-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:rkmyip@gmail.com"
            className="mt-3 py-3 text-sm text-center bg-stone-900 text-white rounded-full"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
