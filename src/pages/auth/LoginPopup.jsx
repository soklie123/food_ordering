import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { setToken, setUser } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [isClosing, setIsClosing] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });

  // Lock scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setShowLogin(false), 300);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        currState === "Login"
          ? "http://localhost:4000/api/user/login"
          : "http://localhost:4000/api/user/register";

      const res = await axios.post(url, data);

      if (res.data.success) {
        setToken(res.data.token);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        handleClose();
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Server connection failed"));
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[10000] ${
        isClosing ? "pointer-events-none" : ""
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      {/* Popup Container */}
      <form
        onSubmit={handleSubmit}
        className={`relative w-[90%] max-w-md bg-white rounded-xl p-6 shadow-xl transition-transform transition-opacity duration-300 ${
          isClosing
            ? "opacity-0 scale-90 translate-y-5"
            : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-5 h-5 cursor-pointer"
            onClick={handleClose}
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {currState === "Sign Up" && (
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={onChangeHandler}
              required
              className="p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={onChangeHandler}
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-5 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md transition-colors"
        >
          {currState === "Login" ? "Login" : "Create Account"}
        </button>

        {/* Switch Login/SignUp */}
        <p className="mt-4 text-center text-gray-600">
          {currState === "Login" ? (
            <>
              New here?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-green-700 font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-green-700 font-semibold cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
