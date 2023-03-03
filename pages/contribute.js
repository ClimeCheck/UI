import ContributeForm from "../components/Contribute/form";
import Head from "next/head";
import { Navbar } from "../components";
import dynamic from "next/dynamic";

import Footer from "../components/Footer";

const Sidebar = dynamic(() => import("../components/Sidebar"));

function Contribute() {
  return (
    <div>
      <Head>
        <title>ClimeCheck || Contribute</title>
        <meta
          name="description"
          content="Contribute to ClimeCheck, a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar2 /> */}
      <Navbar textColor="black" />
      <Sidebar />

      <ContributeForm />

      <Footer />
    </div>
  );
}

export default Contribute;
