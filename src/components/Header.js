import React from "react";
import { motion } from "framer-motion";
import "../Header.css";
import { Link } from "react-router-dom";
import PDFResume from "../documents/ToddCarpenterResume.pdf";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <h2 style={{ color: "#FC5185" }}>Todd Carpenter</h2>
          <ul>
            <motion.li
              animate={{}}
              whileHover={{
                scale: 1.1
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
              <a target="_blank" href={PDFResume} title="Resume">
                <TiDocument size={30} />
              </a>
            </motion.li>
            <motion.li
              className="navIcons"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                target="_blank"
                href="https://linkedin.com/in/todd-houston-carpenter"
                title="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
            </motion.li>
            <motion.li
              className="navIcons"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                target="_blank"
                href="https://github.com/Ithuey"
                title="GitHub"
              >
                <FaGithub size={30} />
              </a>
            </motion.li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
