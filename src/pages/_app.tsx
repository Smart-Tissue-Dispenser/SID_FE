import "../styles/globals.css";
import type { AppProps } from "next/app";
import MobileFooter from "../pageContainer/mobile/components/footer";
import { Mobile } from "./style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Mobile>
        <MobileFooter />
      </Mobile>
    </>
  );
}
