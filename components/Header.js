export default function Header() {
  return (
    <header style={{ 
      backgroundColor: "#f0f0f0", 
      padding: "20px", 
      textAlign: "center", 
      borderBottom: "2px solid #ccc" 
    }}>
      <h1 style={{ margin: "0", fontSize: "1.8rem" }}>Pearl & Chrome Co.</h1>
      <nav style={{ marginTop: "10px" }}>
        <a href="/" style={{ margin: "0 10px" }}>Home</a>
        <a href="/shop" style={{ margin: "0 10px" }}>Shop</a>
        <a href="/contact" style={{ margin: "0 10px" }}>Contact</a>
        <a href="/cart" style={{ margin: "0 10px" }}>Cart</a>
      </nav>
    </header>
  );
}
