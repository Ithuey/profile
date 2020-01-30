import React from "react";
import { motion } from "framer-motion";
import tree from "./assets/tree.svg";

import "../App.css";

function Contact() {
  return (
    <div className="container">
      <div className="animationContainerContact">
        <motion.div
          style={{
            width: 1000,
            height: 1000,
            borderRadius: 600,
            background: "#44af69",
            position: "absolute",
            zIndex: 1,
            boxShadow: "0px 3px 10px rgba(0, 0,0,1)"
          }}
          initial={{
            x: 400,
            y: 920
          }}
          animate={{
            x: 400,
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
            zIndex: 0,
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
            </motion.div> */}
      </div>
    </div>
  );
}

export default Contact;
