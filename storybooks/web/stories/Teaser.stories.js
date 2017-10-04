import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Teaser } from 'hsl-shared-components';

setAddon(JSXAddon);
const stories = storiesOf('Teaser', module);
stories.addDecorator(withKnobs);
stories.addWithJSX('default', () => {
  return (<Teaser />);
});
