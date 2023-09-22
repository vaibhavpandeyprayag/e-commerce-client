import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      HOME PAGE
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/signup">Create Account</Link>
    </div>
  );
}

export default Home;
