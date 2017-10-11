import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { Tabs, Tab, Div, Icons } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

const StyledDiv = Div.extend`
    padding: 1em;
    max-width: 700px;
`;

const TabContent = Div.extend`
  padding: 20px;
`;

stories.addWithJSX('default', () => {
  const options = {
    range: true,
    min: 0,
    max: 3,
    step: 1,
  };
  const index = number('Index', 1, options);
  return (
    <StyledDiv>
      <Tabs index={index}>
        <Tab
          first
          onClick={action('tab clicked')}
          header="Uutiset"
        >
          <TabContent>
            Content of the first tab
          </TabContent>
        </Tab>
        <Tab
          onClick={action('tab clicked')}
          header="Lähelläsi"
        >
          <TabContent>
            Content of the second tab
          </TabContent>
        </Tab>
        <Tab
          onClick={action('tab clicked')}
          header="Suosikit"
          disabled
        >
          <TabContent>
            Content of the third tab
          </TabContent>
        </Tab>
      </Tabs>
    </StyledDiv>);
});

stories.addWithJSX('rounded', () => {
  const options = {
    range: true,
    min: 0,
    max: 2,
    step: 1,
  };
  const index = number('Index', 1, options);
  return (
    <StyledDiv>
      <Tabs index={index} rounded>
        <Tab
          first
          onClick={action('tab clicked')}
          header="Uutiset"
        >
          <TabContent>
            Content of the first tab
          </TabContent>
        </Tab>
        <Tab
          onClick={action('tab clicked')}
          header="Lähelläsi"
        >
          <TabContent>
            Content of the second tab
          </TabContent>
        </Tab>
        <Tab
          onClick={action('tab clicked')}
          header="Suosikit"
          disabled
        >
          <TabContent>
            Content of the third tab
          </TabContent>
        </Tab>
      </Tabs>
    </StyledDiv>);
});

stories.addWithJSX('with icon', () => {
  const options = {
    range: true,
    min: 0,
    max: 1,
    step: 1,
  };
  const index = number('Index', 0, options);
  const verticalHeader = boolean('verticalHeader', false);
  return (
    <StyledDiv>
      <Tabs index={index} rounded>
        <Tab
          first
          onClick={action('tab clicked')}
          header={{
            icon: <Icons.Latest />,
            text: 'Uutiset'
          }}
          verticalHeader={verticalHeader}
        >
          <TabContent>
            Content of the first tab
          </TabContent>
        </Tab>
        <Tab
          onClick={action('tab clicked')}
          header={{
            icon: <Icons.Info />,
            text: 'Lähelläsi'
          }}
          verticalHeader={verticalHeader}
        >
          <TabContent>
            Content of the second tab
          </TabContent>
        </Tab>
        <Tab
          onClick={action('tab clicked')}
          header={{
            icon: <Icons.Cog />,
            text: 'Suosikit'
          }}
          verticalHeader={verticalHeader}
          disabled
        >
          <TabContent>
            Content of the third tab
          </TabContent>
        </Tab>
      </Tabs>
    </StyledDiv>);
});

stories.addWithJSX('one item', () => (
  <StyledDiv>
    <Tabs index={0}>
      <Tab
        first
        last
        onClick={action('tab clicked')}
        header="Active"
      >
        <TabContent>
          Content of active tab
        </TabContent>
      </Tab>
    </Tabs>
  </StyledDiv>)
);
