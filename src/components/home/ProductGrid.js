// ProductGrid.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductItem from "./ProductItem";

const products = [
  {
    imgSrc: "img/product/hinh9.png",
    alt: "Vợt Cầu Lông Yonex Astrox 88D Pro",
    title: "Vợt Cầu Lông Yonex Astrox 88D Pro",
    priceSale: "3.250.000₫",
    priceOld: "3.900.000₫",
    stars: "★★★★★",
  },
  {
    imgSrc: "img/product/hinh10.png",
    alt: "Giày Cầu Lông Yonex Power Cushion",
    title: "Giày Cầu Lông Yonex Power Cushion",
    priceSale: "2.800.000₫",
    priceOld: "3.200.000₫",
    stars: "★★★★☆",
  },
  {
    imgSrc: "img/product/hinh10.png",
    alt: "Giày Cầu Lông Yonex Power Cushion",
    title: "Giày Cầu Lông Yonex Power Cushion",
    priceSale: "2.800.000₫",
    priceOld: "3.200.000₫",
    stars: "★★★★☆",
  },
  {
    imgSrc: "img/product/hinh10.png",
    alt: "Giày Cầu Lông Yonex Power Cushion",
    title: "Giày Cầu Lông Yonex Power Cushion",
    priceSale: "2.800.000₫",
    priceOld: "3.200.000₫",
    stars: "★★★★☆",
  },
  {
    imgSrc: "img/product/hinh10.png",
    alt: "Giày Cầu Lông Yonex Power Cushion",
    title: "Giày Cầu Lông Yonex Power Cushion",
    priceSale: "2.800.000₫",
    priceOld: "3.200.000₫",
    stars: "★★★★☆",
  },
  {
    imgSrc: "img/product/hinh10.png",
    alt: "Giày Cầu Lông Yonex Power Cushion",
    title: "Giày Cầu Lông Yonex Power Cushion",
    priceSale: "2.800.000₫",
    priceOld: "3.200.000₫",
    stars: "★★★★☆",
  },
  {
    imgSrc: "img/product/hinh10.png",
    alt: "Giày Cầu Lông Yonex Power Cushion",
    title: "Giày Cầu Lông Yonex Power Cushion",
    priceSale: "2.800.000₫",
    priceOld: "3.200.000₫",
    stars: "★★★★☆",
  },
  {
    imgSrc: "img/product/hinh10.png",
    alt: "Giày Cầu Lông Yonex Power Cushion",
    title: "Giày Cầu Lông Yonex Power Cushion",
    priceSale: "2.800.000₫",
    priceOld: "3.200.000₫",
    stars: "★★★★☆",
  },
];

const ProductGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.33 });

  return (
    <motion.div
      className="product-wrapper"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProductItem {...product} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGrid;
