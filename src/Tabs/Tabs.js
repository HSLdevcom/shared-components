import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { size } from '../utils';

const StyledView = View.extend`
  flex-direction: row;
`;

const Tabs = styled(({ rounded, children, index, ...rest }) => {
  const childrenArray = React.Children.toArray(children);
  return (<View {...rest}>
    <StyledView className="derp">
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
  border-style: solid;
  border-color: #CFCFCF;
  border-width: 1px;
  ${props => props.rounded && `border-radius: ${size(6)};`}
  align-items: stretch;
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
