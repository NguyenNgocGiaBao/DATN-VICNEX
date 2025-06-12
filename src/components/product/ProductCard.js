import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card1">
      <img src={product.image} alt="Vợt" className="product-image" />
      <h3 className="product-name1">{product.name}</h3>
      <div className="product-price1">{product.price}</div>
      <div className="product-rating1">
        {'★★★★★'} <span>({product.reviews})</span>
      </div>
      <div className="product-actions1">
        <button className="buy-btn1">Mua Ngay</button>
        <div className="product-fav1">♡</div>
      </div>
    </div>
  );
};

export default ProductCard;
