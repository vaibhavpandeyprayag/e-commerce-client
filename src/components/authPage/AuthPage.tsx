import "./AuthPage.css";
import backImage from "../../resources/signupBackImage.jpg";
import websiteLogo from "../../resources/websiteTempLogo.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CryptoJS from "crypto-js";

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
  const [error, setError] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL as string;
  const CRYPTO_KEY = process.env.REACT_APP_CRYPTO_KEY as string;

  // var signupDetails: any = {
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  // };
  // const updateSignupDetails = (property: string, value: string) => {
  //   signupDetails = { ...signupDetails, [property]: value };
  //   console.log(signupDetails);
  // };

  const validateSignup = () => {
    const nameRegex = /^[A-Za-z'-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    setError("");
    if (
      signupBlurDetails.firstname === true &&
      signupDetails.firstname === ""
    ) {
      setError("Firstname is required");
      return false;
    }
    if (
      signupBlurDetails.firstname === true &&
      !nameRegex.test(signupDetails.firstname)
    ) {
      setError("Firstname can have only letters with no spaces");
      return false;
    }
    if (signupBlurDetails.lastname === true && signupDetails.lastname === "") {
      setError("Lastname is required");
      return false;
    }
    if (
      signupBlurDetails.lastname === true &&
      !nameRegex.test(signupDetails.lastname)
    ) {
      setError("Lastname can have only letters with no spaces");
      return false;
    }
    if (signupBlurDetails.email === true && signupDetails.email === "") {
      setError("Email is required");
      return false;
    }
    if (
      signupBlurDetails.email === true &&
      !emailRegex.test(signupDetails.email)
    ) {
      setError("Enter a valid email.");
      return false;
    }
    if (signupBlurDetails.password === true && signupDetails.password === "") {
      setError("Password is required");
      return false;
    }
    if (
      signupBlurDetails.password === true &&
      !passwordRegex.test(signupDetails.password)
    ) {
      setError(
        "Password must contain at least 8 characters, uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), special characters"
      );
      return false;
    }
    return true;
  };
  const validateLogin = () => {};
  const signup = () => {
    console.log("signup() called.");
    if (!validateSignup()) return;
    console.log("signup form validated");
    let payload = {
      firstname: signupDetails.firstname,
      lastname: signupDetails.lastname,
      email: signupDetails.email,
      password: CryptoJS.AES.encrypt(
        signupDetails.password,
        CRYPTO_KEY
      ).toString(),
    };
    fetch(`${BASE_URL}/signup`, {
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
    validateSignup();
    // if (location.pathname === "/signup") translateAuthScreen("signup");
    // else if (location.pathname === "/login") translateAuthScreen("login");
    // else if (location.pathname === "/forgotpassword")
    //   translateAuthScreen("forgotpassword");

    console.log(location.pathname, "rendered");
  }, [signupDetails]);

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
                {error && (
                  <div className="d-flex justify-content-start align-items-center gap-3 rounded-2 bg-danger-subtle text-danger w-100 p-2">
                    <FontAwesomeIcon
                      style={{ width: "25px", height: "25px" }}
                      icon="exclamation-circle"
                    />
                    {error}
                  </div>
                )}
                <div className="d-flex flex-column">
                  <button
                    className="btn btn-primary w-100 rounded-1"
                    onClick={() => {
                      // The following 4 lines mutate a state which is incorrect way of updating state, but signup() depends on signupBlurDetails.
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
