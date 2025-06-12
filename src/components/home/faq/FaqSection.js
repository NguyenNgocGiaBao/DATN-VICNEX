import React from "react";
import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "Thời gian giao hàng mất bao lâu?",
    answer:
      "Thời gian giao hàng từ 2 - 5 ngày tùy vào khu vực. Nội thành nhận hàng trong 24h!",
  },
  {
    question: "Tôi có thể đổi trả sản phẩm không?",
    answer:
      "Bạn có thể đổi trả trong vòng 7 ngày nếu sản phẩm lỗi hoặc không đúng mô tả.",
  },
  {
    question: "Sản phẩm có bảo hành không?",
    answer:
      "Có! Tất cả sản phẩm chính hãng đều có bảo hành từ 6 - 12 tháng, tùy loại.",
  },
  {
    question: "Có thể thanh toán khi nhận hàng (COD) không?",
    answer:
      "Có! Bạn có thể chọn thanh toán COD hoặc chuyển khoản khi đặt hàng.",
  },
  {
    question: "Làm sao để nhận ưu đãi giảm giá?",
    answer:
      "Theo dõi website hoặc đăng ký email để nhận các mã giảm giá mới nhất!",
  },
];

const FaqSection = () => {
  return (
    <div className="faq-section">
      <div className="faq-box">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <a className="faq-link" href="/#">
        Xem tất cả FAQ
      </a>
    </div>
  );
};

export default FaqSection;
