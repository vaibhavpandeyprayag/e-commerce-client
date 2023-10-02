import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts";
import { loggedIn } from "../../sharedExports";
import Home from "../../components/Home";
import Cart from "../../components/Cart";
import ErrorPage from "../../components/ErrorPage";

function HomePage() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({
    id: -1,
    firstname: "",
  });

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
      <div className="position-relative">
        <div className="position-absolute bg-body-secondary w-100 z-2">
          <NavBar></NavBar>
        </div>
        <div
          className="position-absolute w-100 z-1"
          style={{ marginTop: "128px" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default HomePage;
