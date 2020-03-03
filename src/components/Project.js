import React from "react";
import { motion } from "framer-motion";

import tree from "./assets/tree.svg";

import { DiReact, DiAndroid } from "react-icons/di";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../slider-animations.css";
import "../Carousel.css";
import "../Animations.css";

const content = [
  {
    title: "StarWars",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Github",
    image: require("./assets/starwars.JPG"),
    icons: [
      <a
        className="icons"
        target="_blank"
        href="https://developer.android.com/"
      >
        <DiAndroid size={30} />
      </a>,
      <DiReact size={30} />
    ]
  },
  {
    title: "Be Epic",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Github",
    image: require("./assets/beepic.gif"),
    icons: [<DiAndroid size={30} />, <DiReact size={30} />]
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Github",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    icons: [<DiAndroid size={30} />, <DiReact size={30} />]
  }
];

function Project() {
  return (
    <div className="container">
      <div className="animationContainerProject">
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
            x: -150,
            y: 700
          }}
          animate={{
            x: -150,
            y: 400
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
            x: 150,
            y: 700
          }}
          animate={{
            x: 150,
            y: 400
          }}
          transition={{ duration: 1.6 }}
        />

        {/* <motion.div
                style={{
                    zIndex: 3,
                    position: 'absolute',
                }}

                initial={{
                    x: 15,
                    y: -200
                }}

                animate={{
                    x: 15,
                    y: 350
                }}
                transition={{ duration: 1.9, type: 'spring', damping: 100 }}
            >
                <img src={tree} className='tree' />
            </motion.div>  */}
      </div>

      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              backgroundImage: `url(${item.image}) `
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className="carouselB">{item.button}</button>
              <div className="containerIcons">
                {item.icons.map((icon, index) => (
                  <i key={index}>{icon}</i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Project;
