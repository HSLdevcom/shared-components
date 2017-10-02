import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import Touchable from '../Touchable';
import View from '../View';
import { P } from '../Typography';
import { IS_NATIVE, size } from '../utils';

const Container = View.extend`
  ${!IS_NATIVE && `
    cursor: pointer;
  `}
  justify-content: center;
  padding-horizontal: ${size(20)};
  padding-vertical: ${size(20)};
  border-style: solid;
  border-color: transparent;
  border-right-width: 1px;
  ${props => !props.last && `
    border-color: ${props.theme.colors.primary.hslGreyLight}
  `}
  width: ${size(220)};
`;

const Icon = withTheme(({
   icon,
   theme,
 }) =>
   React.cloneElement(icon, {
     width: size(40),
     height: size(40),
     fill: theme.font.colors.highlight,
   })
 );

const Title = P.extend`
  flex-grow: 2;
  ${props => !!props.icon && `
    margin-top: ${size(20)}
  `}
  color: ${props => props.theme.font.colors.highlight};
  text-align: center;
`;

const ActionBarItemCore = ({
  icon,
  title,
  type,
  href,
  ...rest,
}) =>
  (
    <Container
      href={href}
      {...rest}
      accessibilityRole={type || 'button'}
    >
      {!!icon &&
        <Icon
          icon={icon}
        />
      }
      <Title
        icon={icon}
      >
        {title}
      </Title>
    </Container>
  );

const ActionBarItem = styled(({
   onPress,
   onLongPress,
   ...rest,
 }) => {
  // We want to have default browser interactions unless we are on native platform
  if (IS_NATIVE) {
    return (
      <Touchable
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <ActionBarItemCore {...rest} />
      </Touchable>
    );
  }

  return <ActionBarItemCore {...rest} />;
})``;

ActionBarItemCore.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'link']),
  href: PropTypes.string,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

ActionBarItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  ...ActionBarItemCore.propTypes,
};

ActionBarItem.displayName = 'ActionBarItem';

export default ActionBarItem;
