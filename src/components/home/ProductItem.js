// ProductItem.jsx
const ProductItem = ({ imgSrc, alt, title, priceSale, priceOld, stars }) => {
  return (
    <div className="product-item">
      <img src={imgSrc} alt={alt} />
      <div className="product-info">
        <h4>{title}</h4>
        <p className="price-sale">Giá bán: {priceSale}</p>
        <p className="price-old">Giá gốc: {priceOld}</p>
        <div className="stars">{stars}</div>
      </div>
      <button className="buy-btn">Mua Ngay</button>
    </div>
  );
};

export default ProductItem;
