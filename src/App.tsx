import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage/AuthPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />}></Route>
      <Route path="/auth/signup" element={<AuthPage />}></Route>
      <Route path="/auth/login" element={<AuthPage />}></Route>
      <Route path="/auth/forgotpassword" element={<AuthPage />}></Route>
    </Routes>
  );
}

export default App;
library.add(fab, fas, far);
