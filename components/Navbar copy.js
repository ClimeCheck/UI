import { Logo } from "../assets/images";
import Image from "next/image";
import style from "../styles/Navbar.module.scss";
import Link from "next/link";
import cx from "classnames";
import Script from "next/script";
import { useRef } from "react";
import { useSidebarContext } from "../context/SidebarContext";

const Navbar = ({ textColor }) => {
  const { isOpen, setIsOpen } = useSidebarContext();

  const onToggleMenu = (e) => {
    e.name = e.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[9%]");
  };
  const navRef = useRef();
  return (
    <header class="bg-white">
      <nav class="flex justify-between items-center w-[92%]  mx-auto">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            class="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="..."
          />
        </div>
        <div
          ref={navRef}
          class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5"
        >
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a class="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">
                Developers
              </a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
          <ion-icon
            onclick={(e) => onToggleMenu(e)}
            name="menu"
            class="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>{" "}
    </header>
  );
};

export default Navbar;
