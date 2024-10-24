"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {


  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value.slice(0, 1);
      setOtpValues(newOtpValues);

      if (value.length === 1 && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = otpValues.join("");
    console.log("OTP Submitted:", otp);
    alert(`OTP Submitted: ${otp}`);
  };

  return (
    <div>
      <div className=" grid md:grid-cols-2 gap-5 p-8 md:w-[70%] m-auto md:my-20 bg-gradient-to-br from-orange-100 to-orange-00 py-40 md:px-10">
        <div className=" md:flex justify-center items-center">
          <Image
            src="/otp.png"
            height={200}
            width={200}
            alt="Login"
            className="w-[350px]"
          />
        </div>

        {/* otp */}

        <div className=" space-y-5">
          <h1 className="text-xl">verify OTP </h1>
          <p>
            We ll send a verification code to your email. Check your inbox and
            enter the code here.
          </p>

          <form
            onSubmit={handleSubmit}
            className=" md:p-8 max-w-md w-full space-y-5"
          >
            <div className="mb-4 grid grid-cols-6 gap-2">
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full text-center p-3 border border-gray-300 rounded-lg bg-white "
                  maxLength={1}
                  inputMode="numeric"
                />
              ))}
            </div>

            <Link href="/auth/updatepass">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3  hover:bg-orange-600 transition-colors"
              >
                Submit OTP
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
