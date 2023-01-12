import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../pageContainer/mobile/components/nav";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
