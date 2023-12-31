import css from "./AuthPage.module.css";
import backImage from "../../resources/signupBackImage.jpg";
import websiteLogo from "../../resources/websiteTempLogo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { encrypt } from "../../crypto";
import { APIResponse, BASE_URL, loggedIn } from "../../sharedExports";

function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevPathname, setPrevPathname] = useState("/auth/login");
  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [signupBlurDetails, setSignupBlurDetails] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
  });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [loginBlurDetails, setLoginBlurDetails] = useState({
    email: false,
    password: false,
  });
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");

  const validateSignup = () => {
    const nameRegex = /^[A-Za-z'-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    setSignupError("");
    if (
      signupBlurDetails.firstname === true &&
      signupDetails.firstname === ""
    ) {
      setSignupError("Firstname is required");
      return false;
    }
    if (
      signupBlurDetails.firstname === true &&
      !nameRegex.test(signupDetails.firstname)
    ) {
      setSignupError("Firstname can have only letters with no spaces");
      return false;
    }
    if (signupBlurDetails.lastname === true && signupDetails.lastname === "") {
      setSignupError("Lastname is required");
      return false;
    }
    if (
      signupBlurDetails.lastname === true &&
      !nameRegex.test(signupDetails.lastname)
    ) {
      setSignupError("Lastname can have only letters with no spaces");
      return false;
    }
    if (signupBlurDetails.email === true && signupDetails.email === "") {
      setSignupError("Email is required");
      return false;
    }
    if (
      signupBlurDetails.email === true &&
      !emailRegex.test(signupDetails.email)
    ) {
      setSignupError("Enter a valid email");
      return false;
    }
    if (signupBlurDetails.password === true && signupDetails.password === "") {
      setSignupError("Password is required");
      return false;
    }
    if (
      signupBlurDetails.password === true &&
      !passwordRegex.test(signupDetails.password)
    ) {
      setSignupError(
        "Password must contain at least 8 characters, uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), special characters"
      );
      return false;
    }
    return true;
  };
  const signup = () => {
    console.log("signup() called.");
    if (!validateSignup()) return;
    console.log("signup form validated");
    let payload = {
      ...signupDetails,
      password: encrypt(signupDetails.password),
    };
    fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(async (httpRes) => {
      // console.log(httpRes);
      const res: APIResponse = await httpRes.json();
      if (httpRes.ok) {
        console.log("res is ok");
        // console.log(res);
      } else {
        console.log("res is not ok");
        alert(res.message);
      }
    });
  };
  const validateLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (loginBlurDetails.email === true && loginDetails.email === "") {
      setLoginError("Email is required");
      return false;
    }
    if (
      loginBlurDetails.email === true &&
      !emailRegex.test(loginDetails.email)
    ) {
      setLoginError("Enter a valid email");
      return false;
    }
    if (loginBlurDetails.password === true && loginDetails.password === "") {
      setLoginError("Password is required");
      return false;
    }
    return true;
  };
  const login = () => {
    console.log("login() called.");
    if (!validateLogin()) return;
    console.log("login form validated");
    let payload = {
      email: loginDetails.email,
      password: encrypt(loginDetails.password),
    };
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (httpRes) => {
        // console.log(httpRes);
        const res: APIResponse = await httpRes.json();
        // console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/home");
      })
      .catch((error: Error) => {
        console.log("Network response was not ok.", error.message);
      });
  };

  useEffect(() => {
    console.log("Auth page rendered 1st time.");
    let token = localStorage.getItem("user") as string;
    if (token != null) {
      loggedIn(token).then((isLoggedIn) => {
        if (isLoggedIn) {
          console.log("Already logged in.");
          navigate("/home");
        } else {
          console.log("Session expired");
          localStorage.removeItem("user");
        }
      });
    } else console.log("Null token");
  }, []);

  useEffect(() => {
    if (location.pathname === "/auth/signup") validateSignup();
    else if (location.pathname === "/auth/login") validateLogin();
  }, [signupDetails, loginDetails]);
  return (
    <div
      className={`w-100 ${css.bgImage}`}
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="d-flex w-100" style={{ minHeight: "100vh" }}>
        <div
          id="signupScreen"
          className={`${location.pathname === "/auth/signup" ? "" : "d-none"} ${
            css.wCustom
          } `}
          style={{
            minHeight: "100vh",
          }}
        >
          <div className="card rounded-0 border-0 w-100 h-100">
            <div className="card-body d-flex flex-column justify-content-start justify-content-lg-center p-5 gap-3">
              <img
                className="border rounded-circle align-self-center"
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
                    className={`${css.formControlCustom}`}
                    value={signupDetails.firstname}
                    onInput={(e) => {
                      const value = e.currentTarget.value;
                      setSignupDetails((prevState) => ({
                        ...prevState,
                        firstname: value,
                      }));
                      setSignupBlurDetails((prevState) => ({
                        ...prevState,
                        firstname: true,
                      }));
                    }}
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-secondary">Last Name</label>
                  <input
                    name="lastname"
                    className={`${css.formControlCustom}`}
                    onInput={(e) => {
                      const value = e.currentTarget.value;
                      setSignupDetails((prevState) => ({
                        ...prevState,
                        lastname: value,
                      }));
                      setSignupBlurDetails((prevState) => ({
                        ...prevState,
                        lastname: true,
                      }));
                    }}
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-secondary">Email</label>
                  <input
                    name="email"
                    className={`${css.formControlCustom}`}
                    onInput={(e) => {
                      const value = e.currentTarget.value;
                      setSignupDetails((prevState) => ({
                        ...prevState,
                        email: value,
                      }));
                      setSignupBlurDetails((prevState) => ({
                        ...prevState,
                        email: true,
                      }));
                    }}
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-secondary">Password</label>
                  <input
                    name="password"
                    className={`${css.formControlCustom}`}
                    onInput={(e) => {
                      const value = e.currentTarget.value;
                      setSignupDetails((prevState) => ({
                        ...prevState,
                        password: value,
                      }));
                      setSignupBlurDetails((prevState) => ({
                        ...prevState,
                        password: true,
                      }));
                    }}
                    type="password"
                  />
                </div>
                {signupError && (
                  <div className="d-flex justify-content-start align-items-center gap-3 rounded-2 bg-danger-subtle text-danger w-100 p-2">
                    <FontAwesomeIcon
                      style={{ width: "25px", height: "25px" }}
                      icon="exclamation-circle"
                    />
                    {signupError}
                  </div>
                )}
                <div className="d-flex flex-column">
                  <button
                    className="btn btn-primary w-100 rounded-1"
                    onClick={() => {
                      setSignupBlurDetails((prevState) => ({
                        firstname: true,
                        lastname: true,
                        email: true,
                        password: true,
                      }));
                      signup();
                    }}
                  >
                    Sign up
                  </button>
                  <Link
                    to="/auth/login"
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
          className={`${location.pathname === "/auth/login" ? "" : "d-none"} ${
            css.wCustom
          } `}
          style={{ minHeight: "100vh" }}
        >
          <div className="card rounded-0 border-0 w-100 h-100">
            <div className="card-body d-flex flex-column justify-content-start justify-content-lg-center p-5 gap-3">
              <img
                className="border rounded-circle align-self-center"
                style={{ width: "100px" }}
                alt="logo"
                src={websiteLogo}
              />
              <h5 className="card-title text-center">Login</h5>
              <div className="d-flex flex-column mt-3 gap-2">
                <div>
                  <label className="text-secondary">Email</label>
                  <input
                    className={`${css.formControlCustom}`}
                    onInput={(e) => {
                      const value = e.currentTarget.value;
                      setLoginDetails((prevState) => ({
                        ...prevState,
                        email: value,
                      }));
                      setLoginBlurDetails((prevState) => ({
                        ...prevState,
                        email: true,
                      }));
                    }}
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-secondary">Password</label>
                  <input
                    className={`${css.formControlCustom}`}
                    onInput={(e) => {
                      const value = e.currentTarget.value;
                      setLoginDetails((prevState) => ({
                        ...prevState,
                        password: value,
                      }));
                      setLoginBlurDetails((prevState) => ({
                        ...prevState,
                        password: true,
                      }));
                    }}
                    type="password"
                  />
                  <Link
                    to="/auth/forgotpassword"
                    className="small float-end text-decoration-none mt-1"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="d-flex flex-column mt-5">
                  <button
                    className="btn btn-primary w-100 rounded-1"
                    onClick={() => {
                      setLoginBlurDetails((prevState) => ({
                        email: true,
                        password: true,
                      }));
                      login();
                    }}
                  >
                    Login
                  </button>
                  <Link
                    to="/auth/signup"
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
          className={`${
            location.pathname === "/auth/forgotpassword" ? "" : "d-none"
          } ${css.wCustom} `}
          style={{ minHeight: "100vh" }}
        >
          <div className="card rounded-0 border-0 w-100 h-100">
            <div className="card-body d-flex flex-column justify-content-start justify-content-lg-center p-5 gap-3">
              <img
                className="border rounded-circle align-self-center"
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
                  <input className={`${css.formControlCustom}`} type="email" />
                </div>
                <div className="d-flex flex-column mt-5">
                  <button className="btn btn-primary w-100 rounded-1">
                    Send OTP
                  </button>
                  <Link
                    to="/auth/login"
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
