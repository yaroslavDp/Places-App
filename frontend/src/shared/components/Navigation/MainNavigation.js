import React, { useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";
import Backdrop from "../UI/Backdrop";

const MainNavigation = (props) => {

  const [isDrawOpen, setIsDrawOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawOpen(!isDrawOpen);
  };
  return (
    <>
    {isDrawOpen && <Backdrop onClick={handleOpenDrawer}/>}
      <SideDrawer show={isDrawOpen} onClick={handleOpenDrawer}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks/>
          </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={handleOpenDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks/>
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
