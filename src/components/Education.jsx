import { motion } from 'framer-motion'

const tools = [
  { name: 'Figma', cat: 'design' },
  { name: 'Wireframing', cat: 'design' },
  { name: 'Prototyping', cat: 'design' },
  { name: 'React.js', cat: 'frontend' },
  { name: 'React Native', cat: 'frontend' },
  { name: 'JavaScript', cat: 'frontend' },
  { name: 'Tailwind CSS', cat: 'frontend' },
  { name: '.NET', cat: 'backend' },
  { name: 'SQL Server', cat: 'backend' },
  { name: 'REST APIs', cat: 'backend' },
  { name: 'Python', cat: 'other' },
  { name: 'C / C++', cat: 'other' },
  { name: 'Basic ML', cat: 'other' },
]

const catStyle = {
  design:   'bg-solar-yellow/10 border-solar-yellow text-ozone-blue hover:bg-solar-yellow hover:text-ozone-blue',
  frontend: 'bg-ozone-blue/5 border-ozone-blue/40 text-ozone-blue hover:bg-ozone-blue hover:text-white',
  backend:  'bg-horizon-orange/10 border-horizon-orange/40 text-horizon-orange hover:bg-horizon-orange hover:text-white',
  other:    'bg-ink-100/50 border-ink-200 text-ink-600 hover:bg-ink-700 hover:text-white hover:border-ink-700',
}

const Education = () => (
  <section id="education" className="bg-sky-100 border-t-2 border-sky-200">
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="tag-pill bg-solar-yellow text-ozone-blue mb-4">Academics</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink-900 leading-tight mb-3">Education</h2>
          <div className="accent-line w-20 mb-10" />

          <div className="hard-card p-8 relative overflow-hidden group">
            {/* Corner accent */}
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-solar-yellow" />
            <p className="text-xs font-bold text-solar-yellow uppercase tracking-widest mb-2">Sep 2021 – Jul 2025</p>
            <h3 className="font-display text-2xl font-bold text-ink-900">Bachelor of Computer Science</h3>
            <p className="text-ink-500 font-semibold mt-1 mb-4">Air University, Islamabad</p>
            <p className="text-ink-500 text-sm leading-relaxed">
              Frontend + UI/UX projects using Figma, React, and full-stack fundamentals including
              .NET and SQL Server. Final Year Project: HomeSphere Residencia.
            </p>
          </div>
        </motion.div>

        {/* Toolkit */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="tag-pill bg-ozone-blue text-white mb-4">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink-900 leading-tight mb-3">Toolkit</h2>
          <div className="accent-line w-20 mb-10" />

          <div className="solar-card p-8">
            <p className="text-ink-500 text-sm mb-6">Technologies I use to build premium digital experiences.</p>
            <div className="flex flex-wrap gap-3">
              {tools.map(tool => (
                <span
                  key={tool.name}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200 cursor-default ${catStyle[tool.cat]}`}
                >
                  {tool.name}
                </span>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap gap-4 pt-5 border-t-2 border-sky-100">
              {[
                { label: 'Design', cls: 'bg-solar-yellow' },
                { label: 'Frontend', cls: 'bg-ozone-blue' },
                { label: 'Backend', cls: 'bg-horizon-orange' },
                { label: 'Other', cls: 'bg-ink-500' },
              ].map(({ label, cls }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-ink-400 font-medium">
                  <span className={`w-2.5 h-2.5 rounded-full ${cls}`} /> {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Education
