"use client";
import { usePathname } from "next/navigation";
import Navber from "../Components/shared/Navber";
import Footer from "../Components/shared/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarFooter =
    pathname === "/auth/sigin" ||
    pathname === "/auth/signup" ||
    pathname === "/auth/congrass" ||
    pathname === "/auth/forgetpass" ||
    pathname === "/auth/updatepass" ||
    pathname === "/auth/verifyotp" ||
    pathname === "/auth/verifyaccount" ||
    pathname === "/auth/sellersignup" ||
    pathname === "/profile/personalinfo" ||
    pathname === "/profile/setting" ||
    pathname === "/profile/orderhistory";

  return (
    <>
      {!hideNavbarFooter && <Navber></Navber>}
      <hr />
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
