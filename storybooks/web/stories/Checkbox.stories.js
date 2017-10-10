import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Checkbox, Theme } from 'hsl-shared-components';

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
  const inverted = boolean('Inverted', false);
  const disabled = boolean('Disabled', false);
  const title = text('Title', 'Checkbox title');
  return (
    <Checkbox
      checked={checked}
      error={error}
      disabled={disabled}
      inverted={inverted}
      title={title}
      onClick={action('Checkbox clicked')}
    />
  );
}, { displayName: 'Checkbox' });
