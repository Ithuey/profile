import React, { useState } from "react";
import { motion } from "framer-motion";
import tree from "./assets/tree.svg";

import emailjs from "emailjs-com";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail, IoIosContact } from "react-icons/io";

import "../Contact.css";

function Contact() {
  // const [name, setName] = useState("hey");
  // const [email, setEmail] = useState("");
  // const [company, setCompany] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [position, setPosition] = useState("");
  // const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault(e);

    emailjs
      .sendForm(
        "gmail",
        "template_lcRiGG27",
        e.target,
        "user_B8aFDogO8YzahD86OMP9u"
      )
      .then(
        results => {
          console.log("Success!", results.text);
          alert("Thanks for your interest!");
        },
        error => {
          console.log("hmm, that's weird.", error.text);
          alert("Hmm, didnt work.");
        }
      );
    e.target.reset();
  }

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

        <motion.div
          style={{
            zIndex: 5,
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
        </motion.div>
      </div>
      <div className="textContainer">
        <ul className="contactUlText">
          <li>
            <IoIosContact size={60} />
          </li>
          <li>
            <h2>LET'S TALK</h2>
          </li>
          <form style={{ color: "red" }} onSubmit={sendEmail}>
            <li>
              <input
                type="text"
                placeholder="Name"
                name="contact_name"
                required
              />
            </li>

            <li>
              <input
                type="email"
                placeholder="Email"
                name="contact_email"
                required
              />
            </li>
            <li>
              <input
                type="tel"
                placeholder="Phone Number"
                name="contact_phoneNumber"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Company"
                name="contact_company"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Position"
                name="contact_position"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                rows="5"
                name="contact_message"
                required
              />
            </li>
            <button type="Submit" value="Send" className="btnSubmit">
              Send
            </button>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
