import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface HomeProps {
  products: Product[];
  error?: string;
}

export default function Home({ products, error }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS E-Commerce Platform</title>
        <meta name="description" content="A modern e-commerce platform built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
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
        <h2 className={styles.subtitle}>Featured Products</h2>
        {error && <p className={styles.error}>Error loading products: {error}</p>}
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.productTitle}>
                  {product.title.length > 50
                    ? product.title.substring(0, 50) + '...'
                    : product.title}
                </h3>
                <p className={styles.productCategory}>{product.category}</p>
                <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                <div className={styles.productRating}>
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </div>
                <button className={styles.addToCart}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 NextJS E-Commerce Platform. Deployed on Vercel.</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=8');
    if (!res.ok) throw new Error('Failed to fetch products');
    const products: Product[] = await res.json();
    return { props: { products } };
  } catch (err: any) {
    return {
      props: {
        products: [],
        error: err.message || 'Unknown error',
      },
    };
  }
};
