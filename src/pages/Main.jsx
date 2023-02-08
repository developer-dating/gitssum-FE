import React from "react";
import Mains from "../components/main/Main";
import Nav from "../components/nav/Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("is_login");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);
  return (
    <>
      <Mains />
      <Nav />
    </>
  );
};

export default Main;
