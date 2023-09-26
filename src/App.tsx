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
