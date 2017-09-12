import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard } from 'react-sketchapp';
import { ThemeProvider } from 'styled-components';
import Typography from './artboards/Typography';
import Buttons from './artboards/Buttons';
import Theme from '../themes/themes.hsl';

const Document = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Artboard style={{ width: 1440, flexDirection: 'column' }}>
        <Typography />
        <Buttons />
      </Artboard>
    </ThemeProvider>
  );
};

export default (context) => {
  render(<Document />, context.document.currentPage());
};
