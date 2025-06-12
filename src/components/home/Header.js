// src/components/Header.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faTag,
  faGift,
  faNewspaper,
  faStore,
  faPhone,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="Logo Vicrex" />
        </div>

        <nav className="nav-menu">
          <ul>
            <li><Link to="/product">
    <FontAwesomeIcon icon={faCartShopping} /> Sản phẩm
  </Link></li>
            <li><a href="//product"><FontAwesomeIcon icon={faTag} /> Thương Hiệu</a></li>
            <li><a href="/#"><FontAwesomeIcon icon={faGift} /> Khuyến Mãi</a></li>
            <li><a href="/#"><FontAwesomeIcon icon={faNewspaper} /> Blog</a></li>
            <li><a href="/#"><FontAwesomeIcon icon={faStore} /> Cửa hàng</a></li>
            <li><a href="/#"><FontAwesomeIcon icon={faPhone} /> Liên hệ</a></li>
          </ul>
        </nav>

        <div className="search">
          <input type="text" placeholder="Tìm Kiếm ..." />
        </div>

        <div className="menu-header">
          <FontAwesomeIcon icon={faBars} /> MENU
        </div>
      </div>
    </header>
  );
};

export default Header;
