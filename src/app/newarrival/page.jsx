"use client";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import UseNewArrival from "../Components/Hooks/UseNewArrival";
import SectionTitle from "../Components/shared/SectionTitle";
import WishButton from "../Components/shared/WishButton";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Page = () => {
  const [newarrival] = UseNewArrival();
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const itemsPerPage = 4;
  
  // Add item to cart
  const addToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCart(cartItems);
    alert("Item added to cart!");
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

//  filter section er code 
  const filteredItems = newarrival.filter((item) => {
    const categoryMatch = selectedCategories.length
      ? selectedCategories.includes(item.category)
      : true;

    const priceMatch =
      selectedPriceRange === "under20"
        ? item.price < 20
        : selectedPriceRange === "midrange"
        ? item.price >= 20 && item.price <= 60
        : selectedPriceRange === "highend"
        ? item.price > 60
        : true;

    return categoryMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
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
      <section className="flex justify-between">
        <SectionTitle subtitle={"This Month"} title={"NewArrival"} />
        <div>
          <div className="hidden md:block mt-40">
            <label className="input input-bordered bg-neutral-200 border-none rounded-sm flex items-center gap-2 h-9">
              <input
                type="text"
                className="grow text-sm"
                placeholder="What are you looking for?"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </section>

      <div className="md:grid md:grid-cols-6 gap-10 p-5">
        {/* Sidebar */}
        <div className="col-span-2">
          <div className="my-4">
            <h1 className="bg-[#fe6201] text-white p-2 text-2xl rounded-md">
              Filters
            </h1>

            <div className="flex justify-between py-5">
              <h3 className="text-[#fe6201] font-semibold">Category</h3>
              <IoIosArrowDown />
            </div>
            {[
              "Woman’s Fashion",
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((category) => (
              <div key={category} className="flex gap-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox rounded-md border border-black"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <span className="label-text pl-3">{category}</span>
                  </label>
                </div>
              </div>
            ))}

            <div className="flex justify-between py-6">
              <h3 className="text-[#fe6201] font-semibold">Price</h3>
              <IoIosArrowDown />
            </div>
            {[
              { label: "Under $20", value: "under20" },
              { label: "$20-$60", value: "midrange" },
              { label: "$60 & Above", value: "highend" },
            ].map((range) => (
              <div key={range.value} className="flex gap-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox rounded-md border border-black"
                      checked={selectedPriceRange === range.value}
                      onChange={() => handlePriceRangeChange(range.value)}
                    />
                    <span className="label-text pl-3">{range.label}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Items Display */}
        <div className="col-span-4">
          <div className="grid md:grid-cols-2 gap-10">
            {currentItems.map((item) => (
              <div key={item.id}>
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
                      className="w-full bg-primary text-white py-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                <Link href={`/newArribaldetails/${item.id}`}>
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

          {/* Pagination */}
          <div className="flex my-5 space-x-2">
            <button
              className={`px-4 py-2 bg-gray-300 ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              }`}
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
              className={`px-4 py-2 bg-gray-300 ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              }`}
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

export default Page;
