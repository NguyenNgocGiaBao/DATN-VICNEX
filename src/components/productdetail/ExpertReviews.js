function ExpertReviews() {
  const reviews = Array(5).fill({
    name: "Lee Chong Wei",
    title: "Tuyển thủ chuyên nghiệp",
    comment: "Vợt kiểm soát tốt, smash đầm tay...",
    rating: "⭐⭐⭐⭐⭐ (4.8/5)",
    avatar: "/img/product/lcw.png",
  });

  return (
    <aside className="expert-reviews">
      <h4>Chuyên gia nói gì về sản phẩm?</h4>
      {reviews.map((review, idx) => (
        <div className="review" key={idx}>
          <img src={review.avatar} alt={review.name} className="avatar" />
          <div className="info">
            <strong className="name">{review.name}</strong>
            <small className="title">{review.title}</small>
          </div>
          <div className="rating">
            <div className="stars">{review.rating}</div>
            <em className="comment">"{review.comment}"</em>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default ExpertReviews;
