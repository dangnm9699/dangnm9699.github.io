import Head from "next/head";
import { TitleContextProvider } from "../context/title";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

import styles from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [title, setTitle] = useState("Dashboard");

  return (
    <TitleContextProvider value={[title, setTitle]}>
      <Head>
        <title>{title} | Supermeow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={"sidebar"}>
        <Sidebar />
      </div>
      <div className={"container"}>
        <div className={"header"}>
          <Header />
        </div>
        <div className={"content"}>
          <Component {...pageProps} />
        </div>
        <div className={"footer"}>
          <Footer />
        </div>
      </div>
    </TitleContextProvider>
  );
}

export default MyApp;
