
 "use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Form, Field } from 'react-final-form';

const SignupForm = () => {
  const onSubmit = (values) => {
    console.log('Form Values:', values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.number) {
      errors.number = 'Number is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }
    if (!values.address) {
      errors.address = 'Address is required';
    }
    if (!values.role) {
      errors.role = 'Role is required';
    }
    return errors;
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 md:p-0 bg-gradient-to-br from-orange-100 to-orange-00">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">

      <div className=' flex justify-center my-3'>
      <Image src="/logo.png" width={200} height={200} alt='logo'></Image>
      </div>


        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
             
              <div className="flex justify-center gap-10">
                <label className="flex items-center space-x-2">
                  <Field name="role" component="input" type="radio" value="buyer" />
                  <span>As a Buyer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Field name="role" component="input" type="radio" value="seller" />
                  <span>Seller</span>
                </label>
              </div>

            
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white sm:text-sm"
                />
              </div>

           
              <div>
                <label className="block text-sm font-medium text-gray-700">Number</label>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  placeholder="Number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white sm:text-sm"
                />
              </div>

              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white sm:text-sm"
                />
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white sm:text-sm"
                />
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  component="input"
                  type="password"
                  placeholder="Confirm Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white sm:text-sm"
                />
              </div>

            
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <Field
                  name="address"
                  component="input"
                  type="text"
                  placeholder="Address"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white sm:text-sm"
                />
              </div>

            
              <div>
<Link href="/auth/congrass">



<button
                  type="submit"
                  // disabled={submitting || pristine}
                  className="w-full bg-primary text-white py-2 px-4  shadow-sm "
                >
                  Sign Up
                </button>





</Link>


              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default SignupForm;
