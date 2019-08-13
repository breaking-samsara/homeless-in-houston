import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'gatsby';
import ContactHeader from '../presentational/ContactHeader';

import SEO from '../presentational/seo';

const ContactPage = () => {
  const isFirefox = typeof InstallTrigger !== 'undefined';
  return (
    <>
      <SEO title="contact" />

      <ContactHeader />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <Form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <FormGroup>
            <Label for="Name">Name:</Label>
            <Input required type="name" name="name" id="name" />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" name="email" id="email" />
          </FormGroup>

          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              required={!isFirefox}
              type="textarea"
              name="message"
              id="message"
            />
          </FormGroup>

          <div className="contact-us-back-wrapper">
            <div>
              <input
                className="color-purple btn btn-secondary "
                type="Submit"
                value="Submit"
              />
            </div>
            <div>
              <Link to="/">
                <i class="fas fa-chevron-circle-left"></i>Back to homepage
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactPage;
