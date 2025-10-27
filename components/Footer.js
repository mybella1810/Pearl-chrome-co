export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#f0f0f0",
      padding: "15px",
      textAlign: "center",
      borderTop: "2px solid #ccc",
      marginTop: "40px"
    }}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Pearl & Chrome Co. — All Rights Reserved.
      </p>
      <p style={{ margin: 0, fontSize: "0.9rem" }}>
        Crafted with precision, performance & shine.
      </p>
    </footer>
  );
}
