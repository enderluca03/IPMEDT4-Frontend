import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import AddAdvice from "./pages/addadvice.jsx";
import Login from "./pages/login.jsx";
import EditAdvice from "./pages/editadvice.jsx";
import AllAdvices from "./pages/alladvices.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addadvice" element={<AddAdvice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editadvice" element={<EditAdvice />}/>
        <Route path="/alladvices" element={<AllAdvices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
