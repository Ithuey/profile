import React from "react";
import { motion } from "framer-motion";
import "../Header.css";
import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <h2>Todd Carpenter</h2>
          <ul>
            <motion.li
              animate={{}}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 3px 2px rgba(78, 166, 153, 1)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/projects">Projects</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/contact">Contact</Link>
            </motion.li>
          </ul>
        </nav>
        <nav className="navIcons">
          <ul>
            <motion.li
              className="navIcons"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={30} />
            </motion.li>
            <motion.li
              className="navIcons"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={30} />
            </motion.li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
