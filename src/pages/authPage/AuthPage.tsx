import "./AuthPage.css";
import backImage from "../../resources/signupBackImage.jpg";
import websiteLogo from "../../resources/websiteTempLogo.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { decrypt, encrypt } from "../../crypto";

function AuthPage() {
  const location = useLocation();
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
  const BASE_URL = process.env.REACT_APP_BASE_URL as string;

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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((rawRes) => rawRes.json())
      .then((res) => console.log(res));
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((rawRes) => rawRes.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    if (location.pathname === "/auth/signup") validateSignup();
    if (location.pathname === "/auth/login") validateLogin();

    // if (location.pathname === "/signup") translateAuthScreen("signup");
    // else if (location.pathname === "/login") translateAuthScreen("login");
    // else if (location.pathname === "/forgotpassword")
    //   translateAuthScreen("forgotpassword");

    console.log(location.pathname, "rendered");
  }, [signupDetails, loginDetails]);

  return (
    <div
      className="w-100 bgImage smooth"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="d-flex w-100 smooth" style={{ minHeight: "100vh" }}>
        <div
          id="signupScreen"
          className={
            `${location.pathname === "/auth/signup" ? "" : "d-none"} ` +
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
                    className="form-control-custom"
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
                    className="form-control-custom"
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
                    className="form-control-custom"
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
                      // The following 4 lines mutate a state which is incorrect way of updating state, but validateSignup() depends on signupBlurDetails.
                      signupBlurDetails.firstname = true;
                      signupBlurDetails.lastname = true;
                      signupBlurDetails.email = true;
                      signupBlurDetails.password = true;
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
          className={
            `${location.pathname === "/auth/login" ? "" : "d-none"} ` +
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
                  <input
                    className="form-control-custom"
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
                    className="form-control-custom"
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
                      // The following 4 lines mutate a state which is incorrect way of updating state, but validateLogin() depends on loginBlurDetails.
                      loginBlurDetails.email = true;
                      loginBlurDetails.password = true;
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
          className={
            `${location.pathname === "/auth/forgotpassword" ? "" : "d-none"} ` +
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
