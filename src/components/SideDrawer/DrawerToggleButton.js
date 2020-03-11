import React from "react";
import { IoMdMenu } from "react-icons/io";

import "./DrawerToggleButton.css";

const DrawerToggleButton = props => (
  <button className="toggle_button" onClick={props.click}>
    <IoMdMenu size={30} />
  </button>
);

export default DrawerToggleButton;
