import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import './Location.css';

const Location = ({ switchNavSelection }) => {
  switchNavSelection(useLocation());

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <section className="location">
      <div className="location_main">
        <motion.section
          className="location_main_description"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </motion.section>
        <motion.iframe
          width="600"
          height="450"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9Sszh6YsDogRUUo6zu8_TQY&key=AIzaSyComIC_VSL3o-UxUlg9rz8gR0f2WXkOhO4"
          allowFullScreen
          title="google map location"
          variants={variants}
          initial="initial"
          animate="animate"
        />
      </div>
    </section>
  );
};

Location.propTypes = {
  switchNavSelection: PropTypes.func.isRequired,
};

export default Location;
