import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Sidebar from "../features/Product-list/components/Sidebar";
import { Link, useParams } from "react-router-dom";
import {
  editProductAsync,
  fetchProductByIdAsync,
  selectBrands,
  selectCategories,
  selectError,
  selectProduct,
} from "../features/Product-list/productSlice";

export const Editproductpage = () => {
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const brands = useSelector(selectBrands);
  const categories = useSelector(selectCategories);
  const error = useSelector(selectError);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(selectProduct);
  useEffect(() => {
    setValue("title", "");
    setValue("description", "");
    setValue("price", "");
    setValue("stock", "");
    setValue("sku", "");
    setValue("shippingInformation", "");
    setValue("warrantyInformation", "");
    setValue("returnPolicy", "");
    setValue("thumbnail", "");
    dispatch(fetchProductByIdAsync(params.id));
    setValue("title", product.title, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("description", product.description, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("price", product.price, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("stock", product.stock, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("sku", product.sku, { shouldValidate: true, shouldDirty: true });
    setValue("shippingInformation", product.shippingInformation, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("warrantyInformation", product.warrantyInformation, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("returnPolicy", product.returnPolicy, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("thumbnail", product.thumbnail, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [dispatch, product.title, params.id]);
  const handleEditProduct = (data) => {
    dispatch(
      editProductAsync({
        ...product,
        title: data.title,
        description: data.description,
        price: data.price,
        stock: data.stock,
        sku: data.sku,
        shippingInformation: data.shippingInformation,
        warrantyInformation: data.warrantyInformation,
        returnPolicy: data.returnPolicy,
        thumbnail: data.thumbnail,
      })
    );
    setUpdateSuccess(true);
  };
  return (
    <div className=" w-dvw flex h-screen  bg-gray-100">
      {/* sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex  items-center gap-3 px-4 py-2 min-h-16 bg-gray-800">
          <Link to={"/admin/add-product"}>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add New Product
            </button>
          </Link>
        </div>

        {product && (
          <div className="p-5">
            <h1 className="mt-2 text-3xl px-2 pt-4 ml-2  font-bold text-gray-900">
              Product Form
            </h1>
            <form
              noValidate
              method="POST"
              className="m-4 space-y-6 p-4"
              onSubmit={handleSubmit(handleEditProduct)}
            >
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    {...register("title", {
                      required: { value: true, message: "title is required" },
                    })}
                    type="text"
                    defaultValue={product.title}
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-1 text-xs text-red-600">
                  {errors.title?.message}
                </p>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "description is required",
                      },
                    })}
                    type="text"
                    autoComplete="off"
                    defaultValue={product.description}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-1 text-xs text-red-600">
                  {errors.description?.message}
                </p>
              </div>
              <div className="flex flex-row gap-5 w-full justify-center">
                <div className="w-1/3">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      id="price"
                      {...register("price", {
                        valueAsNumber: true,
                        required: { value: true, message: "price is required" },
                        min: { value: 1, message: "price is less than 1" },
                        max: {
                          value: 20000,
                          message: "price is greater than 20000",
                        },
                      })}
                      type="number"
                      defaultValue={product.price}
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.price?.message}
                  </p>
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Stock
                  </label>
                  <div className="mt-2">
                    <input
                      id="stock"
                      {...register("stock", {
                        valueAsNumber: true,
                        required: { value: true, message: "stock is required" },
                        min: { value: 0, message: "stock is less than 0" },
                        max: {
                          value: 1000,
                          message: "stock is greater than 1000",
                        },
                      })}
                      type="number"
                      autoComplete="off"
                      defaultValue={product.stock}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.stock?.message}
                  </p>
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="sku"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    SKU
                  </label>
                  <div className="mt-2">
                    <input
                      id="sku"
                      {...register("sku", {
                        required: { value: true, message: "sku is required" },
                      })}
                      auto
                      type="text"
                      autoComplete="off"
                      defaultValue={product.sku}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.sku?.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-1/3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      {...register("category", {
                        required: {
                          value: true,
                          message: "category is required",
                        },
                      })}
                      value={product.category}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {categories.map((category, index) => (
                        <option key={index}>{category.value}</option>
                      ))}
                    </select>
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.category?.message}
                  </p>
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Brand
                  </label>
                  <div className="mt-2">
                    <select
                      id="brand"
                      {...register("brand", {
                        required: { value: true, message: "brand is required" },
                      })}
                      value={product.brand}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {brands.map((brand, index) => (
                        <option key={index}>{brand.value}</option>
                      ))}
                    </select>
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.brand?.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-row w-full gap-3">
                <div className="w-1/3">
                  <label
                    htmlFor="shippingInformation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Shipping Information{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      id="shippingInformation"
                      {...register("shippingInformation", {
                        required: {
                          value: true,
                          message: "shipping information is required",
                        },
                      })}
                      type="text"
                      defaultValue={product.shippingInformation}
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.shippingInformation?.message}
                  </p>
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="warrantyInformation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Warranty Information{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      id="warrantyInformation"
                      {...register("warrantyInformation", {
                        required: {
                          value: true,
                          message: "warranty information is required",
                        },
                      })}
                      type="text"
                      defaultValue={product.warrantyInformation}
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.warrantyInformation?.message}
                  </p>
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="returnPolicy"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Return Policy{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      id="returnPolicy"
                      {...register("returnPolicy", {
                        required: {
                          value: true,
                          message: "return policy is required",
                        },
                      })}
                      type="text"
                      autoComplete="off"
                      defaultValue={product.returnPolicy}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    {errors.returnPolicy?.message}
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="thumbnail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Thumbnail URL
                </label>
                <div className="mt-2">
                  <input
                    id="thumbnail"
                    {...register("thumbnail", {
                      required: {
                        value: true,
                        message: " thumbnail is required",
                      },
                    })}
                    type="text"
                    autoComplete="off"
                    defaultValue={product.thumbnail}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-1 text-xs text-red-600">
                  {errors.thumbnail?.message}
                </p>
              </div>

              <div className="flex justify-end my-4  gap-3">
                <button
                  type="button"
                  onClick={() => reset()}
                  className="flex  justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="flex w-1/8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </button>
              </div>
              {updateSuccess && (
                <p className="text-green-500 mt-2">
                  User is updated successfully
                </p>
              )}
              {error && <p className="text-xs text-red-600">{error.message}</p>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
