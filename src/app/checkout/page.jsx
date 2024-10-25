"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    location: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" min-h-screen">
      <main className="container mx-auto my-10 px-4">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">
          Billing Details
        </h1>

        {/* Product Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-t">
                <td className="py-4 px-4 flex items-center space-x-4 border-r border-primary">
                  <Image
                  width={100}
                  height={100}
                    src="https://i.ibb.co/KFYWDgW/Frame-604-3.png"
                    alt="LCD Monitor"
                    className="w-16 h-16"
                  />
                  <span className="text-gray-700">LCD Monitor</span>
                </td>
                <td className="py-4 px-4 border-r border-primary">02</td>
                <td className="py-4 px-4  ">$650</td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-4 flex items-center space-x-4 border-r border-primary ">
                  <Image
                  width={100}
                  height={100}
                    src="https://i.ibb.co/KFYWDgW/Frame-604-3.png"
                    alt="LCD Monitor"
                    className="w-16 h-16"
                  />
                  <span className="text-gray-700">LCD Monitor</span>
                </td>
                <td className="py-4 px-4 border-r border-primary">02</td>
                <td className="py-4 px-4">$650</td>
              </tr>
            </tbody>
          </table>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
   
          <div className="lg:col-span-2 bg-white p-6 shadow-sm rounded-md">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700"> Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2   bg-gray-100"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2   bg-gray-100"
                  placeholder="Location"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2   bg-gray-100"
                  placeholder="Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2   bg-gray-100"
                  placeholder="Email"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 shadow-sm rounded-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Order Summary
            </h2>{" "}
            <hr className="border-primary mb-2" />
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>
                  {" "}
                  <Image
                  width={100}
                  height={100}
                    src="https://i.ibb.co/KFYWDgW/Frame-604-3.png"
                    alt="LCD Monitor"
                    className="w-16 h-16"
                  />
                </span>
                <span>$650</span>
              </li>{" "}
              <hr />
              <li className="flex justify-between">
                <span>
                  {" "}
                  <Image
                  width={100}
                  height={100}
                    src="https://i.ibb.co/KFYWDgW/Frame-604-3.png"
                    alt="LCD Monitor"
                    className="w-16 h-16"
                  />
                </span>
                <span>$100</span>
              </li>{" "}
              <hr />
              <li className="flex justify-between">
                <span>Subtotal</span>
                <span>$1700</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </li>{" "}
              <hr />
              <li className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$1700</span>
              </li>
            </ul>
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <div className="flex items-center space-x-2">
                <input type="radio" id="bank" name="payment" className="mr-2" />
                <label htmlFor="bank">Bank</label>
                <input
                  type="radio"
                  id="visa"
                  name="payment"
                  className="ml-4 mr-2"
                />
                <label htmlFor="visa">Visa</label>
              </div>
             <Link href="/oerdersummary">

             <button className="w-full bg-orange-600 text-white py-2 mt-4 rounded-md">
                Place Order
              </button>
             </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
