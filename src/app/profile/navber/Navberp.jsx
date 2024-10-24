"use client"
import Link from "next/link";
import { CiMenuBurger, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import useCart from "@/app/Components/Hooks/UseCarts";

const Navberp = () => {
  const { cartItems } = useCart(); 

    const NavLink = [

        {
            title : "Home",
            path:"/"
          },
          {
            title : "Contact",
            path:"/contact"
          },
          {
            title : "About",
            path:"/about"
          },
         


    ]



    return (
        <div className="navbar bg-white border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
            <CiMenuBurger />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
            NavLink.map((item)=>(<Link href={item.path} key={item.path}>{item.title}</Link>))
          }
            </ul>
          </div>
          <Link href={'/'}><Image alt="logo" src='/logo.png' height={60} width={100}/></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">

          {
            NavLink.map((item)=>(<Link href={item.path} key={item.path}>{item.title}</Link>))
          }
          
          </ul>
        </div>

        <div className="navbar-end gap-2">
          
        <div>
            <div className="hidden md:block">
              <label className="input input-bordered bg-neutral-200 border-none rounded-sm flex items-center gap-2 h-9">
                <input
                  type="text"
                  className="grow text-sm"
                  placeholder="What are you looking for?"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-100 "
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>

          <Link href="/wishlist"><div className="indicator">
          <i className="text-2xl"> <CiHeart></CiHeart></i>
          <span className="badge badge-sm bg-orange-500 text-black indicator-item">4</span>
        </div></Link>
    
        <Link href='/carts'>

        <div className="indicator">
          <i className="text-2xl"><IoCartOutline /></i>
          <span className="badge badge-sm bg-orange-500 text-black indicator-item">{cartItems.length}</span>
        </div>
        </Link>

        <Link href="/profile/personalinfo">  <i className="text-xl"><CiUser /></i></Link>

        
        </div>
      </div>
    );
};

export default Navberp;