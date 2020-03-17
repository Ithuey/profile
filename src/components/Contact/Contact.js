import React, { useState } from "react";
import { motion } from "framer-motion";

import emailjs from "emailjs-com";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail, IoIosContact } from "react-icons/io";

import { TiDocument } from "react-icons/ti";
import PDFResume from "../assets/documents/ToddCarpenterResume.pdf";

import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault(e);

    setSubmitted(prevState => {
      return { setSubmitted: !prevState.submitted };
    });

    console.log(submitted);
    emailjs
      .sendForm(
        "gmail",
        "template_lcRiGG27",
        e.target,
        "user_B8aFDogO8YzahD86OMP9u"
      )
      .then(
        results => {
          // console.log("Success!", results.text);
          alert("Thanks for your interest!");
          // setSubmitted(false);
        },
        error => {
          // console.log("hmm, that's weird.", error.text);
          alert("Hmm, didnt work.");
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="formContainer">
        <ul className="contactUlText">
          <li className="contactList">
            <IoIosContact size={60} />
          </li>
          <li className="contactList">
            <h2>LET'S TALK</h2>
          </li>
          <form style={{ color: "red" }} onSubmit={sendEmail}>
            <li className="contactList">
              <input
                type="text"
                placeholder="Full Name"
                name="contact_name"
                required
              />
            </li>

            <li className="contactList">
              <input
                type="email"
                placeholder="Email"
                name="contact_email"
                required
              />
            </li>
            <li className="contactList">
              <input
                type="tel"
                placeholder="Phone Number 1112223333"
                name="contact_phoneNumber"
                pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
                required
              />
            </li>
            <li className="contactList">
              <input
                type="text"
                placeholder="Company"
                name="contact_company"
                required
              />
            </li>
            <li className="contactList">
              <input
                type="text"
                placeholder="Position"
                name="contact_position"
                required
              />
            </li>
            <li className="contactList">
              <textarea placeholder="Message" rows="5" name="contact_message" />
            </li>
            <button
              disabled={submitted}
              type="Submit"
              value="Send"
              className="btnSubmit"
            >
              Send
            </button>
          </form>
        </ul>
      </div>
      <div className="iconContainerContact">
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

export default Contact;
