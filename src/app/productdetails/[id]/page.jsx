"use client";

import { use, useState } from "react";
import { product } from "@/api/products";
import Reelated from "@/app/Components/Related/Reelated";
import Review from "@/app/Components/review/Review";
import SectionTitle from "@/app/Components/shared/SectionTitle";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Page = ({ params }) => {
  const sizes = ["XS", "M", "L", "XL", "XXL"];

  // Correctly unwrap the `params` as it's now a Promise
  const { id } = use(params);  // Make sure to unwrap the promise using `use()`

  // Find the product details using the `id`
  const productDetails = product.find((item) => item.id === Number(id));

  // Destructure the product details safely
  const {
    title,
    description,
    img,
    price,
    category,
    img_gallery = [],
    product_description,
  } = productDetails || {};

  // State hooks declared here
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Render message if product is not found
  if (!productDetails) {
    return <h1 className="text-center text-2xl">Product not found</h1>;
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 md:p-10 p-2">
        <div className="col-span-2">
          <div className="grid md:grid-cols-2">
            <div className="flex md:flex-col">
              {img_gallery.map((nestedImg, index) => (
                <Image
                  width={100}
                  height={100}
                  key={index}
                  src={nestedImg}
                  alt={`img-${index}`}
                  className="w-24 m-auto border my-2 p-2 bg-gray-300"
                />
              ))}
            </div>
            <div className="flex justify-center items-center bg-gray-300 p-10">
              <Image
                width={100}
                height={100}
                className="md:w-[99%] m-auto"
                src={img}
                alt={title}
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 col-span-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h1 className="text-2xl">${price}</h1>
          <p>{description}</p>
          <p>Brand: {category}</p>
          <hr className="border" />

          <h1 className="flex text-xl">
            Size:{" "}
            <div className="size-buttons ml-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`ml-3 border px-3 py-1 rounded-md text-sm ${
                    selectedSize === size
                      ? "bg-orange-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </h1>

          <div className="flex justify-around">
            <div className="flex justify-start items-center gap-5 border w-[117px] rounded-sm">
              <button
                className="border px-3 py-1 rounded-sm hover:bg-primary hover:text-white"
                onClick={decrementQuantity}
                disabled={quantity === 0}
              >
                -
              </button>
              <h1>{quantity}</h1>
              <button
                className="border px-3 py-1 rounded-sm hover:bg-primary hover:text-white"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-primary text-white px-8 rounded-md">
              Buy Now
            </button>
            <button className="border rounded-md px-2 text-2xl">
              <IoCartOutline />
            </button>
            <button className="border rounded-md px-2 text-2xl">
              <CiHeart />
            </button>
          </div>
        </div>
      </div>

      {/* Details end */}
      <button className="bg-primary text-white px-8 py-1 rounded-md my-5 ml-5 md:ml-0 ">
        Description
      </button>

      <h1 className="md:p-0 p-5 text-center">
        {product_description || "No description available."}
      </h1>
      <div className="border-b border-primary">
        <button className="bg-primary text-white px-8 py-1 rounded-md my-5 ml-5 md:ml-0">
          Rating & Reviews
        </button>
      </div>

      {/* REVIEW SECTION */}
      <Review />

      {/* Related product */}
      <SectionTitle subtitle={"Related Item"} />
      <Reelated />
    </div>
  );
};

export default Page;
