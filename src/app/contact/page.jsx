import React from "react";
import { FaPhone, FaVoicemail } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 md:w-[50%] m-auto gap-10 p-5 my-20">
        <div className="  md:border-r flex flex-col justify-center items-center space-y-3">
          <div className="flex gap-4">
            <i className="bg-primary text-white p-2 rounded-full"><FaPhone></FaPhone></i>
            <h1 className=" text-xl">Call To Us</h1>
          </div>

          <p>We are avilable 24/7,7days week</p>
          <p>Phone : +8801820921814</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-3 ">
          <div className="flex gap-4">
          <i className="bg-primary text-white p-2 rounded-full"><FaVoicemail></FaVoicemail></i>
            <h1  className=" text-xl">Write To Us</h1>
          </div>
          <p>Contact this email and we will contact you within 24 hours.</p>

          <p>Emails: customer@exclusive.com</p>

          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default page;

