import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import sampleData from "../sample-data.json";

export default function Shop() {
  // Make sure we’re working with an array
  const products = Array.isArray(sampleData)
    ? sampleData
    : sampleData.products || [];

  return (
    <div>
      <Header />
      <main className="main-content">
        <h1 className="shop-title">Shop Collection</h1>

        <div className="product-grid">
          {products.length > 0 ? (
            products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .main-content {
          padding: 2rem;
          text-align: center;
          background-color: #f8f8f8;
        }

        .shop-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #222;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          justify-items: center;
          align-items: stretch;
          padding: 1rem;
        }

        .product-grid :global(.product-card) {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          max-width: 300px;
        }

        .product-grid :global(.product-card:hover) {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  );
}
