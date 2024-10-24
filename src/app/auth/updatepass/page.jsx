"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Field, Form } from 'react-final-form';

const Page = () => {
    
    const onSubmit = (values) => {
        console.log(values);
      };


    return (
        <div className="grid md:grid-cols-2 gap-5 md:w-[70%] m-auto md:my-20 bg-gradient-to-br from-orange-100 to-orange-00 py-40 px-10 ">
        <div className=" flex justify-center items-center">
          <Image
            src="/update.png"
            height={200}
            width={200}
            alt="Login"
            className="w-[350px]"
          />
        </div>
  
        <div>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className="">
                

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mt-6 text-gray-700 font-bold"
                  >
                    Enter NewPassword
                  </label>
                  <Field
                    name="email"
                    placeholder=" Enter NewPassword"
                    component="input"
                    type="password"
                    id="password"
                    className=" bg-white px-2 outline-none border py-2 w-full border-black rounded-md mt-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mt-6 text-gray-700 font-bold"
                  >
                    Confirm Password
                  </label>
                  <Field
                    name="Confirm Password"
                    placeholder="Confirm Password"
                    component="input"
                    type="Confirm Password"
                    id="Confirm Password"
                    className=" bg-white px-2 outline-none border py-2 w-full border-black rounded-md mt-2"
                  />
                </div>
  

               <Link href="/">
               <button
                  type="submit"
                  className=" bg-primary text-white   w-full border-black mt-10 py-2"
                  disabled={submitting}
                >
                  Submit
                </button>
               </Link>
              </form>
            )}
          />
        </div>
      </div>
    );
};

export default Page;