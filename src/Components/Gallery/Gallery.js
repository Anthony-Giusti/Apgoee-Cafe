/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Gallery = ({
  GridData,
  switchNavSelection,
  showBackdrop,
  openGalleryBackDrop,
  closeGalleryBackDrop,
}) => {
  const imageScaleOnHover = window.innerWidth < 600 ? 1.1 : 1.2;

  const galleyVariants = {
    initial: {
      y: 50,
      opacity: 0.2,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: imageScaleOnHover,
      transition: {
        delay: 0.05,
        duration: 0.1,
      },
    },
  };

  switchNavSelection(useLocation());

  const handleClick = (e) => {
    const target = e.type === 'keypress' ? e.target.firstChild : e.target;
    if (showBackdrop) {
      closeGalleryBackDrop();
    } else {
      openGalleryBackDrop(target);
    }
  };

  return (
    <section className="gallery">
      <motion.section
        variants={galleyVariants}
        animate="visible"
        initial="initial"
        className="gallery_grid"
      >
        {showBackdrop && (
          <div
            className="gallery_Backdrop"
            id="gallery-Backdrop"
            onClick={handleClick}
            onKeyPress={handleClick}
            role="button"
            tabIndex={0}
            aria-label="backdrop"
          />
        )}
        {GridData.map((image) => (
          <motion.span
            variants={galleyVariants}
            whileHover="hover"
            onClick={handleClick}
            onKeyPress={handleClick}
            className={`gallery_grid_item gallery_item_focus ${image.className}`}
            tabIndex={0}
          >
            <img
              src={image.url}
              alt={image.alt}
              id={image.alt}
              className="gallery_grid_item_image"
            />
            {showBackdrop && <div tabIndex={0} />}
          </motion.span>
        ))}
      </motion.section>
    </section>
  );
};

Gallery.propTypes = {
  GridData: PropTypes.arrayOf.isRequired,
  switchNavSelection: PropTypes.func.isRequired,
  showBackdrop: PropTypes.bool.isRequired,
  openGalleryBackDrop: PropTypes.func.isRequired,
  closeGalleryBackDrop: PropTypes.func.isRequired,
};

export default Gallery;
