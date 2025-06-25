// ProductCategories.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductBox from "./ProductBox";

const products = [
  {
    imgSrc: "img/product/hinh1.png",
    altText: "Vợt Cầu Lông",
    title: "Vợt Cầu Lông",
    description:
      "Vợt từ các thương hiệu hàng đầu như Yonex, Lining, Victor – đa dạng từ beginner đến pro.",
  },
  {
    imgSrc: "img/product/hinh2.png",
    altText: "Giày Cầu Lông",
    title: "Giày Cầu Lông",
    description:
      "Chống trơn, hỗ trợ cổ chân, đế bám sân tốt – phù hợp mọi cấp độ chơi.",
  },
  {
    imgSrc: "img/product/hinh3.png",
    altText: "Quần Áo Cầu Lông",
    title: "Quần Áo Cầu Lông",
    description:
      "Thoáng mát, thấm hút mồ hôi, giúp vận động thoải mái khi thi đấu.",
  },
  {
    imgSrc: "img/product/hinh4.png",
    altText: "Phụ Kiện Cầu Lông",
    title: "Phụ Kiện Cầu Lông",
    description:
      "Túi đựng vợt, quấn cán, dây đan, tất, băng cổ tay – nâng cấp trải nghiệm chơi cầu lông.",
  },
  {
    imgSrc: "img/product/hinh5.png",
    altText: "Combo Tiết Kiệm",
    title: "Combo Tiết Kiệm",
    description:
      "Bộ combo vợt + giày + phụ kiện với giá tốt nhất, giúp bạn mua sắm dễ dàng.",
  },
  {
    imgSrc: "img/product/hinh6.png",
    altText: "Hàng Giảm Giá",
    title: "Hàng Giảm Giá",
    description: "Săn deal hot với mức giá ưu đãi cực sốc, cập nhật liên tục.",
  },
  {
    imgSrc: "img/product/hinh7.png",
    altText: "Mới Về",
    title: "Mới Về",
    description: "Những sản phẩm mới nhất, công nghệ hiện đại nhất vừa ra mắt.",
  },
  {
    imgSrc: "img/product/hinh8.png",
    altText: "Top Bán Chạy",
    title: "Top Bán Chạy",
    description:
      "Các sản phẩm được khách hàng yêu thích nhất, được đánh giá cao và bán chạy nhất trên hệ thống.",
  },
];

const ProductCategories = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.33 });

  return (
    <motion.div
      className="product-categories"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {products.map((product, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <ProductBox
            imgSrc={product.imgSrc}
            altText={product.altText}
            title={product.title}
            description={product.description}
            buttonText={product.buttonText}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductCategories;
