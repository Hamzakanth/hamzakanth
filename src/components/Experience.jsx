import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Frontend Developer (Contract)',
    company: 'Metrico Dev',
    date: 'Aug 2025 – Present • On-site',
    tag: 'UI/UX + React',
    color: 'yellow',
    bullets: [
      'Conducted user research to design effective UIs that enhance user experience.',
      'Designed wireframes & prototypes in Figma, translated to responsive frontend templates (10+ pages) using HTML, Tailwind, JavaScript.',
      'Developed a Utility App in React.js utilizing components and state management.',
      'Utilized AI tools to speed up development; documented code for maintainability.',
      'Collaborated using Trello for task management and GitHub for version control.',
    ],
  },
  {
    title: 'Freelance Developer (Level 5)',
    company: 'Insolvo',
    date: 'Dec 2023 – Present • Remote',
    tag: '50+ builds',
    color: 'orange',
    bullets: [
      'Built 50+ web and mobile applications using React.js, React Native, and .NET for international clients.',
      'Designed UI/UX wireframes and prototypes with Figma; delivered responsive and accessible interfaces.',
      'Implemented frontend solutions with emphasis on performance, usability, and client requirements.',
    ],
    link: { text: 'Freelance Portfolio', url: 'https://insolvo.com/portfolio/tNmIuB' },
  },
  {
    title: 'Web Developer Intern',
    company: 'Air University',
    date: 'Jul 2024 – Sep 2024 • On-site',
    tag: '.NET + RN',
    color: 'blue',
    bullets: [
      'Developed web applications using .NET and React Native with focus on clean UI implementation.',
      'Created basic UI designs and prototypes in Figma to support development process.',
      'Integrated APIs and optimized frontend performance.',
    ],
  },
]

const tagClass = {
  yellow: 'bg-solar-yellow text-ozone-blue',
  orange: 'bg-horizon-orange/10 border border-horizon-orange/40 text-horizon-orange',
  blue: 'bg-ozone-blue text-white',
}
const bulletClass = {
  yellow: 'text-solar-yellow',
  orange: 'text-horizon-orange',
  blue: 'text-ozone-blue',
}
const companyClass = {
  yellow: 'text-ozone-blue',
  orange: 'text-horizon-orange',
  blue: 'text-ozone-blue',
}

const Experience = () => (
  <section id="experience" className="bg-white border-t-2 border-sky-200">
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="tag-pill bg-solar-yellow text-ozone-blue mb-4">Work History</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink-900 leading-tight">Experience</h2>
        <div className="accent-line w-20 mt-4" />
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="hard-card p-8 md:p-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-ink-900">{exp.title}</h3>
                <p className={`font-semibold mt-1 ${companyClass[exp.color]}`}>{exp.company}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <span className="text-xs text-ink-400 font-medium">{exp.date}</span>
                <span className={`tag-pill ${tagClass[exp.color]}`}>{exp.tag}</span>
              </div>
            </div>

            <ul className="space-y-3">
              {exp.bullets.map((b, bi) => (
                <li key={bi} className="flex items-start gap-3 text-ink-600 text-sm leading-relaxed">
                  <span className={`mt-1 text-base shrink-0 ${bulletClass[exp.color]}`}>▹</span>
                  {b}
                </li>
              ))}
            </ul>

            {exp.link && (
              <div className="mt-6 pt-6 border-t-2 border-sky-100">
                <a
                  href={exp.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-sm inline-flex gap-2"
                >
                  <ExternalLink size={15} /> {exp.link.text}
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
