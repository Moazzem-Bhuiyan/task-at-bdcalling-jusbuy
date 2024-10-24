"use client";
import React from "react";
import { Form, Field } from "react-final-form";

const Page = () => {
  const onSubmit = (formData) => {
    console.log("Form Data:", formData);
  };
  return (
    <div className="p-10">
      <h1 className=" text-2xl font-semibold text-primary">
        Personal Information
      </h1>

      {/*  */}

      <div className="max-w-full  md:p-4   ">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="md:flex gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <Field name="name">
                    {({ input }) => (
                      <input
                        {...input}
                        type="text"
                        id="name"
                        className="border px-2 py-2 w-full bg-white rounded-md"
                        required
                      />
                    )}
                  </Field>
                </div>
                <div className="flex-1">
                  <label htmlFor="phoneNumber" className="block mb-1">
                    Phone Number
                  </label>
                  <Field name="phoneNumber">
                    {({ input }) => (
                      <input
                        {...input}
                        type="tel"
                        id="phoneNumber"
                        className="border px-2 py-2 w-full bg-white rounded-md"
                        required
                      />
                    )}
                  </Field>
                </div>
              </div>

              <div className="md:flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <Field name="email">
                    {({ input }) => (
                      <input
                        {...input}
                        type="email"
                        id="email"
                        className="border px-2 py-2 w-full bg-white rounded-md "
                        required
                      />
                    )}
                  </Field>
                </div>
                <div className="flex-1">
                  <label htmlFor="gender" className="block mb-1">
                    Gender
                  </label>
                  <Field name="gender">
                    {({ input }) => (
                      <select
                        {...input}
                        id="gender"
                        className="border px-2 py-2 w-full bg-white rounded-md"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    )}
                  </Field>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block mb-1">
                  Address
                </label>
                <Field name="address">
                  {({ input }) => (
                    <textarea
                      {...input}
                      id="address"
                      className="border px-2 py-2 w-full bg-white rounded-md"
                      required
                    ></textarea>
                  )}
                </Field>
              </div>

              <div className=" flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded w-28 "
                >
                  Edit
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Page;
