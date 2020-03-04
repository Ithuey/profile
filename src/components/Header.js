import React from "react";
import { motion } from "framer-motion";
import "../Header.css";

import PDFResume from "../documents/ToddCarpenterResume.pdf";
import { Link, animateScroll } from "react-scroll";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";

function Header() {
  return (
    <nav>
      <h2 style={{ color: "#cb3b3b" }}>Todd Carpenter</h2>
      <ul>
        <motion.li
          className="navbar"
          animate={{}}
          whileHover={{
            scale: 1.1
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="navbar"
        >
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="navbar"
        >
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
}

export default Header;
{
  /* <nav className="navIcons">
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
        </nav> */
}
