import Image from "next/image";
import React from "react";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { TfiMenuAlt } from "react-icons/tfi";
import Link from "next/link";

const ProfileSideber = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Image
          src="/me.jpg"
          height={90}
          width={90}
          alt="me"
          className=" rounded-full"
        ></Image>
      </div>
      <h1 className="text-center">Moazzem Hossen</h1>
      <p className="text-center text-gray-400">tiyonbhuiyan.201@gmail.com</p>

      <div className="">


      <Link href="/profile/personalinfo">
      <div className="flex gap-2 text-lg my-3">
          {" "}
          <i className="text-2xl">
            <CiUser />{" "}
          </i>{" "}
          <li>Profile Details</li>
        </div>
      </Link>

        <Link href="/profile/setting">
          {" "}
          <div className="flex gap-2 text-lg my-3">
            {" "}
            <i className="text-2xl">
              <IoSettingsOutline />{" "}
            </i>{" "}
            <li>Setting</li>
          </div>
        </Link>

      <Link href='/profile/orderhistory'>
      <div className="flex gap-2 text-lg my-3">
          {" "}
          <i className="text-2xl">
            <TfiMenuAlt />{" "}
          </i>{" "}
          <li>Order History</li>
        </div>
      
      
      </Link>

<Link href=''>
        <div className="flex gap-2 text-lg my-3">
          {" "}
          <i className="text-2xl">
            <GrLogout />{" "}
          </i>{" "}
          <li>Logout</li>
        </div></Link>


      </div>
    </div>
  );
};

export default ProfileSideber;
