import "./AuthPage.css";
import backImage from "../../resources/signupBackImage.jpg";
import websiteLogo from "../../resources/websiteTempLogo.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function AuthPage() {
  const location = useLocation();
  const BASE_URL = process.env.REACT_APP_BASE_URL as string;
  var signupDetails: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const updateSignupDetails = (property: string, value: string) => {
    signupDetails = { ...signupDetails, [property]: value };
    console.log(signupDetails);
  };
  const translateAuthScreen = (
    display: "signup" | "login" | "forgotpassword"
  ) => {
    if (display === "signup") {
      document
        .querySelector("#authScreen")
        ?.setAttribute("style", "translate: 0px 0px");
    } else if (display === "login") {
      document
        .querySelector("#authScreen")
        ?.setAttribute("style", "translate: 0px -33.33%");
    } else if (display === "forgotpassword") {
      document
        .querySelector("#authScreen")
        ?.setAttribute("style", "translate: 0px -66.66%");
    }
  };

  const validateSignup = () => {
    const nameRegex = /^[A-Za-z'-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  };
  const validateLogin = () => {};
  const signup = () => {
    console.log(BASE_URL);
    console.log(location.pathname);
    // axios.post(BASE_URL, {hello: "world"})
  };

  useEffect(() => {
    if (location.pathname === "/signup") translateAuthScreen("signup");
    else if (location.pathname === "/login") translateAuthScreen("login");
    else if (location.pathname === "/forgotpassword")
      translateAuthScreen("forgotpassword");
  }, [location.key]);

  return (
    <div
      className="w-100 bgImage overflow-hidden"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div id="authScreen" className="d-flex flex-column w-100">
        <div
          id="signupScreen"
          className="d-flex justify-content-start align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card rounded-0 border-0 w-custom h-100">
            <div className="card-body d-flex flex-column justify-content-center p-5 gap-3">
              <img
                className="img-thumbnail align-self-center"
                style={{ width: "100px" }}
                alt="logo"
                src={websiteLogo}
              />
              <h5 className="card-title text-center">Create your Account</h5>
              <div className="d-flex flex-column mt-3 gap-2">
                <div>
                  <label className="text-secondary">First Name</label>
                  <input
                    name="firstname"
                    className="form-control-custom"
                    onInput={(e) =>
                      updateSignupDetails(
                        e.currentTarget.name,
                        e.currentTarget.value
                      )
                    }
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-secondary">Last Name</label>
                  <input
                    name="lastname"
                    className="form-control-custom"
                    onInput={(e) =>
                      updateSignupDetails(
                        e.currentTarget.name,
                        e.currentTarget.value
                      )
                    }
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-secondary">Email</label>
                  <input
                    name="email"
                    className="form-control-custom"
                    onInput={(e) =>
                      updateSignupDetails(
                        e.currentTarget.name,
                        e.currentTarget.value
                      )
                    }
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-secondary">Password</label>
                  <input
                    name="password"
                    className="form-control-custom"
                    onInput={(e) =>
                      updateSignupDetails(
                        e.currentTarget.name,
                        e.currentTarget.value
                      )
                    }
                    type="password"
                  />
                </div>
                <div className="d-flex flex-column mt-5">
                  <button className="btn btn-primary w-100 rounded-1">
                    Sign up
                  </button>
                  <Link to="/login" className="small text-decoration-none mt-1">
                    Already have an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="loginScreen"
          className="d-flex justify-content-start align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card rounded-0 border-0 w-custom h-100">
            <div className="card-body d-flex flex-column justify-content-center p-5 gap-3">
              <img
                className="img-thumbnail align-self-center"
                style={{ width: "100px" }}
                alt="logo"
                src={websiteLogo}
              />
              <h5 className="card-title text-center">Login</h5>
              <div className="d-flex flex-column mt-3 gap-2">
                <div>
                  <label className="text-secondary">Email</label>
                  <input className="form-control-custom" type="email" />
                </div>
                <div>
                  <label className="text-secondary">Password</label>
                  <input className="form-control-custom" type="password" />
                  <Link
                    to="/forgotpassword"
                    className="small text-decoration-none mt-1 float-end"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="d-flex flex-column mt-5">
                  <button className="btn btn-primary w-100 rounded-1">
                    Login
                  </button>
                  <Link
                    to="/signup"
                    className="btn btn-sm text-primary p-0 mt-1 border-0"
                  >
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="forgotpasswordScreen"
          className="d-flex justify-content-start align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card rounded-0 border-0 w-custom h-100">
            <div className="card-body d-flex flex-column justify-content-center p-5 gap-3">
              <img
                className="img-thumbnail align-self-center"
                style={{ width: "100px" }}
                alt="logo"
                src={websiteLogo}
              />
              <h5 className="card-title text-center">Forgot Password?</h5>
              <div className="d-flex flex-column mt-3 gap-2">
                <div>
                  <label className="text-secondary small">
                    Enter your Email and we will send you an OTP to reset the
                    password.
                  </label>
                  <input className="form-control-custom" type="email" />
                </div>
                <div className="d-flex flex-column mt-5">
                  <button className="btn btn-primary w-100 rounded-1">
                    Send OTP
                  </button>
                  <Link
                    to="/login"
                    className="btn btn-sm text-primary p-0 mt-1 border-0"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
