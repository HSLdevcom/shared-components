import React from 'react';
import { setAddon, storiesOf, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { AppHeader, Theme } from 'hsl-shared-components';

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

setAddon(JSXAddon);

const stories = storiesOf('AppHeader', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<AppHeader><p>{content}</p></AppHeader>);
}, { displayName: 'AppHeader' });
