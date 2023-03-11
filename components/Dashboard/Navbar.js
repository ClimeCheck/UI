import Image from "next/image";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import classNames from "classnames";

import { useRef } from "react";

import { LoginCurve } from "iconsax-react";
import {
  MdSensors,
  MdOutlineSettings,
  MdOutlineDashboard,
} from "react-icons/md";
import { IoFootstepsOutline } from "react-icons/io5";
import { BiWalletAlt, BiCalculator } from "react-icons/bi";
const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: <MdOutlineDashboard size="32" />,
    link: "/dashboard",
  },
  {
    id: 2,
    label: "My Sensor",
    icon: <MdSensors size="32" />,
    link: "/dashboard/sensor",
  },
  {
    id: 3,
    label: "My Wallet",
    icon: <BiWalletAlt size="32" />,
    link: "/dashboard/wallet",
  },
  {
    id: 4,
    label: "Carbon Calculator",
    icon: <BiCalculator size="32" />,
    link: "/dashboard/carbon-calculator",
  },
  {
    id: 5,
    label: "Footprint Profile",
    icon: <IoFootstepsOutline size="32" />,
    link: "/dashboard/footprint",
  },
  {
    id: 6,
    label: "Settings",
    icon: <MdOutlineSettings size="32" />,
    link: "/dashboard/settings",
  },
];
const Navbar = () => {
  const navRef = useRef();

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center justify-center cursor-pointer mb-2 hover:bg-white rounded w-full text-black overflow-hidden whitespace-nowrap",
      {
        ["bg-white text-primary "]: activeMenu.id === menu.id,
      }
    );
  };
  //get classlist from react ref

  const onToggleMenu = (e) => {
    e["name"] = e.name === "menu" ? "close" : "menu"; //what is this line supposed to do?

    navRef.current.classList.toggle("top-[10%]");
  };
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="..."
          />
        </div>
        <div
          ref={navRef}
          className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5"
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {menuItems.map(({ icon: Icon, ...menu }, index) => {
              const classes = getNavItemClasses(menu);
              return (
                <div key={index} className={classes}>
                  <Link
                    href={menu.link}
                    className={classNames(
                      "flex py-4 px-4 gap-x-2  items-center  w-full h-full justify-center"
                    )}
                  >
                    <div>{Icon}</div>

                    <span className={classNames("text-md font-medium  ")}>
                      {menu.label}
                    </span>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
          <GiHamburgerMenu
            onClick={(e) => onToggleMenu(e)}
            name="menu"
            className="text-3xl block h-6 w-6 cursor-pointer md:hidden"
          />
        </div>
      </nav>{" "}
    </header>
  );
};

export default Navbar;
