import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Teaser, P, Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

storiesOf('Teaser', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('default', () => {
    const buttonLabel = text('buttonLabel', '   Matkakortille   ');
    const separator = boolean('Separator', true);
    const imageKnob = boolean('Image', true);
    const image = imageKnob ?
      <Icons.MobileTicket width="70" height="70" fill={Theme.colors.primary.hslBlue} />
      : null;
    const content = (
      <P>
        Voit ostaa lippuja, arvoa tai kautta lataamaalla.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </P>
    );
    return (
      <Teaser
        image={image}
        buttonLabel={buttonLabel}
        content={content}
        separator={separator}
        onPress={action('press')}
        onLongPress={action('longPress')}
      />
    );
  });
