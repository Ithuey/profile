import React, { useState } from "react";
import { motion } from "framer-motion";

import arrow from "../arrow.svg";

import video from "./assets/redmaple.mp4";

import PDFResume from "../documents/ToddCarpenterResume.pdf";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";

import "../Home.css";
import "../App.css";

import { Link } from "react-scroll";

function Home() {
  return (
    <div className="home" id="home">
      <video autoPlay muted loop src={video}></video>

      <div className="textContainer">
        <ul className="ulText">
          <li style={{ fontSize: "50px" }} className="homeList">
            Hello, My name is <b>Todd Carpenter</b>.
          </li>
          <li style={{ fontSize: "50px" }} className="homeList">
            I'm a web developer.
          </li>
          <li className="homeList">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button align="center" className="btnProject">
                View my work
                <img
                  style={{ verticalAlign: "middle" }}
                  align="center"
                  src={arrow}
                />
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="iconContainer">
        <ul className="icons">
          <motion.li
            className="icons"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a target="_blank" href={PDFResume} title="Resume">
              <TiDocument size={30} />
            </a>
          </motion.li>
          <motion.li
            className="icons"
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
            className="icons"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a target="_blank" href="https://github.com/Ithuey" title="GitHub">
              <FaGithub size={30} />
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
