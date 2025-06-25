import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionHeading = ({ title, subtitle }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.33 });

  return (
    <motion.div
      className="section-heading"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeading;
