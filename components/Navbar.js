import { Logo } from "../assets/images";
import Image from "next/image";
import style from "../styles/Navbar.module.scss";
import Link from "next/link";
import cx from "classnames";
const Navbar = ({ isOpen, setIsOpen, textColor }) => {
  return (
    <>
      <header className={style.header}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Clime Check Logo"
            placeholder="blur"
            priority
          />
        </Link>
        <nav className={`text-${textColor}`}>
          <Link href="/">About us</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/">Explorer</Link>
          <Link href="/">FAQs</Link>
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
