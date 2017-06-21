import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';

import { DropdownMenu, IconWithText } from '../src';
import { Cog } from '../src/Icons';

const icon = <Cog height="2.5rem" width="2.5rem" />;
setAddon(JSXAddon);

const stories = storiesOf('DropdownMenu', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const menuVisible = boolean('Dropdown menu visible', true);
  return (
    <div>
      <p>This is always visible</p>
      { menuVisible &&
        <DropdownMenu>
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
      }
      <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
      <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
    </div>
  );
}
);
