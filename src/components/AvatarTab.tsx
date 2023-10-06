import { Link } from "react-router-dom";
import css from "./AvatarTab.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts";
import {
  faGlobe,
  faRightFromBracket,
  faUser,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AvatarTab() {
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
  }, []);

  const { authState, setAuthState } = useContext(AuthContext);
  return (
    <>
      {authState.id === -1 && (
        <div className="">
          <Link
            to="/auth/login"
            className={`${css.hoverClass} text-black text-decoration-none px-2 py-2 rounded-1`}
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className={`${css.hoverClass}  text-black text-decoration-none px-2 py-2 rounded-1`}
          >
            Signup
          </Link>
        </div>
      )}
      {authState.id !== -1 && (
        <div
          className="position-relative d-flex overflow-visible"
          style={{ height: "48px" }}
        >
          <button
            id="profileBtn"
            className={`${css.hoverClass} d-flex border-0 gap-2 align-items-center rounded-5`}
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
            />
          </button>
          <div
            className="collapse position-absolute top-100 end-0 bg-white "
            style={{ width: "500%" }}
            id="profilecollapse"
          >
            <div className="card">
              <div className="card-header text-center p-3">
                <span>Hi</span>
                <h6>{authState.firstname}</h6>
              </div>
              <div className="card-body p-0 w-auto">
                <div className="row m-0">
                  <div className={`${css.hoverClass} col-12 py-2`}>
                    <Link
                      to="/profile"
                      className="d-flex align-items-center gap-2 text-decoration-none text-black"
                    >
                      <FontAwesomeIcon icon={faUserGear} size="lg" />
                      Profile
                    </Link>
                  </div>
                  <div className={`${css.hoverClass} col-12 py-2`}>
                    <Link
                      to="/profile"
                      className="d-flex align-items-center gap-2 text-decoration-none text-black"
                    >
                      <FontAwesomeIcon icon={faGlobe} size="lg" />
                      Order History
                    </Link>
                  </div>
                  <div className={`${css.hoverClass} col-12 py-2`}>
                    <Link
                      to="/profile"
                      className="d-flex align-items-center gap-2 text-decoration-none text-black"
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                      Logout
                    </Link>
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
