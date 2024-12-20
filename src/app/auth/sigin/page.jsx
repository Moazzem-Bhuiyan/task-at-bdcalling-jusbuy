"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Form, Field } from "react-final-form";

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="grid md:grid-cols-2 gap-5 md:w-[70%] m-auto md:my-20 bg-gradient-to-br from-orange-100 to-orange-00 p-10">
      <div className="  flex justify-center items-center">
        <Image
          src="/login.png"
          height={700}
          width={800}
          alt="Login"
          className="w-[350px]"
        />
      </div>
      <div className=" space-y-10">
        <div className="flex justify-center">
          {" "}
          <Image alt="logo" src="/logo.png" height={400} width={200} />
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className=" space-y-8">
              <h2 className="text-center text-xl mb-5 font-bold ">
                Great to have you back !
              </h2>

            
              <div>
                <label>User Name or Email</label> <br />
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
                  className=" bg-white outline-none px-2 border w-full mt-2  py-2 border-black rounded-md"
                />
              </div>

              
              <div className="">
                <div className="flex justify-between">
                  <label>Password</label>{" "}
                  <Link href='/auth/forgetpass'><span className="text-primary border-b border-primary cursor-pointer">
                    Forgot
                  </span></Link>
                </div>
                <Field
                  name="password"
                  component="input"
                  placeholder="Password"
                  type="password"
                  className=" bg-white px-2 outline-none border py-2 w-full border-black rounded-md mt-2"
                />
              </div>

              <h1 className="text-center text-sm font-semibold ">
                Don &apos t Have An Account ?{" "}
               <Link href='/auth/signup'> <span className="text-primary cursor-pointer ">Register</span></Link>
              </h1>

             <Link href="/">
             <button
                type="submit"
                className=" bg-primary text-white   w-full border-black mt-10 py-2"
                disabled={submitting}
              >
                Sign In
              </button>
             </Link>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default SignIn;
