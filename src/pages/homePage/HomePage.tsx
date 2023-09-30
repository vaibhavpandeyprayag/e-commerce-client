import { Route, Routes } from "react-router-dom";
import Home from "../../components/Home";
import NavBar from "../../components/NavBar";
import Cart from "../../components/Cart";
import ErrorPage from "../../components/ErrorPage";
function HomePage() {
  return (
    <div className="position-relative">
      <div className="position-absolute bg-body-secondary d-flex justify-content-center px-3 pt-3 w-100 z-2">
        <NavBar></NavBar>
      </div>
      <div
        className="position-absolute w-100 z-1"
        style={{ marginTop: "128px" }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
