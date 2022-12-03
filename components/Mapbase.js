import style from "../styles/Mapbase.module.scss";
import Map from "./Map";
import { InfoCircle } from "iconsax-react";
const Mapbase = () => {
  return (
    <div className={style.container}>
      <h1>The World today</h1>
      <div>
        <Map />
      </div>

      <div className={style.continentWrapper}>
        <div className={style.continent}>
          <div className={style.africa}></div>
          <span>Africa</span>
        </div>
        <div className={style.continent}>
          <div className={style.asia}></div>
          <span>Asia</span>
        </div>
        <div className={style.continent}>
          <div className={style.australia}></div>
          <span>Australia</span>
        </div>
        <div className={style.continent}>
          <div className={style.europe}></div>
          <span>Europe</span>
        </div>
        <div className={style.continent}>
          <div className={style.northAmerica}></div>
          <span>North America</span>
        </div>
        <div className={style.continent}>
          <div className={style.southAmerica}></div>
          <span>South America</span>
        </div>
      </div>
      <div className={style.info}>
        <InfoCircle size="32" color="#373737" />
        <span>
          Hover around these continents to view their climatic factors
        </span>
      </div>

      <button>Explore More</button>
    </div>
  );
};

export default Mapbase;
