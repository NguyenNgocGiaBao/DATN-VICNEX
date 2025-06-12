import React from "react";

function ProductOptions() {
  return (
    <div className="options">
      <div className="colors">
        <p>Màu sắc:</p>
        {['black', 'blue', 'red', 'gray'].map(color => (
          <div
            key={color}
            className={`color ${color}`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      <div className="sizes">
        <p>Trọng lượng:</p>
        {["3U", "4U", "5U"].map((size, index) => (
          <button
            key={index}
            className={`size ${size === "4U" ? "selected" : ""}`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="quantity">
        <p>Số lượng:</p>
        <button>-</button>
        <input type="number" value="1" min="1" />
        <button>+</button>
        <span>(Chỉ còn 5 sản phẩm!)</span>
      </div>
    </div>
  );
}

export default ProductOptions;

