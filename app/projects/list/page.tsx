import styles from "./list.module.css";
import Link from "next/link";

function page() {
  return (
    <main>
      <h1>ProjectList</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">Job It</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hipnode</Link>
        </li>
      </ul>
    </main>
  );
}

export default page;
