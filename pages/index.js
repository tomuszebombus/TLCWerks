import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>

     <Head>
        <title>TLCWerks | Home</title>
        <link rel="icon" href="/Apple logo icon - 32.png" />
    </Head>

      <h1 className={styles.title}>Home</h1>

      <p className={styles.text}>Hello from Tom!</p>
      <p className={styles.text}>Eric has helped greatly!</p>
      
      <Link href="/about">
      <a className={styles.btn}>Take me</a>
      </Link>
      
    </div>
  )
}
