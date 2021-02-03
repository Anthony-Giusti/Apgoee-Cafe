import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem/MenuItem';

const Menu = ({
  switchNavSelection,
  currentMenu,
  getItemAdditions,
  menuSection,
  switchMenuSection,
}) => {
  const elems = document.querySelectorAll('.menu_menuNav_menuBtn');
  switchNavSelection(useLocation());

  const itemsMap = currentMenu.items.map((item) => (
    <MenuItem
      item={item}
      key={item.name}
      getItemAdditions={getItemAdditions}
    ></MenuItem>
  ));

  const handeClick = (e) => {
    e.preventDefault();
    switchMenuSection(e);
  };

  const menuVariants = {
    initial: {
      y: -100,
      opacity: 0.2,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    hover: {
      color: '#eb8164',
      scale: 1.2,
    },
  };

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

  useEffect(
    () => {
      elems.forEach((element) => element.classList.remove('menuNavSelected'));
      document.getElementById(menuSection).classList.add('menuNavSelected');
    },
    [menuSection],
    []
  );

  return (
    <section className="menu">
      <motion.nav
        className="menu_menuNav"
        initial={{ y: -100 }}
        animate={{ y: 0, type: 'tween' }}
        transition={{ type: 'tween', duration: 0.75 }}
      >
        <ul>
          <motion.li
            variants={menuVariants}
            whileHover="hover"
            className="menu_menuNav_menuBtn"
            type="button"
            id="coffee"
            onClick={handeClick}
            onKeyPress={handeClick}
            tabIndex={0}
          >
            Coffee
          </motion.li>
          <motion.li
            variants={menuVariants}
            whileHover="hover"
            className="menu_menuNav_menuBtn"
            type="button"
            id="espresso"
            onClick={handeClick}
            onKeyPress={handeClick}
            tabIndex={0}
          >
            Espresso
          </motion.li>
          <motion.li
            variants={menuVariants}
            whileHover="hover"
            className="menu_menuNav_menuBtn"
            type="button"
            id="iced-drinks"
            onClick={handeClick}
            onKeyPress={handeClick}
            tabIndex={0}
          >
            Iced Drinks
          </motion.li>
          <motion.li
            variants={menuVariants}
            whileHover="hover"
            className="menu_menuNav_menuBtn"
            type="button"
            id="hot-drinks"
            onClick={handeClick}
            onKeyPress={handeClick}
            tabIndex={0}
          >
            Hot Drinks
          </motion.li>
          <motion.li
            variants={menuVariants}
            whileHover="hover"
            className="menu_menuNav_menuBtn"
            type="button"
            id="breakfast"
            onClick={handeClick}
            onKeyPress={handeClick}
            tabIndex={0}
          >
            Breakfest Items
          </motion.li>
          <motion.li
            variants={menuVariants}
            whileHover="hover"
            className="menu_menuNav_menuBtn"
            type="button"
            id="lunch"
            onClick={handeClick}
            onKeyPress={handeClick}
            tabIndex={0}
          >
            Lunch Items
          </motion.li>
        </ul>
      </motion.nav>
      <section className="menu_main">
        <motion.section
          variants={variants}
          initial="initial"
          animate="animate"
          className="menu_main_header"
        >
          <p className="menu_main_description">{currentMenu.description}</p>
          {currentMenu.additions && (
            <span className='"menu_main_additions'>
              {getItemAdditions(currentMenu.additions)}
            </span>
          )}
        </motion.section>
        <motion.section
          variants={variants}
          initial="initial"
          animate="animate"
          className="menu_main_menuItems"
        >
          {itemsMap}
        </motion.section>
      </section>
    </section>
  );
};

Menu.propTypes = {
  switchNavSelection: PropTypes.func.isRequired,
  currentMenu: PropTypes.arrayOf.isRequired,
  getItemAdditions: PropTypes.func.isRequired,
  menuSection: PropTypes.string.isRequired,
  switchMenuSection: PropTypes.func.isRequired,
};

export default Menu;
