import React from "react";

function LoginForm() {
  return (
    <div className="login-wrapper">
      <form className="login-form">
        <h2>Đăng Nhập</h2>

        <input type="email" placeholder="Vui lòng nhập email" required />
        <input type="password" placeholder="Vui lòng nhập mật khẩu" required />

        <div className="social-login">
          <span>Đăng Nhập với</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="Google"
          />
          <a href="/#" className="forgot-password">Quên mật khẩu</a>
        </div>

        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
}

export default LoginForm;
