import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import Touchable from '../Touchable';
import { P } from '../Typography';
import { size } from '../utils';

const getTextColor = (props) => {
  if (props.inverted && !props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.inverted && props.active) {
    return props.theme.font.colors.highlight;
  }
  if (props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  return props.theme.font.colors.highlight;
};

const getIconColor = (props, override) => {
  if (override) {
    return override;
  }
  if (props.inverted && !props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.inverted && props.active) {
    return props.theme.font.colors.highlight;
  }
  if (props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  return props.theme.font.colors.highlight;
};

const getBorderColor = (props) => {
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslGreyLight;
};

const getBackgroundColor = (props) => {
  if (props.inverted && props.active) {
    return props.theme.colors.background.hslWhite;
  }
  if (props.inverted && props.pressed) {
    return props.theme.colors.primary.hslBlueDark;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.pressed && props.secondary) {
    return props.theme.colors.background.hslGreyXLight;
  }
  if (props.secondary) {
    return props.theme.colors.background.hslGreyLight;
  }
  if (props.pressed) {
    return props.theme.colors.background.hslGreyLight;
  }
  return props.theme.colors.background.hslWhite;
};

const TouchableView = styled(({
  inverted,
  active,
  secondary,
  first,
  last,
  ...rest,
}) =>
  <Touchable {...rest} />
)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: -1px;
  margin-right: -1px;
  padding-top: ${size(20)};
  padding-right: ${size(10)};
  padding-bottom: ${size(20)};
  padding-left: ${size(10)};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => getBorderColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  ${props => props.first && `
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  `}
  ${props => props.last && `
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `}
`;

const Icon = withTheme(({
   icon,
   inverted,
   active,
   theme,
 }) =>
  React.cloneElement(icon, {
    width: size(40),
    height: size(40),
    fill: getIconColor({ active, inverted, theme }, icon.props.fill),
  })
);

const Title = styled(({
  inverted,
  active,
  ...rest,
}) =>
  <P {...rest} />
)`
  flex-grow: 2;
  ${props => props.icon && `
    margin-top: ${size(20)};
  `}
  font-size: ${size(15)};
  color: ${props => getTextColor(props)};
  text-align: center;
`;

const ActionBarItem = styled(withTheme(({
  icon,
  title,
  active,
  secondary,
  inverted,
  onClick,
  onPress,
  onLongPress,
  theme,
  ...rest,
}) =>
  (
    <TouchableView
      inverted={inverted}
      active={active}
      secondary={secondary}
      onClick={onClick}
      onPress={onPress}
      onLongPress={onLongPress}
      pressedStyle={{
        backgroundColor: getBackgroundColor({ active, secondary, inverted, pressed: true, theme }),
      }}
      {...rest}
    >
      {!!icon &&
        <Icon
          icon={icon}
          inverted={inverted}
          active={active}
        />
      }
      {!!title &&
        <Title
          icon={icon}
          inverted={inverted}
          active={active}
        >
          {title}
        </Title>
      }
    </TouchableView>
  )))``;

ActionBarItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  title: PropTypes.string,
  active: PropTypes.bool,
  secondary: PropTypes.bool,
  inverted: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

ActionBarItem.displayName = 'ActionBarItem';

export default ActionBarItem;
