import { motion } from 'framer-motion'
import { ArrowRight, Download, Globe, Briefcase } from 'lucide-react'
import { Github } from './Github'
import Hero3DBackground from './Hero3DBackground'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 bg-blueprint">

      {/* 3D Background — sits behind everything */}
      <Hero3DBackground />

      {/* Soft glow accents — above canvas, below content */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute top-16 right-0 w-[480px] h-[480px] rounded-full bg-solar-yellow/10 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-horizon-orange/8 blur-[100px]" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-sky-500/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-solar-yellow text-ozone-blue text-sm font-semibold shadow-sm solar-badge">
            <span className="w-2 h-2 rounded-full bg-solar-yellow inline-block animate-pulse" />
            Available for Remote UI/UX Roles
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold text-ink-900 leading-[0.95] tracking-tight">
            Crafting
            <br />
            <span className="text-solar-gradient">Digital</span>
            <br />
            Experiences
          </h1>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="w-48 h-1.5 bg-gradient-to-r from-solar-yellow to-horizon-orange rounded-full mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Frontend Developer with 2–3 years of experience in React.js, React Native & .NET,
          combined with 1+ year of user-research-driven UI/UX design in Figma. Currently
          contributing at Metrico Dev while freelancing internationally on Insolvo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="#work" className="btn-primary text-base gap-2">
            Explore Work <ArrowRight size={18} />
          </a>
          <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary text-base gap-2">
            <Download size={18} /> Resume
          </a>
          <a href="https://www.linkedin.com/in/hamza-iqbal-kanth/" target="_blank" rel="noreferrer" className="btn-secondary text-base gap-2">
            <Globe size={18} /> LinkedIn
          </a>
          <a href="https://github.com/Hamzakanth" target="_blank" rel="noreferrer" className="btn-secondary text-base gap-2">
            <Github size={18} /> GitHub
          </a>
          <a href="https://insolvo.com/portfolio/tNmIuB" target="_blank" rel="noreferrer" className="btn-secondary text-base gap-2">
            <Briefcase size={18} /> Freelance Portfolio
          </a>
        </motion.div>

        {/* Skill Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {['Figma', 'User Research', 'React.js', 'React Native', '.NET + SQL', 'Tailwind CSS'].map(skill => (
            <span key={skill}
              className="px-4 py-2 rounded-full bg-white border-2 border-sky-200 text-ink-700 text-sm font-medium hover:border-ozone-blue hover:text-ozone-blue transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
