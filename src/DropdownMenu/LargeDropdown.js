import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import Mask from './Mask';

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => props.top}px;
  ${Div} {
    background: ${props => props.theme.background};
    display: flex;
    justify-content: space-around;
    padding-top: 2.5rem
    align-items: flex-start;
  }
`;

const Dropdown = ({
  top,
  className,
  children }) => (
    <StyledDiv className={className} top={top}>
      <Div>
        { children }
      </Div>
      <Mask />
    </StyledDiv>
    );

Dropdown.propTypes = {
  top: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(Dropdown)``;
