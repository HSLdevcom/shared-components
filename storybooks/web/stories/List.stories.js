import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

import { List, ListItem } from 'hsl-shared-components';

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
