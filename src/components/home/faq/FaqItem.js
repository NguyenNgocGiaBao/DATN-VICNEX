import React from "react";

const FaqItem = ({ question, answer }) => {
  return (
    <div className="faq-item">
      <div className="faq-title">
        ✅ {question}
        <span className="faq-icon">🛈</span>
      </div>
      <p className="faq-desc">{answer}</p>
    </div>
  );
};

export default FaqItem;
