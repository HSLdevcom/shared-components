import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { Button, Notification } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

const store = createStore(
  combineReducers({
    notification: Notification.reducer
  })
);

setAddon(JSXAddon);

const stories = storiesOf('Notification', module);
stories.addDecorator(story =>
  (<Provider store={store}>
    {story()}
  </Provider>)
);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    {getStory()}
  </ThemeProvider>));

stories.addWithJSX('Error', () =>
  (<div>
    <Notification.Notification timeoutDelay={5000} />
    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'title', msg: 'This is a notification' }
            ],
            type: 'error',
            closeButton: true,
            timeout: false
          }
        );
      }}
    >
      Error title, close
    </Button>
    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'title', msg: 'Title' },
              { type: 'text', msg: 'This is a notification' }
            ],
            type: 'error',
            closeButton: true,
            timeout: false
          }
        );
      }}
    >
      Error title + text, close
    </Button>
    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'title', msg: 'Title' },
              { type: 'text', msg: 'This is a notification' }
            ],
            type: 'success',
            timeout: true
          }
        );
      }}
    >
      Success title + text, timeout
    </Button>

    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'text', msg: 'This is a notification' }
            ],
            type: 'success',
            timeout: true,
            timeoutDelay: 1000
          }
        );
      }}
    >
      Success text, custom fast timeout
    </Button>
    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'titleLink', msg: 'This is a notification', href: 'www.google.fi' }
            ],
            type: 'error',
            closeButton: true
          }
        );
      }}
    >
      Error titleLink, close
    </Button>
    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'titleLink', msg: 'This is a titlelink', href: 'www.google.fi' },
              { type: 'text', msg: 'This is a text' },
              { type: 'textLink', msg: 'This is a textlink', href: 'www.google.fi' }
            ],
            type: 'error',
            closeButton: true
          }
        );
      }}
    >
      Error titleLink and textLink, close
    </Button>
    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'title', msg: 'This is a title' },
              { type: 'titleLink', msg: 'This is a titlelink', href: 'www.google.fi' },
              { type: 'text', msg: 'This is a text' },
              { type: 'textLink', msg: 'This is a textlink', href: 'www.google.fi' },
              { type: 'text', msg: 'This is a text' }
            ],
            type: 'success',
            closeButton: true
          }
        );
      }}
    >
      Success everything notification, close
    </Button>
    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'title', msg: 'This is a title' },
              { type: 'text', msg: 'This is a text' }
            ],
            type: 'neutral',
            closeButton: true
          }
        );
      }}
    >
      Neutral, close
    </Button>

    <Button
      onClick={() => {
        Notification.service.open(
          {
            content: [
              { type: 'title', msg: 'This is a title' },
              { type: 'titleLink', msg: 'This is a titlelink', href: 'www.google.fi' },
              { type: 'text', msg: 'This is a text' },
              { type: 'textLink', msg: 'This is a textlink', href: 'www.google.fi' },
              { type: 'text', msg: 'This is a text' }
            ],
            type: 'neutral',
            closeButton: true
          }
        );
      }}
    >
      Netural everything notification, close
    </Button>
  </div>), { displayName: 'Notification' });
