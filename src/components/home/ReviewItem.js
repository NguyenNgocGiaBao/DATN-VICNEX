const ReviewItem = ({ avatar, name, rating, text, images }) => {
  return (
    <div className="review-item">
      <div className="review-header">
        <img src={avatar} alt={name} />
        <div>
          <h4>{name}</h4>
          <div className="stars">{rating}</div>
        </div>
      </div>
      <p className="review-text">
        "{text} <a href="/#">xem thêm.</a>"
      </p>
      <div className="review-images">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`review-${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default ReviewItem;
