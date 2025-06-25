import React from "react";

function RegisterForm() {
  return (
    <div className="register-wrapper">
      <form className="register-form">
        <h2>Đăng Ký</h2>

        <input type="text" placeholder="Họ và tên" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Số điện thoại" required />
        <input type="password" placeholder="Mật khẩu" required />
        <input type="password" placeholder="Nhập lại mật khẩu" required />

        <div className="terms">
          <input type="checkbox" id="agree" required />
          <label htmlFor="agree">
            Tôi đồng ý với <a href="/#">Điều khoản sử dụng</a>
          </label>
        </div>

        <button type="submit">Đăng Ký</button>

        <p className="login-link">
          Đã có tài khoản? <a href="/#">Đăng Nhập</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
