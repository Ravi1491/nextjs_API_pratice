import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nike | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum pariatur incidunt ut possimus minima asperiores, fugiat iure eius molestiae corporis quas, sunt facere. At inventore fuga assumenda ut mollitia corporis.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum pariatur incidunt ut possimus minima asperiores, fugiat iure eius molestiae corporis quas, sunt facere. At inventore fuga assumenda ut mollitia corporis.</p>
        <Link href="/users">
          <a className={styles.btn}>See All Users</a>
        </Link>
      </div>
    </>
  )
}
