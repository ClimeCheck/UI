/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { Logo } from "../../assets/images";

import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";
import { Setting2, Wallet, Calculator, LoginCurve } from "iconsax-react";
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
  { id: 2, label: "My Sensor", icon: <MdSensors size="32" />, link: "/sensor" },
  {
    id: 3,
    label: "My Wallet",
    icon: <BiWalletAlt size="32" />,
    link: "/wallet",
  },
  {
    id: 4,
    label: "Carbon Calculator",
    icon: <BiCalculator size="32" />,
    link: "/carbonCalculator",
  },
  {
    id: 5,
    label: "Footprint Profile",
    icon: <IoFootstepsOutline size="32" />,
    link: "/footprint",
  },
  {
    id: 6,
    label: "Settings",
    icon: <MdOutlineSettings size="32" />,
    link: "/settings",
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
    " px-4 pt-8 pb-4 bg-[#F8F8F8] flex justify-between flex-col ",
    {
      ["w-72"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "h-full p-4 rounded bg-[#74BF44] absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer mb-2 hover:bg-white rounded w-full text-black overflow-hidden whitespace-nowrap",
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
      <div className="flex flex-col font-Grotesk">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4 justify-center w-full ">
            <img src={Logo.src} alt="" className=" object-cover  w-[60%]" />
            <span
              className={classNames("mt-2 text-lg font-medium", {
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

        <div className="flex flex-col items-start mt-8">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={index} className={classes}>
                <Link
                  href={menu.link}
                  className="flex py-4 px-3 gap-x-2 items-center w-full h-full "
                >
                  <div style={{ width: "2.5rem" }}>{Icon}</div>
                  {!toggleCollapse && (
                    <span className={classNames("text-md font-medium ")}>
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`${getNavItemClasses(
          {}
        )} px-3 py-4 bg-[#FEE4E4] rounded-lg flex items-center justify-center text-[#7E0F0F]`}
      >
        <div style={{ width: "2.5rem" }}>
          <LoginCurve size="32" color="#000000" />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium ")}>Logout</span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
