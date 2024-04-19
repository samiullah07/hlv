import React from "react";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/Group 18894logo.png";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 bottom-0 top-0 bg-[#000000e0] h-[100vh] z-[1002]`}
    >
      {/* Nav Divs */}

      <div
        className={`bg-[#99C8FF] ${navStyle} transition-all duraton-500 delay-200 w-[70%] h-[100%]`}
      >
        <div className="d-flex justify-content-between align-items-center pt-4 ps-5 pe-4">
          <Image src={logo} alt="logo" />

          <ImCross
            onClick={closeNav}
            className="top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white"
          />
        </div>
        <div className="d-flex px-2 justify-content-start pt-5 align-items-center">
          {/* Nav Links */}
          <ul className="space-y-10 ">
            <li>
              <Link
                className="text-[35px] font-medium hover:text-blue-500 text-white"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[35px] font-medium hover:text-blue-500 text-white"
                href="/About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[35px] font-medium hover:text-blue-500 text-white"
                href="/FAQ"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
