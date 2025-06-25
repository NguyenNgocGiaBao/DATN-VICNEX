import ReviewItem from "./ReviewItem";

const reviews = [
  {
    avatar: "img/product/lcw.png",
    name: "Lee Chong Wei",
    rating: "★★★★★",
    text: "Sản phẩm cực kỳ chất lượng! Mình đã mua vợt Yonex ở đây và cảm thấy đánh rất đầm tay, trợ lực tốt...",
    images: [
      "img/product/tesst.png",
      "img/product/tesst.png",
      "img/product/tesst.png",
    ],
  },
  // 👇 Bạn có thể thêm nhiều review ở đây
  {
    avatar: "img/product/lcw.png",
    name: "Lee Chong Wei",
    rating: "★★★★★",
    text: "Sản phẩm tuyệt vời, rất hài lòng với chất lượng và dịch vụ.",
    images: [
      "img/product/tesst.png",
      "img/product/tesst.png",
      "img/product/tesst.png",
    ],
  },
  {
    avatar: "img/product/lcw.png",
    name: "Lee Chong Wei",
    rating: "★★★★★",
    text: "Sản phẩm tuyệt vời, rất hài lòng với chất lượng và dịch vụ.",
    images: [
      "img/product/tesst.png",
      "img/product/tesst.png",
      "img/product/tesst.png",
    ],
  },
  {
    avatar: "img/product/lcw.png",
    name: "Lee Chong Wei",
    rating: "★★★★★",
    text: "Sản phẩm tuyệt vời, rất hài lòng với chất lượng và dịch vụ.",
    images: [
      "img/product/tesst.png",
      "img/product/tesst.png",
      "img/product/tesst.png",
    ],
  },
  {
    avatar: "img/product/lcw.png",
    name: "Lee Chong Wei",
    rating: "★★★★★",
    text: "Sản phẩm tuyệt vời, rất hài lòng với chất lượng và dịch vụ.",
    images: [
      "img/product/tesst.png",
      "img/product/tesst.png",
      "img/product/tesst.png",
    ],
  },
  {
    avatar: "img/product/lcw.png",
    name: "Lee Chong Wei",
    rating: "★★★★★",
    text: "Sản phẩm tuyệt vời, rất hài lòng với chất lượng và dịch vụ.",
    images: [
      "img/product/tesst.png",
      "img/product/tesst.png",
      "img/product/tesst.png",
    ],
  },
];

const ReviewList = () => {
  return (
    <div className="reviews-wrapper">
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </div>
      <div className="see-more">
        <a href="/#">Xem tất cả đánh giá.</a>
      </div>
    </div>
  );
};

export default ReviewList;
