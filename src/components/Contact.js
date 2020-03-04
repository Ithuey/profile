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
    <div className="contact" id="contact">
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
  );
}

export default Contact;
