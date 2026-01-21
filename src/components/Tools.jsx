import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const tools = [
  {
    name: 'Adobe Photoshop',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    category: 'Design',
    level: 98,
    color: '#31A8FF',
    description: 'Photo editing, compositing, digital art',
  },
  {
    name: 'Adobe Illustrator',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
    category: 'Design',
    level: 95,
    color: '#FF9A00',
    description: 'Vector graphics, logos, illustrations',
  },
  {
    name: 'Adobe Premiere Pro',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
    category: 'Video',
    level: 96,
    color: '#9999FF',
    description: 'Video editing, color grading, audio',
  },
  {
    name: 'After Effects',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
    category: 'Motion',
    level: 92,
    color: '#9999FF',
    description: 'Motion graphics, VFX, animations',
  },
]

const categories = ['All', 'Design', 'Video', 'Motion']

export default function Tools() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="tools" className="relative py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 creative-bg" />
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20 mb-4">
              My Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Software &{' '}
              <span className="gradient-text">Tools</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Mastering industry-standard creative tools to deliver exceptional 
              design and video content.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                className="group creative-card p-6 card-hover"
                whileHover={{ y: -8 }}
              >
                {/* Tool Icon */}
                <div className="relative mb-5">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${tool.color}15` }}
                  >
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div 
                      className="w-full h-full items-center justify-center text-2xl font-bold hidden"
                      style={{ color: tool.color }}
                    >
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                  <span 
                    className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-medium rounded-full"
                    style={{ 
                      backgroundColor: `${tool.color}20`,
                      color: tool.color 
                    }}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Tool Info */}
                <h4 className="text-lg font-semibold text-white mb-1">
                  {tool.name}
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  {tool.description}
                </p>

                {/* Skill Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Proficiency</span>
                    <span style={{ color: tool.color }}>{tool.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: tool.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tool.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Marquee */}
          <motion.div variants={itemVariants} className="relative overflow-hidden py-6">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  {[
                    'Color Grading',
                    'Typography',
                    'Brand Identity',
                    'Photo Retouching',
                    'Video Production',
                    'Motion Design',
                    'UI/UX Design',
                    '3D Animation',
                    'Storyboarding',
                    'Sound Design',
                    'Social Media Creatives',
                    'Print Design',
                    'Visual Effects',
                    'Layout Design',
                    'Digital Illustration',
                    'Social Media Ads',
                  ].map((skill) => (
                    <span
                      key={`${skill}-${i}`}
                      className="px-6 py-3 glass rounded-full text-gray-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
       
        </motion.div>
      </div>
    </section>
  )
}
