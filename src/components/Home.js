import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import circle from "./assets/circle.svg";
import tree from "./assets/tree.svg";
import arrow from "../arrow.svg";
import { Link, Redirect } from "react-router-dom";
import "../App.css";
import "../Animations.css";

function Home() {
  return (
    <div className="container">
      <div className="animationContainerHome">
        <motion.div
          style={{
            width: 1000,
            height: 1000,
            borderRadius: 600,
            background: "#44af69",
            position: "absolute",
            zIndex: 2,
            boxShadow: "0px 3px 10px rgba(0, 0,0,1)"
          }}
          initial={{
            x: -400,
            y: 920
          }}
          animate={{
            x: -400,
            y: 580
          }}
          transition={{ duration: 1.6 }}
        />
        <motion.div
          style={{
            width: 1000,
            height: 1000,
            borderRadius: 600,
            background: "#095256",
            overflow: "hidden",
            position: "absolute",

            zIndex: 1,
            boxShadow: "0px 3px 10px rgba(0, 0,0,0.5)"
          }}
          initial={{
            x: 1,
            y: 920
          }}
          animate={{
            x: 1,
            y: 580
          }}
          transition={{ duration: 1.6 }}
        />
      </div>

      {/* <motion.div
        style={{
          zIndex: 3,
          position: "absolute"
        }}
        initial={{
          x: 15,
          y: -200
        }}
        animate={{
          x: 15,
          y: 350
        }}
        transition={{ duration: 1.9, type: "spring", damping: 100 }}
      >
        <img src={tree} className="tree" />
      </motion.div> */}
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
    </div>
  );
}

export default Home;
