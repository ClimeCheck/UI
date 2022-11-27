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
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          About us
        </Link>

        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          Contribute
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          Explorer
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          FAQs
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          Login
        </Link>
        <button href="/" onClick={() => setIsOpen(!isOpen)}>
          Join us for free
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
