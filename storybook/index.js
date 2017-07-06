import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components';

import Theme from './../themes/themes.hsl';

// import stories
configure(() => {
  require('../stories_native');
}, module);

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));


const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });

export default StorybookUI;
