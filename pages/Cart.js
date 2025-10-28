import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "10px auto",
                  width: "260px",
                  background: "#fff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#a00",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 12px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
                    }
