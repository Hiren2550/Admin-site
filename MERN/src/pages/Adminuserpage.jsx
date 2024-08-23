import React from "react";
import Userlist from "../features/user/components/Userlist";
import Sidebar from "../features/Product-list/components/Sidebar";

const Adminuserpage = () => {
  return (
    <div className="flex h-screen w-auto bg-gray-100">
      {/* sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex  items-center gap-3 px-4 py-2 min-h-16 bg-gray-800"></div>
        <div className="p-5">
          <Userlist />
        </div>
      </div>
    </div>
  );
};

export default Adminuserpage;
