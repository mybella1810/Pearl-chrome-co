import '../styles/styles.css';  // ✅ Correct global CSS import

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
