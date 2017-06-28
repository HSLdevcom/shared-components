import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';

import { List, ListItem } from '../src';

setAddon(JSXAddon);

const stories = storiesOf('List', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => (
  <List header="Header">
    <ListItem>looong teexttt ttttttttttttttttt</ListItem>
    <ListItem>short text</ListItem>
    <ListItem>looong teexttt ttttttttttttttttt</ListItem>
    <ListItem>looong teexttt ttttttttttttttttt</ListItem>
    <ListItem>looong teexttt ttttttttttttttttt</ListItem>
    <ListItem>short text</ListItem>
    <ListItem>looong teexttt ttttttttttttttttt</ListItem>
    <ListItem>looong teexttt ttttttttttttttttt</ListItem>
    <ListItem>looong teexttt ttttttttttttttttt</ListItem>
  </List>)
);
