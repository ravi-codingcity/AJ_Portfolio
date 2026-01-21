import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Graphic Design",
    description:
      "Brand identity, logos, marketing materials, and print design that captures your vision.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Video Editing",
    description:
      "Professional video editing for commercials, social media, YouTube, and corporate content.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Motion Graphics & VFX",
    description:
      "Eye-catching animations, intros, transitions, and animated explainer videos.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4L5 6v14a2 2 0 002 2h10a2 2 0 002-2V6l-2-2M9 9h6M9 13h6M9 17h4"
        />
      </svg>
    ),
    title: "Social Media",
    description:
      "Engaging content creation optimized for Instagram, YouTube, and more.",
  },
];

export default function About() {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative py-24 lg:py-28 overflow-hidden creative-bg">
      {/* Background */}
      <div className="absolute inset-0 dots-background opacity-30" />
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
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20 mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Turning Ideas Into{" "}
              <span className="gradient-text">Visual Magic</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I'm a passionate creative professional who transforms concepts
              into stunning visuals that captivate and inspire.
            </p>
          </motion.div>

          {/* Main Content Grid */}

          {/* Services Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">
              What I <span className="gradient-text">Do</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="creative-card p-6 card-hover group"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
