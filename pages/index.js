import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import sampleData from "../sample-data.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pearl & Chrome Co.</title>
        <meta name="description" content="Where beauty meets build – shop Pearl & Chrome Co." />
      </Head>

      <Header />

      <main className="main-content">
        <h1>Welcome to Pearl & Chrome Co.</h1>
        <p>Luxury, durability, and style for your beauty and workspace essentials.</p>

        <div className="product-grid">
          {sampleData.products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
