// components/cart/CartRight.jsx

function CartRight() {
  return (
    <div className="cart-right">
      <h3>Tóm Tắt Đơn Hàng</h3>
      <div className="summary-row">
        <span>Tổng tiền sản phẩm:</span>
        <strong>₫3.600.000</strong>
      </div>
      <div className="summary-row">
        <span>Giảm giá:</span>
        <strong>-₫200.000</strong>
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
      <button className="checkout-btn">Đặt Hàng</button>
    </div>
  );
}


export default CartRight;