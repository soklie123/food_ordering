import { Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';

import Home from '../pages/user/Home';
import Category from '../pages/user/Category';
import FoodDetail from '../pages/user/FoodDetail';
import Cart from '../pages/user/Cart';
import Checkout from '../pages/user/Checkout';
import Payment from '../pages/user/Payment';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="food/:id" element={<FoodDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="payment" element={<Payment />} />
        <Route path="profile" element={<div>User Profile Page</div>} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
