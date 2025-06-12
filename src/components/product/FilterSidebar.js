// src/components/FilterSidebar.js
import React from 'react';

function FilterSidebar() {
  return (
    <aside className="filter-wrapper">
      <div className="filter-box">
          <h3 className="filter-box__title">BỘ LỌC SẢN PHẨM</h3>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo loại sản phẩm</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Vợt cầu lông</label></li>
              <li><label><input type="checkbox"/> Giày cầu lông</label></li>
              <li><label><input type="checkbox"/> Túi đựng vợt</label></li>
              <li><label><input type="checkbox"/> Quần áo</label></li>
              <li><label><input type="checkbox"/> Phụ kiện</label></li>
              <li><label><input type="checkbox"/> Cước vợt</label></li>
              <li><label><input type="checkbox"/> Quấn cán</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo thương hiệu</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Yonex</label></li>
              <li><label><input type="checkbox"/> Lining</label></li>
              <li><label><input type="checkbox"/> Victor</label></li>
              <li><label><input type="checkbox"/> Forza</label></li>
              <li><label><input type="checkbox"/> Protech</label></li>
              <li><label><input type="checkbox"/> Kumpoo</label></li>
              <li><label><input type="checkbox"/> Kawasaki</label></li>
              <li><label><input type="checkbox"/> Mizuno</label></li>
              <li><label><input type="checkbox"/> Apacs</label></li>
              <li><label><input type="checkbox"/> Babolat</label></li>
              <li><label><input type="checkbox"/> Adidas</label></li>
              <li><label><input type="checkbox"/> Astec</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo giá</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Dưới 500.000đ</label></li>
              <li><label><input type="checkbox"/> 500.000đ - 1.000.000đ</label></li>
              <li><label><input type="checkbox"/> 1.000.000đ - 2.000.000đ</label></li>
              <li><label><input type="checkbox"/> Trên 2.000.000đ</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo đánh giá</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> ★★★★★ (5 sao)</label></li>
              <li><label><input type="checkbox"/> ★★★★☆ (4 sao trở lên)</label></li>
              <li><label><input type="checkbox"/> ★★★☆☆ (3 sao trở lên)</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo màu sắc</h4>
            <div className="color-options">
              <span className="color-option red" title="Đỏ"></span>
              <span className="color-option blue" title="Xanh dương"></span>
              <span className="color-option green" title="Xanh lá"></span>
              <span className="color-option black" title="Đen"></span>
              <span className="color-option white" title="Trắng"></span>
              <span className="color-option yellow" title="Vàng"></span>
            </div>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo giới tính</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Nam</label></li>
              <li><label><input type="checkbox"/> Nữ</label></li>
              <li><label><input type="checkbox"/> Unisex</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo kích cỡ</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Size S</label></li>
              <li><label><input type="checkbox"/> Size M</label></li>
              <li><label><input type="checkbox"/> Size L</label></li>
              <li><label><input type="checkbox"/> Size XL</label></li>
              <li><label><input type="checkbox"/> Size 38–44 (Giày)</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo cấp độ</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Người mới chơi</label></li>
              <li><label><input type="checkbox"/> Trung cấp</label></li>
              <li><label><input type="checkbox"/> Nâng cao</label></li>
              <li><label><input type="checkbox"/> Chuyên nghiệp</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo cân nặng vợt</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> 3U (85–89g)</label></li>
              <li><label><input type="checkbox"/> 4U (80–84g)</label></li>
              <li><label><input type="checkbox"/> 5U (75–79g)</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo độ cứng thân</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Mềm</label></li>
              <li><label><input type="checkbox"/> Trung bình</label></li>
              <li><label><input type="checkbox"/> Cứng</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo điểm cân bằng</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Nặng đầu (tấn công)</label></li>
              <li><label><input type="checkbox"/> Cân bằng</label></li>
              <li><label><input type="checkbox"/> Nặng đuôi (phòng thủ)</label></li>
            </ul>
          </div>

          <div className="filter-group">
            <h4 className="filter-group__title"> Lọc theo khuyến mãi</h4>
            <ul className="scrollable-list">
              <li><label><input type="checkbox"/> Đang giảm giá</label></li>
              <li><label><input type="checkbox"/> Mua 1 tặng 1</label></li>
              <li><label><input type="checkbox"/> Có quà tặng</label></li>
            </ul>
          </div>

        </div>
    </aside>
  );
}

export default FilterSidebar;
