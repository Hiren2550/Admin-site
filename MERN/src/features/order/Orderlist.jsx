import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderAsync,
  fetchAllOrdersAsync,
  fetchOrderByIdAsync,
  selectAllOrders,
  selectOrder,
  updateOrderAsync,
} from "./orderSlice";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useForm } from "react-hook-form";

const Orderlist = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  let orders = useSelector(selectAllOrders);
  orders = [...orders].reverse();
  const order = useSelector(selectOrder);
  const handleEdit = (e, orderId) => {
    dispatch(fetchOrderByIdAsync(orderId));
    setOpen(!open);
  };
  const handleDelete = (e, orderId) => {
    dispatch(deleteOrderAsync(orderId));
  };
  useEffect(() => {
    dispatch(fetchAllOrdersAsync());
  }, [dispatch]);
  const handleForm = (data) => {
    dispatch(updateOrderAsync({ id: order.id, status: data.status }));
    reset();
    setOpen(!open);
  };
  const handleChange = (e) => {
    dispatch(updateOrderAsync({ id: order.id, status: e.target.value }));
    reset();
    setOpen(!open);
  };
  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "text-purple-600 bg-purple-200";
      case "dispatched":
        return "text-blue-600 bg-blue-200";
      case "delivered":
        return "text-green-600 bg-green-200";
      case "cancelled":
        return "text-red-600 bg-red-200";
      default:
        return "text-gray-800 bg-gray-200";
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen bg-gray-200">
        <h1 className="mt-2 text-3xl px-2 pt-4 ml-2  font-bold text-gray-900">
          Order Management
        </h1>
        {open && (
          <form
            noValidate
            method="POST"
            className="w-auto gap-4 p-2 flex flex-row items-center"
            onSubmit={handleSubmit(handleForm)}
          >
            <select
              className="border rounded-md"
              onChange={(e) => handleChange(e)}
            >
              <option value="">--Select--</option>
              <option value="pending">Pending</option>
              <option value="dispatched">Dispatched</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <label
              htmlFor="status"
              className="block mt-1 font-medium leading-6 text-gray-900"
            >
              Status
            </label>
            <div>
              <div className="mt-2">
                <input
                  id="status"
                  {...register("status", {
                    required: {
                      value: true,
                      message:
                        "Status is required if you want to update Order status",
                    },
                  })}
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <p className="mt-1 text-xs text-gray-600">
                {errors.status?.message}
              </p>
            </div>

            <div>
              <button
                type="submit"
                className=" flex max-w-lg justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Status
              </button>
            </div>
          </form>
        )}
        <div className="mt-2 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
          <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr className="">
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-2">
                  Delete
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Edit
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Order ID
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Customer
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Total Amount
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Total Qty
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Payment Method
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Phone No.
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Address
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Status
                </td>
              </tr>
            </thead>
            <tbody className="bg-white lg:border-gray-300">
              {orders &&
                orders.map((order, index) => (
                  <tr className="" key={order.id}>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      <MdDeleteOutline
                        onClick={(e) => handleDelete(e, order.id)}
                        className="text-gray-700 cursor-pointer"
                        size={26}
                      />
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      <CiEdit
                        onClick={(e) => handleEdit(e, order.id)}
                        className="text-gray-700 cursor-pointer"
                        size={26}
                      />
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      # {order.id}
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      {order.user.name}
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                      $ {Math.ceil(order.totalAmount)}
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                      {order.totalQuantity} Items
                    </td>
                    <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                      {order.paymentMethod}
                    </td>
                    <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                      {order.selectedAddress.phone}
                    </td>
                    <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                      {order.selectedAddress.street}
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                      <span
                        className={` ${chooseColor(
                          order.status
                        )} ml-2 mr-3 whitespace-nowrap rounded-full px-2 py-0.5`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orderlist;
