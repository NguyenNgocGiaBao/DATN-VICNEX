import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Carousel from "../components/product/Carousel";
import ProductList from "../components/product/ProductList";
import PromoBanner from "../components/product/PromoBanner";
import BreadcrumbNav from "../components/product/BreadcrumbNav";
import SupportSection from "../components/product/SupportSection";
import FilterSidebar from "../components/product/FilterSidebar";
import RecentlyViewed from "../components/product/RecentlyViewed";
import RecommendedProducts from "../components/product/RecommendedProducts";
import SectionHeading from "../components/home/SectionHeading";

function ProductPage() {
  return (
    <div>
      <Header />
      <BreadcrumbNav />
      <SectionHeading
        title="TẤT CẢ SẢN PHẨM"
        subtitle="Tìm kiếm sản phẩm dễ dàng với bộ lọc thông minh!"
      />
      <div className="layout">
        <FilterSidebar />
        <div className="product-list-container">
          <ProductList />
        </div>
      </div>
      <Carousel />
      <PromoBanner />
      <RecentlyViewed />
      <RecommendedProducts />
      <SupportSection />
      <Footer />
    </div>
  );
}

export default ProductPage;