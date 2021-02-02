import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import EmailSignUp from './EmailSignUp/EmailSignUp';

const Home = ({ switchNavSelection, emailOpen, setEmailOpen }) => {
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
    <section className="home">
      <div className="home_videoContainer">
        <div className="home_videoContainer_overlay" />
        <video loop autoPlay muted>
          <source src="https://res.cloudinary.com/diby2nljo/video/upload/v1610489670/cafe7_c5u2gp.mp4" />
          Unable to play video
        </video>
        <div className="home_videoContainer_textContainer">
          <motion.h2
            variants={variants}
            initial="initial"
            animate="animate"
            transition="transition"
          >
            Welcome To Our Space
          </motion.h2>
          <span className="home_videoContainer_textContainer_mission">
            <motion.span
              className="home_videoContainer_textContainer_mission_mission_section"
              variants={variants}
              initial="initial"
              animate="animate"
              transition="transition"
            >
              <h3>Et netus</h3>
              <p>
                Et netus et malesuada fames ac. Varius sit amet mattis vulputate
                enim. Metus aliquam eleifend mi in nulla. Adipiscing diam donec
                adipiscing tristique risus. Consectetur a erat nam at. Gravida
                quis blandit turpis cursus in hac habitasse platea. Neque
                viverra justo nec ultrices. Diam in arcu cursus euismod quis
                viverra. Congue quisque egestas diam in arcu cursus.
              </p>
            </motion.span>
            <motion.span
              className="home_videoContainer_textContainer_mission_mission_section"
              variants={variants}
              initial="initial"
              animate="animate"
              transition="transition"
            >
              <h3>Ridiculus mus </h3>
              <p>
                Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
                Interdum varius sit amet mattis vulputate enim. Penatibus et
                magnis dis parturient. Lacinia at quis risus sed. Elit
                ullamcorper dignissim cras tincidunt lobortis. Mi ipsum faucibus
                vitae aliquet nec. Nunc scelerisque viverra mauris in aliquam
                sem fringilla.
              </p>
            </motion.span>
            <motion.span
              className="home_videoContainer_textContainer_mission_mission_section"
              variants={variants}
              initial="initial"
              animate="animate"
              transition="transition"
            >
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                at consectetur lorem donec massa. Ipsum a arcu cursus vitae.
                Lobortis feugiat vivamus at augue eget. Risus at ultrices mi
                tempus. Lectus sit amet est placerat in egestas erat imperdiet.
                Eu scelerisque felis imperdiet proin fermentum leo vel.
              </p>
            </motion.span>
          </span>
        </div>
      </div>
      <motion.section
        variants={variants}
        initial={{ opacity: 0, x: -50 }}
        animate="animate"
        transition="transition"
        className="home_objectives"
      >
        <h2>Objectives</h2>
        <p>
          Orci nulla pellentesque dignissim enim sit. Cras ornare arcu dui
          vivamus arcu felis bibendum. Eget velit aliquet sagittis id
          consectetur purus ut faucibus pulvinar. Consequat id porta nibh
          venenatis. Fermentum leo vel orci porta non pulvinar. Odio ut sem
          nulla pharetra diam sit amet. Ut diam quam nulla porttitor massa.
          Tortor posuere ac ut consequat semper viverra nam libero justo.
          Feugiat vivamus at augue eget arcu dictum varius. Morbi tincidunt
          augue interdum velit euismod in pellentesque massa placerat.
        </p>
        <p>
          Scelerisque in dictum non consectetur a erat nam. Amet venenatis urna
          cursus eget nunc scelerisque viverra. Nascetur ridiculus mus mauris
          vitae. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Et
          molestie ac feugiat sed lectus. Laoreet id donec ultrices tincidunt
          arcu non sodales neque sodales. Diam sit amet nisl suscipit adipiscing
          bibendum est ultricies. Quisque non tellus orci ac auctor augue mauris
          augue. Neque viverra justo nec ultrices dui sapien.
        </p>
      </motion.section>
      <EmailSignUp emailOpen={emailOpen} setEmailOpen={setEmailOpen} />
      <section className="home_vision">
        <motion.div
          variants={variants}
          initial={{ opacity: 0, x: 50 }}
          animate="animate"
          transition="transition"
          className="vison_text"
        >
          <h2>Our Vision</h2>
          <p>
            Scelerisque in dictum non consectetur a erat nam. Amet venenatis
            urna cursus eget nunc scelerisque viverra. Nascetur ridiculus mus
            mauris vitae. Eu scelerisque felis imperdiet proin fermentum leo vel
            orci. Et molestie ac feugiat sed lectus. Laoreet id donec ultrices
            tincidunt arcu non sodales neque sodales. Diam sit amet nisl
            suscipit adipiscing bibendum est ultricies. Quisque non tellus orci
            ac auctor augue mauris augue. Neque viverra justo nec ultrices dui
            sapien.
          </p>
          <p>
            Non quam lacus suspendisse faucibus interdum posuere lorem ipsum
            dolor. Duis at tellus at urna. Ullamcorper morbi tincidunt ornare
            massa eget egestas. Urna id volutpat lacus laoreet non curabitur
            gravida. Condimentum mattis pellentesque id nibh. At tellus at urna
            condimentum mattis pellentesque id nibh tortor. Sapien eget mi proin
            sed libero enim. Eget nulla facilisi etiam dignissim. Facilisis sed
            odio morbi quis commodo odio aenean sed adipiscing.
          </p>
        </motion.div>
      </section>
    </section>
  );
};

Home.propTypes = {
  switchNavSelection: PropTypes.func.isRequired,
  emailOpen: PropTypes.bool.isRequired,
  setEmailOpen: PropTypes.func.isRequired,
};

export default Home;
