import { useContext, useEffect } from "react";
import { TitleContext } from "../context/title";

export default function Product() {
  const [title, setTitle] = useContext(TitleContext);

  useEffect(() => {
    setTitle("Product");
  }, []);

  return (
    <>
      <h4>{title} Page</h4>
    </>
  );
}
