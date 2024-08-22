import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center gap-3 px-4 py-2 min-h-16 bg-gray-900">
          <Link to={"/admin"}>
            <img
              alt="Your Company"
              src={logo}
              className="h-9 w-9 border rounded"
            />
          </Link>
          <span className="text-white font-bold  ">Admin Ecommerce</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            <Link
              to={"/"}
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Home
            </Link>
            <Link
              to={"/admin-user"}
              className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              Users
            </Link>
            <Link
              to={"/admin"}
              className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              Products
            </Link>
            <Link
              to={"/admin-order"}
              className="flex gap-2 items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
              <FaCartShopping size={25} className="text-gray-400" />
              Orders
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
