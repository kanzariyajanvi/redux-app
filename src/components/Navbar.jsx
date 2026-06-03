import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={styles.nav}>
      <div>
        <b>ReduxApp</b>
        {user && (
          <>
            <Link to="/products"> Products </Link>
            <Link to="/manage"> Manage </Link>
          </>
        )}
      </div>

      <div>
        {user ? (
          <>
            {user.username}
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#eee",
  },
};