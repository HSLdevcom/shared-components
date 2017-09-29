import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import { ActionBarItem, Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('ActionBar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    <ResponsiveProvider>
      {getStory()}
    </ResponsiveProvider>
  </ThemeProvider>));

stories.addWithJSX('default', () => {
  const type = select('Type', ['button', 'link'], 'button');
  const title = text('Title', 'Ruskeasuon varikko');
  const href = text('Href', 'http://www.hsl.fi');
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ? <Icons.JourneyPlanner /> : null;
  return (
    <ActionBarItem
      type={type}
      href={href}
      title={title}
      icon={icon}
      onClick={action('click')}
    />
  );
});
