import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Cart() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cart - NextJS E-Commerce</title>
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>🛍️ NextJS E-Commerce</h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/cart" className={styles.navLink}>Cart</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subtitle}>Your Cart</h2>
        <p>Your cart is empty. <Link href="/">Continue shopping</Link></p>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 NextJS E-Commerce Platform. Deployed on Vercel.</p>
      </footer>
    </div>
  );
}
