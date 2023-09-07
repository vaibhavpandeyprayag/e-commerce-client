import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      HOME PAGE
      <Link to="/login">Login</Link>
      <Link to="/signup">Create Account</Link>
    </div>
  );
}

export default Home;
