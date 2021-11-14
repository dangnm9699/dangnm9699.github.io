import Head from "next/head";
import { useContext, useEffect } from "react";
import { TitleContext } from "../context/title";
import styles from "../styles/index.module.css";

export default function Home() {
  const [title, setTitle] = useContext(TitleContext);

  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  return (
    <>
      <h4>{title}</h4>
    </>
  );
}
