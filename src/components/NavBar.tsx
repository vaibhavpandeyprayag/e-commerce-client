import { useContext, useEffect } from "react";
import websiteLogo from "../resources/websiteTempLogo.jpg";
import css from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../contexts";

function NavBar() {
  const { authState, setAuthState } = useContext(AuthContext);
  useEffect(() => {
    console.log("NavBar rendered.");
    console.log(authState);
  }, []);
  return (
    <div className="container-md pt-4">
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex w-100 justify-content-between align-items-baseline">
          <Link to="/" className="text-decoration-none">
            <img
              className="rounded-circle me-2"
              style={{ width: "3rem" }}
              src={websiteLogo}
            />
            Buy Now
            {authState.firstname}
          </Link>
          <div className={`${css.loginSignupLinks1}`}>
            <Link to="/auth/login" className="text-black text-decoration-none">
              Login
            </Link>
            <span>|</span>
            <Link to="/auth/signup" className="text-black text-decoration-none">
              Signup
            </Link>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 w-100">
          <div className="position-relative flex-grow-1">
            <input
              className={`${css.formControlCustom}`}
              placeholder="Search"
            />
            <button className="position-absolute end-0 mt-1  btn p-0">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <Link to="/likedproductspage" className="">
            <FontAwesomeIcon icon={faHeart} className="text-danger" size="xl" />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </Link>
          <div className={`${css.loginSignupLinks2}`}>
            <Link to="/auth/login" className="text-black text-decoration-none">
              Login
            </Link>
            <span>|</span>
            <Link to="/auth/signup" className="text-black text-decoration-none">
              Signup
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default NavBar;
