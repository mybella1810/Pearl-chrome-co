import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import sampleData from "../sample-data.json";

export default function Shop() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>Shop Collection</h1>
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
