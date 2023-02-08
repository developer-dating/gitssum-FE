import React from "react";
import Nav from "../components/nav/Nav";
import Profile from "../components/profile/Profile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SetProfile = () => {
  const navigate = useNavigate();
  const profile = localStorage.getItem("state");
  console.log(profile);

  useEffect(() => {
    if (profile === "true") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Profile />
      <Nav />
    </>
  );
};

export default SetProfile;
