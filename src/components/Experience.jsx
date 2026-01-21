import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    id: 1,
    role: "Graphic Designer & Video VFX Editor",
    company: "Asian Contec Ltd",
    location: "Delhi, India",
    period: "May 2025 - December 2025",
    achievements: [
      "Designed engaging social media creatives, banners, and thumbnails for Company",
      "Produced promotional videos, social media reels, shorts and explainer videos",
      "Created dynamic, short-form content with a strong focus on storytelling and quality.",
      "Hands-on experience in animations, motion graphics, and visual effects",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Graphic Designer & Video VFX Editor",
    company: "Zee News ",
    location: "Noida, UP, India",
    period: "June 2022 - June 2025",
    achievements: [
      "Experienced in Adobe Premiere Pro and After Effects for video editing and VFX.",
      "Designed eye-catching social media posts, banners, and thumbnails.",
      "Created explainer videos, anchor videos, and package content.",
      "Developed creative shorts and dynamic edits for social media platforms.",
      "Applied VFX techniques to enhance visual appeal and audience impact.",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Graphic Designer & Video Editor",
    company: "NDTV",
    location: "Noida, UP, India",
    period: "August 2019 - June 2022",
    achievements: [
      " Designed impactful social media posts, banners, thumbnails, and templates.",
      "Created visually engaging graphics to enhance brand communication.",
      "Optimized designs for social media engagement and audience reach.",
    ],
    current: false,
  },
  {
    id: 4,
    role: "Graphic Designer & Video Editor",
    company: "Crisp Multimedia Solutions Pvt. Ltd.",
    location: "Delhi, India",
    period: "March 2019 - July 2019",
    achievements: [
      " Designed templates, brochures, infographics, social media posts, and banners.",
      "Created short animations and dynamic video content using.",
      "Collaborated with the marketing team to produce engaging multimedia content.",
    ],
    current: false,
  },
];

const skills = [
  { name: "Video Editing", level: 94 },
   { name: "Graphics Designing", level: 90 },
  { name: "Motion Graphics", level: 92 },
  { name: "Brand Identity", level: 91 },
  { name: "Illustration", level: 88 },
  { name: "VFX Editing", level: 92 },
  { name: "Color Correction", level: 90 },
  { name: "Print Design", level: 86 },
  { name: "UI/UX Design", level: 85 },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden creative-bg"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-orange-500/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-pink-500/20 rounded-lg rotate-45" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-400 border border-pink-500/20 mb-4">
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              5+ years of crafting visual stories and bringing ideas to life
              through design and VFX video.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Timeline */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative pl-20 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-6 top-1 w-5 h-5 rounded-full border-4 ${
                        exp.current
                          ? "bg-orange-500 border-orange-500/30 animate-pulse"
                          : "bg-gray-800 border-pink-500/50"
                      }`}
                    />

                    {/* Card */}
                    <div className="creative-card p-5 card-hover">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-orange-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              exp.current
                                ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                                : "glass text-gray-400"
                            }`}
                          >
                            {exp.period}
                          </span>
                          <p className="text-gray-500 text-sm mt-1">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="text-orange-400 mt-1">✦</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="creative-card p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-sm">
                    ✦
                  </span>
                  Core Skills
                </h3>

                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-orange-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">5+</div>
                    <div className="text-sm text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">100+</div>
                    <div className="text-sm text-gray-400">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">20+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text"></div>
                    <div className="text-sm text-gray-400"></div>
                  </div>
                </div>

                {/* Download Resume */}
                <motion.a
                  href="#"
                  className="mt-6 w-full btn-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
