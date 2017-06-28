import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import { Flex } from '../Wrapper';

const StyledDiv = Div.extend`
  border: solid 1px #cfcfcf;
  ${props => props.rounded && 'border-radius: 6px;'}
`;

StyledDiv.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool
};

const Tabs = ({
  index,
  children,
  className,
  rounded
}) => (
  <StyledDiv className={className} rounded={rounded}>
    <Flex>
      { React.Children.toArray(children).map((child, i) => React.cloneElement(
          child,
          { active: index === i, rounded })
        )
      }
    </Flex>
    <Div>
      { React.Children.toArray(children)[index].props.children }
    </Div>
  </StyledDiv>
)
;

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
