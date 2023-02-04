

import style from "../styles/Sidebar.module.scss";
import Link from "next/link";

import cx from "classnames";
import { useSidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

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

        <Link href="/contribute" onClick={() => setIsOpen(!isOpen)}>
          Contribute
        </Link>
        <Link href="/explore" onClick={() => setIsOpen(!isOpen)}>
          Explorer
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          FAQs
        </Link>
        <Link href="/auth/login" onClick={() => setIsOpen(!isOpen)}>
          Login
        </Link>
        <button href="/auth/sign-up" onClick={() => setIsOpen(!isOpen)}>
          Join us for free
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
