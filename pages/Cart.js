import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>Your Cart</h1>
        <p>Your selected items will appear here soon.</p>
      </main>
      <Footer />
    </div>
  );
}
