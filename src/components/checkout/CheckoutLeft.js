import React from "react";

const CheckoutLeft = () => {
  return (
    <div className="checkout-left">
      <h3>Thông Tin Giao Hàng</h3>
      <form className="shipping-form">
        <input type="text" placeholder="Họ và tên" required />
        <input type="text" placeholder="Số điện thoại" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Tỉnh" />
        <input type="text" placeholder="Huyện" />
        <input type="text" placeholder="Địa chỉ nhận hàng chi tiết" />
        <textarea placeholder="Ghi chú cho đơn hàng"></textarea>

        <div className="terms-box">
          <p>Chính Sách & Điều Khoản</p>
          <small>
            Tôi đã đọc và đồng ý với{" "}
            <a href="/#">Điều khoản Sử Dụng</a> &{" "}
            <a href="/#">Chính Sách Bảo Mật</a>.
          </small>
        </div>

        <div className="checkout-links">
          <a href="/#" className="back-link">Quay lại trang chủ</a>
          <a href="/#" className="continue-link">Tiếp tục mua sắm</a>
        </div>
      </form>
    </div>
  );
};

export default CheckoutLeft;
