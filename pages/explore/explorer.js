import Head from "next/head";
import WelcomeExplore from "../../components/Explorer/Welcome";
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useState } from "react";

function Explorer() {
  const [isOpen, setIsOpen] = useState(false);
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
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="/Cloud.png"
        className="absolute -z-10 w-auto min-w-full h-full max-w-none"
      >
        <source src="/cloud.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} textColor="white" />
      <WelcomeExplore />
    </div>
  );
}

export default Explorer;
