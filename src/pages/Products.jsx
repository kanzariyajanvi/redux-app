import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Products</h2>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.thumbnail} alt="" style={styles.img} />

            <h4 style={styles.name}>{p.title}</h4>

            <p style={styles.category}>{p.category}</p>

            <div style={styles.row}>
              <span style={styles.price}>₹{p.price}</span>
              <span style={styles.rating}>⭐ {p.rating}</span>
            </div>

            <p style={styles.stock}>Stock: {p.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  container: {
    padding: "35px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    fontFamily: "Segoe UI",
  },

  title: {
    marginBottom: "25px",
    fontSize: "26px",
    fontWeight: "700",
    color: "#111",
    letterSpacing: "0.5px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "0.3s",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    borderRadius: "12px",
    transition: "0.3s",
  },

  name: {
    fontSize: "15px",
    fontWeight: "600",
    marginTop: "10px",
    color: "#111",
  },

  category: {
    fontSize: "12px",
    color: "#666",
    marginBottom: "8px",
    textTransform: "capitalize",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8px",
  },

  price: {
    fontWeight: "700",
    color: "#000",
    fontSize: "15px",
  },

  rating: {
    fontSize: "13px",
    background: "#f3f4f6",
    padding: "4px 8px",
    borderRadius: "8px",
  },

  stock: {
    fontSize: "12px",
    color: "#555",
    marginTop: "6px",
  },
};