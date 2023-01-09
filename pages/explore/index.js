import Head from "next/head";
import { Navbar } from "../../components";
import { useState } from "react";
import ExplorerHero from "../../components/Explorer/Hero";
import WelcomeExplore from "../../components/Explorer/Welcome";

function explorer() {
  return (
    <div>
      <Head>
        <title>ClimeCheck | Explorer</title>
        <meta
          name="description"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />
        <link rel="icon" href="/ClimeCheck.png" />
      </Head>
      <ExplorerHero />
      <WelcomeExplore />
    </div>
  );
}

export default explorer;
