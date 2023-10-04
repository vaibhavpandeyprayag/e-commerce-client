import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts";
import { loggedIn } from "../../sharedExports";
import Home from "../../components/Home";
import Cart from "../../components/Cart";
import ErrorPage from "../../components/ErrorPage";
import CategoryMenu from "../../components/CategtoryMenu";
import css from "./HomePage.module.css";
import ProductList from "../../components/ProductList";

function HomePage() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({
    id: -1,
    firstname: "",
  });
  const categories = [
    { id: 1, name: "phones", title: "phones" },
    { id: 2, name: "mensclothes", title: "men's clothes" },
    { id: 3, name: "womensclothes", title: "women's clothes" },
    { id: 4, name: "office", title: "office" },
    { id: 5, name: "kids", title: "kids" },
    { id: 6, name: "shoes", title: "shoes" },
  ];

  const topCategoriesCount = 3;
  useEffect(() => {
    console.log("HomePage rendered.");
    const user = JSON.parse(localStorage.getItem("user") as string);
    console.log(user);
    if (user !== null)
      loggedIn(user.token).then((isLoggedIn) => {
        if (isLoggedIn) {
          console.log("Already logged in.");
          setAuthState((prevState) => ({
            ...prevState,
            id: user.id,
            firstname: user.firstname,
          }));
          console.log("authState updated.");
        } else {
          console.log("Session expired");
          navigate("/");
        }
      });
    else {
      console.log("Null token");
      navigate("/");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className={` fixed-top bg-body-secondary w-100 z-2`}>
        <NavBar></NavBar>
      </div>
      <div className={`${css.marginTopCustom}  w-100 z-1`}>
        <div
          className="bg-black"
          style={{ height: "64px", overflow: "visible" }}
        >
          <nav className="navbar navbar-expand-md">
            <div className="container-lg d-flex justify-content-center">
              <a className="navbar-brand m-0" style={{ fontSize: "16px" }}>
                <CategoryMenu id={-1} name="home" title="home" />
              </a>
              <button
                className={`${css.hoverClass} ${css.toggleBtnClass} rounded-1  p-2 fw-bold`}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                VIEW CATEGORIES
                {/* <span className="navbar-toggler-icon"></span> */}
              </button>
              <div className="collapse navbar-collapse bg-black" id="navbarNav">
                <ul className="navbar-nav">
                  {categories.map((category) => (
                    <CategoryMenu
                      id={category.id}
                      name={category.name}
                      title={category.title}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories/:id/:name" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default HomePage;
