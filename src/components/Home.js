import React, { useState } from "react";
import { motion } from "framer-motion";

import arrow from "../arrow.svg";
import { Link, Redirect } from "react-router-dom";
import video from "./assets/redmaple.mp4";

import PDFResume from "../documents/ToddCarpenterResume.pdf";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";

import "../Home.css";
import "../App.css";
import "../Animations.css";

function Home() {
  return (
    <div className="container">
      <div className="animationContainerHome">
        <video autoPlay muted loop src={video}></video>
      </div>
      <div className="textContainer">
        <ul className="ulText">
          <li style={{ fontSize: "50px" }}>
            Hello, My name is <b>Todd Carpenter</b>.
          </li>
          <li style={{ fontSize: "50px" }}>I'm a full stack web developer.</li>
          <li>
            <Link to="/projects">
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
