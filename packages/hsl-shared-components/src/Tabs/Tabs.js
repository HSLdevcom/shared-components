import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-brimitives';

import View from '../View';
import { size } from '../utils';

const StyledView = View.extend`
  flex-direction: row;
  align-items: stretch;
`;

const Tabs = styled(({ rounded, children, index, ...rest }) => {
  const childrenArray = React.Children.toArray(children);
  return (<View {...rest}>
    <StyledView>
      { childrenArray.map((child, i) => React.cloneElement(
          child,
          { active: index === i, rounded })
        )
      }
    </StyledView>
    <View>
      { childrenArray[index].props.children }
    </View>
  </View>);
})`
  background-color: ${props => props.theme.colors.background.hslWhite};
  border-style: solid;
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-width: 1px;
  ${props => props.rounded && `border-radius: ${size(6)};`}
  align-items: stretch;
  width: 100%;
`;

Tabs.propTypes = {
  index: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  rounded: PropTypes.bool
};

export default styled(Tabs)``;
