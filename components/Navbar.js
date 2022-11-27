import { Logo } from "../assets/images";
import Image from "next/image";
import style from "../styles/Navbar.module.scss";
import Sidebar from "./Sidebar";
import { useState } from "react";
import cx from "classnames";
const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <header className={style.header}>
        <Image src={Logo} alt="Clime Check Logo" placeholder="blur" priority />

        <nav>
          <button>About us</button>
          <button>Contribute</button>
          <button>Explorer</button>
          <button>FAQs</button>
        </nav>
        <div className={style.ctawrapper}>
          <button>Login</button>
          <button>Join us for free</button>
        </div>
        <div
          className={!isOpen ? "harmburger" : cx("harmburger", "change")}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
