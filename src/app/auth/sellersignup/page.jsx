"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Form, Field } from 'react-final-form';

const SignUpForm = () => {
  const onSubmit = (values) => {
 
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center p-5 md:p-0 items-center h-screen bg-gradient-to-br from-orange-100 to-orange-00">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
 <div className="flex justify-center">
          {" "}
          <Image alt="logo" src="/logo.png" height={70} width={240} />
        </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name</label>
              <Field name="shopName" component="input" placeholder="Enter your shop name">
                {({ input }) => (
                  <input {...input} type="text" placeholder='Enter Your Shop Name ' className="w-full p-3 border border-gray-300 rounded-lg bg-white" />
                )}
              </Field>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
              <Field  name="licenseNumber" component="input" >
                {({ input }) => (
                  <input {...input} type="text" placeholder="+88XXXXXXXXXXXXX"  className="w-full p-3 border border-gray-300 rounded-lg  bg-white" />
                )}
              </Field>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Front Side of Your ID (or Passport)</label>
              <Field name="frontId" component="input" type="file">
                {({ input }) => (
                  <input {...input} className="w-full p-3 border border-gray-300 rounded-lg" />
                )}
              </Field>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Back Side of Your ID (or Passport)</label>
              <Field name="backId" component="input" type="file">
                {({ input }) => (
                  <input {...input} className="w-full p-3 border border-gray-300 rounded-lg" />
                )}
              </Field>
            </div>

            <Link href="/auth/verifyaccount" >
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg "
            >
              Submit
            </button>
            </Link>
          </form>
        )}
      />
    </div>
  );
};

export default SignUpForm;
