"use client";
import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { FaRegEyeSlash } from "react-icons/fa6";
import { TiEyeOutline } from "react-icons/ti";

const Page = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (formData) => {
    console.log("Current Password:", formData.currentPassword);
    console.log("New Password:", formData.newPassword);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4 text-primary">Change Password</h1>

      <div className="max-w-full md:p-4">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block mb-1">
                  Current Password
                </label>
                <Field
                  name="currentPassword"
                  validate={(value) => (value ? undefined : "Required")}
                >
                  {({ input, meta }) => (
                    <div className="relative md:w-1/2">
                      <input
                        {...input}
                        type={showCurrentPassword ? "text" : "password"}
                        id="currentPassword"
                        className={`border px-2 py-2 w-full bg-white rounded-md ${
                          meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                        placeholder="Enter current password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showCurrentPassword ? (
                          <FaRegEyeSlash />
                        ) : (
                          <TiEyeOutline />
                        )}
                      </button>
                      {meta.error && meta.touched && (
                        <span className="text-red-500">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div>
                <label htmlFor="newPassword" className="block mb-1">
                  New Password
                </label>
                <Field
                  name="newPassword"
                  validate={(value) => (value ? undefined : "Required")}
                >
                  {({ input, meta }) => (
                    <div className="relative md:w-1/2">
                      <input
                        {...input}
                        type={showNewPassword ? "text" : "password"}
                        id="newPassword"
                        className={`border px-2 py-2 w-full bg-white rounded-md ${
                          meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                        placeholder="Enter new password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showNewPassword ? <FaRegEyeSlash /> : <TiEyeOutline />}
                      </button>
                      {meta.error && meta.touched && (
                        <span className="text-red-500">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  validate={(value) => (value ? undefined : "Required")}
                >
                  {({ input, meta }) => (
                    <div className="relative md:w-1/2">
                      <input
                        {...input}
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        className={`border px-2 py-2 w-full bg-white rounded-md ${
                          meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
                          <FaRegEyeSlash />
                        ) : (
                          <TiEyeOutline />
                        )}
                      </button>
                      {meta.error && meta.touched && (
                        <span className="text-red-500">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div className="flex justify-center md:w-1/2">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Save Change
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
