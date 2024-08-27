import React from "react";
import profile from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../features/Product-list/components/Sidebar";
import {
  fetchUserInfoAsync,
  selectUserInfo,
  updateUserAsync,
} from "../features/user/userSlice";
import { useParams } from "react-router-dom";

const Adminprofilepage = () => {
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const handleUpdate = (data) => {
    dispatch(updateUserAsync({ ...user, name: data.name, email: data.email }));
    setUpdateSuccess(true);
  };
  const handleRemoveAddress = (e, index) => {
    const newUser = { ...user, addresses: [...user.addresses] };
    newUser.addresses.splice(index, 1);
    dispatch(updateUserAsync(newUser));
  };
  const params = useParams();
  const user = useSelector(selectUserInfo);
  console.log(user);
  useEffect(() => {
    setValue("name", "");
    setValue("email", "");
    dispatch(fetchUserInfoAsync(params.id));
    setValue("name", user.name, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    setValue("email", user.email, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }, [dispatch, user.name, user.email, params.id]);
  return (
    <>
      {user && (
        <div className=" w-dvw flex h-screen  bg-gray-100">
          {/* sidebar */}
          <Sidebar />
          {/* Main content */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex  items-center gap-3 px-4 py-2 min-h-16 bg-gray-800"></div>
            <div className="p-5">
              <div className="p-3 max-w-md mx-auto">
                <h1 className="text-3xl text-center font-semibold my-4">
                  {user.name}
                </h1>

                <form
                  onSubmit={handleSubmit(handleUpdate)}
                  noValidate
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  <img
                    className="rounded-full border-gray-300 h-24 w-24 object-cover cursor-pointer self-center mt-2"
                    src={profile}
                    alt="Profile"
                  />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "name is required",
                          },
                        })}
                        type="text"
                        defaultValue={user.name}
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className="mt-1 text-xs text-red-600">
                      {errors.name?.message}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "email is required",
                          },
                          pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "invalid email",
                          },
                        })}
                        type="email"
                        defaultValue={user.email}
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Update
                    </button>
                  </div>
                </form>

                {updateSuccess && (
                  <p className="text-green-500 mt-2">
                    User is updated successfully
                  </p>
                )}
                <div className="my-2 ">
                  <h1 className="text-center mt-1 text-xl font-semibold">
                    Addresses
                  </h1>
                  {user.addresses.map((address, index) => (
                    <div
                      key={address.phone}
                      className="border border-gray-300 rounded-lg p-3 my-2"
                    >
                      <li className="flex justify-between gap-x-4  ">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {address.firstname}
                            </p>
                            <p className="text-sm  leading-6 text-gray-500">
                              {address.street}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              <span>Phone : </span>
                              {address.phone}
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">
                            {address.city}
                          </p>
                          <p className="text-sm leading-6 text-gray-500">
                            <span>Pincode : </span>
                            {address.pincode}
                          </p>
                        </div>
                      </li>
                      <div className="flex justify-end gap-4">
                        <span
                          className="text-red-700 cursor-pointer"
                          onClick={(e) => handleRemoveAddress(e, index)}
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Adminprofilepage;
