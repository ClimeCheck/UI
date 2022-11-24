import "../styles/globals.css";
import { Inter, Space_Grotesk } from "@next/font/google";
import cx from "classnames";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
const spacegrotesk = Space_Grotesk({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={cx(inter.className, spacegrotesk.className)}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
