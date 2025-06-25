import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ReviewItem = ({ avatar, name, rating, text, images }) => {
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
      className="review-item"
    >
      <div className="review-header">
        <img src={avatar} alt={name} />
        <div>
          <h4>{name}</h4>
          <div className="stars">{rating}</div>
        </div>
      </div>
      <p className="review-text">
        "{text} <a href="/#">xem thêm.</a>"
      </p>
      <div className="review-images">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`review-${idx}`} />
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewItem;
