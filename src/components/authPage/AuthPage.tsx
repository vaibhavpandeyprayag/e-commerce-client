import "./AuthPage.css";
import backImage from "../../resources/signupBackImage.jpg";
import websiteLogo from "../../resources/websiteTempLogo.jpg";

function AuthPage() {
  const translateAuthScreen = (direction: "up" | "down") => {
    document
      .querySelector("#authScreen")
      ?.classList.remove("translate-middle-y");
    if (direction === "up")
      document
        .querySelector("#authScreen")
        ?.classList.add("translate-middle-y");
  };
  return (
    <div
      className="w-100 bgImage overflow-hidden"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div
        id="authScreen"
        className="d-flex flex-column w-100 p-0 px-sm-5 px-md-5 translate-middle-y"
      >
        <div
          className="d-flex justify-content-start align-items-center p-0 px-md-5 px-lg-0"
          style={{ height: "100vh" }}
        >
          <div
            className="card w-custom h-custom"
            style={{ boxShadow: "0.2rem 0.2rem 5rem 2rem black" }}
          >
            <div className="card-body d-flex flex-column align-items-center gap-3">
              <img
                className="img-thumbnail"
                style={{ width: "100px" }}
                alt="logo"
                src={websiteLogo}
              />
              <h5 className="card-title text-center">Create your Account</h5>
              <div className="container d-flex flex-column mt-5 gap-2">
                <div className="row">
                  <div className="col align-self-center">First Name</div>
                  <div className="col-8">
                    <input className="form-control-custom" placeholder="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col align-self-center">Last Name</div>
                  <div className="col-8">
                    <input className="form-control-custom" placeholder="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col align-self-center">Email</div>
                  <div className="col-8">
                    <input className="form-control-custom" type="email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col align-self-center">Password</div>
                  <div className="col-8">
                    <input className="form-control-custom" type="password" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6 pe-0 align-self-center">
                    <button
                      className="btn btn-sm text-primary p-0 border-0"
                      onClick={() => {
                        translateAuthScreen("up");
                      }}
                    >
                      Already have an account
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary w-100 float-end rounded-1">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-start align-items-center p-0 px-md-5 px-lg-0"
          style={{ height: "100vh" }}
        >
          <div
            className="card w-custom h-custom"
            style={{ boxShadow: "0.2rem 0.2rem 5rem 2rem black" }}
          >
            <div className="card-body d-flex flex-column align-items-center gap-3">
              <img
                className="img-thumbnail"
                style={{ width: "100px" }}
                alt="logo"
                src={websiteLogo}
              />
              <h5 className="card-title text-center">Login</h5>
              <div className="container d-flex flex-column mt-5 gap-2">
                <div className="row">
                  <div className="col align-self-center">Email</div>
                  <div className="col-8">
                    <input className="form-control-custom" type="email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col align-self-center">Password</div>
                  <div className="col-8">
                    <input className="form-control-custom" type="password" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6 pe-0 align-self-center">
                    <button
                      className="btn btn-sm text-primary p-0 border-0"
                      onClick={() => {
                        translateAuthScreen("down");
                      }}
                    >
                      Create an account
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary w-100 float-end rounded-1">
                      Login
                    </button>
                  </div>
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
