export default function CartItem() {
  return (
    <tr>
      <td className="product-info">
        <img src="/htm_css/img/product/font-size 18px;.png" alt="" />
        <div className="product-detail">
          <p className="product-name">Vợt Cầu Lông Yonex Astrox 100ZZ – Chính Hãng</p>
          <p>Màu: Xanh | Trọng lượng: 4U</p>
          <p>SKU: YX100ZZ-BLUE</p>
          <p className="product-note">Chỉ còn 2 sản phẩm!</p>
        </div>
      </td>
      <td>
        <span className="new-price">₫1.200.000</span>
        <br />
        <span className="old-price">₫1.500.000</span>{" "}
        <span className="discount">-20%</span>
      </td>
      <td className="quantity">
        <button>-</button>
        <input type="number" value="1" readOnly />
        <button>+</button>
      </td>
      <td className="new-price">₫1.200.000</td>
      <td>
        <button className="delete-btn">🗑️</button>
      </td>
    </tr>
  );
}
