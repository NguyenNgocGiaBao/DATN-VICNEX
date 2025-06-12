// src/components/productdetail/ProductImageGallery.jsx
import React from "react";

function ProductImageGallery() {
  return (
    <div className="product-image">
      <img
        src="/img/product/Thiết kế chưa có tên .png"
        alt="Vợt cầu lông Yonex Astrox 88D Pro"
      />
      <div className="thumbnail-slider">
        <button>&lt;</button>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="/img/product/Thiết kế chưa có tên (6).png"
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default ProductImageGallery;
