import { useContext, useEffect } from "react";
import websiteLogo from "../resources/websiteTempLogo.jpg";
import css from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../contexts";
import AvatarTab from "./AvatarTab";
import CategoryMenu from "./CategtoryMenu";
import CategoryAccordion from "./CategoryAccordion";

function NavBar() {
  const { authState, setAuthState } = useContext(AuthContext);
  const categories = [
    { id: 1, name: "phones", title: "phones" },
    { id: 2, name: "mensclothes", title: "men's clothes" },
    { id: 3, name: "womensclothes", title: "women's clothes" },
    { id: 4, name: "office", title: "office" },
    { id: 5, name: "kids", title: "kids" },
    { id: 6, name: "shoes", title: "shoes" },
  ];

  useEffect(() => {
    console.log("NavBar rendered.");
  }, []);
  return (
    <div>
      <div
        className="position-absolute w-100 z-1 collapse"
        id="collapseCategoriesAccordion"
      >
        <div className="d-flex w-100 flex-column justify-content-evenly ">
          <div className="d-flex justify-content-between align-items-center bg-white">
            <CategoryMenu id={-1} name="home" title="home" classes=" py-3" />
            <label className="fw-semibold">Categories</label>
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCategoriesAccordion"
              aria-expanded="false"
              aria-controls="collapseCategoriesAccordion"
            >
              Close
            </button>
          </div>
          <div className="accordion" id="accordionMenu">
            {categories.map((category) => (
              <CategoryAccordion
                id={category.id}
                name={category.name}
                title={category.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-lg pt-4">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-between justify-content-md-start align-items-center">
            <button
              className="d-md-none btn btn-outline-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCategoriesAccordion"
              aria-expanded="false"
              aria-controls="collapseCategoriesAccordion"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <Link
              to="/"
              className="d-flex align-items-center p-md-2 text-decoration-none"
            >
              <img
                className="rounded-circle me-2"
                style={{ width: "3rem" }}
                src={websiteLogo}
              />
              <span>Buy Now</span>
            </Link>
          </div>
          <div className="col-md-1 col-lg-3"></div>
          <div className="col-md-8 col-lg-6 d-flex align-items-center pe-3 gap-1 mb-2 mb-md-0">
            <div className="position-relative w-100">
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
            <AvatarTab id={authState.id} firstname={authState.firstname} />
          </div>
        </div>
      </div>
      <div
        className="d-none d-md-block bg-black w-100"
        style={{ height: "3.5rem" }}
      >
        <div className="container-lg h-100 p-0">
          <div className="d-flex justify-content-start gap-3 h-100">
            <div className="d-flex w-100 justify-content-evenly ">
              <CategoryMenu id={-1} name="home" title="home" />
              {categories.map((category) => (
                <CategoryMenu
                  id={category.id}
                  name={category.name}
                  title={category.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
