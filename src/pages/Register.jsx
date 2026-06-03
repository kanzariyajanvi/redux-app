import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <p style={styles.subtitle}>
          Join and manage your products easily
        </p>

        <input style={styles.input} placeholder="First name" />
        <input style={styles.input} placeholder="Last name" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Username" />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
        />

        <button style={styles.btn}>
          Create Account
        </button>

        <p style={styles.footer}>
          Have an account?{" "}
          <span
            style={styles.link}
            onClick={() => nav("/login")}
          >
            Login
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
    width: "420px",
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
    marginBottom: "22px",
    lineHeight: "1.4",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
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
    marginTop: "10px",
    fontWeight: "600",
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