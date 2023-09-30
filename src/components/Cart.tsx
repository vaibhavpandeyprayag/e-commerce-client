import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  useEffect(() => {
    console.log("Cart rendered.");
  }, []);
  return (
    <div>
      Cart
      <Link to="/">Home</Link>
    </div>
  );
}

export default Cart;
