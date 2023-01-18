import "../styles/globals.css";
// import Footer from "../components/Footer";
import AppLayout from "../Layout/AppLayout";
import { useState } from "react";

import { SidebarContext } from "../context/SidebarContext";

function MyApp({ Component, pageProps }) {
  return (
    <SidebarContext>
      <Component {...pageProps} />
    </SidebarContext>
  );
}

export default MyApp;
