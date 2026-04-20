import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - NextJS E-Commerce</title>
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
        <h2 className={styles.subtitle}>About This Project</h2>
        <p>This is a modern e-commerce platform built with Next.js and deployed on Vercel.</p>
        <p>Repository: <a href="https://github.com/Ritesh00007/nextjs-ecommerce-platform" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 NextJS E-Commerce Platform. Deployed on Vercel.</p>
      </footer>
    </div>
  );
}
