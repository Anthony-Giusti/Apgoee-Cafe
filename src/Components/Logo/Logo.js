import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => (
  <div className="logo">
    <motion.img
      src="https://res.cloudinary.com/diby2nljo/image/upload/v1610578958/coffee-cup_wtnfjm.png"
      alt="logo"
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.h1
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      APOGEE
    </motion.h1>
    <motion.h1
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      CAFE
    </motion.h1>
    <p>COFFEE (AND MORE!)</p>
  </div>
);

export default Logo;
