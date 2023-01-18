import "../styles/globals.css";
// import Footer from "../components/Footer";
import AppLayout from "../Layout/AppLayout";
import { useState } from "react";

import { SidebarContext } from "../context/SidebarContext";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext>
      <AppLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <Component {...pageProps} />
      </AppLayout>
    </SidebarContext>
  );
}

export default MyApp;
