import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { View, Tabs, Tab, Text, Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

const TabContent = View.extend`
  padding: 20px;
`;

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('Default', () => {
    const options = {
      range: true,
      min: 0,
      max: 3,
      step: 1,
    };
    const index = number('Index', 1, options);
    const rounded = boolean('Rounded', false);
    return (
      <Tabs
        index={index}
        rounded={rounded}
      >
        <Tab
          first
          onPress={action('press')}
          onLongPress={action('long press')}
          header="Uutiset"
        >
          <TabContent>
            <Text>Content of the first tab</Text>
          </TabContent>
        </Tab>
        <Tab
          onPress={action('press')}
          onLongPress={action('long press')}
          header="Lähelläsi"
        >
          <TabContent>
            <Text>Content of the second tab</Text>
          </TabContent>
        </Tab>
        <Tab
          onPress={action('press')}
          onLongPress={action('long press')}
          header="Suosikit"
          disabled
          last
        >
          <TabContent>
            <Text>Content of the third tab</Text>
          </TabContent>
        </Tab>
      </Tabs>);
  })
    .add('with icon', () => {
      const options = {
        range: true,
        min: 0,
        max: 3,
        step: 1,
      };
      const index = number('Index', 1, options);
      return (
        <Tabs
          index={index}
          rounded
        >
          <Tab
            first
            onPress={action('press')}
            onLongPress={action('long press')}
            header={{
              icon: <Icons.Latest />,
              text: 'Uutiset'
            }}
          >
            <TabContent>
              <Text>Content of the first tab</Text>
            </TabContent>
          </Tab>
          <Tab
            onPress={action('press')}
            onLongPress={action('long press')}
            header={{
              icon: <Icons.Info />,
              text: 'Lähelläsi'
            }}
          >
            <TabContent>
              <Text>Content of the second tab</Text>
            </TabContent>
          </Tab>
          <Tab
            last
            onPress={action('press')}
            onLongPress={action('long press')}
            header={{
              icon: <Icons.Cog />,
              text: 'Suosikit'
            }}
            disabled
          >
            <TabContent>
              <Text>Content of the third tab</Text>
            </TabContent>
          </Tab>
        </Tabs>
      );
    })
    .add('one item', () => (
      <Tabs index={0}>
        <Tab
          first
          last
          onPress={action('press')}
          onLongPress={action('long press')}
          header="Active"
        >
          <TabContent>
            <Text>Content of active tab</Text>
          </TabContent>
        </Tab>
      </Tabs>)
    );
