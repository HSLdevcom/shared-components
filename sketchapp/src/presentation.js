import React from 'react';
import { View } from 'react-sketchapp';
import { H3, Text } from 'hsl-shared-components';
import PropTypes from 'prop-types';

export const Section = ({ separator, children }) =>
  (
    <View
      style={{
        width: 1440,
        padding: 80,
        flexDirection: 'column',
        borderBottomWidth: separator ? 1 : 0,
        borderColor: '#cbcbcb',
        borderStyle: 'solid',
      }}
    >
      {children}
    </View>
  );

Section.propTypes = {
  children: PropTypes.element.isRequired,
  separator: PropTypes.bool,
};

export const Title = ({ children }) =>
  (
    <H3
      style={{
        marginTop: 0,
        marginBottom: 20,
        fontWeight: 'bold',
      }}
    >
      {children}
    </H3>
  );

Title.propTypes = {
  children: PropTypes.element.isRequired
};

export const SubTitle = ({ children }) =>
  (
    <Text>
      {children}
    </Text>
  );

SubTitle.propTypes = {
  children: PropTypes.element.isRequired
};

export const WithDescription = ({ text, style, children }) =>
  (
    <View
      style={{
        flexDirection: 'row',
        ...style,
      }}
    >
      <Text
        style={{
          width: 108,
          marginRight: 50,
          color: '#888888',
        }}
      >
        {text}
      </Text>
      <View>
        {children}
      </View>
    </View>
  );

WithDescription.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.Object,
  text: PropTypes.string.isRequired,
};
