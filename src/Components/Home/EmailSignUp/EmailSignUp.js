import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const EmailSignUp = ({ emailOpen, setEmailOpen }) => {
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [signUpMessage, setSignUpMessage] = useState('Sign Up For The Newsletter!');

  const emailValidation = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('email-input');
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexp.test(emailInput.value)) {
      setEmailError(true);
      setErrorMessage('⚠ Invalid Email Address!');
      return;
    }

    setEmailOpen(!emailOpen);
    setEmailError(false);
    setErrorMessage('');
    setSignUpMessage('Thank you!');
  };

  return (
    <section className="newsLetter">
      <div className="newsLetter_box">
        <motion.button
          id="sign-up-btn"
          type="button"
          initial={false}
          animate={{ backgroundColor: emailOpen ? '#FFFFFF' : '#FFFFFF' }}
          onClick={() => {
            setEmailOpen(!emailOpen);
            setSignUpMessage('Sign Up For The Newsletter!');
            setEmailError(false);
          }}
        >
          {signUpMessage}
        </motion.button>
        <AnimatePresence initial={false}>
          {emailOpen && (
            <motion.form
              onSubmit={emailValidation}
              name="email"
              className="newsLetter_box_input"
              initial={{ height: 0, y: 0 }}
              animate={{ opacity: 1, height: 'auto', y: 5 }}
              exit={{ height: 0, outline: 'none', y: -33 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              <motion.input
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.5, type: 'tween' }}
                type="text"
                id="email-input"
                placeholder="Email Address"
              />
              <motion.button
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                exit={{ y: -25 }}
                transition={{ duration: 0.5, type: 'tween' }}
                type="submit"
                id="email-submit"
              >
                Get Updates
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
      {emailError && (
        <AnimatePresence>
          <motion.p
            id="email-error"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {errorMessage}
          </motion.p>
        </AnimatePresence>
      )}
    </section>
  );
};

EmailSignUp.propTypes = {
  emailOpen: PropTypes.bool.isRequired,
  setEmailOpen: PropTypes.func.isRequired,
};

export default EmailSignUp;
