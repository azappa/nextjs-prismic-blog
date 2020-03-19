import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  * {
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    background: #fff7c7; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: #fff7c7; /* Gecko Browsers */
  }

/*
 * Globals
 */
  body {
    padding: 3rem 0 0 0;
    color: #353535;
    line-height: 1.5;
    font-family: "PT Serif", serif;
    font-size: 20px;
  }
  a {
    color: #353535;
    text-decoration: none;
    background-repeat: repeat-x;
    background-size: 2px 2px;
    background-position: 0 23px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lato", sans-serif;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 50px;
    font-weight: 900;
    line-height: 60px;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 28px;
    font-weight: 900;
    line-height: 40px;
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 22px;
    font-weight: 900;
  }
  p {
    margin-bottom: 2rem;
  }
  pre,
  ul,
  ol {
    margin-bottom: 20px;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }

  /* Media Queries */
  @media (max-width: 767px) {
    h1 {
      font-size: 36px;
      line-height: 45px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 18px;
    }
  }
`;

export const SetupRepo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vw;
  align-items: center;
  a {
    color: purple;
    font-weight: 700;
  }
`;

export const Footer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  color: #9a9a9a;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: italic;
  text-align: center;

  p {
    border-top: 1px solid #dadada;
    padding: 2rem 0;
    margin-bottom: 0;
  }
  a {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const FooterLogo = styled.img`
  width: 30px;
  margin-top: 10px;
`;
