import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const features = [
  {
    title: "🏸 SẢN PHẨM CHÍNH HÃNG",
    lines: [
      "💯 Cam kết cung cấp vợt, giày, quần áo và phụ kiện cầu lông chính hãng từ các thương hiệu lớn như Yonex, Lining, Victor...",
      "✅ Đảm bảo chất lượng – Bảo hành chính hãng.",
    ],
  },
  {
    title: "🚚 GIAO HÀNG NHANH CHÓNG",
    lines: [
      "📦 Đặt hàng dễ dàng, giao nhanh trong 24–48h toàn quốc.",
      "🧍‍♂️ Nhận hàng tận nhà – Kiểm tra trước khi thanh toán.",
    ],
  },
  {
    title: "💰🔥 GIÁ TỐT NHẤT",
    lines: [
      "💬 Cam kết giá cạnh tranh nhất thị trường.",
      "🎉 Nhiều ưu đãi, giảm giá và quà tặng hấp dẫn hàng tháng.",
    ],
  },
  {
    title: "⭐ ĐỔI TRẢ LINH HOẠT",
    lines: [
      "🔁 Hỗ trợ đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc không đúng mô tả.",
    ],
  },
];

const FeatureSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="features-container"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          className="feature-box"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
        >
          <h3>{item.title}</h3>
          <ul>
            {item.lines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureSection;
