import { ArrowUp2, Diagram } from "iconsax-react";
import style from "../styles/Hero.module.scss";


const Hero = (props) => {
  const { station = 0, trend = 0, value = 0 } = props.data;
  console.log({ station, trend, value });

  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1>Community sourced hyperlocalized stream of climate data.</h1>
        <h4>
          Climecheck is a Decentralized Science (DeSci) ecosystem with a
          real-time Big Data Platform of climate monitoring devices around the
          world.
        </h4>
      </div>

      <div className={style.ctaWrapper}>
        <button>View Climate</button>
        <button>Contribute</button>
      </div>
      <div className={style.info}>
        <div>
          <h2>Carbon dioxide</h2>
          <div className={style.data}>
            <ArrowUp2 size="44" color="#008000" variant="Bold" />
            <span>

              {trend}
              <span className={style.supsub}>
                <sup>Part per million</sup> <sub>(since 2012)</sub>

              </span>
            </span>
          </div>
          <div className={style.trendIcon}>

            <Diagram size="25" color="white" variant="Bold" />

          </div>
        </div>

        <div>
          <h2>Global Temperarature</h2>
          <div className={style.data}>
            <ArrowUp2 size="44" color="#008000" variant="Bold" />
            <span>

              {station}
              <span className={style.supsub}>
                <sup> &#8451;</sup> <sub>(since 1880)</sub>

              419
              <span className={style.supsub}>
                <sup> &#8451;</sup> <sub>(since 2000)</sub>

              </span>
            </span>
          </div>
          <div className={style.trendIcon}>

            <Diagram size="25" color="white" variant="Bold" />

          </div>
        </div>

        <div>

          <h2>Sea Level</h2>
          <div className={style.data}>
            <ArrowUp2 size="44" color="#008000" variant="Bold" />
            <span>
              {Number(value).toFixed(2)}
              <span className={style.supsub}>
                <sup>inches</sup> <sub>(since 1993)</sub>

              </span>
            </span>
          </div>
          <div className={style.trendIcon}>

            <Diagram size="25" color="white" variant="Bold" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
