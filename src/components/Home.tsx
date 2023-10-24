import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loggedIn } from "../sharedExports";
import CategoryMenu from "./CategtoryMenu";

function Home() {
  useEffect(() => {
    // const token = localStorage.getItem("user");
    // if (token !== null)
    //   loggedIn(token).then((isLoggedIn) => {
    //     if (isLoggedIn) {
    //       console.log("Already logged in.");
    //     } else {
    //       console.log("Session expired");
    //       navigate("/");
    //     }
    //   });
    // else {
    //   console.log("Null token");
    //   navigate("/");
    // }
  }, []);
  return (
    <div className="bg-success-subtle">
      <div className="p-5">HOME</div>
      <div className="p-5">HOME</div>
      <div className="p-5">HOME</div>
      <div className="p-5">HOME</div>
      <div className="p-5">HOME</div>
      <div className="p-5">HOME</div>
      <div className="p-5">HOME</div>
      <div className="p-5">HOME</div>
    </div>
  );
}

export default Home;
