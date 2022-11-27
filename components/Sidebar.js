import style from "../styles/Sidebar.module.scss";
import Link from "next/link";
import { CloseCircle } from "iconsax-react";
import { motion } from "framer-motion";
import cx from "classnames";
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? style.sidebar : style.control}>
      <div
        className={!isOpen ? "harmburger" : cx("harmburger", "change")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav>
        <Link href="/">About us</Link>

        <Link href="/">Contribute</Link>
        <Link href="/">Explorer</Link>
        <Link href="/">FAQs</Link>
        <Link href="/">Login</Link>
        <button href="/">Join us for free</button>
      </nav>
    </div>
  );
};

export default Sidebar;
