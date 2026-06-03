import { useNavigate } from "react-router-dom";

export default function Login({ setIsLogin }) {
  const nav = useNavigate();

  const handleLogin = () => {
    setIsLogin(true);
    nav("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        <p style={styles.subtitle}>
          Use dummyjson demo credentials
        </p>

        <input
          style={styles.input}
          placeholder="Username"
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
        />

        <button style={styles.btn} onClick={handleLogin}>
          Sign In
        </button>

        <p style={styles.footer}>
          No account?{" "}
          <span
            style={styles.link}
            onClick={() => nav("/register")}
          >
            Register
          </span>
        </p>
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
    width: "380px",
    padding: "45px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(14px)",
    borderRadius: "18px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.3)",
    animation: "fadeIn 0.4s ease-in-out",
  },

  title: {
    marginBottom: "8px",
    fontWeight: "800",
    fontSize: "22px",
    color: "#111",
  },

  subtitle: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    outline: "none",
    fontSize: "14px",
    background: "#fafafa",
    transition: "0.3s",
  },

  btn: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #000, #333)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
  },

  footer: {
    marginTop: "18px",
    fontSize: "13px",
    color: "#555",
  },

  link: {
    color: "#000",
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline",
  },
};