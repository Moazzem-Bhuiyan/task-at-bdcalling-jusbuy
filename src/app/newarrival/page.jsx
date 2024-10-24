"use client"
import { useState } from "react";
import StarRatings from "react-star-ratings";
import UseNewArrival from "../Components/Hooks/UseNewArrival";
import SectionTitle from "../Components/shared/SectionTitle";
import WishButton from "../Components/shared/WishButton";
import Image from "next/image";
import Link from "next/link";

const page = () => {

  const [newarrival] = UseNewArrival();

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

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(newarrival.length / itemsPerPage);

  
  const currentItems = newarrival.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <section className="flex justify-between  ">
        <SectionTitle subtitle={"This Month"} title={"NewArrival"} />
        <div className="mt-40 hidden md:block">
          <input
            type="search"
            placeholder="What Are You Looking for? "
            className="bg-white p-2 border outline-none"
          />
        </div>
      </section>

      <div className="md:grid md:grid-cols-6 gap-10 p-5">


        {/* sidebar */}
        <div className="col-span-2 ">

        <div className=" my-4">
          <h1 className="bg-[#fe6201] text-white p-2 text-2xl rounded-md">
            Filters
          </h1>
          <div className="flex justify-between py-5">
            <h3 className="text-[#fe6201]  font-semibold">Category</h3>
            <h1>⬇️</h1>
          </div>
          <div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Woman’s Fashion</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Men’s Fashion</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Electronics</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Home & Lifestyle</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Medicine</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Sports & Outdoor</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Baby’s & Toys</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Groceries & Pets</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Health & Beauty</span>
                  </label>
                </div>
            </div>
            <div>
              <div className="flex justify-between py-6">
                <h3 className="text-[#fe6201]  font-semibold">Price</h3>
                <h1>⬇️</h1>
              </div>
              <div className="flex ">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                     
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Value Under $20</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4 ">
              <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                     
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Mid-range $20-$60</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4 ">
              <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                     
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">High-end $60 & Above</span>
                  </label>
                </div>
              </div>
              <label className="input mt-6 input-bordered border-black rounded-md flex items-center gap-2">
                <input type="text" className="grow outline-none" placeholder="Enter budget"  />
                <h1>$</h1>
              </label>
            </div>
          </div>
        </div>





        </div>

        {/* data fetch */}
        <div className="col-span-4">
          <div className="grid md:grid-cols-2 gap-10">
            {currentItems.map((item, index) => (
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
                    <WishButton />
                  </div>
                  <div className="cart-button absolute bottom-0 transform py-0 w-full">
                  <button 
                    onClick={() => addToCart(item)}  
                    className=' w-full bg-primary text-white  py-2'>
                    Add to Cart
                  </button>
                  </div>
                </div>
               
               </>

               <Link  href={`/newArribaldetails/${item.id}`}>

               <h1 className="pt-2">{item.title}</h1>
                <h1 className="text-lg text-[#fe6201] py-1">${item.price}</h1>
                <div>
                  <StarRatings
                    rating={item.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
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

          {/* Paginationn korsi  */}
          <div className="flex  my-5 space-x-2">
            <button
              className={`px-4 py-2 bg-gray-300 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-black"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-4 py-2 bg-gray-300 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
