import React from 'react';

const Footer = () => (
  <footer className="footer">
    <section className="footer_info">
      <section className="footer_info_donate">
        <h3>Support The Space</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Nulla facilisi cras fermentum odio eu. At quis risus sed vulputate odio.
          Eu augue ut lectus arcu bibendum.
        </p>
        <p>
          llamcorper morbi tincidunt ornare massa eget. Eros in cursus turpis massa tincidunt.
          Lacinia quis vel eros donec ac odio tempor. Eu facilisis sed odio morbi quis commodo odio.
          Habitant morbi tristique senectus et netus et malesuada fames ac. Id neque aliquam
          vestibulum morbi blandit cursus risus at.
        </p>
        <div className="footer_info_donate_supportLinks">
          <a href="/" className="footer_info_donate_supportLinks_link">
            <p>Become a Member</p>
          </a>
          <p className="footer_info_donate_supportLinks_divider" />
          <a href="/" className="footer_info_donate_supportLinks_link">
            <p>Doante</p>
          </a>
          <p className="footer_info_donate_supportLinks_divider" />
          <a href="/" className="footer_info_donate_supportLinks_link">
            <p>Account</p>
          </a>
        </div>
      </section>
      <section className="footer_info_contact">
        <h3>Come Find Us</h3>
        <p>
          <b>201 E Randolph St, Chicago, IL 60602</b>
        </p>
        <ul>
          <li>
            <b>Sunday: </b>
            8am - 3pm
          </li>
          <li>
            <b>Monday-Thursday: </b>
            7am - 4pm
          </li>
          <li>
            <b>Friday: </b>
            7am - 6pm
          </li>
          <li>
            <b>Saturday: </b>
            8am - 6pm
          </li>
        </ul>
        <i className="fas fa-phone-square" />
        <a href="tel:321-123-1245">Direct Line: 312-123-1234</a>
        <br />
        <i className="fas fa-envelope-square" />
        <a href="mailto:apogeecafe@email.com">apogeecafe@email.com</a>
        <span className="footer_info_contact_socialMedia">
          <a href="https://www.instagram.com/" target="blank">
            <i className="fab fa-instagram fa-3x" />
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <i className="fab fa-facebook  fa-3x" />
          </a>
          <a href="https://twitter.com/" target="blank">
            <i className="fab fa-twitter  fa-3x" />
          </a>
          <a href="https://www.youtube.com/" target="blank">
            <i className="fab fa-youtube  fa-3x" />
          </a>
        </span>
      </section>
    </section>
    <hr />
    <section className="footer_info_copyright">
      <p>Copyright © 2021 Apogee Cafe All Rights Reserved</p>
      <p>Website By Company Name</p>
    </section>
  </footer>
);

export default Footer;
