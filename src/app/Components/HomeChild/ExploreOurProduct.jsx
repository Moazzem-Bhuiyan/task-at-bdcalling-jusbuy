"use client";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import WishButton from "../shared/WishButton";
import StarRatings from "react-star-ratings";
import UseProducts from "../Hooks/UseProducts";
import Link from "next/link";
import { useState, useEffect } from "react"; 

const ExploreOurProduct = () => {
  const [products] = UseProducts();  
  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
     {
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
    }
  };

  return (
    <div>
      <section>
        <SectionTitle subtitle={"Our Products"} title={"Explore Our Products"} />
      </section>

      <div className="grid md:grid-cols-4 p-5 gap-10">
        {products.slice(0, 8).map((item, index) => (
          <div key={index}>
            <Link href=''>
              <div className="bg-[#DFE1E3] relative rounded-sm flex items-center justify-center w-full h-[250px] image-container">
                <Image className="w-[150px]" height={120} width={200} src={item.img} alt="new arrival" />
                <div className="absolute top-3 right-3">
                  <WishButton />
                </div>
                <div className="cart-button absolute bottom-0 transform w-full">
                
                  <button 
                    onClick={() => addToCart(item)}  
                    className=' w-full bg-primary text-white  py-2'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>

            <Link href={`/productdetails/${item.id}`}>
              <h1 className="pt-2">{item.title}</h1>
              <h1 className="text-lg text-[#fe6201] py-1">${item.price}</h1>
              <div className="mt-">
                <StarRatings rating={item.rating} starRatedColor="orange" numberOfStars={5} name="rating" starDimension="20px" starSpacing="3px" isSelectable={false} />
                <span className="-mt-1 ml-2 text-neutral-500">(55)</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-20">
        <Link href={"/viewallproduct"}>
          <button className="bg-primary text-white px-5 py-2">View All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreOurProduct;
