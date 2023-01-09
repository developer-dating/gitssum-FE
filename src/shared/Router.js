import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
