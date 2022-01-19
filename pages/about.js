import Head from "next/head";
import styles from "../styles/Home.module.scss";

const About = () => {
    return ( 
        <div>
        <Head>
          <title>TLCWerks | About</title>
          <link rel="icon" href="/Apple logo icon - 32.png" />
        </Head>
        <h1 className={styles.title}>About</h1>
          <p className={styles.text}>Hello from Tom!</p>
          <p className={styles.text}>Eric has helped greatly!</p>
        </div>
     );
}
 
export default About;