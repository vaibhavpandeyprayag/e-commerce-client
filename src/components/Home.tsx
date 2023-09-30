import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loggedIn } from "../sharedExports";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // const token = localStorage.getItem("user");
    // if (token !== null)
    //   loggedIn(token).then((isLoggedIn) => {
    //     if (isLoggedIn) {
    //       console.log("already logged in.");
    //     } else {
    //       console.log("Session expired");
    //       navigate("/auth/login");
    //     }
    //   });
    // else {
    //   console.log("null token");
    //   navigate("/auth/login");
    // }
  }, []);
  return (
    <div className="bg-dark text-light">
      HOME
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/signup">Create Account</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Home;
