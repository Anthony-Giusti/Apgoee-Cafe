import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';

const navVariants = {
  initial: {
    y: 25,
    opacity: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    color: '#ffffff',
  },
  hover: {
    scale: 1.2,
    color: '#eb8164',
  },
};

const Nav = ({ navSelection }) => {
  const elems = document.querySelectorAll('li.navBtn');

  useEffect(
    () => {
      elems.forEach((element) => element.classList.remove('mainNavSelected'));
      document.getElementById(navSelection).classList.add('mainNavSelected');
    },
    [navSelection],
    []
  );

  return (
    <section className="mainNav">
      <nav>
        <ul>
          <Link to="/" className="mainNav_navBtnContainer">
            <motion.li
              variants={navVariants}
              initial="initial"
              animate="visible"
              whileHover="hover"
              className="navBtn"
              id="home"
            >
              Home
            </motion.li>
          </Link>
          <Link to="/menu" className="mainNav_navBtnContainer">
            <motion.li
              variants={navVariants}
              initial="initial"
              animate="visible"
              whileHover="hover"
              className="navBtn"
              id="menu"
            >
              Menu
            </motion.li>
          </Link>
          <a href="/" id="logo-container">
            <Logo />
          </a>
          <Link to="/gallery" className="mainNav_navBtnContainer">
            <motion.li
              variants={navVariants}
              initial="initial"
              animate="visible"
              whileHover="hover"
              className="navBtn"
              id="gallery"
            >
              Gallery
            </motion.li>
          </Link>
          <Link to="/location" className="mainNav_navBtnContainer">
            <motion.li
              variants={navVariants}
              initial="initial"
              animate="visible"
              whileHover="hover"
              className="navBtn"
              id="location"
            >
              Location
            </motion.li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

Nav.propTypes = {
  navSelection: PropTypes.string.isRequired,
};

export default Nav;
