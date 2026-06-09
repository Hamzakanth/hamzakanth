import { motion } from 'framer-motion'
import { Code2, Layout } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="bg-white border-t-2 border-sky-200">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky top-32"
          >
            <p className="tag-pill bg-solar-yellow text-ozone-blue mb-4">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink-900 leading-tight mb-2">
              Design thinker.<br />Code executor.
            </h2>
            <div className="accent-line w-24 mt-4 mb-8" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-sky-200 shadow-xl group">
              <img
                src="/assets/hamza.jpeg"
                alt="Hamza Iqbal"
                className="w-full h-auto max-h-[30rem] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ozone-blue/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display font-bold text-white text-lg">Hamza Iqbal</p>
                <p className="text-white/80 text-sm">Frontend Dev & UI/UX Designer</p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-solar-yellow" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-solar-yellow" />
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <div className="solar-card p-8 md:p-10 mb-6">
              <p className="text-ink-700 text-lg leading-relaxed">
                Frontend Developer with hands-on experience in{' '}
                <span className="font-semibold text-ozone-blue">React.js</span> and{' '}
                <span className="font-semibold text-ozone-blue">React Native</span>, along with UI/UX
                design skills using{' '}
                <span className="font-semibold text-ozone-blue">Figma</span> for wireframing,
                prototyping, and creating user interfaces. I conduct{' '}
                <span className="font-semibold text-horizon-orange">user research</span> to design
                effective UIs. Currently contributing to projects at Metrico Dev while maintaining{' '}
                <span className="font-semibold text-ozone-blue">Level 5 freelance</span> status on
                Insolvo. Experienced in building responsive applications with .NET and SQL.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              <div className="solar-card p-6">
                <div className="w-10 h-10 rounded-xl bg-solar-yellow flex items-center justify-center mb-4">
                  <Layout className="w-5 h-5 text-ozone-blue" />
                </div>
                <h3 className="font-display font-bold text-lg text-ink-900 mb-3">UI/UX Design</h3>
                <ul className="space-y-2 text-sm text-ink-500">
                  {['User Research & Flows', 'Wireframing & Prototyping', 'High-fidelity UI Design', 'Responsive Design'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-solar-yellow shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="solar-card p-6">
                <div className="w-10 h-10 rounded-xl bg-horizon-orange/10 border-2 border-horizon-orange flex items-center justify-center mb-4">
                  <Code2 className="w-5 h-5 text-horizon-orange" />
                </div>
                <h3 className="font-display font-bold text-lg text-ink-900 mb-3">Frontend Development</h3>
                <ul className="space-y-2 text-sm text-ink-500">
                  {['React.js / React Native', 'HTML, CSS, Tailwind, JS', '.NET + SQL Server', 'RESTful APIs'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-horizon-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Location', value: 'E11/4, Islamabad' },
                { label: 'Phone', value: '+92 303 8367708' },
                { label: 'Email', value: 'hamzakanth980@gmail.com' },
              ].map(({ label, value }) => (
                <div key={label} className="solar-card p-4 text-center">
                  <p className="text-xs text-ink-300 uppercase tracking-widest font-semibold mb-1">{label}</p>
                  <p className="text-ink-800 font-medium text-sm">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
