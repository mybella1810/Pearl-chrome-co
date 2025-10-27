// pages/_app.js
import '../styles/styles.css'; // imports your global CSS

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
