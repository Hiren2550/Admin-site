import React from "react";
import Orderlist from "../features/order/Orderlist";
import Sidebar from "../features/Product-list/components/Sidebar";

export const Adminorderpage = () => {
  return (
    <div className=" w-dvw flex h-screen  bg-gray-100">
      {/* sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex  items-center gap-3 px-4 py-2 min-h-16 bg-gray-800"></div>
        <div className="p-5">
          <Orderlist />
        </div>
      </div>
    </div>
  );
};
