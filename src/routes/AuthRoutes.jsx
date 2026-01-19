import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout"; // adjust import
import Login from "../pages/auth/LoginPopup";
import Signup from "../pages/auth/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
