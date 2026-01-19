import React from "react";

const MainPage = () => {
  return (
    <div className="relative h-[500px] max-w-[1200px] w-[95%] mx-auto my-5 rounded-2xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/header_img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a6c4f4d] to-black/50"></div>

      {/* Contents */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-5 max-w-[550px] animate-fadeInUp z-10
                      lg:bottom-12 lg:left-12 md:max-w-[500px] sm:left-6 sm:bottom-10 sm:items-center sm:text-center">
        <h2 className="text-3xl font-bold text-white leading-[1.1] drop-shadow-lg sm:text-2xl">Order your favourite food here</h2>
        <p className="text-white/95 text-lg drop-shadow-md sm:text-base">
          Experience the rich culinary heritage of Cambodia with our carefully crafted dishes, made from traditional recipes and the freshest local ingredients.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-2 sm:flex-col sm:items-center sm:w-full">
          <button className="bg-gradient-to-br from-[#2a6c4f] to-[#3a8c6d] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all w-[140px] sm:w-48">
            Explore Menu
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 py-3 px-8 rounded-full font-semibold hover:bg-white/30 hover:-translate-y-1 transition-all w-[140px] sm:w-48">
            Order Now
          </button>
        </div>

        {/* Features */}
        <div className="flex gap-6 mt-4 flex-wrap sm:justify-center">
          <div className="flex items-center gap-2 text-white/95 text-sm font-medium bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full">
            <span className="text-lg drop-shadow-sm">🚚</span> Fast Delivery
          </div>
          <div className="flex items-center gap-2 text-white/95 text-sm font-medium bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full">
            <span className="text-lg drop-shadow-sm">⭐</span> Authentic Taste
          </div>
          <div className="flex items-center gap-2 text-white/95 text-sm font-medium bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full">
            <span className="text-lg drop-shadow-sm">🌱</span> Fresh Ingredients
          </div>
        </div>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default MainPage;
