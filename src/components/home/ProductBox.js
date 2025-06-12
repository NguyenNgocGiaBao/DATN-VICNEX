const ProductBox = ({ imgSrc, altText, title, description, buttonText }) => {
  return (
    <div className="product-box">
      <img src={imgSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Xem thêm</button>
    </div>
  );
};

export default ProductBox;
