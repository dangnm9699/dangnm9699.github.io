import Link from "next/link";
import Image from "next/image";

import styles from "../styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <div className={styles.sidebar_header}>
        <div className={styles.icon}>
          <Image src={"/images/icons/dashboard.svg"} width={30} height={30} />
        </div>
        <h4>Admin Panel</h4>
      </div>
      <div className={styles.sidebar_menu}>
        <div className={styles.sidebar_item}>
          <div className={styles.icon}>
            <Image src={"/images/icons/dashboard.svg"} width={30} height={30} />
          </div>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </div>
        <div className={styles.sidebar_item}>
          <div className={styles.icon}>
            <Image src={"/images/icons/dashboard.svg"} width={30} height={30} />
          </div>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </div>
      </div>
      <div className={styles.sidebar_footer}>
        <div className={styles.icon}>
          <Image src={"/images/icons/logout.svg"} width={20} height={20} />
        </div>
        <span>Logout</span>
      </div>
    </>
  );
}
