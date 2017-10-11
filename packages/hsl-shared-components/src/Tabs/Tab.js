import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';

import Touchable from '../Touchable';
import View from '../View';
import Text from '../Typography';
import { IS_NATIVE, size } from '../utils';

function fill(active, disabled, colors) {
  if (disabled) {
    return colors.primary.hslGreyLight;
  }
  if (active) {
    return colors.primary.hslGreyDark;
  }
  return colors.primary.hslBlue;
}

const TouchableContainer = styled(({
  rounded,
  active,
  verticalHeader,
  first,
  last,
  ...rest,
}) => (
  <Touchable {...rest} />
))`
  background: ${props => props.theme.colors.background.hslGreyLight};
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-style: solid;
  border-right-width: 1;
  border-bottom-width: 1;
  ${props => props.last &&
    'border-right-width: 0;'
  }
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  ${props => props.rounded && props.first &&
    'border-top-left-radius: 6;'
  }
  ${props => props.rounded && props.last &&
    'border-top-right-radius: 6;'
  }
  ${props => props.active && `
    border-bottom-color: transparent;
    background-color: ${props.theme.colors.background.hslWhite};;
    `
  }
  overflow: hidden;
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
  border-style: solid;
  border-color: transparent;
  border-top-width: 4px;
  ${props => props.active && `
    border-color: ${props.theme.colors.primary.hslBlue};
  `}
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
    fill(props.active, props.disabled, props.theme.colors)
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
    verticalHeader={verticalHeader}
    {...rest}
    accessibilityRole="button"
  >
    <Content
      active={active}
      verticalHeader={verticalHeader}
    >
      {header.icon &&
        React.cloneElement(header.icon, {
          height: size(24),
          width: size(24),
          fill: fill(active, disabled, theme.colors),
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
