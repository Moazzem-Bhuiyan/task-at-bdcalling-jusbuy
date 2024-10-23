
import Link from "next/link";
import { CiMenuBurger, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
const Navber = () => {

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
          {
            title : "Sign Up",
            path:"/signup"
          },
          {
            title : "Sign In",
            path:"auth/sigin"
          }


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

            <input type="search" placeholder="What are you looking for?" className="bg-white outline-none text-sm w-60 p-1 border " />

          <Link href="">  <i className="text-2xl"><CiHeart /></i></Link>
    
         <div className="indicator">
          <i className="text-2xl"><IoCartOutline /></i>
          <span className="badge badge-sm bg-orange-400 text-black indicator-item">0</span>
        </div>

        <Link href="/profile/personalinfo">  <i className="text-xl"><CiUser /></i></Link>

        
        </div>
      </div>
    );
};

export default Navber;