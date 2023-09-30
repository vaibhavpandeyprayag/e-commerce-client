import { useEffect } from "react";
import websiteLogo from "../resources/websiteTempLogo.jpg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  useEffect(() => {
    console.log("NavBar rendered.");
  }, []);
  return (
    <div className="w-custom">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="text-decoration-none">
          <img
            className="rounded-5 me-2"
            style={{ width: "3rem" }}
            src={websiteLogo}
          />
          Buy Now
        </Link>
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <input className="form-control-custom" placeholder="Search" />
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
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default NavBar;
