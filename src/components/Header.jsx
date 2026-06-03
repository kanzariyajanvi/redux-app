import { useNavigate } from "react-router-dom";

export default function Header({ isLogin, setIsLogin }) {
  const nav = useNavigate();

  return (
    <div style={styles.header}>
      {/* Logo */}
      <h2 style={styles.logo} onClick={() => nav("/")}>
        ReduxApp
      </h2>

      {/* Right Side */}
      <div style={styles.navRight}>
        {!isLogin ? (
          <>
            <button
              style={styles.outlineBtn}
              onClick={() => nav("/login")}
            >
              Login
            </button>

            <button
              style={styles.fillBtn}
              onClick={() => nav("/register")}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <button
              style={styles.linkBtn}
              onClick={() => nav("/products")}
            >
              Products
            </button>

            <button
              style={styles.linkBtn}
              onClick={() => nav("/manage")}
            >
              Manage
            </button>

            <span style={styles.user}>emilys</span>

            <button
              style={styles.fillBtn}
              onClick={() => {
                setIsLogin(false);
                nav("/");
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 40px",
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    fontFamily: "Segoe UI",
  },

  logo: {
    cursor: "pointer",
    fontWeight: "800",
    letterSpacing: "1px",
    fontSize: "18px",
    color: "#111",
    transition: "0.3s",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  user: {
    fontSize: "14px",
    color: "#555",
    padding: "6px 12px",
    borderRadius: "20px",
    background: "#f3f4f6",
    fontWeight: "500",
  },

  /* ===== BUTTONS ===== */

  fillBtn: {
    padding: "8px 18px",
    background: "linear-gradient(135deg, #000, #333)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    transition: "0.3s",
  },

  outlineBtn: {
    padding: "8px 18px",
    background: "transparent",
    color: "#000",
    border: "1px solid #000",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },

  linkBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    color: "#333",
    fontWeight: "500",
    padding: "6px 10px",
    borderRadius: "8px",
    transition: "0.3s",
  },
};