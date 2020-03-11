import React from "react";
import { Link } from "react-scroll";
import "./SideDrawer.css";
import { motion } from "framer-motion";

const SideDrawer = () => (
  <nav className="side-drawer">
    <ul>
      <motion.li className="navbar" animate={{}} whileTap={{ scale: 0.9 }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
      </motion.li>
      <motion.li whileTap={{ scale: 0.9 }} className="navbar">
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>
      </motion.li>
      <motion.li whileTap={{ scale: 0.9 }} className="navbar">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </motion.li>
    </ul>
  </nav>
);

export default SideDrawer;
