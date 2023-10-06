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
    // console.log(user);
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

    document.addEventListener("click", (event: Event) => {
      const menuList = document.querySelector("#menucollapse") as any;
      const menuBtn = document.querySelector("#menuBtn") as any;

      if (menuList !== null && event.target !== menuBtn) {
        // Hide the collapse element (if it's already expanded)
        if (menuList.classList.contains("show")) {
          menuBtn.click(); // Trigger a click on the button to hide the collapse element
        }
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className={` fixed-top bg-body-secondary w-100 z-2`}>
        <NavBar></NavBar>
      </div>
      <div className={`${css.marginTopCustom}  w-100 z-1`}>
        <div className="bg-black position-sticky" style={{ height: "64px" }}>
          {/* <div className="bg-black"> */}
          <div className="container-lg h-100 p-0">
            <div className="d-flex justify-content-center justify-content-md-start gap-md-3 h-100">
              <CategoryMenu id={-1} name="home" title="home" />
              <div className="d-none d-md-flex">
                {categories.map((category) => (
                  <CategoryMenu
                    id={category.id}
                    name={category.name}
                    title={category.title}
                  />
                ))}
              </div>
              <button
                id="menuBtn"
                className={`${css.hoverClass}  d-md-none d-flex justify-content-center align-items-center fw-bold outline-0 border-0`}
                data-bs-toggle="collapse"
                data-bs-target="#menucollapse"
                aria-expanded="false"
                aria-controls="menucollapse"
              >
                VIEW CATEGORIES
              </button>
            </div>
            <div className="collapse h-100 d-md-none" id="menucollapse">
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
