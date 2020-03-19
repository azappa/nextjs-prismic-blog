import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 700px;
  margin: auto;

  .blog-post {
    margin-bottom: 3rem;
  }
  .blog-post h2 {
    margin: 0;
  }
  .blog-post-meta {
    color: #9a9a9a;
    font-family: 'Lato', sans-serif;
    margin-bottom: 8px;
    font-size: 16px;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    color: #353535;
    text-align: left;
  }

  /* Media Queries */
  @media (max-width: 767px) {
    padding: 0 20px;
    font-size: 18px;
  }
`;

export const HomeHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: auto;

  .blog-avatar {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin: 1em auto;
  }
  .blog-description {
    font-size: 18px;
    color: #9a9a9a;
    line-height: 30px;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    font-family: 'Lato', sans-serif;
    border-bottom: 1px solid #dadada;
  }
`;
