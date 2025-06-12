// components/cart/CartLeft.jsx
import CartItem from "./CartItem";

 function CartLeft() {
  return (
    <div className="cart-left">
      <table>
        <thead>
          <tr>
            <th>Sản Phẩm</th>
            <th>Đơn Giá</th>
            <th>Số Lượng</th>
            <th>Thành Tiền</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <CartItem key={index} />
          ))}
        </tbody>
      </table>
      <a href="/#" className="back-link">
        Quay lại trang chủ
      </a>
    </div>
  );
}

export default CartLeft;
