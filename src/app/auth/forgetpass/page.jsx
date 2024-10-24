"use client";

import Image from "next/image";
import Link from "next/link";
import { Form, Field } from "react-final-form";

const Forget = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="grid md:grid-cols-2 gap-5 md:w-[70%] m-auto md:my-20 bg-gradient-to-br from-orange-100 to-orange-00 py-40 px-10 ">
      <div className=" flex justify-center items-center">
        <Image
          src="/forgot.png"
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
              <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>

              <p>
                Enter your details below to request an your capture award
                account password reset.
              </p>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mt-6 text-gray-700 font-bold"
                >
                  Email
                </label>
                <Field
                  name="email"
                  placeholder="Email"
                  component="input"
                  type="email"
                  id="email"
                  className=" bg-white px-2 outline-none border py-2 w-full border-black rounded-md mt-2"
                />
              </div>

             <Link href="/auth/verifyotp"> <button
                type="submit"
                className=" bg-primary text-white   w-full border-black mt-10 py-2"
                disabled={submitting}
              >
                Submit
              </button></Link>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Forget;
