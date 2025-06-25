import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, pointerEvents: "none" },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: 0.3 },
  },
};

const fadeItemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const containerMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const [isProductOpen, setIsProductOpen] = useState(false);

  const mainMenuItems = [
    { to: "/brand", icon: "fas fa-tag", label: "Thương Hiệu" },
    { to: "/promotions", icon: "fas fa-gift", label: "Khuyến Mãi" },
    { to: "/blog", icon: "fas fa-newspaper", label: "Blog" },
    { to: "/stores", icon: "fas fa-store", label: "Cửa hàng" },
    { to: "/contact", icon: "fas fa-phone", label: "Liên hệ" },
  ];

  const categories = [
    {
      title: "Giày cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "giay",
    },
    {
      title: "Vợt cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "vot",
    },
    {
      title: "Áo cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "ao",
    },
    {
      title: "Váy cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "vay",
    },
    {
      title: "Quần cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "quan",
    },
    {
      title: "Túi vợt cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "tui-vot",
    },
    {
      title: "Balo cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "balo",
    },
    {
      title: "Phụ kiện cầu lông",
      links: [
        "yonex",
        "lining",
        "victor",
        "kumpoo",
        "apacs",
        "mizuno",
        "kawasaki",
        "fleet",
        "bonny",
        "asics",
      ],
      type: "phu-kien",
    },
  ];

  return (
    <header className="header">
      <div className="container1">
        <nav className="nav-menu1">
          <motion.div
            className="top-bar"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.img
              src="/img/logo/Logo_vicnec.png"
              alt="Logo"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                filter: "brightness(1.15) contrast(1.05)",
              }}
              whileTap={{ scale: 0.95 }}
            />

            {/* Hotline */}
            <motion.div className="top-left" variants={itemVariants}>
              <i className="fas fa-headset"></i>
              <span>HOTLINE:</span>
              <a href="tel:0977508430">0977508430</a> |{" "}
              <a href="tel:0338000308">0338000308</a>
            </motion.div>

            {/* Cửa hàng */}
            <motion.div className="top-center" variants={itemVariants}>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>HỆ THỐNG CỬA HÀNG</span>
            </motion.div>

            {/* Tìm kiếm */}
            <motion.div
              className="top-search"
              variants={itemVariants}
              animate={{
                boxShadow: isFocused
                  ? "0 0 12px rgba(1, 84, 185, 0.3)"
                  : "0 0 0 rgba(0,0,0,0)",
                scale: isFocused ? 1.05 : 1,
              }}
              transition={{
                scale: { type: "spring", stiffness: 260, damping: 20 },
                boxShadow: { duration: 0.3 },
              }}
            >
              <motion.input
                type="text"
                placeholder="Tìm sản phẩm..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                initial={{ width: "100%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-search"></i>
              </motion.button>
            </motion.div>

            {/* Icon nhóm bên phải */}
            <motion.div className="top-right" variants={itemVariants}>
              <motion.div
                className="icon-group"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {[
                  { icon: "fas fa-binoculars", label: "TRA CỨU" },
                  { icon: "fas fa-user", label: "TÀI KHOẢN" },
                  {
                    icon: "fas fa-shopping-cart",
                    label: "GIỎ HÀNG",
                    extra: <span className="cart-count">0</span>,
                  },
                ].map((item, index) => (
                  <motion.div
                    className={`icon-item${
                      item.label === "GIỎ HÀNG" ? " cart" : ""
                    }`}
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.i
                      className={item.icon}
                      whileHover={{
                        backgroundColor: "#0154b9", // Nền xanh trong vòng tròn
                        color: "#fff", // Icon trắng
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {item.extra}
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </nav>
      </div>

      <motion.div className="container" {...containerMotion}>
        <nav className="nav-menu">
          <ul>
            <motion.li
              className="dropdown-wrapper"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
              whileHover={{ scale: 1.03 }}
              style={{
                borderRadius: 6,
                padding: "4px 8px",
                position: "relative",
              }}
            >
              <Link to="/product">
                <i className="fas fa-cart-shopping"></i> Sản phẩm
              </Link>

              <AnimatePresence>
                {isProductOpen && (
                  <motion.div
                    className="dropdown-mega"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{
                      position: "absolute",
                      top: 43,
                      left: -255,
                      background: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: 20,
                      zIndex: 999,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      display: "grid",
                      gridTemplateColumns: "repeat(4, minmax(180px, 1fr))",
                      gap: "16px",
                      maxWidth: "1849px",
                      maxHeight: "400px",
                      overflowY: "auto",
                    }}
                  >
                    {categories.map((cat, idx) => (
                      <div className="mega-column" key={idx}>
                        <h4>{cat.title}</h4>
                        {cat.links.map((brand, i) => (
                          <Link key={i} to={`/product/${cat.type}/${brand}`}>
                            {cat.title.split(" ")[0]}{" "}
                            {brand.charAt(0).toUpperCase() + brand.slice(1)}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {mainMenuItems.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeItemVariant}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{
                  scale: 1.05,
                  // backgroundColor: "#f5faff",
                }}
                style={{ borderRadius: 6, padding: "4px 8px" }}
              >
                <Link to={item.to}>
                  <i className={item.icon}></i> {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="menu-header"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <i className="fas fa-bars"></i> MENU
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
