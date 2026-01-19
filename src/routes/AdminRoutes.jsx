import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import FoodList from '../pages/admin/Food/FoodList';
import AddFood from '../pages/admin/Food/AddFood';
import EditFood from '../pages/admin/Food/EditFood';
import OrderList from '../pages/admin/Order/OrderList';

import CategoryList from '../pages/admin/Category/CategoryList';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="foods" element={<FoodList />} />
        <Route path="foods/add" element={<AddFood />} />
        <Route path="foods/edit/:id" element={<EditFood />} />
        <Route path="categories" element={<CategoryList />} />
         <Route path="orders" element={<OrderList />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
