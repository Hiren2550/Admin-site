import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductAsync,
  selectBrands,
  selectCategories,
  selectError,
} from "../productSlice";

const Addproduct = () => {
  const brands = useSelector(selectBrands);
  const categories = useSelector(selectCategories);
  const error = useSelector(selectError);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const handleAddProduct = (data) => {
    const temp = {
      ...data,
      images: [data.thumbnail, data.thumbnail, data.thumbnail, data.thumbnail],
    };
    const mainData = {
      ...temp,
      dimensions: {
        width: 27.15,
        height: 14.43,
        depth: 10.05,
      },
      reviews: [
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.621Z",
          reviewerName: "Olivia Anderson",
          reviewerEmail: "olivia.anderson@x.dummyjson.com",
        },
      ],
    };
    dispatch(addProductAsync(mainData));
    reset();
  };
  return (
    <>
      <h1 className="mt-2 text-3xl px-2 pt-4 ml-2  font-bold text-gray-900">
        Product Form
      </h1>
      <form
        noValidate
        method="POST"
        className="m-4 space-y-6 p-4"
        onSubmit={handleSubmit(handleAddProduct)}
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
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <p className="mt-1 text-xs text-red-600">{errors.title?.message}</p>
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
                required: { value: true, message: "description is required" },
              })}
              type="text"
              autoComplete="off"
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
                    value: 200000,
                    message: "price is greater than 200000",
                  },
                })}
                type="number"
                autoComplete="off"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p className="mt-1 text-xs text-red-600">{errors.price?.message}</p>
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p className="mt-1 text-xs text-red-600">{errors.stock?.message}</p>
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p className="mt-1 text-xs text-red-600">{errors.sku?.message}</p>
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
                  required: { value: true, message: "category is required" },
                })}
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                {brands.map((brand, index) => (
                  <option key={index}>{brand.value}</option>
                ))}
              </select>
            </div>
            <p className="mt-1 text-xs text-red-600">{errors.brand?.message}</p>
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
            Add Product
          </button>
        </div>
        {error && <p className="text-xs text-red-600">{error.message}</p>}
      </form>
    </>
  );
};

export default Addproduct;
