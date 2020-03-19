import React from 'react';
import { Footer, FooterLogo } from 'style/global.styled';

/**
 * Site footer component
 */
export default () => (
  <Footer>
    <p>
      Proudly published with &nbsp;
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        Prismic
      </a>
      <br />
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <FooterLogo src="/images/logo-prismic.svg" alt="Gray Prismic logo" />
      </a>
    </p>
  </Footer>
);
