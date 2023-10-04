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
import AvatarTab from "./AvatarTab";

function NavBar() {
  const { authState, setAuthState } = useContext(AuthContext);
  useEffect(() => {
    console.log("NavBar rendered.");
    console.log(authState);
  }, []);
  return (
    <div className="container-lg pt-4">
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center justify-content-md-start">
          <Link
            to="/"
            className="d-flex align-items-center pb-3 p-md-2 text-decoration-none"
          >
            <img
              className="rounded-circle me-2"
              style={{ width: "3rem" }}
              src={websiteLogo}
            />
            <span>Buy Now</span>
          </Link>
        </div>
        <div className="col-md-9 d-flex align-items-center pe-3 gap-1 mb-2 mb-md-0">
          <div className="position-relative flex-grow-1">
            <input
              className={`${css.formControlCustom}`}
              placeholder="Search"
            />
            <button
              className={`${css.hoverClass}  position-absolute end-0 rounded-end-2 h-100 border-0 px-2`}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          {authState.id !== -1 && (
            <Link to="/likedproductspage" className="">
              <FontAwesomeIcon
                icon={faHeart}
                className={`${css.hoverClass}  text-danger p-2 rounded-5`}
                size="xl"
              />
            </Link>
          )}
          {authState.id !== -1 && (
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className={`${css.hoverClass}  p-2 rounded-5`}
                size="xl"
              />
            </Link>
          )}
          <AvatarTab breakpoint="abovemd" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
