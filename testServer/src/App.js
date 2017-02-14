import React from 'react';
import { ThemeProvider } from 'styled-components';

import { } from './styles.css';
import ComponentList from './ComponentList';
import hslTheme from './theme.hsl';

export default function() {
  return (
    <ThemeProvider theme={hslTheme}>
      <ComponentList />
    </ThemeProvider>
  );
}
