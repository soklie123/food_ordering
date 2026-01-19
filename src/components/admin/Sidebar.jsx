import React from 'react';
import { NavLink } from 'react-router-dom';
import { Plus, List, ShoppingCart } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-1/5 min-h-screen border-r border-gray-400 bg-gray-100 pt-8 shadow-md">
      <div className="flex flex-col gap-4 pl-3">
        
        <NavLink
          to="/admin/foods/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-transform duration-200 
            ${isActive ? 'bg-gray-200 border-l-4 border-orange-500' : 'hover:bg-gray-200'}`
          }
        >
          <Plus className="w-6 h-6 text-gray-700" />
          <p className="text-gray-800 font-medium text-base m-0">Add Item</p>
        </NavLink>

        <NavLink
          to="/admin/foods"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-transform duration-200 
            ${isActive ? 'bg-gray-200 border-l-4 border-orange-500' : 'hover:bg-gray-200'}`
          }
        >
          <List className="w-6 h-6 text-gray-700" />
          <p className="text-gray-800 font-medium text-base m-0">List Item</p>
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-transform duration-200 
            ${isActive ? 'bg-gray-200 border-l-4 border-orange-500' : 'hover:bg-gray-200'}`
          }
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <p className="text-gray-800 font-medium text-base m-0">Order</p>
        </NavLink>

      </div>
    </aside>
  );
};

export default Sidebar;
