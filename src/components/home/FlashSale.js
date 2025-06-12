import { useEffect, useState } from "react";

const FlashSale = ({
  image,
  alt,
  title = "Flash Sale ⚡",
  productName,
  priceSale,
  priceOld,
  discount,
  stars = "★★★★★",
  endTime, // truyền Date string hoặc timestamp
}) => {
  const [timeLeft, setTimeLeft] = useState({ hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // cập nhật ngay khi render

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="flash-sale-wrapper">
      <div className="flash-sale-content">
        <div className="flash-sale-image">
          <img src={image} alt={alt} />
        </div>

        <div className="flash-sale-info">
          <h4 className="flash-sale-title">{title}</h4>
          <h3 className="product-name">{productName}</h3>
          <p className="price-sale">Giá bán: {priceSale}</p>
          <p className="price-old">
            Giá gốc: {priceOld} <span className="discount">({discount})</span>
          </p>
          <div className="stars">{stars}</div>
          <button className="buy-now">Mua Ngay</button>
          <div className="countdown">
            <div className="time-box">{timeLeft.hours}</div>:
            <div className="time-box">{timeLeft.minutes}</div>:
            <div className="time-box">{timeLeft.seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
