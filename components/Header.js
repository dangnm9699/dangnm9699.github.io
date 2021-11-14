import Image from "next/image";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.icon}>
        <Image src={"/images/icons/user.svg"} width={30} height={30} />
      </div>
      <h4>Username</h4>
    </>
  );
}
