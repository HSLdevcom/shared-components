import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import Touchable from '../Touchable';
import { P } from '../Typography';
import { IS_NATIVE, size } from '../utils';

const getTextColor = (active, inverted, theme) => {
  if (inverted && !active) {
    return theme.colors.primary.hslWhite;
  }
  if (inverted && active) {
    return theme.font.colors.highlight;
  }
  if (active) {
    return theme.colors.primary.hslWhite;
  }
  return theme.font.colors.highlight;
};

const getIconColor = (active, inverted, theme, override) => {
  if (override) {
    return override;
  }
  if (inverted && !active) {
    return theme.colors.primary.hslWhite;
  }
  if (inverted && active) {
    return theme.font.colors.highlight;
  }
  if (active) {
    return theme.colors.primary.hslWhite;
  }
  return theme.font.colors.highlight;
};

const getBorderColor = (active, inverted, theme) => {
  if (inverted) {
    return theme.colors.primary.hslWhite;
  }
  if (active) {
    return theme.colors.primary.hslBlue;
  }
  return theme.colors.primary.hslGreyLight;
};

const getBackgroundColor = (active, inverted, theme) => {
  if (inverted && !active) {
    return theme.colors.primary.hslBlue;
  }
  if (inverted && active) {
    return theme.colors.background.hslWhite;
  }
  if (active) {
    return theme.colors.primary.hslBlue;
  }
  return theme.colors.background.hslWhite;
};

const TouchableView = styled(({
  inverted,
  active,
  first,
  last,
  ...rest,
}) =>
  <Touchable {...rest} />
)`
  ${!IS_NATIVE && `
    cursor: pointer;
  `}
  flex: 1;
  justify-content: center;
  margin-top: -1px;
  margin-right: -1px;
  padding-horizontal: ${size(10)};
  padding-vertical: ${size(20)};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => getBorderColor(props.active, props.inverted, props.theme)};
  background-color: ${props => getBackgroundColor(props.active, props.inverted, props.theme)};
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
    fill: getIconColor(active, inverted, theme, icon.props.fill),
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
  ${props => !!props.icon && `
    margin-top: ${size(20)}
  `}
  font-size: ${size(15)};
  color: ${props => getTextColor(props.inverted, props.active, props.theme)};
  text-align: center;
`;

const ActionBarItem = styled(({
  icon,
  title,
  accessibilityRole,
  href,
  inverted,
  active,
  onClick,
  onPress,
  onLongPress,
  ...rest,
}) =>
  (
    <TouchableView
      href={href}
      inverted={inverted}
      active={active}
      onClick={onClick}
      onPress={onPress}
      onLongPress={onLongPress}
      {...rest}
      accessibilityRole={accessibilityRole || 'button'}
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
  ))``;

ActionBarItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  title: PropTypes.string,
  accessibilityRole: PropTypes.oneOf(['button', 'link']),
  href: PropTypes.string,
  active: PropTypes.bool,
  inverted: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

ActionBarItem.displayName = 'ActionBarItem';

export default ActionBarItem;
