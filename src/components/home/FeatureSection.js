import FeatureBox from './FeatureBox';

const features = [
  {
    title: "🏸 SẢN PHẨM CHÍNH HÃNG",
    lines: [
      "💯 Cam kết cung cấp vợt, giày, quần áo và phụ kiện cầu lông chính hãng từ các thương hiệu lớn như Yonex, Lining, Victor...",
      "✅ Đảm bảo chất lượng – Bảo hành chính hãng."
    ]
  },
  {
    title: "🚚 GIAO HÀNG NHANH CHÓNG",
    lines: [
      "📦 Đặt hàng dễ dàng, giao nhanh trong 24–48h toàn quốc.",
      "🧍‍♂️ Nhận hàng tận nhà – Kiểm tra trước khi thanh toán."
    ]
  },
  {
    title: "💰🔥 GIÁ TỐT NHẤT",
    lines: [
      "💬 Cam kết giá cạnh tranh nhất thị trường.",
      "🎉 Nhiều ưu đãi, giảm giá và quà tặng hấp dẫn hàng tháng."
    ]
  },
  {
    title: "⭐ ĐỔI TRẢ LINH HOẠT",
    lines: [
      "🔁 Hỗ trợ đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc không đúng mô tả."
    ]
  }
];

const FeatureSection = () => {
  return (
    <div className="features-container">
      {features.map((item, index) => (
        <FeatureBox key={index} title={item.title} lines={item.lines} />
      ))}
    </div>
  );
};

export default FeatureSection;
