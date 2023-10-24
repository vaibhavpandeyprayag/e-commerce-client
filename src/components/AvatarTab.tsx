import { Link, useNavigate } from "react-router-dom";
import css from "./AvatarTab.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts";
import {
  faGlobe,
  faHeart,
  faRightFromBracket,
  faRightToBracket,
  faUser,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContextState } from "../sharedExports";

function AvatarTab() {
  const { authState, setAuthState } = useContext(AuthContext);

  const logout = () => {
    setAuthState({ id: -1, name: "" });
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    document.addEventListener("click", (event: Event) => {
      const profilePopup = document.querySelector("#profilecollapse") as any;
      const profileBtn = document.querySelector("#profileBtn") as any;

      if (
        profilePopup !== null &&
        !profilePopup.contains(event.target as any) &&
        event.target !== profileBtn
      ) {
        // Hide the collapse element (if it's already expanded)
        if (profilePopup.classList.contains("show")) {
          profileBtn.click(); // Trigger a click on the button to hide the collapse element
        }
      }
    });
  }, [authState]);
  return (
    <>
      {authState.id === -1 && (
        <Link
          to="/auth/login"
          className={` d-flex align-items-center gap-2 text-black text-decoration-none px-2 py-2 rounded-1`}
        >
          Login
          <FontAwesomeIcon icon={faRightToBracket} size="lg" />
        </Link>
      )}
      {authState.id !== -1 && (
        <div
          className="position-relative d-flex overflow-visible"
          style={{ height: "48px" }}
        >
          <button
            id="profileBtn"
            className={` d-flex border-0 gap-2 align-items-center rounded-5`}
            data-bs-toggle="collapse"
            data-bs-target="#profilecollapse"
            aria-expanded="false"
            aria-controls="profilecollapse"
            // onClick={() => {
            //   document
            //     .querySelector("#profilecollapse")
            //     ?.classList.toggle("expanded");
            // }}
          >
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              className="p-2 text-white bg-dark rounded-5"
              style={{ width: "1.3rem" }}
            />
          </button>
          <div
            className="collapse position-absolute top-100 end-0 "
            style={{ width: "500%" }}
            id="profilecollapse"
          >
            <div className="card">
              <div className="card-header text-center p-3">
                <span>Hi</span>
                <h6>{authState.name}</h6>
              </div>
              <div className="card-body p-0 w-auto">
                <div className="row m-0">
                  <div className={` col-12 p-0`}>
                    <Link
                      to="/profile"
                      className="d-flex align-items-center py-2 px-3 gap-2 text-decoration-none text-black"
                    >
                      <FontAwesomeIcon icon={faUserGear} size="lg" />
                      Profile
                    </Link>
                  </div>
                  <div className={` col-12 p-0`}>
                    <Link
                      to="/likedproductspage"
                      className="d-flex align-items-center py-2 px-3 gap-2 text-decoration-none"
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="xl"
                        className="text-danger"
                      />
                      <span className="text-black">Liked Products</span>
                    </Link>
                  </div>
                  <div className={` col-12 p-0`}>
                    <Link
                      to="/profile"
                      className="d-flex align-items-center py-2 px-3 gap-2 text-decoration-none"
                    >
                      <FontAwesomeIcon icon={faGlobe} size="lg" />
                      <span className="text-black">Order History</span>
                    </Link>
                  </div>
                  <div className={` col-12 p-0`}>
                    <button
                      className="btn p-0 border-0 d-flex align-items-center py-2 px-3 w-100 gap-2 text-decoration-none text-black"
                      onClick={() => logout()}
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AvatarTab;
