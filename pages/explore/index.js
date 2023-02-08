import Head from "next/head";
import { Navbar } from "../../components";
import { useState } from "react";
import ExplorerHero from "../../components/Explorer/Hero";
import Sidebar from "../../components/Sidebar";


function explorer() {
  return (
    <div className="h-max relative">
      <Head>
        <title>ClimeCheck | Explorer</title>
        <meta
          name="description"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />
        <link rel="icon" href="/ClimeCheck.png" />
      </Head>

      {/* <video
        playsInline
        autoPlay
        muted
        loop
        poster="/Cloud.png"
        className="absolute h-full -z-10 w-auto min-w-full max-w-none"
      >
        <source src="/cloud.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}
      <Sidebar />
      <Navbar textColor="black" />
      <ExplorerHero />
    </div>
  );
}

export default explorer;
