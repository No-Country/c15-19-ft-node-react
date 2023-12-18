import React from "react";
import Header from "../../layout/Header/Header";
import NavBarLower from "../../components/NavBarLower/NavBarLower";
import { Outlet } from "react-router-dom";
const Wrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
      <NavBarLower />
    </>
  );
};

export default Wrapper;
