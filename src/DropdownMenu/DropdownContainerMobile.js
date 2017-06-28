import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';

const StyledDiv = Div.extend`
  white-space: normal;
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
