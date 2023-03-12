import "../styles/globals.css";
import { PositionProvider } from "../context/PositionContext";
// import usePositions from "../utils/hook/usePositions";
import { SidebarContext } from "../context/SidebarContext";

function MyApp({ Component, pageProps }) {
  return (
    <PositionProvider>
      <SidebarContext>
        <Component {...pageProps} />
      </SidebarContext>
    </PositionProvider>
  );
}

export default MyApp;
