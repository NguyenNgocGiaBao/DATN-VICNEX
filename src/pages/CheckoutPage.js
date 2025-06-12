import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import BreadcrumbNav from "../components/product/BreadcrumbNav";
import SectionHeading from "../components/home/SectionHeading";
import CheckoutLeft from "../components/checkout/CheckoutLeft";
import CheckoutRight from "../components/checkout/CheckoutRight";

function CheckoutPage() {
  return (
    <div>
      <Header />
      <BreadcrumbNav />
      <SectionHeading
        title="Thanh Toán Đơn Hàng"
        subtitle="Vui lòng kiểm tra thông tin và chọn phương thức thanh toán để hoàn tất đơn hàng"
      />
      <div className="checkout-container">
        <CheckoutLeft />
        <CheckoutRight />
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
