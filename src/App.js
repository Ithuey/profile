import React, { useState } from "react";
// import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

//import './App.css';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
      return { setSideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    // sideDrawer = <SideDrawer />;
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <div className="App">
      <Header drawerToggleClickHandler={drawerToggleClickHandler} />
      {/* {sideDrawer} */}
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
