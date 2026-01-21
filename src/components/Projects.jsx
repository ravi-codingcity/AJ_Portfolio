import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Neon Dreams Brand Identity",
    description:
      "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "branding",
    type: "Graphic Design",

    link: "#",
    featured: true,
    isExternal: false,
  },
  {
    id: 2,
    title: "Urban Fashion Campaign",
    description:
      "Cinematic video campaign for urban streetwear brand featuring dynamic editing and color grading.",
    image: "https://img.youtube.com/vi/V9nje9lXm2o/maxresdefault.jpg",
    category: "video",
    type: "Video Editing",
    target: "_blank",
    link: "https://www.youtube.com/watch?v=V9nje9lXm2o",
    featured: true,
    isExternal: true,
  },
  {
    id: 3,
    title: "Motion Graphics Showreel",
    description:
      "Animated showreel featuring dynamic typography, logo animations, and visual effects.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    category: "motion",
    type: "Motion Graphics",

    link: "#",
    featured: true,
    isExternal: false,
  },
  {
    id: 4,
    title: "Minimal Magazine Layout",
    description:
      "Clean, modern magazine design with emphasis on typography and white space.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop",
    category: "print",
    type: "Print Design",

    link: "#",
    featured: false,
    isExternal: false,
  },
  {
    id: 5,
    title: "Product Launch Video",
    description:
      "High-energy product launch video with 3D elements and dynamic transitions.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    category: "video",
    type: "Video Production",

    link: "#",
    featured: false,
    isExternal: false,
  },
  {
    id: 6,
    title: "Social Media Kit",
    description:
      "Comprehensive social media design kit with templates for Instagram, TikTok, and YouTube.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    category: "branding",
    type: "Social Media",

    link: "#",
    featured: false,
    isExternal: false,
  },
  {
    id: 7,
    title: "Animated Logo Collection",
    description:
      "Series of animated logo reveals and intros for various clients.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    category: "motion",
    type: "Logo Animation",

    link: "#",
    featured: false,
    isExternal: false,
  },
  {
    id: 8,
    title: "Documentary Edit",
    description:
      "Feature-length documentary editing with narrative storytelling and emotional pacing.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    category: "video",
    type: "Documentary",

    link: "#",
    featured: false,
    isExternal: false,
  },
];

const categories = [
  { id: "all", label: "All Work", icon: "✦" },
  { id: "branding", label: "Branding", icon: "◆" },
  { id: "video", label: "Video", icon: "▶" },
  { id: "motion", label: "Motion", icon: "◎" },
  { id: "print", label: "Print", icon: "▤" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="projects"
      className="relative py-24 overflow-hidden creative-bg"
    >
      {/* Background */}
      <div className="absolute inset-0 dots-background opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20 mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A curated collection of my design and video work showcasing
              creativity, attention to detail, and storytelling.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25"
                    : "glass text-gray-400 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative creative-card overflow-hidden card-hover">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-medium rounded-full">
                        ★ Featured
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.a
                          href={project.link}
                          className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-orange-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Project
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </motion.a>
                      </motion.div>

                      {/* Project Type Badge */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-medium glass text-white">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <motion.a
                          href={project.link}
                          className="text-orange-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                          whileHover={{ x: 5 }}
                        >
                          Details
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Portfolio
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
