import { Logo } from "../assets/images";
import Image from "next/image";
import style from "../styles/Navbar.module.scss";
const Navbar = () => {
  return (
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
    </header>
  );
};

export default Navbar;
