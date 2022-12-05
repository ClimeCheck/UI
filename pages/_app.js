import "../styles/globals.css";
import Footer from "../components/Footer";

import { useState } from "react";

function MyApp({ Component, pageProps }) {
 

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
