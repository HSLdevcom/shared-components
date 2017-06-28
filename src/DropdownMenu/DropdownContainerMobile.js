import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import List, { ListItem } from '../List';
import IconWithText from '../IconWithText/IconWithText';

const StyledDiv = Div.extend`
  white-space: normal;
  ${List} {
    color: #000000;
  }

  ${ListItem} {
    color: ${props => props.theme.primary};
  }

  ${IconWithText} {
    .icon {
      display: none;
    }
  }
`;

const DropdownContainer = ({
  className,
  children }) => (
    <StyledDiv className={className}>
      { children }
    </StyledDiv>
    );

DropdownContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(DropdownContainer)``;
