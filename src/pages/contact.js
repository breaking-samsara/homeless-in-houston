import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Layout from '../presentational/layout';
import { Link } from 'gatsby';

import SEO from '../presentational/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="contact" />

      <h4>Contact Page</h4>
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
          <Input required type="textarea" name="message" id="message" />
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
    </Layout>
  );
};

export default ContactPage;
