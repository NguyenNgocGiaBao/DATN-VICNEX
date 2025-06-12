import "../App.css";
import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";
import FlashSale from "../components/home/FlashSale";
import ReviewList from "../components/home/ReviewList";
import ProductGrid from "../components/home/ProductGrid";
import FaqSection from "../components/home/faq/FaqSection";
import FeatureSection from "../components/home/FeatureSection";
import SectionHeading from "../components/home/SectionHeading";
import SpecialOfferBox from "../components/home/SpecialOfferBox";
import ProductCategories from "../components/home/ProductCategories";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <FeatureSection />
      <SectionHeading
        title="Danh Mục Sản Phẩm Chính"
        subtitle="Sản phẩm đa dạng – Chất lượng chính hãng – Mua sắm tiện lợi"
      />
      <ProductCategories />
      <SectionHeading
        title="Khuyến Mãi Hot Tháng 6"
        subtitle="Giảm giá lên tới 50% tất cả sản phẩm cầu lông"
      />
      <ProductGrid />
      <FlashSale
        image="img/product/hinh10.png"
        alt="Flash Sale"
        productName="Vợt Cầu Lông Yonex Astrox 88D Pro"
        priceSale="2.990.000₫"
        priceOld="3.500.000₫"
        discount="-15%"
        endTime="2025-06-10T23:59:59" // ISO date string hoặc new Date()
      />
      <SectionHeading
        title="Sản Phẩm Nổi Bật"
        subtitle="Gợi ý những sản phẩm đang được khách hàng ưa chuộng nhất, bán chạy
          nhất trong tháng."
      />
      <ProductGrid />
      <SectionHeading
        title="Khách hàng nói gì về chúng tôi?"
        subtitle="Gợi ý những sản phẩm đang được khách hàng ưa chuộng nhất, bán chạy
          nhất trong tháng."
      />
      <ReviewList />
      <SectionHeading
        title="Top sản phẩm nhiều lượt mua"
        subtitle="Gợi ý những sản phẩm đang được khách hàng ưa chuộng nhất, bán chạy
          nhất shop."
      />
      <ProductGrid />
      <SectionHeading
        title="Khách hàng thường hỏi gì"
        subtitle="Chúng tôi sẽ hỗ trợ hết mình để bạn có một trải nghiệm tốt nhất"
      />
      <FaqSection />
      <SpecialOfferBox />
      <Footer />
    </div>
  );
}

export default HomePage;
