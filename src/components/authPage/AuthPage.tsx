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
    // if (location.pathname === "/signup") translateAuthScreen("signup");
    // else if (location.pathname === "/login") translateAuthScreen("login");
    // else if (location.pathname === "/forgotpassword")
    //   translateAuthScreen("forgotpassword");
    console.log(location.pathname);
  }, [location.key]);

  return (
    <div
      className="w-100 bgImage smooth"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="d-flex w-100 smooth" style={{ minHeight: "100vh" }}>
        <div
          id="signupScreen"
          className={
            `${location.pathname === "/signup" ? "" : "d-none"} ` +
            "w-custom smooth"
          }
          style={{
            minHeight: "100vh",
          }}
        >
          <div className="card rounded-0 border-0 w-100 h-100">
            <div className="card-body d-flex flex-column justify-content-start justify-content-lg-center p-5 gap-3">
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
                  <Link
                    to="/login"
                    className="small text-center text-decoration-none mt-1"
                  >
                    Already have an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="loginScreen"
          className={
            `${location.pathname === "/login" ? "" : "d-none"} ` +
            "w-custom smooth"
          }
          style={{ minHeight: "100vh" }}
        >
          <div className="card rounded-0 border-0 w-100 h-100">
            <div className="card-body d-flex flex-column justify-content-start justify-content-lg-center p-5 gap-3">
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
                    className="small float-end text-decoration-none mt-1"
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
                    className="small text-center text-decoration-none mt-1"
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
          className={
            `${location.pathname === "/forgotpassword" ? "" : "d-none"} ` +
            "w-custom smooth"
          }
          style={{ minHeight: "100vh" }}
        >
          <div className="card rounded-0 border-0 w-100 h-100">
            <div className="card-body d-flex flex-column justify-content-start justify-content-lg-center p-5 gap-3">
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
                    className="small text-center text-decoration-none mt-1"
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
