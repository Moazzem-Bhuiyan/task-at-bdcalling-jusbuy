"use client"
import Link from 'next/link';
import { useState } from 'react';

const OTPForm = () => {
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) { // only digits allowed
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value.slice(0, 1); // allow only one digit per field
      setOtpValues(newOtpValues);

      // Auto-focus next input
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
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-100 to-orange-00">
      <form onSubmit={handleSubmit} className=" p-8 max-w-md w-full space-y-5">
        <h2 className="text-center text-4xl font-semibold text-gray-700 mb-4">Verify Your account</h2>

        <p>We will send you one time password this email address.</p>
        <p></p>

        <p className='text-center'>(tiyonbhuiyan.201@gmail.com)</p>

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

       <Link href="/">
       <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 mt-8 hover:bg-orange-600 transition-colors"
        >
          Submit OTP
        </button>
       </Link>
      </form>
    </div>
  );
};

export default OTPForm;
