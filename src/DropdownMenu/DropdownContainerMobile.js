import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import List, { ListItem } from '../List';
import IconWithText from '../IconWithText/IconWithText';

const StyledDiv = Div.extend`
  white-space: normal;
  font-size: 1rem;
  padding: 1.5rem 0;
  ${List} {
    color: #000000;
  }
  ${ListItem} {
    color: ${props => props.theme.primary};
  }

  ${IconWithText} {
    padding: 0 2rem !important;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    .icon {
      display: none;
    }
  }
  > *:not(:last-child) {
    margin-bottom: 2rem;
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
