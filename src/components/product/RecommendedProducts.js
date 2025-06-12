import React from 'react';
import ProductCard from './ProductCard';

const mockProducts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: 'Vợt Cầu Lông Yonex Astrox 100ZZ – Smash Cực Mạnh',
  image: 'https://via.placeholder.com/250x180',
  price: '3.890.000₫',
  rating: 5,
  reviews: 24
}));

const RecommendedProducts = () => {
  return (
    <section className="recently-viewed">
      <h2>Những sản phẩm gợi ý dành cho bạn</h2>
      <div className="recently-viewed-track">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
