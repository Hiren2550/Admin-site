import React from "react";
import Sidebar from "../features/Product-list/components/Sidebar";
import Adminproductlist from "../features/Product-list/components/Adminproductlist";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center gap-3 px-4 py-2 min-h-16 bg-gray-800">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New Product
          </button>
        </div>
        <div className="p-5">
          <Adminproductlist />
        </div>
      </div>
    </div>
  );
};

export default Admin;
