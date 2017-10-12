import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { View as ViewPrimitives } from 'react-primitives';
import { createDOMElement } from 'react-native-web';
import View, { getViewDefaultStyles } from '../View';
import { IS_NATIVE } from '../utils';

const TouchableWeb = styled(({
  onClick,
  onPress,
  onLongPress,
  pressedStyle,
  accessibilityRole,
  disabled,
  container,
  ...rest,
}) => {
  if (container) {
    return createDOMElement(
      container.component,
      {
        ...container.props,
        ...rest,
      }
    );
  }
  return (
    <View
      onClick={onClick || onPress}
      disabled={disabled}
      accessibilityRole={accessibilityRole || 'button'}
      {...rest}
    />
  );
})`
  ${props => !IS_NATIVE && props.container && `
    display: flex;
    text-decoration-line: none;
  `}
  ${props => props.container &&
    getViewDefaultStyles()
  }
  cursor: pointer;
  ${props => props.disabled && 'cursor: not-allowed;'}
`;

TouchableWeb.propTypes = {
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  pressedStyle: PropTypes.shape(ViewPrimitives.propTypes.style),
  accessibilityRole: PropTypes.string,
  container: PropTypes.shape({
    component: PropTypes.element,
    props: PropTypes.shape({}),
  }),
  disabled: PropTypes.boolean,
};

TouchableWeb.displayName = 'Touchable';

export default TouchableWeb;
