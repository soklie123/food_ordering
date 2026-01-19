import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { token, logout, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Scroll to menu section only if on home page
  const handleMenuClick = () => {
    setMenu("menu");
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("explore-menu")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    } else {
      document.getElementById("explore-menu")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-4 md:px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 text-lg">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`pb-1 border-b-2 ${
            menu === "home" ? "border-red-500" : "border-transparent"
          }`}
        >
          Home
        </Link>

        <button
          onClick={handleMenuClick}
          className={`pb-1 border-b-2 ${
            menu === "menu" ? "border-red-500" : "border-transparent"
          }`}
        >
          Menu
        </button>

        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`pb-1 border-b-2 ${
            menu === "contact" ? "border-red-500" : "border-transparent"
          }`}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.basket_icon} alt="cart" className="w-6" />
          {getTotalCartAmount() > 0 && (
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>
          )}
        </Link>

        {/* Auth */}
        {!token ? (
          <button
            onClick={() => navigate("/auth/login")}
            className="bg-green-700 text-white px-5 py-2 rounded-full"
          >
            Sign In
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-6 cursor-pointer"
            />
            <ul className="absolute right-0 top-8 hidden group-hover:flex flex-col bg-white shadow-md rounded-md p-3 gap-2 w-36">
              <li
                onClick={() => navigate("/profile")}
                className="cursor-pointer hover:text-green-700"
              >
                Profile
              </li>
              <hr />
              <li
                onClick={handleLogout}
                className="cursor-pointer hover:text-green-700"
              >
                Logout
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 md:hidden">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <button onClick={handleMenuClick}>Menu</button>
          <a href="#footer" onClick={() => setMobileOpen(false)}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
