import React from "react";

const CheckoutRight = () => {
  return (
    <div className="checkout-right">
      <h3>Tóm Tắt Đơn Hàng</h3>
      <div className="summary-row">
        <span>Tổng tiền sản phẩm:</span>
        <strong>₫3.600.000</strong>
      </div>
      <div className="summary-row">
        <span>Giảm giá:</span>
        <strong style={{ color: "red" }}>-₫200.000</strong>
      </div>
      <div className="summary-row">
        <span>Phí vận chuyển:</span>
        <strong>₫30.000</strong>
      </div>
      <div className="summary-row total-row">
        <span>Tổng thanh toán:</span>
        <strong>₫3.430.000</strong>
      </div>

      <div className="voucher">
        <input type="text" placeholder="Nhập mã giảm giá" />
        <button>Áp dụng</button>
      </div>

      <div className="payment-method">
        <p>Phương Thức Thanh Toán</p>
        <label><input type="radio" name="payment" defaultChecked /> Thanh toán khi nhận hàng (COD)</label>
        <label><input type="radio" name="payment" /> Chuyển khoản ngân hàng</label>
        <label><input type="radio" name="payment" /> Ví điện tử (Momo, ZaloPay...)</label>
        <label><input type="radio" name="payment" /> Trả góp (thẻ tín dụng)</label>
        <label><input type="radio" name="payment" /> Thẻ Visa/MasterCard</label>
      </div>

      <button className="checkout-btn">Thanh Toán</button>
    </div>
  );
};

export default CheckoutRight;
