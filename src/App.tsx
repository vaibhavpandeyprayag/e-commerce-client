import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import AuthPage from "./pages/authPage/AuthPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  useEffect(() => {
    // Function to make the API call
    // const fetchData = async () => {
    //   try {
    //     const URL =
    //       (process.env.NODE_ENV === "production"
    //         ? process.env.REACT_APP_PROD_API_URL
    //         : process.env.REACT_APP_LOCAL_API_URL) + "/api/data";
    //     const response = await fetch(URL); // Replace "/api/data" with your actual API endpoint
    //     const data = await response.json();
    //     console.log(data); // Handle the data received from the server
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchData(); // Call the function to fetch the data
  }, []); // Empty dependency array to run the effect only once
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/auth/signup" element={<AuthPage />}></Route>
      <Route path="/auth/login" element={<AuthPage />}></Route>
      <Route path="/auth/forgotpassword" element={<AuthPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
library.add(fab, fas, far);
