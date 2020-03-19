import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/global.styled';
import theme from '../style/theme.config';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
