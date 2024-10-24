"use client";

import { newarrivall } from "@/api/newarrival";
import Reelated from "@/app/Components/Related/Reelated";
import Review from "@/app/Components/review/Review";
import SectionTitle from "@/app/Components/shared/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "next/navigation"; // Import useParams from next/navigation

const Page = () => {
  const sizes = ["XS", "M", "L", "XL", "XXL"];
  
  // Use useParams to unwrap params
  const { id } = useParams(); 

  // Initialize state for selected size and quantity
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  // Fetch product details using the product ID
  const productDetails = newarrivall.find((item) => item.id === Number(id));

  // Define handlers for size selection and quantity adjustment
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

  // Display an error message if the product is not found
  if (!productDetails) {
    return <h1 className="text-center text-2xl">Product not found</h1>;
  }

  // Destructure product details
  const {
    title,
    description,
    img,
    price,
    category,
    img_gallery = [],
    product_description,
  } = productDetails;

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 md:p-10 p-5">
        <div className="col-span-2">
          <div className="grid md:grid-cols-2">
            <div className="flex md:flex-col">
              {img_gallery.map((nestedImg, index) => (
                <Image
                  key={index}
                  src={nestedImg}
                  alt={`img-${index}`}
                  width={100}
                  height={100}
                  className="w-24 m-auto border my-2 p-2 bg-gray-300"
                />
              ))}
            </div>
            <div className="flex justify-center items-center bg-gray-300 p-10">
              <Image 
                src={img} 
                alt={title} 
                width={100} 
                height={100} 
                className="md:w-[99%] m-auto" 
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
            <div className="flex justify-start items-center gap-2 md:gap-5 border md:w-[117px] rounded-sm">
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

      <button className="bg-primary text-white px-8 py-1 rounded-md my-5 ml-2 md:ml-2">
        Description
      </button>

      <h1 className="p-2 text-center">
        {product_description || "No description available."}
      </h1>
      <div className="border-b border-primary">
        <button className="bg-primary text-white px-8 py-1 rounded-md my-5">
          Rating & Reviews
        </button>
      </div>

      {/* REVIEW SECTION */}
      <Review />

      {/* Related product section */}
      <SectionTitle subtitle={"Related Item"} />
      <Reelated />
    </div>
  );
};

export default Page;
