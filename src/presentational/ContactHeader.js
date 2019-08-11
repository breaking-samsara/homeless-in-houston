import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.css';

const ContactHeader = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`
      }}
    >
      <div>
        <h1
          style={{
            color: `white`,
            textDecoration: `none`
          }}
          className="header"
        >
          Contact Us
        </h1>
      </div>
      <div className="contact-us">
        <Link
          className="contact-us-text"
          style={{ textDecoration: 'none' }}
          to="/"
        >
          Back home
        </Link>
      </div>
    </div>
  </header>
);

ContactHeader.propTypes = {
  siteTitle: PropTypes.string
};

ContactHeader.defaultProps = {
  siteTitle: ``
};

export default ContactHeader;
