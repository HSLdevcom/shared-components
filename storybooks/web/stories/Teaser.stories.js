import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Teaser, P, Icons, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);
const stories = storiesOf('Teaser', module);
stories.addDecorator(withKnobs);
stories.addWithJSX('default', () => {
  const buttonLabel = text('buttonLabel', 'Matkakortille');
  const separator = boolean('Separator', true);
  const imageKnob = boolean('Image', true);
  const image = imageKnob ?
    <Icons.MobileTicket width="70px" fill={Theme.colors.primary.hslBlue} />
    : null;
  const content = (
    <P>
      Voit ostaa lippuja, arvoa tai kautta lataamaalla.<br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </P>
  );
  return (
    <Teaser
      image={image}
      buttonLabel={buttonLabel}
      content={content}
      separator={separator}
      onClick={action('click')}
    />
  );
});
