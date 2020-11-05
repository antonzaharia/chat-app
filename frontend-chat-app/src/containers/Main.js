import React from 'react';
import { ThemeProvider, StyleReset } from 'atomize';
import App from '../App';
const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};
export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  );
}
