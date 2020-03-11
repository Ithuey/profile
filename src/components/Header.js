import React, { useState } from "react";
import { motion } from "framer-motion";

import "../Header.css";

import { Link, animateScroll } from "react-scroll";

import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

function Header(props) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  return (
    <header className="toolbar">
      <nav className={`header ${shadowStyle} ${hiddenStyle}`}>
        <div className="toolbar_logo">
          <h2>Todd Carpenter</h2>
        </div>
        <div className="toolbar_navigation-items">
          <ul className="ulHeader">
            <motion.li
              className="navbar"
              animate={{}}
              whileHover={{
                scale: 1.1
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="navbar"
            >
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="navbar"
            >
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
      </nav>
      <div className="toggle">
        <DrawerToggleButton
          className="hamburger"
          click={props.drawerToggleClickHandler}
        />
      </div>
    </header>
  );
}

export default Header;
