import React from 'react';
import { RichText } from 'prismic-reactjs';
import { HomeHeader } from 'style/page.styled';

/**
 * Homepage header component
 */
const Header = ({ image, headline, description }) => (
  <HomeHeader>
    <div
      className="blog-avatar"
      style={{ backgroundImage: `url(${image.url})` }}
    />
    <h1 className="blog-title">{RichText.asText(headline)}</h1>
    <p className="blog-description">{RichText.asText(description)}</p>
  </HomeHeader>
);

export default Header;
