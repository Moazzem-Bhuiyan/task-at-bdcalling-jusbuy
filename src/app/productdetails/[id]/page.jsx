"use client";

import { product } from "@/api/products";
import Reelated from "@/app/Components/Related/Reelated";
import Review from "@/app/Components/review/Review";
import SectionTitle from "@/app/Components/shared/SectionTitle";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Page = ({ params }) => {
  const sizes = ["XS", "M", "L", "XL", "XXL"];

  const id = React.use(params).id;

  const productDetails = product.find((item) => item.id === Number(id));

  if (!productDetails) {
    return <h1 className="text-center text-2xl">Product not found</h1>;
  }

  const {
    title,
    description,
    img,
    price,
    category,
    img_gallery = [],
    product_description,
  } = productDetails;

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

  return (
    <div>
      <div className="grid grid-cols-3 gap-10 p-10">
        <div className="col-span-2">
          <div className="grid grid-cols-2">
            <div>
              {img_gallery.map((nestedImg, index) => (
                <img
                  key={index}
                  src={nestedImg}
                  alt={`img-${index}`}
                  className="w-24 m-auto border my-2 p-2 bg-gray-300"
                />
              ))}
            </div>
            <div className="flex justify-center items-center bg-gray-300 p-10">
              <img className="w-[99%] m-auto" src={img} alt={title} />
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

      {/* details end */}

      <button className="bg-primary text-white px-8 py-1 rounded-md my-5 ">
        Description
      </button>

      <h1>
        {product_description} Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Aperiam fugiat sint nesciunt unde mollitia, facilis
        quae! Totam ex nobis ipsum, ad dolorem obcaecati, nemo assumenda
        deleniti accusamus sapiente quod ducimus molestias exercitationem
        tempora voluptas ea tempore ipsa, laboriosam modi debitis alias culpa?
        Eaque aspernatur rerum ab, reiciendis ullam, perspiciatis distinctio
        dolor quas expedita exercitationem natus tempore, nam suscipit eveniet
        voluptates cum rem. Repudiandae, earum aliquam dolores quia doloribus
        maxime esse accusamus nesciunt quidem modi eos numquam fugiat illo
        eveniet at nemo dolorem tempora. Repellat laborum sequi alias, odio
        neque ullam enim est. Vel exercitationem impedit ut veritatis doloribus
        odit dolorem.
      </h1>
      <div className="border-b border-primary">
        {" "}
        <button className="bg-primary text-white px-8 py-1 rounded-md my-5 ">
          Rating & Reviews
        </button>
      </div>

      {/* REVIEW SECTION */}

      <Review></Review>

      {/* related product */}

      <SectionTitle subtitle={"Related Item"}></SectionTitle>

      <Reelated></Reelated>
    </div>
  );
};

export default Page;
