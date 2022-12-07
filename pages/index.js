import Head from "next/head";
import dynamic from "next/dynamic";
import Timeline from "../components/Timeline";
import { Hero, Navbar } from "../components";
import styles from "../styles/Home.module.scss";

import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Mapbase = dynamic(() => import("../components/Mapbase"));
const WhyClime = dynamic(() => import("../components/WhyClime"));
export const getServerSideProps = async () => {
  const { co2 = 0 } = await (
    await fetch("https://global-warming.org/api/co2-api/")
  )?.json();
  const { result = 0 } = await (
    await fetch("https://global-warming.org/api/temperature-api")
  )?.json();

  const res = await fetch("https://climate.nasa.gov/api/v1/vital_signs/5/");
  const { value = 0 } = await res.json();

  const { trend } = co2.pop();
  const { station } = result.pop();

  if (!result || !trend || !station) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: { station, trend, value },
    },
  };
};

export default function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>ClimeCheck</title>
        <meta
          name="ClimeCheck"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />
        <link rel="icon" href="/ClimeCheck.png" />
      </Head>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} textColor="white" />
          <Hero data={data} />
        </div>
        <Mapbase />
        <WhyClime />
      </div>
      <main className="main w-screen m-auto justify-center items-center">
        <Timeline />
      </main>
    </div>
  );
}
