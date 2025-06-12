// src/components/common/PromoBanner.jsx

import React from 'react';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-item">
        <span className="icon">🔥</span>
        <span className="text">
          Giảm ngay <strong>10%</strong> cho đơn hàng từ 1 triệu – <span className="highlight">Nhập mã:</span>{' '}
          <strong className="promo-code">GIAM10</strong>
        </span>
      </div>
      <div className="promo-item">
        <span className="icon">⚡</span>
        <span className="text">
          Flash Sale Hôm Nay – <strong className="highlight">Giảm sốc đến 50%</strong>
        </span>
      </div>
      <div className="promo-item">
        <span className="icon">🎁</span>
        <span className="text">
          Mua <strong>2 vợt</strong> tặng ngay <strong className="highlight">túi đựng cao cấp</strong>
        </span>
      </div>
    </div>
  );
};

export default PromoBanner;
