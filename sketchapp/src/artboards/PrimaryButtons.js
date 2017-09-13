import React from 'react';
import { Button } from 'hsl-shared-components';
import { Section, Row, Column, Subtitle } from '../presentation';

const buttonPresentationStyles = {
  marginTop: 20,
  marginBottom: 20,
};

const PrimaryButtons = () =>
  (
    <Section name="Primary Buttons">
      <Subtitle>
        Primary buttons
      </Subtitle>
      <Row name="Large">
        <Column>
          <Button
            name="Primary Button"
            primary
            large
            onPress={() => false}
            onLongPress={() => false}
            style={buttonPresentationStyles}
          >
            Button default
          </Button>
        </Column>
        <Column>
          <Button
            name="Primary Button Disabled"
            disabled
            primary
            large
            onPress={() => false}
            onLongPress={() => false}
            style={buttonPresentationStyles}
          >
            Button disabled
          </Button>
        </Column>
      </Row>
      <Row name="Default">
        <Column>
          <Button
            name="Primary Button"
            primary
            onPress={() => false}
            onLongPress={() => false}
            style={buttonPresentationStyles}
          >
            Button default
          </Button>
        </Column>
        <Column>
          <Button
            name="Primary Button Disabled"
            disabled
            primary
            onPress={() => false}
            onLongPress={() => false}
            style={buttonPresentationStyles}
          >
            Button disabled
          </Button>
        </Column>
      </Row>
      <Row name="Small">
        <Column>
          <Button
            name="Primary Button"
            primary
            small
            onPress={() => false}
            onLongPress={() => false}
            style={buttonPresentationStyles}
          >
            Button default
          </Button>
        </Column>
        <Column>
          <Button
            name="Primary Button Disabled"
            disabled
            primary
            small
            onPress={() => false}
            onLongPress={() => false}
            style={buttonPresentationStyles}
          >
            Button disabled
          </Button>
        </Column>
      </Row>
    </Section>
  );

export default PrimaryButtons;
