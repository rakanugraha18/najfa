import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
