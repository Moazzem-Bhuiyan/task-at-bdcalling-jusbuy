"use client";
import Image from "next/image";
import WishButton from "../Components/shared/WishButton";
import AddCart from "../Components/shared/AddCart";
import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../Components/shared/SectionTitle";
import StarRatings from "react-star-ratings";

const Page = () => {
  const wishlist = [
    {
      img: "https://i.ibb.co/KFYWDgW/Frame-604-3.png",
      title: "Laptop",
      price: 800,
      rating: 2,
    },
    {
      img: "https://i.ibb.co/t3JxW7C/Frame-610.png",
      title: "Speker",
      price: 800,
      rating: 2,
    },
    {
      img: "https://i.ibb.co/KFYWDgW/Frame-604-3.png",
      title: "Laptop",
      price: 800,
      rating: 4,
    },
    {
      img: "https://i.ibb.co/LZ8rtSQ/Frame-606.png",
      title: "Laptop",
      price: 800,
      rating: 4,
    },
  ];

  return (
    <div className=" md:my-20">
      <div className="flex justify-between my-5">
        <h1>Wishlist ({wishlist.length})</h1>
        <button className="text-primary border border-primary rounded-md p-2">
          Move All To Bag
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-5 p-5 md:p-0">
        {wishlist.map((item, index) => (
          <div key={index}>
            <div className="bg-[#DFE1E3] relative rounded-sm flex items-center justify-center w-full h-[250px]">
              <Image
                src={item.img}
                height={120}
                width={200}
                alt={item.title}
                className="object-contain"
              />
              <div className="absolute top-3 right-3">
                <FaTrash />
              </div>
              <div className="absolute bottom-0 w-full">
                <AddCart />
              </div>
            </div>

            <h1 className="pt-2">{item.title}</h1>
            <h1 className="text-lg text-[#fe6201] py-1">${item.price}</h1>
          </div>
        ))}
      </div>

      <div className="flex justify-between my-5">
        <section>
          <SectionTitle subtitle={"Just For You"} />
        </section>
        <div className="md:mt-28 mt-5 mr-5 md:mr-0">
          <button className="text-primary border border-primary rounded-md p-2">
            See All
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 p-5 gap-5">
        {wishlist.map((item, index) => (
          <div key={index}>
            <div className="bg-[#DFE1E3] relative rounded-sm flex items-center justify-center w-full h-[250px]">
              <Image
                src={item.img}
                height={120}
                width={200}
                alt={item.title}
                className="object-contain"
              />
              <div className="absolute top-3 right-3">
                <WishButton />
              </div>
              {/* <div className="absolute bottom-0 w-full">
                <AddCart />
              </div> */}
            </div>

            <h1 className="pt-2">{item.title}</h1>
            <h1 className="text-lg text-[#fe6201] py-1">${item.price}</h1>

            <div>
              <StarRatings
                rating={item.rating || 0}
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
  );
};

export default Page;
