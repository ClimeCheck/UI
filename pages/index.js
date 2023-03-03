import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Timeline from "../components/Timeline";
import { Hero, Navbar } from "../components";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.scss";

const Mapbase = dynamic(() => import("../components/LandingPage/Mapbase"));
const Sidebar = dynamic(() => import("../components/Sidebar"));
const WhyClime = dynamic(() => import("../components/LandingPage/WhyClime"));

function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>ClimeCheck</title>
        <meta
          name="description"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />

        <link rel="icon" href="/ClimeCheck.svg" />
      </Head>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <video playsInline autoPlay muted loop poster="/Cloud.png">
            <source src="/cloud.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} textColor="white" />

          <Hero data={data} />
        </div>
        <Mapbase />
        <WhyClime />
      </div>
      <main className=" bg-white w-screen justify-center items-center">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  let co2Data;
  let temperatureData;
  let vitalSignsData;

  try {
    const co2Res = await fetch("https://global-warming.org/api/co2-api/");
    co2Data = await co2Res.json();
  } catch (error) {
    console.error("Error fetching CO2 data:", error);
  }

  try {
    const temperatureRes = await fetch(
      "https://global-warming.org/api/temperature-api"
    );
    temperatureData = await temperatureRes.json();
  } catch (error) {
    console.error("Error fetching temperature data:", error);
  }

  try {
    const vitalSignsRes = await fetch(
      "https://climate.nasa.gov/api/v1/vital_signs/5/"
    );
    vitalSignsData = await vitalSignsRes.json();
  } catch (error) {
    console.error("Error fetching vital signs data:", error);
  }

  const trend = co2Data?.co2?.pop()?.trend || 0;
  const station = temperatureData?.result?.pop()?.station || 0;
  const value = vitalSignsData?.value || 0;

  return {
    props: {
      data: { station, trend, value },
    },
  };
};
export default Home;
