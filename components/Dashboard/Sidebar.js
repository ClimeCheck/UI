/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { Logo } from "../../assets/images";

import { CollapsIcon } from "./icons";
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

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "  px-4 pt-8 pb-4 bg-[#F8F8F8] flex justify-between flex-col  ",
    {
      ["w-[22%] "]: !toggleCollapse,
      ["w-20 "]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "h-fit p-4 rounded bg-[#74BF44] absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center justify-center cursor-pointer mb-2 hover:bg-white rounded w-full text-black overflow-hidden whitespace-nowrap",
      {
        ["bg-white text-[#74BF44] "]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col font-Grotesk h-full">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4 justify-center w-full ">
            <Link href="/">
              <img src={Logo.src} alt="" className=" object-cover  w-full" />
            </Link>
            <span
              className={classNames("mt-2 text-lg font-medium p-auto h-fit", {
                hidden: toggleCollapse,
              })}
            ></span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-center mt-8">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={index} className={classes}>
                <Link
                  href={menu.link}
                  className={classNames(
                    "flex py-4 px-4 gap-x-2  items-center  w-full h-full ",
                    toggleCollapse && "justify-center"
                  )}
                >
                  <div>{Icon}</div>
                  {!toggleCollapse && (
                    <span className={classNames("text-md font-medium  ")}>
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center mt-auto py-4 px-4 justify-center bg-[#FEE4E4] cursor-pointer  rounded w-full text-[#7E0F0F]  whitespace-nowrap">
        <div
          className={classNames(
            "flex  gap-x-2  items-center  w-full ",
            toggleCollapse && "justify-center"
          )}
        >
          <div>
            <LoginCurve size="32" color="#000000" />
          </div>

          {!toggleCollapse && (
            <span className={classNames("text-md font-medium ")}>Logout</span>
          )}
        </div>
      </div>
      {/* <div
        className={`${getNavItemClasses(

        )} px-3 py-4 bg-[#FEE4E4] rounded-lg flex items-center justify-center text-[#7E0F0F]`}
      >
        <LoginCurve size="32" color="#000000" />

        {!toggleCollapse && (
          <span className={classNames("text-md font-medium ")}>Logout</span>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
