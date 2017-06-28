import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { Button } from '../src';
import NotificationRoot, { notification, reducer } from '../lib/Notification';

const store = createStore(reducer, { notification: {} });

setAddon(JSXAddon);

const stories = storiesOf('Notification', module);
stories.addDecorator(story =>
  <Provider store={store}>
    {story()}
  </Provider>
);
stories.addWithJSX('Error', () =>
  <div>
    <NotificationRoot timeoutDelay={5000} />
    <Button
      onClick={() => {
        notification.open(
          {
            content: [
              { type: 'text', msg: 'This is a notification' }
            ],
            type: 'error',
            closeButton: true,
            timeout: false
          }
        );
      }}
    >
      Error
    </Button>
  </div>, { displayName: 'Notification' });

stories.addWithJSX('Success', () =>
  <div>
    <NotificationRoot timeoutDelay={5000} />
    <Button
      onClick={() => {
        notification.open(
          {
            content: [
              { type: 'text', msg: 'This is a notification' }
            ],
            type: 'success',
            closeButton: true,
            timeout: false
          }
        );
      }}
    >
      Success
    </Button>
  </div>, { displayName: 'Notification' });
