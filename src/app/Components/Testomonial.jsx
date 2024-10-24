"use client"
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./shared/SectionTitle";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Splide, SplideSlide } from "@splidejs/react-splide";



const Testomonial = () => {

   

    const [categories, setCategories] = useState([]);

  const splideRef = useRef();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/review.json");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);


    return (
        <div>

<div className=" flex justify-between py-10">
       
       <h1 className=" text-2xl font-semibold">Happy Customers Says</h1>

        <div className="">
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
            perPage: 2,
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
              <div className="category-item mx-2 bg-white border rounded-lg p-10 space-y-2">
                {" "}
                <div className="  flex justify-center  rounded-md">
                  <img className=" w-16 rounded-full" src={category.img} alt="" />


                </div>
                <h1 className=" text-center font-bold">{category.name}</h1>
                <h2 className="text-center text-sm mt-2">
                  {category.description}
                </h2>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
            
        </div>
    );
};

export default Testomonial;