import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import BreadcrumbNav from "../components/product/BreadcrumbNav";
import ProductInfo from "../components/productdetail/ProductInfo";
import RecentlyViewed from "../components/product/RecentlyViewed";
import ProductOptions from "../components/productdetail/ProductOptions";
import ProductActions from "../components/productdetail/ProductActions";
import CustomerReviews from "../components/productdetail/CustomerReviews";
import CustomerSupport from "../components/productdetail/CustomerSupport";
import RecommendedProducts from "../components/product/RecommendedProducts";
import ShippingFeatures from "../components/productdetail/ShippingFeatures";
import ProductImageGallery from "../components/productdetail/ProductImageGallery";
import QuickSupportSection from "../components/productdetail/QuickSupportSection";
import ProductDetailSection from "../components/productdetail/ProductDetailSection";

function ProductDetailPage() {
  return (
    <div>
      <Header />
      <BreadcrumbNav />
      <div className="product-container">
        <div className="product-image">
          <ProductImageGallery />
        </div>
        <div className="product-details">
          <ProductInfo />
          <ProductOptions />
          <ProductActions />
        </div>
      </div>
      <ShippingFeatures />
      <ProductDetailSection />
      <CustomerReviews />
      <RecentlyViewed />
      <RecommendedProducts />
      <CustomerSupport />
      <QuickSupportSection />
      <Footer />
    </div>
  );
}
export default ProductDetailPage;
