import React from 'react';
import PropTypes from 'prop-types';
import { Artboard, View } from 'react-sketchapp';

export const StyledView = (props) => {
  return (
    <View
      name={props.name}
      style={{
        padding: 20,
      }}
    >
      {props.children}
    </View>
  )
}

StyledView.propTypes = {
  name: PropTypes.string.isRequired
}

export const StyledArtboard= (props) => {
  return (
    <Artboard
      name={props.name}
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
      }}
    >
      {props.children}
    </Artboard>
  )
}

StyledArtboard.propTypes = {
  name: PropTypes.string.isRequired
}
