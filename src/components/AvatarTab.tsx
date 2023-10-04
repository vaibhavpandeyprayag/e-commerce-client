import { Link } from "react-router-dom";
import css from "./AvatarTab.module.css";
import { useContext } from "react";
import { AuthContext } from "../contexts";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AvatarTab({ breakpoint }: { breakpoint: "belowmd" | "abovemd" }) {
  const { authState, setAuthState } = useContext(AuthContext);
  return (
    <>
      {authState.id === -1 && (
        <div>
          <Link
            to="/auth/login"
            className={`${css.hoverClass}  text-black text-decoration-none px-2 py-1 rounded-1`}
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className={`${css.hoverClass}  text-black text-decoration-none px-2 py-1 rounded-1`}
          >
            Signup
          </Link>
        </div>
      )}
      {authState.id !== -1 && (
        <button
          className={`${css.hoverClass}  d-flex border-0 gap-2 align-items-center py-2 px-2 rounded-2`}
        >
          <span className="fw-bold">{authState.firstname}</span>
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            className="p-2 text-white bg-dark rounded-5"
          />
        </button>
      )}
    </>
  );
}

export default AvatarTab;
