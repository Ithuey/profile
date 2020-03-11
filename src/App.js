import React, { useState } from "react";
// import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
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
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    // <BrowserRouter>
    //   <React.Fragment>
    //     <Route exact path="/" component={Home} />
    //     <Header />
    //     <Route path="/projects" component={Project} />
    //     <Route path="/contact" component={Contact} />
    //   </React.Fragment>
    // </BrowserRouter>
    <div className="App">
      <Header drawerToggleClickHandler={drawerToggleClickHandler} />
      {sideDrawer}
      {backdrop}
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
