import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const FaqItem = ({ question, answer }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="faq-item"
      style={{
        background: "#fff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "16px",
      }}
    >
      <div
        className="faq-title"
        style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "18px" }}
      >
        ✅ {question}
        <span
          className="faq-icon"
          style={{ float: "right", opacity: 0.6, fontSize: "16px" }}
        >
          🛈
        </span>
      </div>
      <p className="faq-desc" style={{ fontSize: "16px", color: "#333" }}>
        {answer}
      </p>
    </motion.div>
  );
};

export default FaqItem;
