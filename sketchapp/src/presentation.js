import React from 'react';
import { View } from 'react-sketchapp';
import { H3, Text } from 'hsl-shared-components';
import PropTypes from 'prop-types';

export const Main = ({ children, name, separator }) =>
  (
    <View
      name={name}
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

Main.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string.isRequired,
  separator: PropTypes.bool,
};


export const Section = ({ children, name }) =>
  (
    <View
      name={name}
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'column',
      }}
    >
      {children}
    </View>
  );

Section.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string.isRequired,
};

export const Row = ({ children, name, style }) =>
  (
    <View
      name={name}
      style={{
        flexDirection: 'row',
        ...style,
      }}
    >
      {children}
    </View>
  );

Row.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string,
  style: PropTypes.Object,
};

export const Column = ({ children, name, style }) =>
  (
    <View
      name={name}
      style={{
        paddingRight: 50,
        ...style,
      }}
    >
      {children}
    </View>
  );

Column.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string,
  style: PropTypes.Object,
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
  children: PropTypes.string
};

export const Subtitle = ({ children }) =>
  (
    <Text>
      {children}
    </Text>
  );

Subtitle.propTypes = {
  children: PropTypes.string
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
  children: PropTypes.element,
  style: PropTypes.Object,
  text: PropTypes.string.isRequired,
};
