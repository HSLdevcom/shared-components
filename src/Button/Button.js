import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import { darken, lighten } from 'polished';
import Text from '../Typography';
import View from '../View';
import Touchable from '../Touchable';


const TouchableText = Text.extend`
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.7px;
  text-align: center;
  color: ${props => props.theme.primary};
  ${props => props.primary && `
    color: ${props.theme.primaryText};
  `}
  ${props => props.secondary && `
    color: ${darken(0.2, props.theme.default || '#b7b7b7')};
  `}
  ${props => props.disabled && `
    color: ${props.theme.default};
  `}
`;

const TouchableView = styled(({ primary, secondary, disabled, rounded, ...rest }) => (
  <View {...rest} />
))`
  border-radius: ${props => (props.rounded ? '40px' : '4px')};
  border-style: solid;
  border-width: 1px;
  padding: 10px 22px;
  width: 70%;
  border-color: ${props => props.theme.default};
  background-color: #fff;
  ${props => props.primary && `
    border-radius: 40px;
    border-color: ${props.theme.primary};
    background-color: ${props.theme.primary};
  `}
  ${props => props.secondary && `
    border-color: ${darken(0.2, props.theme.default || '#b7b7b7')};
  `}
  ${props => props.disabled && `
    border-color: ${props.theme.default};
  `}

  ${props => props.disabled && props.primary && `
    background-color: ${lighten(0.175, props.theme.default || '#b7b7b7')};
    border-color: ${lighten(0.175, props.theme.default || '#b7b7b7')};;
  `}
`;

const ButtonNative = ({
  primary,
  secondary,
  disabled,
  rounded,
  onPress,
  onLongPress,
  className,
  style,
  children }) => (
    <Touchable onPress={onPress} onLongPress={onLongPress}>
      <TouchableView
        primary={primary}
        secondary={secondary}
        disabled={disabled}
        rounded={rounded}
        className={className}
        style={style}
      >
        {
          React.isValidElement(children) ?
            children :
            (<TouchableText
              primary={primary}
              secondary={secondary}
              disabled={disabled}
              rounded={rounded}
            >
              {children}
            </TouchableText>)
        }
      </TouchableView>
    </Touchable>
);

ButtonNative.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.array  // eslint-disable-line react/forbid-prop-types
};

export default styled(ButtonNative)``;
