import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { ExternalLink, X, ArrowUpRight } from 'lucide-react'

const typeColors = {
  web: { bg: 'bg-solar-yellow', text: 'text-ozone-blue' },
  mobile: { bg: 'bg-ozone-blue/10 border border-ozone-blue/30', text: 'text-ozone-blue' },
  dashboard: { bg: 'bg-horizon-orange/10 border border-horizon-orange/30', text: 'text-horizon-orange' },
}

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selected])

  const filtered = projects.filter(p => filter === 'all' || p.type === filter)

  return (
    <section id="work" className="bg-sky-100 border-t-2 border-sky-200">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="tag-pill bg-solar-yellow text-ozone-blue mb-4">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink-900 leading-tight mb-3">
            Projects &amp; Case Studies
          </h2>
          <p className="text-ink-500 max-w-2xl text-lg">
            A showcase of premium UI/UX designs and frontend development projects blending user-centric design with flawless execution.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web' },
            { id: 'mobile', label: 'Mobile' },
            { id: 'dashboard', label: 'Dashboard' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 font-display
                ${filter === btn.id
                  ? 'bg-ozone-blue text-white border-ozone-blue shadow-md'
                  : 'bg-white text-ink-500 border-sky-200 hover:border-ozone-blue hover:text-ozone-blue'}`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((p, i) => {
              const colors = typeColors[p.type] || typeColors.web
              return (
                <motion.article
                  layout
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => p.caseStudy && setSelected(p)}
                  className={`solar-card overflow-hidden flex flex-col h-full group ${p.caseStudy ? 'cursor-pointer' : ''}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-sky-100 border-b-2 border-sky-200">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute top-3 left-3 tag-pill ${colors.bg} ${colors.text}`}>
                      {p.type.charAt(0).toUpperCase() + p.type.slice(1)}
                    </div>
                    {p.caseStudy && (
                      <div className="absolute inset-0 bg-ozone-blue/0 group-hover:bg-ozone-blue/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-solar-yellow text-ozone-blue rounded-full p-3 shadow-lg">
                          <ArrowUpRight size={22} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-ink-900 mb-2 group-hover:text-ozone-blue transition-colors">{p.title}</h3>
                    <p className="text-ink-500 text-sm leading-relaxed mb-4 flex-1">{p.tagline}</p>
                    <p className="text-xs font-semibold text-horizon-orange uppercase tracking-wider border-l-4 border-solar-yellow pl-3 mb-5">{p.role}</p>

                    <div
                      className="flex flex-wrap gap-3 pt-4 border-t-2 border-sky-100"
                      onClick={e => e.stopPropagation()}
                    >
                      {p.caseStudy ? (
                        <button
                          onClick={() => setSelected(p)}
                          className="btn-primary text-sm py-2.5 px-5"
                        >
                          View Case Study
                        </button>
                      ) : (
                        <a
                          href={`mailto:hamzakanth980@gmail.com?subject=Request Case Study for ${encodeURIComponent(p.title)}`}
                          className="btn-primary text-sm py-2.5 px-5"
                        >
                          Request Access
                        </a>
                      )}
                      {p.links?.prototype && p.links.prototype !== 'REQUEST_ACCESS' && p.links.prototype !== '#' && (
                        <a
                          href={p.links.prototype}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary text-sm py-2.5 px-5 gap-1.5"
                        >
                          Prototype <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Case Study Modal ─────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(10, 14, 26, 0.7)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden border-2 border-sky-200 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 p-6 border-b-2 border-sky-100 shrink-0">
                <div>
                  <span className={`tag-pill ${typeColors[selected.type]?.bg ?? 'bg-solar-yellow'} ${typeColors[selected.type]?.text ?? 'text-ozone-blue'} mb-2`}>
                    {selected.type.charAt(0).toUpperCase() + selected.type.slice(1)}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-ink-900 leading-tight mt-1">{selected.title}</h3>
                  <p className="text-ink-400 text-sm mt-1">{selected.role}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="shrink-0 p-2 rounded-xl bg-sky-100 hover:bg-sky-200 text-ink-500 hover:text-ink-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto overscroll-y-contain flex-1 p-6 space-y-6" data-lenis-prevent="true">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-solar-yellow mb-2">Overview</p>
                  <p className="text-ink-700 leading-relaxed">{selected.caseStudy.overview}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="solar-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-horizon-orange mb-2">The Problem</p>
                    <p className="text-ink-700 text-sm leading-relaxed">{selected.caseStudy.problem}</p>
                  </div>
                  <div className="solar-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-ozone-blue mb-2">The Approach</p>
                    <p className="text-ink-700 text-sm leading-relaxed">{selected.caseStudy.approach}</p>
                  </div>
                </div>

                <div className="bg-solar-yellow/10 border-2 border-solar-yellow rounded-xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-ozone-blue mb-2">Outcome</p>
                  <p className="text-ink-800 leading-relaxed">{selected.caseStudy.outcome}</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-ink-300 mb-2">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.caseStudy.tools.split(',').map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-ozone-blue text-white text-xs font-semibold">{t.trim()}</span>
                    ))}
                  </div>
                </div>

                {selected.links?.prototype && selected.links.prototype !== 'REQUEST_ACCESS' && selected.links.prototype !== '#' && (
                  <a
                    href={selected.links.prototype}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm inline-flex"
                  >
                    View Live Prototype <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
