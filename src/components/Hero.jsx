import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Graphic Designer',
  'VFX Editor',
  'Video Editor',
  'Motion Designer',
  'Visual Storyteller'
]

const floatingShapes = [
  { id: 1, size: 80, color: '#ff6b6b', x: '10%', y: '20%', delay: 0 },
  { id: 2, size: 60, color: '#feca57', x: '85%', y: '15%', delay: 0.5 },
  { id: 3, size: 100, color: '#5f27cd', x: '75%', y: '70%', delay: 1 },
  { id: 4, size: 50, color: '#00d2d3', x: '15%', y: '75%', delay: 1.5 },
  { id: 5, size: 40, color: '#ff9ff3', x: '50%', y: '10%', delay: 2 },
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.substring(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden creative-bg">
      {/* Floating Shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-20 blur-sm"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for freelance work</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="gradient-text">Anchal Jha</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6 h-10"
            >
              <span className="font-light">
                {displayText}
                <span className="animate-blink text-orange-400">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
            >
              I create stunning visual experiences through graphic design and VFX video editing. 
              Transforming ideas into captivating visuals that tell your story.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Showreel</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '100+', label: 'Projects Completed' },
                { number: '20+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Creative Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <motion.div
                className="absolute -inset-4 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b, #feca57, #ff9ff3, #5f27cd)',
                  opacity: 0.3,
                }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=700&fit=crop"
                  alt="Creative workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -left-8 top-1/4 glass rounded-xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Graphics Designer</p>
                    <p className="text-gray-400 text-xs">Adobe Expert</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 glass rounded-xl p-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">VFX & Video Editing</p>
                    <p className="text-gray-400 text-xs">Production Ready</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
