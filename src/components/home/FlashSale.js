import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FlashSale = ({
  image,
  alt,
  title = "Flash Sale ⚡",
  productName,
  priceSale,
  priceOld,
  discount,
  stars = "★★★★★",
  endTime,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.33 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = String(
        Math.floor((distance / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance / (1000 * 60)) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(
        2,
        "0"
      );

      setTimeLeft({ hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <motion.div
      className="flash-sale-wrapper"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flash-sale-content">
        <motion.div
          className="flash-sale-image"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={image} alt={alt} />
        </motion.div>

        <motion.div
          className="flash-sale-info"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h4 className="flash-sale-title">{title}</motion.h4>
          <motion.h3 className="product-name">{productName}</motion.h3>
          <motion.p
            className="price-sale"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Giá bán: {priceSale}
          </motion.p>
          <motion.p
            className="price-old"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Giá gốc: {priceOld} <span className="discount">({discount})</span>
          </motion.p>
          <motion.div
            className="stars"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            {stars}
          </motion.div>
          <motion.button
            className="buy-now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Mua Ngay
          </motion.button>
          <motion.div
            className="countdown"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <div className="time-box">{timeLeft.hours}</div>:
            <div className="time-box">{timeLeft.minutes}</div>:
            <div className="time-box">{timeLeft.seconds}</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlashSale;
