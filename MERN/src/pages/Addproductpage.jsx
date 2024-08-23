import React from "react";
import Sidebar from "../features/Product-list/components/Sidebar";
import Addproduct from "../features/Product-list/components/Addproduct";

export const Addproductpage = () => {
  return (
    <div className=" w-dvw flex h-screen  bg-gray-100">
      {/* sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex  items-center gap-3 px-4 py-2 min-h-16 bg-gray-800"></div>
        <div className="p-5">
          <Addproduct />
        </div>
      </div>
    </div>
  );
};
