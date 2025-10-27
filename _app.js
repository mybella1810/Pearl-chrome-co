import '../styles/styles.css';  // ✅ Import global CSS here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
