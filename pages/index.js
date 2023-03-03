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
  const [co2Data, temperatureData, vitalSignsData] = await Promise.all([
    fetchData("https://global-warming.org/api/co2-api/"),
    fetchData("https://global-warming.org/api/temperature-api"),
    fetchData("https://climate.nasa.gov/api/v1/vital_signs/5/"),
  ]);

  const { trend } = co2Data?.co2.shift() || { trend: 395 };

  const { station } = temperatureData?.result?.pop() || { station: 0 };
  const { value } = vitalSignsData || { value: 0 };


  return {
    props: {
      data: { station, trend, value },
    },
  };
};
export default Home;
