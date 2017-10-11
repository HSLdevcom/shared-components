import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';

import Touchable from '../Touchable';
import View from '../View';
import Text from '../Typography';
import { IS_NATIVE, size } from '../utils';

const Content = styled(({ active, ...rest }) => (
  <View {...rest} />
))`
  flex: 1;
  flex-direction: row;
  margin-bottom: ${size(16)};
  margin-horizontal: ${size(26)};
  padding-top: ${size(12)};
  justify-content: center;
  border-style: solid;
  border-color: transparent;
  border-top-width: 4px;
  ${props => props.active && `
    border-color: ${props.theme.colors.primary.hslBlue};
  `}
`;

function fill(active, disabled, colors) {
  if (disabled) {
    return colors.primary.hslGreyLight;
  }
  if (active) {
    return colors.primary.hslGreyDark;
  }
  return colors.primary.hslBlue;
}

const StyledText = styled(({ disabled, active, children, ...rest }) => (
  <Text {...rest}>
    { children.toUpperCase() }
  </Text>
))`
  font-size: ${size(18)};
  color: ${props =>
    fill(props.active, props.disabled, props.theme.colors)
  }
  ${props => props.icon && `
    margin-left: ${size(10)};
  `}
`;

const TouchableContainer = styled(({
  rounded,
  active,
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
  ${!IS_NATIVE && 'flex-direction: row;'}
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
`;

const Tab = styled(({
  children,
  onPress,
  header,
  active,
  disabled,
  theme,
  ...rest
}) => (
  <TouchableContainer onPress={onPress} active={active} {...rest} accessibilityRole="button">
    <Content active={active}>
      {header.icon &&
        React.cloneElement(header.icon, { fill: fill(active, disabled, theme.colors) })
      }
      {
        <StyledText
          icon={!!header.icon}
          active={active}
          disabled={disabled}
        >
          { header.text || header }
        </StyledText>
      }
    </Content>
  </TouchableContainer>
))`
`
;

Tab.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired
    })
  ]).isRequired,
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

export default withTheme(Tab);
