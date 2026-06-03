import { useNavigate } from "react-router-dom";

export default function Home({ isLogin }) {
  const nav = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {!isLogin ? (
          <>
            <h1 style={styles.title}>React + Redux </h1>

            <p style={styles.desc}>
              Authentication via dummyjson, product list, and full CRUD —
              all wired through Redux.
            </p>

            <div style={styles.btnGroup}>
              <button style={styles.btn} onClick={() => nav("/login")}>
                Login
              </button>

              <button
                style={styles.outlineBtn}
                onClick={() => nav("/register")}
              >
                Register
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 style={styles.title}>Welcome </h1>

            <p style={styles.desc}>
              Manage your products easily using Redux Toolkit dashboard.
            </p>

            <div style={styles.btnGroup}>
              <button
                style={styles.btn}
                onClick={() => nav("/products")}
              >
                View Products
              </button>

              <button
                style={styles.outlineBtn}
                onClick={() => nav("/manage")}
              >
                Manage
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    fontFamily: "Segoe UI",
  },

  card: {
    width: "440px",
    padding: "45px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    borderRadius: "18px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.3)",
    animation: "fadeIn 0.4s ease-in-out",
  },

  title: {
    marginBottom: "12px",
    fontWeight: "800",
    fontSize: "26px",
    color: "#111",
    letterSpacing: "0.5px",
  },

  desc: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "25px",
    lineHeight: "1.5",
  },

  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
  },

  btn: {
    padding: "11px 20px",
    background: "linear-gradient(135deg, #000, #333)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  outlineBtn: {
    padding: "11px 20px",
    background: "transparent",
    color: "#000",
    border: "1px solid #000",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },
};