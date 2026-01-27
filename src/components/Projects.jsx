import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Creatives_3 from "../assets/Creatives_3.jpg";
import Creatives_2 from "../assets/Creatives_2.jpg";
import Creatives_1 from "../assets/Creatives_1.jpg";


const projects = [
  {
    id: 1,
    title: "Astrology Predictions – Podcast Editing for News Channel",
    description:
      "Edited an Astrology Predictions podcast for a news channel, enhancing storytelling through precise cuts, sound balance, and visual polish.",
    image: "https://img.youtube.com/vi/O9YdWvqfBPc/maxresdefault.jpg",
    category: "video",
    type: "Video Editing",
    link: "https://www.youtube.com/watch?v=O9YdWvqfBPc",
    featured: true,
    isExternal: true,
  },
  {
    id: 2,
    title: "News Bulletin & Headlines VFX Animation",
    description:
      "Created VFX and motion graphics for news bulletins and headlines, designed for broadcast use with dynamic transitions and a clean, professional look.",
    image: "https://img.youtube.com/vi/V9nje9lXm2o/maxresdefault.jpg",
    category: "motion",
    type: "Video Editing",
    link: "https://www.youtube.com/watch?v=V9nje9lXm2o",
    featured: true,
    isExternal: true,
  },
   {
    id: 3,
    title: "Cancer Awareness Podcast – Dr. Anshuman Kumar",
    description:
      "Edited a medical podcast featuring Cancer Surgeon Dr. Anshuman Kumar, ensuring clear audio, smooth transitions, and a broadcast-ready final cut.",
    image: "https://img.youtube.com/vi/pLTvFRtklT0/maxresdefault.jpg",
    category: "video",
    type: "Video Editing",
    link: "https://www.youtube.com/watch?v=pLTvFRtklT0",
    featured: true,
    isExternal: true,
  },
  {
    id: 3,
    title: "Basics of Graphic Design | Physics Wallah",
    description:
      "This motion graphic video covers the fundamentals of graphic design, including principles, tools, and techniques for creating visually appealing designs.",
    image:
      "https://img.youtube.com/vi/oKAjzBXc74E/maxresdefault.jpg",
    category: "motion",
    type: "Motion Graphics",

    link: "https://youtube.com/shorts/oKAjzBXc74E?feature=share",
    featured: true,
    isExternal: true,
  },
   {
    id: 3,
    title: "Secret to Download Free Tools | Animation",
    description:
      "I have created this animation video on the topic Secret to Download Free Tools for Physics Wallah.",
    image:
      "https://img.youtube.com/vi/upxPN-BStA0/maxresdefault.jpg",
    category: "motion",
    type: "Motion Graphics",

    link: "https://youtube.com/shorts/upxPN-BStA0?feature=share",
    featured: true,
    isExternal: true,
  },
  {
    id: 4,
    title: "Covid-19 Awareness Post",
    description:
      "I have designed this creative post on the topic Covid-19 Awareness",
    image: Creatives_3,
    category: "print",
    type: "Print Design",

    link: "#",
    featured: false,
    isExternal: false,
  },
  {
    id: 5,
    title: "Modern Furniture Social Media Post",
    description:
      "i have designed this creative post on the topic Modern Furniture for social media.",
    image: Creatives_2,
    category: "print",
    type: "Print Design",

    link: "#",
    featured: false,
    isExternal: false,
  },
  {
    id: 6,
    title: "Digital Marketing Social Media",
    description:
      "I have designed this creative post on the topic Digital Marketing for social media.",
    image: Creatives_1,
    category: "branding",
    type: "Social Media",

    link: "#",
    featured: false,
    isExternal: false,
  },
  {
    id: 7,
    title: "LINKEDIN VS FB | Physics Wallah",
    description:
      "I have created animation logo intro for Physics Wallah on the topic LINKEDIN VS FB.",
    image:
      "https://img.youtube.com/vi/h26hGtbNkzQ/maxresdefault.jpg",
    category: "motion",
    type: "Logo Animation",

    link: "https://youtube.com/shorts/h26hGtbNkzQ?feature=share",
    featured: false,
    isExternal: true,
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
  const [modalProject, setModalProject] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Check if project should open in modal (branding or print categories)
  const shouldOpenModal = (project) => {
    return project.category === "branding" || project.category === "print";
  };

  // Handle project click
  const handleProjectClick = (e, project) => {
    if (shouldOpenModal(project)) {
      e.preventDefault();
      setModalProject(project);
    }
  };

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
                        <motion.button
                          onClick={(e) => handleProjectClick(e, project)}
                          {...(!shouldOpenModal(project) && {
                            as: "a",
                            href: project.link,
                            target: project.isExternal ? "_blank" : undefined,
                            rel: project.isExternal ? "noopener noreferrer" : undefined,
                          })}
                          className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-orange-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {shouldOpenModal(project) ? "View Image" : "View Project"}
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
                              d={shouldOpenModal(project) ? "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" : "M14 5l7 7m0 0l-7 7m7-7H3"}
                            />
                          </svg>
                        </motion.button>
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
                        <motion.button
                          onClick={(e) => {
                            if (shouldOpenModal(project)) {
                              handleProjectClick(e, project);
                            } else if (project.isExternal) {
                              window.open(project.link, "_blank", "noopener,noreferrer");
                            } else {
                              window.location.href = project.link;
                            }
                          }}
                          className="text-orange-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                          whileHover={{ x: 5 }}
                        >
                          {shouldOpenModal(project) ? "View Image" : "Details"}
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
                        </motion.button>
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

      {/* Image Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setModalProject(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Modal Content */}
              <div className="creative-card overflow-hidden">
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-gray-900"
                />
                <div className="p-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 border border-orange-500/20">
                    {modalProject.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-2">
                    {modalProject.title}
                  </h3>
                  <p className="text-gray-400">{modalProject.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
