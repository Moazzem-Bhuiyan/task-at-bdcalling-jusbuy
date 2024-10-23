"use client";
import React, { useEffect, useState, useRef } from "react";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Categoryes = () => {
  const [categories, setCategories] = useState([]);

  const splideRef = useRef();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/categories.json");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className=" pb-20">
      <div className=" flex justify-between">
        <SectionTitle title={"Browse By Category"} subtitle={"Categories"} />

        <div className="mt-32 p-5">
          <button
            className="  rounded-full hover:bg-primary p-2 hover:text-white text-2xl "
            onClick={() => splideRef.current?.go("-1")}
          >
            <FaArrowLeftLong />
          </button>
          <button
            className="  rounded-full hover:bg-primary p-2 hover:text-white text-2xl "
            onClick={() => splideRef.current?.go("+1")}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="relative">
        <Splide
          ref={splideRef}
          options={{
            type: "slide",
            perPage: 5,
            focus: "center",
            pagination: false,
            arrows: false,
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
              1280: {
                perPage: 4,
              },
            },
          }}
        >
          {categories.map((category, index) => (
            <SplideSlide key={index}>
              <div className="category-item mx-2">
                {" "}
                <div className="bg-gray-200 h-[240px] flex justify-center items-center rounded-md">
                  <Image
                    src={category.img}
                    alt={category.category}
                    width={150}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-center text-primary text-lg mt-2">
                  {category.category}
                </h2>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Categoryes;
