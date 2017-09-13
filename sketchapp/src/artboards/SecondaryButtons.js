import React from 'react';
import { Button } from 'hsl-shared-components';
import { Section, Row, Column, Subtitle } from '../presentation';

const buttonLayoutStyles = {
  marginTop: 20,
  marginBottom: 20,
};

const PrimaryButtons = () =>
  (
    <Section name="Secondary Buttons">
      <Subtitle>
        Secondary buttons
      </Subtitle>
      <Row name="Large">
        <Column>
          <Button
            name="Secondary Button"
            large
            onPress={() => false}
            onLongPress={() => false}
            style={buttonLayoutStyles}
          >
            Button default
          </Button>
        </Column>
        <Column>
          <Button
            name="Secondary Button Disabled"
            disabled
            large
            onPress={() => false}
            onLongPress={() => false}
            style={buttonLayoutStyles}
          >
            Button disabled
          </Button>
        </Column>
      </Row>
      <Row name="Default">
        <Column>
          <Button
            name="Secondary Button"
            onPress={() => false}
            onLongPress={() => false}
            style={buttonLayoutStyles}
          >
            Button default
          </Button>
        </Column>
        <Column>
          <Button
            name="Secondary Button Disabled"
            disabled
            onPress={() => false}
            onLongPress={() => false}
            style={buttonLayoutStyles}
          >
            Button disabled
          </Button>
        </Column>
      </Row>
      <Row name="Small">
        <Column>
          <Button
            name="Secondary Button"
            small
            onPress={() => false}
            onLongPress={() => false}
            style={buttonLayoutStyles}
          >
            Button default
          </Button>
        </Column>
        <Column>
          <Button
            name="Secondary Button Disabled"
            disabled
            small
            onPress={() => false}
            onLongPress={() => false}
            style={buttonLayoutStyles}
          >
            Button disabled
          </Button>
        </Column>
      </Row>
    </Section>
  );

export default PrimaryButtons;
