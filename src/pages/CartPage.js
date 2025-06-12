import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import BreadcrumbNav from "../components/product/BreadcrumbNav";
import RecentlyViewed from "../components/product/RecentlyViewed";
import RecommendedProducts from "../components/product/RecommendedProducts";
import SectionHeading from "../components/home/SectionHeading";
import CartLeft from "../components/cart/CartLeft";
import CartRight from "../components/cart/CartRight";

function CartPage() {
  return (
    <div>
      <Header />
      <BreadcrumbNav />
      <SectionHeading
        title="Giỏ Hàng"
        subtitle="Kiểm tra các sản phẩm đã chọn và thanh toán ngay"
      />
      <div className="container1">
        <CartLeft />
        <CartRight />
      </div>
      <RecentlyViewed />
      <RecommendedProducts />
      <Footer />
    </div>
  );
}

export default CartPage;
