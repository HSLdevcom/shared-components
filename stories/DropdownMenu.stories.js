import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

import { DropdownMenu, IconWithText } from '../src';
import { Cog } from '../src/Icons';

const icon = <Cog height="2.5rem" width="2.5rem" />;
setAddon(JSXAddon);

const stories = storiesOf('DropdownMenu', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => (
  <div>
    <p>This is always visible</p>
    <DropdownMenu
      text="Lisää"
      textPosition="Bottom"
    >
      <div>
        <h3>Otsikko</h3>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </div>
      <div>
        <h3>Otsikko</h3>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </div>
      <div>
        <IconWithText
          icon={icon}
          text="Esimerkki"
          textPosition="Right"
        />
        <IconWithText
          icon={icon}
          text="Esimerkki"
          textPosition="Right"
        />
        <IconWithText
          icon={icon}
          text="Esimerkki"
          textPosition="Right"
        />
        <IconWithText
          icon={icon}
          text="Esimerkki"
          textPosition="Right"
        />
      </div>
    </DropdownMenu>
    <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
    <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
  </div>
  )
);
