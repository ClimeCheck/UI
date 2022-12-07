import "../styles/globals.css";
import Footer from "../components/Footer";
import { SidebarContext } from "../context/SidebarContext";

function MyApp({ Component, pageProps }) {
  return (
    <SidebarContext>
      <Component {...pageProps} />
      <Footer />
    </SidebarContext>
  );
}

export default MyApp;
