import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      HOME PAGE
      <Link to="/authpage">Go to Login</Link>
      <Link to="/authpage">Create Account</Link>
    </div>
  );
}

export default Home;
