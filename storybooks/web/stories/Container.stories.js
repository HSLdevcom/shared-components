import React from 'react';
import { setAddon, storiesOf, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Container, Theme } from 'hsl-shared-components';

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

setAddon(JSXAddon);

const stories = storiesOf('Container', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<Container><p>{content}</p></Container>);
}, { displayName: 'Container' });
