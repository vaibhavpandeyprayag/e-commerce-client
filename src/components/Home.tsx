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
    //       console.log("Already logged in.");
    //     } else {
    //       console.log("Session expired");
    //       navigate("/");
    //     }
    //   });
    // else {
    //   console.log("Null token");
    //   navigate("/");
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
