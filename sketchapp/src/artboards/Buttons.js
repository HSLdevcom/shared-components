import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, Image } from 'react-sketchapp';
import { StyledArtboard, StyledView } from './../sketch/components'
import { Button, RoundButton } from 'hsl-shared-components';

const Buttons = () => {
  return (
    <StyledArtboard
      name="Buttons"
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 2000,
        padding: 20,
      }}
    >
      <StyledView name="Default Button">
        <Button
          disabled={false}
          rounded={false}
          small={false}
          large={false}
          onPress={() => false}
          onLongPress={() => false}
        >
          Default Button
        </Button>
      </StyledView>
      <StyledView name="Primary Button">
        <Button
          disabled={false}
          small={false}
          large={false}
          primary
          onPress={() => false}
          onLongPress={() => false}
        >
          Primary Button
        </Button>
      </StyledView>
      <StyledView name="Secondary Button">
        <Button
          disabled={false}
          small={false}
          large={false}
          secondary
          onPress={() => false}
          onLongPress={() => false}
        >
          Secondary Button
        </Button>
      </StyledView>
      <StyledView name="Round Button">
        <RoundButton
          small={false}
          large={false}
        >
        </RoundButton>
      </StyledView>
    </StyledArtboard>
  );
};

Buttons.propTypes = {

}

export default Buttons
