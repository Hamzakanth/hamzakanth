import { motion } from 'framer-motion'
import { Mail, Globe, Briefcase, ArrowRight } from 'lucide-react'
import { Github } from './Github'

export const Contact = () => (
  <section id="contact" className="bg-ozone-blue relative overflow-hidden">
    {/* Blueprint grid overlay on dark bg */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    {/* Decorative shapes */}
    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-solar-yellow/10 blur-[80px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-horizon-orange/10 blur-[60px] pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="inline-block tag-pill bg-solar-yellow text-ozone-blue mb-6">Let's Work Together</span>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.0] mb-6">
          Let's create<br />
          <span className="text-solar-yellow">something great.</span>
        </h2>
        <p className="text-white/60 max-w-xl mx-auto text-lg mb-12 leading-relaxed">
          I'm currently available for remote UI/UX and Frontend Development roles. Let's build something exceptional together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <a
            href="mailto:hamzakanth980@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-solar-yellow text-ozone-blue font-bold text-sm font-display hover:bg-white transition-colors shadow-lg gap-2"
          >
            <Mail size={17} /> hamzakanth980@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-iqbal-kanth/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 text-white border-2 border-white/20 font-bold text-sm font-display hover:bg-white/20 transition-colors gap-2"
          >
            <Globe size={17} /> LinkedIn
          </a>
          <a
            href="https://github.com/Hamzakanth"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 text-white border-2 border-white/20 font-bold text-sm font-display hover:bg-white/20 transition-colors gap-2"
          >
            <Github size={17} /> GitHub
          </a>
          <a
            href="https://insolvo.com/portfolio/tNmIuB"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 text-white border-2 border-white/20 font-bold text-sm font-display hover:bg-white/20 transition-colors gap-2"
          >
            <Briefcase size={17} /> Freelance Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

export const Footer = () => (
  <footer className="bg-ink-900 border-t-2 border-ink-700">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="text-ink-300 text-sm">© {new Date().getFullYear()} Hamza Iqbal. All rights reserved.</span>
      <span className="text-ink-500 text-sm flex items-center gap-1.5">
        Built with React + Vite
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-solar-yellow" />
        Tailwind CSS
      </span>
    </div>
  </footer>
)
