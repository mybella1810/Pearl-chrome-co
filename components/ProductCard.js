export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart">Add to Cart</button>

      <style jsx>{`
        .product-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        h3 {
          font-size: 1.1rem;
          color: #222;
          margin-bottom: 0.5rem;
        }

        .price {
          color: #444;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .add-to-cart {
          background: linear-gradient(135deg, #d8d8d8, #b0b0b0);
          color: #222;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .add-to-cart:hover {
          background: linear-gradient(135deg, #cfcfcf, #999);
          color: #000;
        }
      `}</style>
    </div>
  );
}
