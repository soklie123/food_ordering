import React from "react";
import { Outlet } from "react-router-dom";
import { Coffee } from "lucide-react"; // just an example logo icon

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Image / Branding */}
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
        <div className="text-center">
          <Coffee className="w-24 h-24 mx-auto text-blue-500 mb-6" />
          <h1 className="text-4xl font-bold text-blue-600 mb-2">FoodHub Admin</h1>
          <p className="text-gray-600">Manage your food ordering system easily.</p>
        </div>
      </div>

      {/* Right side: Auth form */}
      <div className="flex flex-1 justify-center items-center p-6 bg-white">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
