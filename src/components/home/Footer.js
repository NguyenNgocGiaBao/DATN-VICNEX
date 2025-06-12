const Footer = () => {
  return (
        <footer className="footer">
    <div className="footer-container">
      <div className="footer-col">
        <img src="logo.png" alt="Logo" className="logo" />
        <h4>📢 VicNex – Cửa Hàng Cầu Lông Chính Hãng</h4>
        <p>
          VicNex chuyên cung cấp vợt, giày, quần áo & phụ kiện cầu lông từ các
          thương hiệu hàng đầu như Yonex, Lining, Victor. Cam kết sản phẩm
          chính hãng 100%, hỗ trợ bảo hành và đổi trả dễ dàng!
        </p>
        <a href="/#">Xem thêm.</a>
      </div>

      <div className="footer-col">
        <h4>Chính sách & Hỗ trợ</h4>
        <ul>
          <li>Chính sách giao hàng 📦</li>
          <li>Chính sách đổi trả 🔁</li>
          <li>Chính sách bảo hành 🛡️</li>
          <li>Hướng dẫn mua hàng 🛍️</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Liên hệ & Địa chỉ</h4>
        <p>📞 0123 456 789</p>
        <p>📧 support@shop.com</p>
        <p>📍 123 Đường ABC, Quận X, TP.HCM</p>
      </div>

      <div className="footer-col">
        <h4>Mạng xã hội & Đăng ký nhận tin</h4>
        <div className="social-icons">
          <a href="/#"><i className="fa-brands fa-facebook"></i> Facebook</a><br />
          <a href="/#">Zalo</a><br />
          <a href="/#"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <input type="email" placeholder="Nhập email của bạn..." />
        <button>Đăng Kí</button>
      </div>
    </div>
  </footer>
     );
};

export default Footer;
