"use client";
import React, { useState } from "react";
import UseProducts from "../Components/Hooks/UseProducts";
import WishButton from "../Components/shared/WishButton";
import Image from "next/image";
import AddCart from "../Components/shared/AddCart";
import StarRatings from "react-star-ratings";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const Page = () => {
  const [products] = UseProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="my-10">
        <Image
          src="/view.png"
          height={300}
          width={1000}
          alt="view hero"
          className="w-full"
        />
      </div>

      <div className="flex gap-3 justify-center">
        <div className="flex justify-center items-center">
          <Image src="/preview.png" height={20} width={50} alt="preview" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary">Game Haven</h1>
          <p className="flex text-[#FFAD33]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="-mt-1 ml-2 text-neutral-500">(125)</span>
          </p>
          <h1>80% positive seller rating</h1>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-4">View All Product</h1>

      <div className="grid grid-cols-4 gap-10 mb-20">
        {currentItems.map((item, index) => (
          <div key={index}>
            <Link href={`/productdetails/${item.id}`}>
              <div className="bg-[#DFE1E3] relative rounded-sm flex items-center justify-center w-full h-[250px] image-container">
                <Image
                  className="w-[150px]"
                  height={120}
                  width={200}
                  src={item.img}
                  alt="new arrival"
                />
                <div className="absolute top-3 right-3">
                  <WishButton />
                </div>
                <div className="cart-button absolute bottom-0 transform">
                  <AddCart />
                </div>
              </div>
            </Link>

            <h1 className="pt-2">{item.title}</h1>

            <div className="flex gap-5">
              <h1 className="text-lg text-[#fe6201] py-1">${item.price}</h1>
              <div className="mt-1">
                <StarRatings
                  rating={item.rating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="3px"
                  isSelectable={false}
                />
                <span className="-mt-1 ml-2 text-neutral-500">(55)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex  my-4 space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-primary text-white font-bold"
                : "bg-gray-300 text-black cursor-pointer"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
