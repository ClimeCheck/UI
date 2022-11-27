import Image from "next/image";
import { Logo } from "../assets/images";
import style from "../styles/WhyClime.module.scss";

import { PlayCircle } from "iconsax-react";


const WhyClime = () => {
  return (
    <div className={style.container}>
      <div className={style.headerText}>
        <span>
          <h1>Why ClimeCheck?</h1>
          <svg
            width="40%"
            height="7"
            viewBox="0 0 503 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M502.667 3.5a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0 5.334 0ZM500 3H0v1h500V3Z"
              fill="#179502"
            />
          </svg>
        </span>
        <p>
          ClimeCheck is a global climate commons built through the aggregation
          of individuals and data from the local, city, state, country,
          continent and all around the world. The Climecheck be all, end all is
          individual grassroot participation. The problem we are looking to
          solve is how to tackle the issue of climate change in a way that is
          trustless and reliable.
        </p>
      </div>
      <div className={style.reveal}>
        <Image src={Logo} alt="Clime Check Logo" placeholder="blur" priority />

        <button className={style.playButton}>
          Watch Video <PlayCircle size="32" color="#ffffff" variant="Bold" />
        </button>

        <h3>Introducing ClimeCheck</h3>
      </div>
    </div>
  );
};

export default WhyClime;
