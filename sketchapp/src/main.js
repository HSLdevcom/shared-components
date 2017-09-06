import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-sketchapp';
import { ThemeProvider } from 'styled-components';
import Buttons from './artboards/buttons'
import Theme from '../themes/themes.hsl';

const Document = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Buttons />
    </ThemeProvider>
  );
};

export default (context) => {
  render(<Document />, context.document.currentPage());
};
