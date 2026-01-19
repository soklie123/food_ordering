import { Outlet } from "react-router-dom";
import Navbar from "../components/user/UserNavbar";
import Footer from "../pages/user/Footer";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (full width but centered content inside) */}
      

      {/* Main Content */}
      <main className="flex-1 w-full flex justify-center">
        <div className="w-[80%]">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <div className="w-full flex justify-center">
        <div className="w-[80%]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
