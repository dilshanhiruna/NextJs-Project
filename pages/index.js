import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>ToDo Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          praesentium delectus ipsam hic sed tenetur aut ipsa. Esse, in sunt,
          dignissimos libero quibusdam vero iure tenetur, vel iste magnam
          aspernatur maxime nesciunt. Et incidunt itaque recusandae expedita
          excepturi ab?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          praesentium delectus ipsam hic sed tenetur aut ipsa. Esse, in sunt,
          dignissimos libero quibusdam vero iure tenetur, vel iste magnam
          aspernatur maxime nesciunt. Et incidunt itaque recusandae expedita
          excepturi ab? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Aliquam praesentium delectus ipsam hic sed tenetur aut ipsa.
          Esse, in sunt, dignissimos libero quibusdam vero iure tenetur, vel
          iste magnam aspernatur maxime nesciunt. Et incidunt itaque recusandae
          expedita excepturi ab?
        </p>
        <Link href="/todo">
          <a className={styles.btn}>See ToDos</a>
        </Link>
      </div>
    </>
  );
}
