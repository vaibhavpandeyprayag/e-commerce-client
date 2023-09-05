import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      HOME PAGE
      <Link to="/login">Go to Login</Link>
      <Link to="/signup">Create Account</Link>
    </div>
  );
}

export default Home;
