import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/user/UserNavbar"
import { useState } from "react"
import LoginPopup from "./pages/auth/LoginPopup"

export default function App() {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      <AuthProvider>

      {/* Navbar */}
      <Navbar setShowLogin={setShowLogin} />

      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
