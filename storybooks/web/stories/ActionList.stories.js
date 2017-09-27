import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { Icons, ActionListItem, ResponsiveProvider, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('ActionList', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    <ResponsiveProvider>
      {getStory()}
    </ResponsiveProvider>
  </ThemeProvider>));

stories.addWithJSX('default', () => {
  const title = text('Title', 'Arvoliput matkakortilla');
  return (
    <ActionListItem
      title={title}
    />
  );
}
, { displayName: 'ActionList' });

stories.addWithJSX('ActionListItem', () => {
  const type = select('Type', ['button', 'link'], 'button');
  const title = text('Title', 'Arvoliput matkakortilla');
  const href = text('Href', 'http://www.hsl.fi');
  const active = boolean('Active', false);
  const centered = boolean('Centered', false);
  const arrow = boolean('Arrow', true);
  const iconKnob = boolean('Icon', false);
  const icon = iconKnob ? <Icons.Facebook /> : null;
  return (
    <ActionListItem
      type={type}
      href={href}
      title={title}
      active={active}
      centered={centered}
      icon={icon}
      arrow={arrow}
      onPress={action('press')}
      onLongPress={action('long press')}
    />
  );
});
