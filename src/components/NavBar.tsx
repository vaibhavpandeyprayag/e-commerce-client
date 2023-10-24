import { useContext, useEffect, useState } from "react";
import websiteLogo from "../resources/websiteTempLogo.jpg";
import css from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../contexts";
import AvatarTab from "./AvatarTab";
import CategoryMenu from "./CategtoryMenu";
import CategoryAccordion from "./CategoryAccordion";
import { APIResponse, BASE_URL } from "../sharedExports";

function NavBar() {
  const { authState, setAuthState } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});

  useEffect(() => {
    console.log("subcategories fetched");
  }, [subcategories]);

  useEffect(() => {
    console.log("NavBar rendered.");
    const user = JSON.parse(localStorage.getItem("user") as string);
    fetch(`${BASE_URL}/getCategories`).then(async (httpRes) => {
      const res: APIResponse = await httpRes.json();
      if (httpRes.ok) {
        console.log("res is ok");
        setCategories(res.data);
        fetch(`${BASE_URL}/getSubcategories`).then(async (httpRes) => {
          const res: APIResponse = await httpRes.json();
          if (httpRes.ok) {
            console.log("res is ok");
            const subcategoriesByCat = res.data.reduce(
              (acc: any, item: any) => {
                let key = item.category_id;
                let cummulativeData = acc[key] ? acc[key] : [];
                return { ...acc, [key]: [...cummulativeData, item] };
              },
              {}
            );
            setSubcategories(subcategoriesByCat);
          } else {
            console.log("res is not ok");
            alert(res.message);
          }
        });
      } else {
        console.log("res is not ok");
        alert(res.message);
      }
    });
  }, []);

  return (
    <div>
      <div
        className="position-absolute w-100 z-1 collapse"
        id="collapseCategoriesAccordion"
      >
        <div className="d-flex w-100 flex-column justify-content-evenly ">
          <div className="d-flex justify-content-between align-items-center bg-white pe-3">
            <CategoryMenu id={-1} name="home" title="home" classes=" py-3" />
            <label className="fw-semibold">Categories</label>
            <button
              className="btn btn-outline-dark border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCategoriesAccordion"
              aria-expanded="false"
              aria-controls="collapseCategoriesAccordion"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>
          <div className="accordion" id="accordionMenu">
            {categories.map((category: any) => (
              <CategoryAccordion
                key={category.id}
                id={category.id}
                name={category.name}
                title={category.title}
                subcategories={
                  subcategories[category.id as keyof typeof subcategories]
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-lg pt-1 pt-md-4">
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
          <div className="col-md-8 col-lg-6 d-flex align-items-center  gap-1 mb-2 mb-md-0">
            <div className="position-relative w-100">
              <input
                className={`${css.formControlCustom}`}
                placeholder="Search"
              />
              <button
                className={`  position-absolute end-0 rounded-end-2 h-100 border-0 px-2`}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>

            {authState.id !== -1 && (
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={`  p-2 rounded-5`}
                  size="xl"
                />
              </Link>
            )}
            <AvatarTab />
          </div>
        </div>
      </div>
      <div
        className="d-none d-md-block bg-black w-100"
        style={{ height: "3.5rem" }}
      >
        <div className=" container-lg h-100 p-0">
          <div className="d-flex justify-content-start gap-3 h-100">
            <div className="d-flex w-100 justify-content-evenly ">
              <CategoryMenu id={-1} name="home" title="home" />
              {categories.map((category: any) => (
                <CategoryMenu
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  title={category.title}
                  subcategories={
                    subcategories[category.id as keyof typeof subcategories]
                  }
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
