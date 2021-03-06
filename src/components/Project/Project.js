import React from "react";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
// import BeepicDark from "../assets/beepicdark.svg";

import { DiReact, DiAndroid } from "react-icons/di";

import "./project.css";

const content = [
  {
    id: 1,
    title: "Be Epic",
    description:
      "Be Epic is an app that allows users to choose interests, and then see posts made by other interested parties within a 25 mile radius. Want to learn to climb?" +
      " Make a post and see if anyone in the area is looking for a partner. This uses Firebase to store user posts and user imformation." +
      " Geofire was used for user location services.",
    button: "Github",
    image: require("../assets/beepicshadow.png"),
    link: "https://github.com/Ithuey/BeEpic/tree/Todd",
    icons: [<DiAndroid size={30} />, <DiReact size={30} />]
  },
  {
    id: 2,
    title: "Star Wars Info",
    description:
      "A React web application that uses Redux, and a Star Wars API to display information about movies and characters." +
      " A Python backend that uses flask was created to make Rest API calls allowing users to save their favorite characters to a MySQL database.",
    button: "Github",
    image: require("../assets/starwared.png"),
    link: "https://github.com/Ithuey/starwars/tree/redux",
    icons: [<DiAndroid size={30} />, <DiReact size={30} />]
  }
];
AOS.init({
  offset: 150,
  duration: 1000
});
function Project() {
  return (
    <div className="projects" id="projects">
      <div className="projectContainer">
        {content.map(item => (
          <div key={item.id}>
            <ul className="projectUl">
              <li className="projectList" data-aos="fade-up">
                <div className="projectImg">
                  <img src={item.image} alt="beepic" />
                </div>
              </li>

              <li
                style={{ fontSize: "50px" }}
                className="projectList"
                data-aos="fade-up"
              >
                <b>{item.title}</b>
              </li>
              <li className=" projectList description" data-aos="fade-up">
                {item.description}
              </li>

              <li className="projectList" data-aos="fade-up">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  align="center"
                  className="btnProject"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.button}
                  </a>
                </motion.button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
