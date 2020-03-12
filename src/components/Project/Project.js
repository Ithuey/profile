import React from "react";
import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";
import { Link } from "react-scroll";
// import BeepicDark from "../assets/beepicdark.svg";

import { DiReact, DiAndroid } from "react-icons/di";

import "./project.css";

const content = [
  // {
  //   title: "StarWars",
  //   description:
  //     "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
  //   button: "Github",
  //   image: require("./assets/starwars.JPG"),
  //   icons: [
  //     <a
  //       className="icons"
  //       target="_blank"
  //       href="https://developer.android.com/"
  //     >
  //       <DiAndroid size={30} />
  //     </a>,
  //     <DiReact size={30} />
  //   ]
  // },
  {
    title: "Be Epic",
    description:
      "Be Epic is an app that allows users to choose interst and then see post made by other users with in a 25 mile radius. Want to learn to climb," +
      "make a post an see if anyone in the area is looking for a partner. This uses Firebase to store user post and user imformation." +
      "Geofire was used to for user location services.",
    button: "Github",
    image: require("../assets/beepicshadow.png"),
    link: "https://github.com/Ithuey/BeEpic/tree/Todd",
    icons: [<DiAndroid size={30} />, <DiReact size={30} />]
  },
  {
    title: "Starwars Info",
    description:
      "A React web application that uses Redux and a starwars api to display information about movies and characters." +
      " A Python backend that uses flask was created to make Rest API calls allowing users to save their favorite characters to a MySQL database.",
    button: "Github",
    image: require("../assets/starwared.png"),
    link: "https://github.com/Ithuey/starwars/tree/redux",
    icons: [<DiAndroid size={30} />, <DiReact size={30} />]
  }
];

function Project() {
  return (
    <div className="projects" id="projects">
      <div className="projectContainer">
        {content.map(item => (
          <ul className="projectUl">
            <li className="projectList">
              <div className="projectImg">
                <img src={item.image} alt="beepic" />
              </div>
            </li>

            <li style={{ fontSize: "50px" }} className="projectList">
              <b>{item.title}</b>
            </li>
            <li className="projectList">{item.description}</li>

            <li className="projectList">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                align="center"
                className="btnProject"
              >
                {/* <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                > */}
                <a href={item.link} target="_blank">
                  {item.button}
                </a>
                {/* </Link> */}
              </motion.button>
            </li>
          </ul>

          // <div className="projectImg">
          //   <img src={item.image} alt="beepic" />
          // </div>
          // <div className="projectList">
          //   <b>{item.title}</b>
          // </div>
          // <div className="projectList">
          // {item.description}
          // </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
