export default function ProductCard({ name, price, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      width: "200px",
      margin: "10px auto"
    }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button style={{
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer"
      }}>Add to Cart</button>
    </div>
  );
}
