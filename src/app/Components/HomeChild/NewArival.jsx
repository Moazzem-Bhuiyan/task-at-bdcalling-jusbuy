"use client";

import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import WishButton from "../shared/WishButton";
import AddCart from "../shared/AddCart";
import UseNewArrival from "../Hooks/UseNewArrival";
import Link from "next/link";
import { useState } from "react";

const NewArival = () => {
    const [newarrival]=UseNewArrival();

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
      
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
      
      const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        
        cartItems[existingItemIndex].quantity += 1;
      } else {
       
        cartItems.push({ ...item, quantity: 1 });
      }
  
  
      localStorage.setItem('cart', JSON.stringify(cartItems));
  
      
      setCart(cartItems);
  
      alert("Item added to cart!");
    };


  return (
    <div className="md:pb-20">
      <section className=" flex justify-between ">
        <SectionTitle
          subtitle={"This Month"}
          title={"New Arrival"}
        ></SectionTitle>

       <div className="mr-2 md:mr-0"><Link href="/newarrival"> <button className=" bg-primary text-white px-5 py-2 mt-36">View All </button></Link></div>

      </section>

      <div className="grid md:grid-cols-4 gap-10 p-5 ">
        {newarrival.slice(0, 4).map((item, index) => (
          <div key={index}>
           <>
           
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

             
              <div className="cart-button absolute bottom-0  transform w-full ">
              <button 
                    onClick={() => addToCart(item)}  
                    className=' w-full bg-primary text-white  py-2'>
                    Add to Cart
                  </button>
              </div>
            </div>
           
           </>


           <Link  href={`/newArribaldetails/${item.id}`} >

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
           
           </Link>

           
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default NewArival;
