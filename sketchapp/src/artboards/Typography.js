import React from 'react';
import PropTypes from 'prop-types';
import { Text, H1, H2, H3, H4, H5, P, Quote, Ingress, Caption, InfoText, ErrorText, ListText } from 'hsl-shared-components';
import { View } from 'react-sketchapp';

const mockText = `HSL Liikuttaa`;

const typoLayoutStyles = {
  margin: 20,
};

const Buttons = () => {
  return (
    <View
      name="Typography"
      style={{ flexDirection: 'column' }}
    >
      <H1 style={typoLayoutStyles}>
        {mockText}
      </H1>
      <H2 style={typoLayoutStyles}>
        {mockText}
      </H2>
      <H3 style={typoLayoutStyles}>
        {mockText}
      </H3>
      <H3 style={typoLayoutStyles}>
        {mockText}
      </H3>
      <H4 style={typoLayoutStyles}>
        {mockText}
      </H4>
      <H5 style={typoLayoutStyles}>
        {mockText}
      </H5>
      <Text style={typoLayoutStyles}>
        {mockText}
      </Text>
      <P style={typoLayoutStyles}>
        {mockText}
      </P>
      <Quote style={typoLayoutStyles}>
        {mockText}
      </Quote>
      <Ingress style={typoLayoutStyles}>
        {mockText}
      </Ingress>
      <Caption style={typoLayoutStyles}>
        {mockText}
      </Caption>
      <InfoText style={typoLayoutStyles}>
        {mockText}
      </InfoText>
      <ErrorText style={typoLayoutStyles}>
        {mockText}
      </ErrorText>
      <ListText style={typoLayoutStyles}>
        {mockText}
      </ListText>
    </View>
  );
};

Buttons.propTypes = {

};

export default Buttons
