export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f7f7f7", textAlign: "center" }}>
      <h1>Pearl & Chrome Co.</h1>
      <nav>
        <a href="/" style={{ margin: "0 10px" }}>Home</a>
        <a href="/Shop" style={{ margin: "0 10px" }}>Shop</a>
        <a href="/Cart" style={{ margin: "0 10px" }}>Cart</a>
        <a href="/Contact" style={{ margin: "0 10px" }}>Contact</a>
      </nav>
    </header>
  );
}
