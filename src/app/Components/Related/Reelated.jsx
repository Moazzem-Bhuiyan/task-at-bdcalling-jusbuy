"use client";

import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import WishButton from "../shared/WishButton";
import AddCart from "../shared/AddCart";
import UseNewArrival from "../Hooks/UseNewArrival";
import Link from "next/link";

const Reelated = () => {
    const [newarrival]=UseNewArrival();
    return (
        <div>
             <div className="pb-20">
     

      <div className="grid grid-cols-4 gap-10">
        {newarrival.slice(0, 4).map((item, index) => (
          <div key={index}>
            <div className="bg-[#DFE1E3] relative rounded-sm flex items-center justify-center w-full h-[250px] image-container">
              <Image
                className="w-[150px]"
                height={120}
                width={200}
                src={item.img}
                alt="new arrival"
              />
              <div className="absolute top-3 right-3">
                <WishButton></WishButton>
              </div>

             
              <div className="cart-button absolute bottom-0  transform ">
                <AddCart />
              </div>
            </div>

            <h1 className="pt-2">{item.title}</h1>
            <h1 className="text-lg text-[#fe6201] py-1">${item.price}</h1>

            <div className="mt-">
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
        ))}
      </div>
      
    </div>
            
        </div>
    );
};

export default Reelated;