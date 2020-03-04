import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";

//import './App.css';

function App() {
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
      <Home />
      <Header />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
