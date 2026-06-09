import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 nav-solar ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-ozone-blue flex items-center justify-center font-display font-bold text-solar-yellow text-base shadow-sm group-hover:bg-horizon-orange transition-colors duration-300 solar-badge">
            H
          </div>
          <span className="font-display font-bold text-lg text-ink-900 tracking-tight">
            Hamza Iqbal <span className="text-ink-300 font-normal text-sm hidden sm:inline">/ UI•UX & Dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-500">
          {['about','work','experience','education'].map(s => (
            <a key={s} href={`#${s}`}
              className="capitalize hover:text-ozone-blue transition-colors relative group"
            >
              {s}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-solar-yellow group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
            Hire Me
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border border-ink-100 text-ink-700 hover:bg-sky-200 transition-colors">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-sky-200 bg-white/95 backdrop-blur-sm ${mobileOpen ? 'max-h-64' : 'max-h-0 border-transparent'}`}>
        <nav className="flex flex-col px-6 py-5 gap-4 text-center font-medium text-ink-700">
          {['about','work','experience','education'].map(s => (
            <a key={s} href={`#${s}`} onClick={() => setMobileOpen(false)} className="capitalize hover:text-ozone-blue transition-colors py-1">{s}</a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 text-sm">Hire Me</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
