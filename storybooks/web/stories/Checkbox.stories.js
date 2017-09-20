import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Checkbox } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

setAddon(JSXAddon);

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    {getStory()}
  </ThemeProvider>));

stories.addWithJSX('default', () => {
  const checked = boolean('Checked', false);
  const error = boolean('Error', false);
  const disabled = boolean('Disabled', false);
  return (
    <Checkbox checked={checked} error={error} disabled={disabled} />);
}, { displayName: 'Checkbox' });
