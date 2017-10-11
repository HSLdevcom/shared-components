import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';

import Touchable from '../Touchable';
import View from '../View';
import Text from '../Typography';
import { IS_NATIVE, size } from '../utils';

function getTextColor(props) {
  if (props.disabled) {
    return props.theme.colors.primary.hslGreyLight;
  }
  if (props.active) {
    return props.theme.colors.primary.hslGreyDark;
  }
  return props.theme.colors.primary.hslBlue;
}

function getBackgroundColor(props) {
  if (props.disabled) {
    return props.theme.colors.background.hslGreyLight;
  }
  if (props.active) {
    return props.theme.colors.background.hslWhite;
  }
  if (props.pressed) {
    return props.theme.colors.background.hslGreyXLight;
  }
  return props.theme.colors.background.hslGreyLight;
}

const TouchableContainer = styled(({
  rounded,
  active,
  verticalHeader,
  disabled,
  first,
  last,
  ...rest,
}) => (
  <Touchable
    disabled={disabled}
    {...rest}
  />
))`
  position: relative;
  background: ${props => getBackgroundColor(props)};
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-style: solid;
  border-right-width: 1px;
  border-bottom-width: 1px;
  ${props => props.last &&
    'border-right-width: 0px;'
  }
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  ${props => props.active && `
    border-bottom-color: transparent;
  `}
`;

const ActiveIndicator = View.extend`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 4px;
  background-color: ${props => props.theme.colors.primary.hslBlue};
`;

const Content = styled(({
  active,
  verticalHeader,
  ...rest
}) => (
  <View {...rest} />
))`
  flex: 1;
  flex-direction: row;
  margin-horizontal: ${size(26)};
  ${props => (props.verticalHeader || IS_NATIVE) && `
    flex-direction: column;
    margin-horizontal: 0px;
    padding-horizontal: ${size(5)};
  `}
  margin-bottom: ${size(16)};
  padding-top: ${size(12)};
  justify-content: center;
`;

const StyledText = styled(({
  disabled,
  active,
  children,
  verticalHeader,
  ...rest
}) => (
  <Text {...rest}>
    { children.toUpperCase() }
  </Text>
))`
  font-size: ${size(18)};
  color: ${props =>
    getTextColor(props)
  }
  ${props => props.icon && (!props.verticalHeader && !IS_NATIVE) && `
    margin-left: ${size(10)};
  `}
  ${props => props.icon && (props.verticalHeader || IS_NATIVE) && `
    margin-top: ${size(10)};
  `}
`;

const Tab = styled(withTheme(({
  children,
  header,
  verticalHeader,
  active,
  disabled,
  theme,
  onClick,
  onPress,
  onLongPress,
  ...rest
}) => (
  <TouchableContainer
    onClick={onClick}
    onPress={onPress}
    onLongPress={onLongPress}
    active={active}
    disabled={disabled}
    verticalHeader={verticalHeader}
    pressedStyle={{
      backgroundColor: getBackgroundColor({
        pressed: true,
        active,
        disabled,
        theme,
      }),
    }}
    {...rest}
    accessibilityRole="button"
  >
    {active &&
      <ActiveIndicator />
    }
    <Content
      active={active}
      verticalHeader={verticalHeader}
    >
      {header.icon &&
        React.cloneElement(header.icon, {
          height: size(24),
          width: size(24),
          fill: getTextColor({ active, disabled, theme }),
        })
      }
      {
        <StyledText
          icon={!!header.icon}
          active={active}
          verticalHeader={verticalHeader}
          disabled={disabled}
        >
          { header.text || header }
        </StyledText>
      }
    </Content>
  </TouchableContainer>
)))`
`
;

Tab.displayName = 'Tab';

Tab.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired
    })
  ]).isRequired,
  verticalHeader: PropTypes.bool,
  // Validate the presence of children. Children is used in Tabs component
  children: PropTypes.node.isRequired, // eslint-disable-line react/no-unused-prop-types
  className: PropTypes.string,
  active: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool
};

export default Tab;
